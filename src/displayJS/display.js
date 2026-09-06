import { todoStorage, getStorage} from "../storageJS/storage.js";

function createHomePage(homeProject) {
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
            list.textContent = element.name + " Due Date: " + element.dueDate;
            list.setAttribute("class", "todoItem")
            todoList.appendChild(list);
            list.addEventListener("click", () => {
                expandTodo(element, list);
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

export { createHomePage, submitTodo }