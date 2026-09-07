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

function allStorage(projects) {
    console.log("Yo");
    const projectsSerial = JSON.stringify(projects);
   localStorage.setItem("all", projectsSerial);
}

function getProjectStorage() {
    const projectsDeserial = JSON.parse(localStorage.getItem("all"));
    return projectsDeserial;
}

function loadProjectList() {

}

export { todoStorage, getStorage, mergeList, removeStoredTodo, allStorage, getProjectStorage }