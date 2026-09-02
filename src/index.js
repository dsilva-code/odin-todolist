import { createProject } from "./logicJS/createProject.js";
import { createHomePage } from "./displayJS/homePage.js";

const defaultProject = createProject("Default");

defaultProject.addTodo("Yo", "Say Yo");
defaultProject.addTodo("Clean", "Room, and all that toher ");
console.log(defaultProject);

createHomePage();