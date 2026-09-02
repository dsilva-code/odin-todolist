

function createHomePage(homeProject) {
    const projectContent = document.querySelector("#projectContent")
    const currentProject = document.querySelector("#currentProject");

    currentProject.textContent = "Current Project: Home"

    const todoList = document.createElement("ul");
    todoList.setAttribute("id", "todo")

    projectContent.appendChild(todoList);
    
    const homeList = homeProject.getTodo();

    for (const element of homeList) {
        const list = document.createElement("li");
        list.textContent = element.name;
        list.setAttribute("class", "todoItem" )
        todoList.appendChild(list);
    }
    
}

export { createHomePage }