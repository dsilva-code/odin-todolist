import { createProject } from "./logicJS/createProject.js";
import { createHomePage } from "./displayJS/homePage.js";

const homeProject = createProject("Home");
homeProject.addTodo("Clean Room");
homeProject.addTodo("Clean Basement");
homeProject.addTodo("Clean Roof");
createHomePage(homeProject);