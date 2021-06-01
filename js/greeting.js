const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "currnetUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit)
}

function paintGreeting(text){
    const date = new Date();
    const hours = date.getHours();
    input.classList.add("hide");
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;

    if(hours >= 2 && hours <= 10){
        greeting.innerText = `Good Morning! ${text}`;
    } else if (hours>=11 && hours<=17){
        greeting.innerText = `Good Afternoon! ${text}`;
    } else if (hours>= 18 && hours<=22) {
        greeting.innerText = `Good Evenig! ${text}`;
    } else {
        greeting.innerText = `Good Night! ${text}`;
    }
}

function loadNmae(){
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    }
    else {
        paintGreeting(currentUser);
    }
}

function init(){
    loadNmae();
}

init();