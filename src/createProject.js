import { createTodo } from "./createTodo.js";

function createProject (projectName) {
    const name = projectName
    const todoList = [];

    function addTodo(name, description, dueDate, priority, notes){
        const newTodo = createTodo(name, description, dueDate, priority, notes);
        todoList.push(newTodo);
    }

    

    return { name, todoList, addTodo }
}

export { createProject };