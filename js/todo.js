const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList"),
    finishList = document.querySelector(".finishList");

const TODOS_LS = 'toDos';
const FINISH_LS = 'finishToDos';
let number = 1;
let finishNumber = 2;
let toDos = [];
let finishToDos = [];

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

function deleteFinish(event){
    const btn = event.target;
    const li = btn.parentNode;
    finishList.removeChild(li);
    const cleanFinish = finishToDos.filter(function(i){
        return i.id !== parseInt(li.id);
    });
    finishToDos = cleanFinish;
    saveFinishList();
}

function saveToDos(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function saveFinishList(){
    localStorage.setItem(FINISH_LS, JSON.stringify(finishToDos));
}

function backToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.children[1];
    const text = span.innerText;
    deleteFinish(event);
    paintToDo(text);
}

function paintFinishList(txt){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const backBtn = document.createElement("button");
    backBtn.innerText = "🔼"
    const span = document.createElement("span");
    span.innerText = txt;
    const newId = finishNumber;
    finishNumber = finishNumber +2;

    li.appendChild(backBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    finishList.appendChild(li);

    const finishObj = {
        text : txt,
        id : newId
    };
    finishToDos.push(finishObj);
    saveFinishList();
    delBtn.addEventListener("click", deleteFinish);
    backBtn.addEventListener("click", backToDo);
}

function moveToFinish(event){
    const btn = event.target;
    const li = btn.parentNode;
    const span = li.children[1];
    const text = span.innerText;
    deleteToDo(event);
    paintFinishList(text);
}

function paintToDo(txt){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = "❌";
    const finishBtn = document.createElement("button");
    finishBtn.innerText = "✅"
    const span = document.createElement("span");
    span.innerText = txt;
    const newId = number;
    number = number+2;

    li.appendChild(finishBtn);
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;
    toDoList.appendChild(li);

    const toDoObj = {
        text : txt,
        id : newId
    };
    toDos.push(toDoObj);
    saveToDos();
    delBtn.addEventListener("click", deleteToDo);
    finishBtn.addEventListener("click", moveToFinish);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    const loadedFinish = localStorage.getItem(FINISH_LS);
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(i){
            paintToDo(i.text);
        });
    }

    if(loadedFinish !== null){
        const parsedFinish = JSON.parse(loadedFinish);
        parsedFinish.forEach(function(i){
            paintFinishList(i.text);
        });
    }    
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}

init();