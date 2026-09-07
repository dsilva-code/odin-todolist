import { createProject } from "./logicJS/createProject.js";
import { createHomePage, submitTodo } from "./displayJS/display.js";
import { getStorage, mergeList, projectStorage } from "./storageJS/storage.js";
import { createProjects } from "./logicJS/createProjects.js";

const allProjects = createProjects();



const homeProject = createProject("Home");
mergeList(homeProject, homeProject.name);
createHomePage(homeProject);
submitTodo(homeProject);

function createProjectObject (projectName) {;
    const newProject = createProject(projectName);
    allProjects.addProject(newProject);
    // projectStorage(newProject)
   // merge stored items to list mergeList(newProject);
   // create the display for the page  createHomePage(newProject);
   // submit the todo to the project object list submitTodo(newProject);
}

export {createProjectObject}