function createTodo (cTitle, cDescription, cDueDate, cPriority, cNote) {
    const id = self.crypto.randomUUID();
    const name = cTitle;
    const description = cDescription;
    const dueDate = cDueDate;
    const priority = cPriority;
    const notes = cNote;
    const status = "notFinished";
    //const checklist = cChecklist; Commented out for now, I will figure this out later

    return { id, name, description, dueDate, priority, notes, status };
}

export { createTodo };


