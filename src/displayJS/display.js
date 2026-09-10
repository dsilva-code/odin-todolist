import { todoStorage, getStorage, getAllStorage} from "../storageJS/storage.js";
import { createProjectObject } from "../index.js";
import { switchProject } from "../logicJS/changeProject.js";

function createHomePage(homeProject) {
    addProject();
    importProjectButtons();
    changeProjectsButtons();

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

function submitTodo(currentProject) {
    const submitButton = document.querySelector("#todoSubmit");
    const dialog = document.querySelector("#my-dialog");
    submitButton.addEventListener("click", () => {
        event.preventDefault();
        const todoName = todoForm.todoName.value;
        const todoDescription = todoForm.todoDescription.value;
        const todoDueDate = todoForm.todoDueDate.value;
        const todoPriority = todoForm.todoPriority.value;
        const todoNote = todoForm.todoNote.value;

        if(todoName){
            currentProject.addTodo(todoName, todoDescription, todoDueDate, todoPriority, todoNote);
            createHomePage(currentProject);
            todoStorage(currentProject.getTodo(), currentProject.name); // Save the whole todo list
            console.log(currentProject.getTodo())
            dialog.close();
        }
    });
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

function addProject() {
    const createProject = document.querySelector("#projectSubmit");

    createProject.addEventListener("click", () => {
        event.preventDefault();
        const pName = document.querySelector("#projectName");
        
        const projectList = document.querySelector("#projectList");
        const newProject = document.createElement("button");
        newProject.setAttribute("class", "projectButtons")
        if (pName.value) 
        {
            newProject.textContent = pName.value;
            newProject.dataset.id = createProjectObject(pName.value);
            projectList.appendChild(newProject);
        }
    });
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
            }
        }
    }
}

function changeProjectsButtons() {
    const projectButtons = document.querySelectorAll(".projectButtons")
    
    if(projectButtons) {
        for(const element of projectButtons) {
            element.addEventListener("click", () => {
                switchProject(element.dataset.id)
            });
        }
    }
}

export { createHomePage, submitTodo, createSwitchedProject}