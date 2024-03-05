

document.getElementById("modal-container").innerHTML = 
`<div class="modal">
    <div class="title" >
        <h3>Erro ao adicionar nova tarefa!</h3>
    </div>
    <div class="message">
        <p>Não é permitido adicionar uma tarefa vazia.</p>
    </div>
    <div class="button-msg">
        <button onClick ="closeModal()">Entendido!</button>
    </div>
</div>`;

let taskCount = 0;
closeModal();

function addTask(){
    taskCount = document.getElementsByClassName("new-item").length;
    const newTask = document.getElementById("newTask");

    if(newTask.value != "" && newTask.value != " "){
        const toDoList = document.getElementById("to-do-list");
        const newItem = document.createElement("div");

        newItem.innerHTML = 
        `<div id="${`item-${taskCount}`}" class="new-item">
            <div class="text">
                <input id="${`text-${taskCount}`}" type="text" readonly value="${newTask.value}">
            </div>
            <div class="button">
                <button id="${`check-${taskCount}`}" class="ck-button" onClick="checkTask(this.id)">✔</button>
            </div>
            <div class="button">
                <button id="${`remove-${taskCount}`}" class="del-button" onClick="removeTask(this.id)">X</button>
            </div>
        </div>`;

        newTask.value = "";
        toDoList.appendChild(newItem);
    }
    else{
        openModal();
    }
}
function checkTask(id){
    const idNumber = id.split("-")[1];
    const taskField = document.getElementById(`text-${idNumber}`);
    const buttonCheck = document.getElementById(`check-${idNumber}`);
    const buttonRemove = document.getElementById(`remove-${idNumber}`);

    if(taskField.style.textDecoration == "line-through"){
        taskField.style.textDecoration = "none";
        taskField.style.backgroundColor = "white";
        taskField.style.opacity = "1";

        buttonCheck.style.opacity = "1";
        buttonRemove.style.opacity = "1";
    }
    else{
        taskField.style.textDecoration = "line-through";
        taskField.style.backgroundColor = "gray";
        taskField.style.opacity = ".5";

        buttonCheck.style.opacity = ".5";
        buttonRemove.style.opacity = ".5";
    }
}

function removeTask(id){
    const idNumber = id.split("-")[1];
    const itemToRemove = document.getElementById(`item-${idNumber}`);
    itemToRemove.parentNode.removeChild(itemToRemove);
}

function openModal(){
    document.getElementById("modal-container").style.display = "flex";
    document.getElementById("modal-container").style.opacity = "1"
    document.getElementById("to-do-list-input").style.display = "none";
    document.getElementById("to-do-list-input").style.opacity = "0";
    document.getElementById("content-to-do").style.opacity = "0";
    document.getElementById("content-to-do").style.display = "none";
}

function closeModal(){
    document.getElementById("modal-container").style.display = "none";
    document.getElementById("modal-container").style.opacity = "0"
    document.getElementById("to-do-list-input").style.opacity = "1";
    document.getElementById("to-do-list-input").style.display = "flex";
    document.getElementById("content-to-do").style.opacity = "1";
    document.getElementById("content-to-do").style.display = "flex";
}
