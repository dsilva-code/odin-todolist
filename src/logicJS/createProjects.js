
function createProjects () {
    const todoProjects = []

    function addProject(projectName) {
        todoProjects.push(projectName);
    }

    function getProject() {
        return todoProjects;
    }

    return {todoProjects, addProject, getProject}

}

export {createProjects}