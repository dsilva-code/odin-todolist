function todoStorage(projectArray, projectName) {
    const todoSerial = JSON.stringify(projectArray);
    localStorage.setItem(projectName, todoSerial);
}

function getStorage(projectName) {
    const todoDeserial = JSON.parse(localStorage.getItem(projectName));
    return todoDeserial;
}

function mergeList(projectObject, projectName) {
    const storedArray = getStorage(projectName);
    if(storedArray) {
        projectObject.addStoredTodo(storedArray);
    }
}

function removeStoredTodo(removeTodoIndex, projectName) {
    const projectArray = getStorage(projectName);
    projectArray.splice(removeTodoIndex, 1);
    todoStorage(projectArray, projectName);
}

function projectStorage(project) {
    console.log("Yo");
    //const projectSerial = JSON.stringify(project);
   //localStorage.setItem(project.name, projectSerial);
}

function getProjectStorage(project) {

}

function loadProjectList() {

}

export { todoStorage, getStorage, mergeList, removeStoredTodo, projectStorage, getProjectStorage }