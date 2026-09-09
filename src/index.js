import { createProject, importProjectFunctions } from "./logicJS/createProject.js";
import { createHomePage, submitTodo } from "./displayJS/display.js";
import { getStorage, mergeList, allStorage, getAllStorage, mergeAllStorage, removeStoredTodo } from "./storageJS/storage.js";
import { createAllStorage} from "./logicJS/allProjects.js";
import { createTodo } from "./logicJS/createTodo.js";


const allProjects = createAllStorage();
mergeAllStorage(allProjects); //Imports stored projects
let homeExist = false;

for (const element of allProjects.getProject()) {
    if (element.name === "Home") {
        homeExist = true;
    }
}

if (!homeExist) {
    const homeProject = createProject("Home");
    allProjects.addProject(homeProject);
    mergeList(homeProject, homeProject.name);
    createHomePage(homeProject);
    submitTodo(homeProject);
} else {
    const homePWF = allProjects.todoProjects[0];
    const homeProject = importProjectFunctions(homePWF.name, homePWF.id, homePWF.todoList)  //Add functions
    mergeList(homeProject, homeProject.name);
    createHomePage(homeProject);
    submitTodo(homeProject);
}




function createProjectObject (projectName) {;
    const newProject = createProject(projectName);
    allProjects.addProject(newProject);
    allStorage(allProjects); //Adds to allStorage
    return (newProject.getID());
   // merge stored items to list mergeList(newProject);
   // create the display for the page  createHomePage(newProject);
   // submit the todo to the project object list submitTodo(newProject);
}



console.log(allProjects);

export {createProjectObject}