function todoStorage(projectArray) {
   const todoSerial = JSON.stringify(projectArray);
   localStorage.setItem("todo", todoSerial);
}

function getStorage() {
    const todoDeserial = JSON.parse(localStorage.getItem("todo"));
    return todoDeserial;
}

function mergeList(projectObject) {
    const storedArray = getStorage();
    if(storedArray) {
        projectObject.addStoredTodo(storedArray);
    }
}

function removeStoredTodo(removeTodoIndex) {
    const projectArray = getStorage();
    projectArray.splice(removeTodoIndex, 1);
    todoStorage(projectArray);
}

export { todoStorage, getStorage, mergeList, removeStoredTodo }