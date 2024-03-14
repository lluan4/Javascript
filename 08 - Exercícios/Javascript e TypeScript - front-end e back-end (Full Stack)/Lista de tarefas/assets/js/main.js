const btnForm = document.getElementById("btn-form-task");
const btn = document.getElementById("btn-form-task");

function getValueFromInput() {
    return document.getElementById("input-task").value;
}

function createListItem() {

    //const li = document.querySelectorAll("li")
    const listItem = document.createElement("li");
    //const liIndex = parseInt(li.length) + 1;

    listItem.appendChild(createSpan());
    listItem.appendChild(createButton());

    return listItem;
}

function createButton() {
    const buttonTask = document.createElement("button");
    buttonTask.classList.add("btn-task");
    buttonTask.innerHTML = "Apagar tarefa";
    return buttonTask;
}

function createSpan(li) {
    const span = document.createElement("span");
    span.id = "task-" + li;
    span.innerHTML = getValueFromInput();
    return span;
}

function insertListItem(){
    const taskContainer = document.getElementById("tasks-list");
    taskContainer.appendChild(createListItem());
}

btnForm.addEventListener("click", (event) =>{
    event.preventDefault();
    console.log(insertListItem());
    addEventDelete();
})

function addEventDelete() {
    const deleteButton = document.querySelectorAll('.btn-task')
    deleteButton.forEach(button => {
        console.log(button);
        button.addEventListener('click', ()=>{
            button.parentNode.remove();
        })
    })
}

