const tempAndLocation = document.querySelector(".tempAndLocation");
const mainWeather = document.querySelector(".mainWeather");
let locationIcon = document.querySelector('.weather-icon');
const clothesList = document.querySelector(".clothesList");

const API_KEY = "bbfae165d745aeb2f61484d158cc51a0";
const COORDS = "coords"

function appendList(text) {
  const li = document.createElement("li");
  li.innerText = text;
  clothesList.appendChild(li);
}

function clothes(temp){
  fetch(`js/clothes.json`).then(function(reponse){
    return reponse.json();
  }).then(function(json){
    // const temperture = json.clothesInfo[0].temp;
    // const clothes = json.clothesInfo[0].clothes;

    if (Math.floor(temp)<=4){
      const winter = json.clothesInfo[0].clothes;
      winter.forEach(function(i){
        appendList(i);
      });
    }
    else if(Math.floor(temp)<=8){
      const winter = json.clothesInfo[1].clothes;
      winter.forEach(function(i){
        appendList(i);
      });
    }
    else if(Math.floor(temp)<=11){
      const winter = json.clothesInfo[2].clothes;
      winter.forEach(function(i){
        appendList(i);
      });
    }    
    else if(Math.floor(temp)<=16){
      const winter = json.clothesInfo[3].clothes;
      winter.forEach(function(i){
        appendList(i);
      });
    }
    else if(Math.floor(temp)<=19){
      const winter = json.clothesInfo[4].clothes;
      winter.forEach(function(i){
        appendList(i);
      });
    }
    else if(Math.floor(temp)<=22){
      const winter = json.clothesInfo[5].clothes;
      winter.forEach(function(i){
        appendList(i);
      });
    }   
    else if(Math.floor(temp)<=27){
      const winter = json.clothesInfo[6].clothes;
      winter.forEach(function(i){
        appendList(i);
      });
    }   
    else {
      const winter = json.clothesInfo[7].clothes;
      winter.forEach(function(i){
        appendList(i);
      });
    }       
  });
}

function getWeader(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function(reponse){
        return reponse.json();
    }).then(function(json){
        const icon = json.weather[0].icon;
        const temperture = json.main.temp;
        const place = json.name;
        const weather = json.weather[0].main;
        tempAndLocation.innerText = `${Math.floor(temperture)}℃ @ ${place}`;
        locationIcon.innerHTML = `<img src="icons/${icon}.png">`
        mainWeather.innerText = `${weather}`;

        clothes(temperture);
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
    alert(`Can't access your location imformatrion`);
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