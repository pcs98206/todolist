const mainToDoForm = document.querySelector(".js-mainTodoForm"),
    mainToDoInput = mainToDoForm.querySelector("input"),
    mainTodo = document.querySelector(".js-mainTodo");

const MAINTODO_LS = "currentMainTodo"

function saveMainTodo(txt){
    localStorage.setItem(MAINTODO_LS, txt);
}

function delMainTodo(event){
    const btn = event.target;
    const label = btn.parentNode;
    const span = label.firstChild;
    label.removeChild(span);
    label.removeChild(btn);

    mainToDoInput.classList.remove("hide");
    localStorage.removeItem(MAINTODO_LS);
}

function paintMainTodo(text){
    mainToDoInput.classList.add("hide");
    const span = document.createElement("span");
    const delBtn = document.createElement("botton");
    delBtn.innerText = "❌";
    span.innerText = text;
    mainTodo.appendChild(span);
    mainTodo.appendChild(delBtn);
    saveMainTodo(text);
    delBtn.addEventListener("click", delMainTodo)
}

function handleMainTodo(event){
    event.preventDefault();
    currnetValue = mainToDoInput.value;
    paintMainTodo(currnetValue);
    mainToDoInput.value = "";
}

function askForMainTodo(){
    mainToDoForm.addEventListener("submit", handleMainTodo)
}

function loadMainTodo(){
    const currentMainTodo = localStorage.getItem(MAINTODO_LS);
    if(currentMainTodo === null){
        askForMainTodo();
    }
    else{
        paintMainTodo(currentMainTodo);
    }
}

function init(){
    loadMainTodo();
}

init();