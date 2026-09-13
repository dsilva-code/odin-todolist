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
    console.log(projectsDeserial);
    if(projectsDeserial){
        return projectsDeserial.todoProjects;
    }
    
}

function removeProjectAllStorage(removeIndex) {
    const allStorages = getAllStorage();
    allStorages.splice(removeIndex, 1);
    allStorage(allStorages);

}

function mergeAllStorage(projects) {
    const allStoredProjects = getAllStorage();
    console.log(allStoredProjects)
    if(allStoredProjects) {
        for (const element of allStoredProjects) {
            projects.addProject(element);
        }
    }

}



export { todoStorage, getStorage, mergeList, removeStoredTodo, allStorage, getAllStorage, mergeAllStorage, removeProjectAllStorage}