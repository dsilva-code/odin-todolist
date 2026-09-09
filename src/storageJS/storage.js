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
    if(projectArray) {
        projectArray.splice(removeTodoIndex, 1);
        todoStorage(projectArray, projectName);
    }

}

function allStorage(projects) {
    const projectsSerial = JSON.stringify(projects);
    localStorage.setItem("all", projectsSerial);
}

function getAllStorage() {
    const projectsDeserial = JSON.parse(localStorage.getItem("all"));
    if(projectsDeserial){
        return projectsDeserial.todoProjects;
    }
    
}

function mergeAllStorage(projects) {
    const allStoredProjects = getAllStorage();

    if(allStoredProjects) {
        for (const element of allStoredProjects) {
            projects.addProject(element);
        }
    }

}



export { todoStorage, getStorage, mergeList, removeStoredTodo, allStorage, getAllStorage, mergeAllStorage}