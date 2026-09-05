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
            element.dueDate = element.dueDate.slice(5); // Cut the year out
            list.textContent = element.name + " Due Date: " + element.dueDate;
            list.setAttribute("class", "todoItem")
            todoList.appendChild(list);
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

export { createHomePage, submitTodo }