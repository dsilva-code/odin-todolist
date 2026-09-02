import { createProject } from "./createProject.js";

const defaultProject = createProject("Default");

defaultProject.addTodo("Yo", "Say Yo");
defaultProject.addTodo("Clean", "Room, and all that toher ");
console.log(defaultProject);