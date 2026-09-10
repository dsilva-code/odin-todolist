import { getAllStorage } from "../storageJS/storage.js";
import { importProjectFunctions } from "./createProject.js";
import { createSwitchedProject } from "../displayJS/display.js";

function switchProject(projectID) {
    const allStorage = getAllStorage();
    console.log(projectID);
    let foundIndex = allStorage.findIndex(obj => obj.id === projectID);     //Find projectID in allStorage
    const projectWOF = allStorage[foundIndex];
    const projectWF = importProjectFunctions(projectWOF.name, projectWOF.id, projectWOF.todoList)     //Add functions to that objects by creating a new object
    createSwitchedProject(projectWF);
    //remove current todo list
    //import newTodo list
    //in display.js rerun the display logic
    //in the switch project display, update the name
};

export {switchProject}