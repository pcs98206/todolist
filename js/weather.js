const weather = document.querySelector(".js-weather");

const API_KEY = "bbfae165d745aeb2f61484d158cc51a0";
const COORDS = "coords"

function getWeader(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(reponse){
        return reponse.json();
    }).then(function(json){
        const temperture = json.main.temp;
        const place = json.name;
        weather.innerText = `${temperture} @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    };
    saveCoords(coordsObj);
    getWeader(latitude, longitude);
}

function handleGeoError() {
    console.log(`can't access`);
}

function askForCoords() {
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError)
}

function loadCoords() {
    const loadedCoords = localStorage.getItem(COORDS);
    if (loadedCoords === null) {
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCoords);
        getWeader(parseCoords.latitude, parseCoords.longitude);
    }
}

function init() {
    loadCoords();
}

init();