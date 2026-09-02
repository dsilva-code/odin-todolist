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
            console.log("Empty Todo");
        }
        else {
            return todoList;
        }
            
    }
    return { name, todoList, addTodo, getTodo }
}

export { createProject };