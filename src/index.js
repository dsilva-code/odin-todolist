import { createProject } from "./logicJS/createProject.js";
import { createHomePage, submitTodo } from "./displayJS/homePage.js";
import { getStorage, mergeList } from "./storageJS/storage.js";


const homeProject = createProject("Home");
mergeList(homeProject);
createHomePage(homeProject);
submitTodo(homeProject);