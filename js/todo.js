const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';
let number = 1;
let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(i){
        return i.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(txt){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const span = document.createElement("span");
    span.innerText = txt;
    const newId = number;
    number++;

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text : txt,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
    delBtn.addEventListener("click", deleteToDo);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(i){
            paintToDo(i.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();