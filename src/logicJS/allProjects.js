
function createAllStorage () {
    const todoProjects = []

    function addProject(projectName) {
        todoProjects.push(projectName);
    }

    function getProject() {
        return todoProjects;
    }

    return {todoProjects, addProject, getProject}

}

export {createAllStorage}