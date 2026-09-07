import { createProject } from "./logicJS/createProject.js";
import { createHomePage, submitTodo } from "./displayJS/display.js";
import { getStorage, mergeList } from "./storageJS/storage.js";


const homeProject = createProject("Home");
mergeList(homeProject, homeProject.name);
createHomePage(homeProject);
submitTodo(homeProject);

function createProjectObject (projectName) {;
    const newProject = createProject(projectName);
    console.log(newProject);
   // merge stored items to list mergeList(newProject);
   // create the display for the page  createHomePage(newProject);
   // submit the todo to the project object list submitTodo(newProject);
}

export {createProjectObject}