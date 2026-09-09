import { createProject } from "./logicJS/createProject.js";
import { createHomePage, submitTodo } from "./displayJS/display.js";
import { getStorage, mergeList, allStorage, getAllStorage, mergeAllStorage } from "./storageJS/storage.js";
import { createAllStorage} from "./logicJS/allProjects.js";

const allProjects = createAllStorage();
mergeAllStorage(allProjects);

const homeProject = createProject("Home");
mergeList(homeProject, homeProject.name);
createHomePage(homeProject);
submitTodo(homeProject);

function createProjectObject (projectName) {;
    const newProject = createProject(projectName);
    allProjects.addProject(newProject);
    allStorage(allProjects); //Adds to allStorage
   // merge stored items to list mergeList(newProject);
   // create the display for the page  createHomePage(newProject);
   // submit the todo to the project object list submitTodo(newProject);
}

export {createProjectObject}