function todoStorage(projectObject) {

   const todoSerial = JSON.stringify(projectObject);
   localStorage.setItem("todo", todoSerial);

}

function getStorage() {
    const todoDeserial = JSON.parse(localStorage.getItem("todo"));
    return todoDeserial;
}

export { todoStorage, getStorage }