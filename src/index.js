import { createProject } from "./createProject.js";

const defaultProject = createProject("Default");


defaultProject.addTodo("Yo", "Say Yo");
console.log(defaultProject);