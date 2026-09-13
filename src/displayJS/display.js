import { todoStorage, getStorage, getAllStorage, removeProjectAllStorage, getAllStorageRaw} from "../storageJS/storage.js";
import { createProjectObject } from "../index.js";
import { switchProject } from "../logicJS/changeProject.js";

function createHomePage(homeProject) {
    addProject();
    importProjectButtons();
    changeProjectsButtons();
    deleteProjects()

    const projectContent = document.querySelector("#projectContent")
    const currentProject = document.querySelector("#currentProject");

    currentProject.textContent = "Current Project: Home"

    const oldTodoList = document.querySelector("#todo");
    if(oldTodoList) {
        oldTodoList.remove();
    }
    
    const todoList = document.createElement("ul");
    todoList.setAttribute("id", "todo")


    projectContent.appendChild(todoList);
    
    const homeList = homeProject.getTodo();

    if (homeList) {
        for (const element of homeList) {
            const list = document.createElement("li");
            const label = document.createElement("span");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = element.checked;
            
            label.textContent = element.name + " Due Date: " + element.dueDate;

            list.setAttribute("class", "todoItem")

            list.appendChild(checkbox);
            list.appendChild(label);
            todoList.appendChild(list);
            
            let activate = false;

            label.addEventListener("click", () => {
                if (!activate) {
                    expandTodo(element, list);
                    activate = true;
                } else {
                    shrinkTodo(element, list);
                    activate = false;
                }
            });

            let activateStatus = false;
            list.addEventListener("change", () => {
                if (!activateStatus) {
                    element.status = "Finished"
                    activateStatus = true;
                    homeProject.removeTodo(element);
                    createHomePage(homeProject);
                } else {
                    element.status = "Not Finished"
                    activateStatus = false;
                }
            });
        }
    }

}

function createSwitchedProject(homeProject) {
    addProject()
    changeProjectsButtons();
    deleteProjects()

    const projectContent = document.querySelector("#projectContent")
    const currentProject = document.querySelector("#currentProject");

    currentProject.textContent = "Current Project: Home"

    const oldTodoList = document.querySelector("#todo");
    if(oldTodoList) {
        oldTodoList.remove();
    }
    
    const todoList = document.createElement("ul");
    todoList.setAttribute("id", "todo")


    projectContent.appendChild(todoList);
    
    const homeList = homeProject.getTodo();
   

    if (homeList) {
        for (const element of homeList) {
            const list = document.createElement("li");
            const label = document.createElement("span");

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = element.checked;
            
            label.textContent = element.name + " Due Date: " + element.dueDate;

            list.setAttribute("class", "todoItem")

            list.appendChild(checkbox);
            list.appendChild(label);
            todoList.appendChild(list);
            
            let activate = false;

            label.addEventListener("click", () => {
                if (!activate) {
                    expandTodo(element, list);
                    activate = true;
                } else {
                    shrinkTodo(element, list);
                    activate = false;
                }
            });

            let activateStatus = false;
            list.addEventListener("change", () => {
                if (!activateStatus) {
                    element.status = "Finished"
                    activateStatus = true;
                    homeProject.removeTodo(element);
                    createHomePage(homeProject);
                } else {
                    element.status = "Not Finished"
                    activateStatus = false;
                }
            });
        }
    }

}

let localEvent = null;

function submitTodo(currentProject) { 
    const submitButton = document.querySelector("#todoSubmit");
    const dialog = document.querySelector("#my-dialog");
    

    if(localEvent) {
        submitButton.removeEventListener("click", localEvent);
    }

    localEvent = (event) => {
        
        event.preventDefault();
        const todoName = todoForm.todoName.value;
        const todoDescription = todoForm.todoDescription.value;
        const todoDueDate = todoForm.todoDueDate.value;
        const todoPriority = todoForm.todoPriority.value;
        const todoNote = todoForm.todoNote.value;

        
        currentProject.addTodo(todoName, todoDescription, todoDueDate, todoPriority, todoNote);
        todoStorage(currentProject.getTodo(), currentProject.name); // Save the whole todo list
        createSwitchedProject(currentProject);
        dialog.close();
    }

    
    submitButton.addEventListener("click", localEvent);
}


function expandTodo(todoItem, listLoc) {
    const extendTodo = document.createElement("ul");
    listLoc.appendChild(extendTodo);

    const todoDesc = document.createElement("li");
    extendTodo.appendChild(todoDesc);
    todoDesc.textContent = "Description:" + todoItem.description;

    const todoDueDate = document.createElement("li");
    extendTodo.appendChild(todoDueDate);
    todoDueDate.textContent = "Due Date: " + todoItem.dueDate;

    const todoPriority = document.createElement("li");
    extendTodo.appendChild(todoPriority);
    todoPriority.textContent = "Priority: " + todoItem.priority;

    const todoNote = document.createElement("li");
    extendTodo.appendChild(todoNote);
    todoNote.textContent = "Note: " + todoItem.notes;

    const todoStatus = document.createElement("li");
    extendTodo.appendChild(todoStatus);
    todoStatus.textContent = "Status: " + todoItem.status;

}

function shrinkTodo(todoItem, listLoc) {
    const extended = listLoc.lastChild;
    if (extended) {
        extended.remove();
    }
}

let createEvent;

function addProject() { //project submit button
    const createProject = document.querySelector("#projectSubmit");

    if(createEvent) {
        createProject.removeEventListener("click", createEvent);
    }

    createEvent = (event) => {
        event.preventDefault();
        const pName = document.querySelector("#projectName");
        
        const projectList = document.querySelector("#projectList");
        const newProject = document.createElement("button");
        newProject.setAttribute("class", "projectButtons")
        if (pName.value) 
        {
            const projectButtons = document.querySelectorAll(".projectButtons");
            newProject.textContent = pName.value;
            newProject.dataset.id = createProjectObject(pName.value);
            
            for(const element of projectButtons) {
                element.remove();
            }
            
            importProjectButtons();
            deleteProjects() 
        }
    };

    createProject.addEventListener("click", createEvent)

}

function importProjectButtons() {
    const allProjects = getAllStorage();

    

    if(allProjects) {
        for (const element of allProjects) {
        
            if (element.name !== "Home") {
                
                const projectList = document.querySelector("#projectList");
                const newProject = document.createElement("button");
                newProject.dataset.id = element.id;
                newProject.setAttribute("class", "projectButtons")

                newProject.textContent = element.name;
                projectList.appendChild(newProject);
                changeProjectsButtons();
            }
        }
    }
    else {
        const allProjectsRaw = getAllStorageRaw();


        if(allProjectsRaw) {
            for (const element of allProjectsRaw) {
            
                if (element.name !== "Home") {
                    
                    const projectList = document.querySelector("#projectList");
                    const newProject = document.createElement("button");
                    newProject.dataset.id = element.id;
                    newProject.setAttribute("class", "projectButtons")

                    newProject.textContent = element.name;
                    projectList.appendChild(newProject);
                    changeProjectsButtons();
                }
            }
        }
    }
}

let projectEvent = (event) => {
        switchProject(event.currentTarget.dataset.id)
    }

function changeProjectsButtons() {

    const projectButtons = document.querySelectorAll(".projectButtons")

    if(projectButtons) {

        for(const element of projectButtons) {
            console.log("test")
            

            element.removeEventListener("click", projectEvent);
            element.addEventListener("click", projectEvent);
        }
    }
}

function homeButton(homeProject) {
    const homeButton = document.querySelector("#homeButton")

    homeButton.addEventListener("click", () => {
        createSwitchedProject(homeProject);
        submitTodo(homeProject)
    });
}

function deleteProjects() {
    const deleteProjectButton = document.querySelector("#dProject");
    const deleteProjectDisplay = document.querySelector("#deleteProjects")
    const allProjects = getAllStorage();

    if(allProjects) {
        const allDeleteProjectButtons = document.querySelectorAll(".dProjectButtons");

        for (const element of allDeleteProjectButtons) {
            if(element) {
                element.remove();
            }
            
        }

        for (const element of allProjects) { 

            if (element.name !== "Home") {
                
                const newProject = document.createElement("button");
                newProject.dataset.id = element.id;
                newProject.setAttribute("class", "dProjectButtons")

                newProject.textContent = element.name;
                deleteProjectDisplay.appendChild(newProject);
                changeProjectsButtons();
            }
        }

    } else {

        const allProjectsRaw = getAllStorageRaw();

        if(allProjectsRaw){
            const allDeleteProjectButtons = document.querySelectorAll(".dProjectButtons");
            for (const element of allDeleteProjectButtons) {
                if(element) {
                    element.remove();
                }
                
            }

            for (const element of allProjectsRaw) { 
                if (element.name !== "Home") {
                    
                    const newProject = document.createElement("button");
                    newProject.dataset.id = element.id;
                    newProject.setAttribute("class", "dProjectButtons")

                    newProject.textContent = element.name;
                    deleteProjectDisplay.appendChild(newProject);
                    changeProjectsButtons();
                }
            }
        }
    }

    const allDeleteProjectButtons = document.querySelectorAll(".dProjectButtons");
    
    for (const element of allDeleteProjectButtons) {

        element.addEventListener("click", () => {
            const allStorage = getAllStorageRaw().todoProjects;
            
            let removeIndex;
            if(allStorage) {
                
                removeIndex = allStorage.findIndex(obj => obj.id === element.dataset.id)
                
                removeProjectAllStorage(removeIndex);
            }
            
            const projectButtons = document.querySelectorAll(".projectButtons");
            if (projectButtons) {
                for(const btn of projectButtons) {
                    btn.remove();
                }
                importProjectButtons();
            }
            element.remove();
        });

    }
}


export { createHomePage, submitTodo, createSwitchedProject, homeButton}