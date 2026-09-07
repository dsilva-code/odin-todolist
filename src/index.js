import { createProject } from "./logicJS/createProject.js";
import { createHomePage, submitTodo } from "./displayJS/display.js";
import { getStorage, mergeList } from "./storageJS/storage.js";


const homeProject = createProject("Home");
mergeList(homeProject);
createHomePage(homeProject);
submitTodo(homeProject);

function createProjectObject (projectName) {
    const newProject = createProject(projectName);
   // merge stored items to list mergeList(newProject);
   // create the display for the page  createHomePage(newProject);
   // submit the todo to the project object list submitTodo(newProject);
}