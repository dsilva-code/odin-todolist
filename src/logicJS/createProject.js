import { createTodo } from "./createTodo.js";
import { removeStoredTodo } from "../storageJS/storage.js";

function createProject (projectName) {
    const id = self.crypto.randomUUID();
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
            todoList.push(element)
        }
    }

    function removeTodo (removeTodo) {
        if(removeTodo.id) {
            let removeIndex = todoList.findIndex(obj => obj.id === removeTodo.id);
            removeStoredTodo(removeIndex, name);
            todoList.splice(removeIndex, 1)
        }
    }
    
    return { name, todoList, addTodo, getTodo, addStoredTodo, removeTodo}
}

export { createProject };