import { createProject } from "./logicJS/createProject.js";
import { createHomePage, submitTodo } from "./displayJS/homePage.js";

const homeProject = createProject("Home");
createHomePage(homeProject);
submitTodo(homeProject);

