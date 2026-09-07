import { todoStorage, getStorage} from "../storageJS/storage.js";

function createHomePage(homeProject) {

    addProject();

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
            console.log(label);
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

        currentProject.addTodo(todoName, todoDescription, todoDueDate, todoPriority, todoNote);
        createHomePage(currentProject);
        todoStorage(currentProject.getTodo()); // Save the whole todo list
        
        dialog.close();
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

        newProject.textContent = pName.value;
        projectList.appendChild(newProject);
    });
}

export { createHomePage, submitTodo }