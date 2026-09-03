import { createTodo } from "./createTodo.js";

function createProject (projectName) {
    const name = projectName
    const todoList = [];

    function addTodo(name, description, dueDate, priority, notes){
        const newTodo = createTodo(name, description, dueDate, priority, notes);
        todoList.push(newTodo);
    }
    
    function getTodo() {
        if (todoList.length === 0) {
            return todoList;
        }
        else {
            return todoList;
        }
    }

    function addStoredTodo (array) {
        for (const element of array) {
            console.log(element);
            todoList.push(element)
        }
    }
    
    return { name, todoList, addTodo, getTodo, addStoredTodo}
}

export { createProject };