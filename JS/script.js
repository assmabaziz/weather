"use strict";
const myKey = "636b1e2ded56442dac4132514242706";
let searchValue = document.querySelector("#input");
let response = {};

async function getData(city) {
  let res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=636b1e2ded56442dac4132514242706&q=${city}&days=3`
  );
  let finalRes = await res.json();

  response = finalRes;
  console.log(finalRes);
}
function displayToday() {
  let walo = new Date();
  let weather = "";
  weather += `
 <div class="weather-card first-card">
              <div class="header d-flex justify-content-between border-bottom-0 p-3 text-white text-opacity-75">
                <p class="text-capitalize" id="currentDay">${walo.toLocaleDateString(
                  "en-US",
                  { weekday: "long" }
                )}</p>
                <p class="text-capitalize" id="dayOfMonth">${
                  walo.getDate() +
                  " " +
                  walo.toLocaleDateString("en-US", { month: "long" })
                }</p>
              </div>
              <div class="body p-3">
                <p class="text-capitalize fs-2 text-white text-opacity-75" id="nameCity">${
                  response.location.name
                }</p>
                <h2 class="display-1 fw-medium text-white" id="currentTemperature">${
                  response.current.temp_c
                }&#176C </h2>
                <img src="${response.current.condition.icon}" alt="">
                  <span>
                  <p class="text-info my-3" id="statusWeatherCurrentDay">${
                    response.current.condition.text
                  }</p>
                </span>
                <div class="weather-info d-flex ">
                  <span class="d-flex me-4 text-white text-opacity-75">
                    <i class="fa-solid fa-umbrella me-2 mt-1" id="iconHumidity"></i>
                    <p class="my-0" id="persentageHumidity">${
                      response.current.humidity
                    }%</p>
                  </span>
                  <span class="d-flex me-4 text-white text-opacity-75">
                    <i class="fa-solid fa-wind me-2 mt-1" id="iconWind"></i>
                    <p class="my-0" id="speedWind">${
                      response.current.windchill_c
                    }</p>
                  </span>
                  <span class="d-flex text-white text-opacity-75">
                    <i class="fa-regular fa-compass me-2 mt-1" id="iconDirection"></i>
                    <p class="my-0" id="textDirection">${
                      response.current.wind_dir
                    }</p>
                  </span>
                </div>
              </div>
            </div> 
  `;
  document.querySelector("#currentWeather").innerHTML = weather;
}
function displayTomorrow() {
  let walo = new Date(response.forecast.forecastday[1].date);
  let weather = "";
  weather += `
 <div class="weather-card second-card  text-center">
            <div class="header border-bottom-0 p-3 text-white text-opacity-75">
                <p class="text-capitalize" id="dayOfMonth">${walo.toLocaleDateString(
                  "en-US",
                  { weekday: "long" }
                )}</p>
            </div>
            <div class="body px-3 py-5">
              <img src="${
                response.forecast.forecastday[1].day.condition.icon
              }" class="mb-3" alt="">
              <h2 class="text-white">${
                response.forecast.forecastday[1].day.maxtemp_c
              }&#176C</h2>
              <h5 class="text-white text-opacity-75">${
                response.forecast.forecastday[1].day.mintemp_c
              }&#176</h5>
              <span>
                <p class="text-info mb-5 mt-4">${
                  response.forecast.forecastday[1].day.condition.text
                }</p>
              </span>
            </div>
          </div>
  `;
  document.querySelector("#weatherTomorrow").innerHTML = weather;
}
function displayAfterTomorrow() {
  let walo = new Date(response.forecast.forecastday[2].date);
  let weather = "";
  weather += `
 <div class="weather-card third-card  text-center">
            <div class="header border-bottom-0 p-3 text-white text-opacity-75">
              <p class="text-capitalize">${walo.toLocaleDateString("en-US", {
                weekday: "long",
              })}</p>
            </div>
            <div class="body px-3 py-5">
              <img src="${
                response.forecast.forecastday[2].day.condition.icon
              }" class="mb-3" alt="">
              <h2 class="text-white">${
                response.forecast.forecastday[2].day.maxtemp_c
              }&#176C</h2>
              <h5 class="text-white text-opacity-75">${
                response.forecast.forecastday[2].day.mintemp_c
              }&#176</h5>
              <span>
                <p class="text-info mb-5 mt-4">${
                  response.forecast.forecastday[2].day.condition.text
                }</p>
              </span>
            </div>
          </div>
  `;
  document.querySelector("#weatherAfterTomorrow").innerHTML = weather;
}
async function callAllFunctions(city = "Algiers") {
  let x = await getData(city);
  displayToday(x);
  displayTomorrow(x);
  displayAfterTomorrow(x);
  // console.log("walo");
}
callAllFunctions();
searchValue.addEventListener("input", function () {
  callAllFunctions(searchValue.value);
});
/*
function findLocation() {
  function success (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    console.log(latitude);
    console.log(longitude);
  }
  function error() {
    console.log("position unconnue");
  }

  if(!navigator.geolocation){
    console.log("Noooooooooooooooooooooooo");
  }else {
    navigator.geolocation.getCurrentPosition(success, error)
  }
  // console.log("walooooooooooooooooooo");
}
document.getElementById("btnSubmit").addEventListener("click", findLocation)

function showLocation() {
  navigator.geolocation.getCurrentPosition(showPosition)
}
function showPosition(GeolocationPosition) {
  console.log(GeolocationPosition.coords.longitude);
  console.log(GeolocationPosition.coords.latitude);

}
showLocation()
showPosition()
*/

/*
// let myPosition = navigator.geolocation.getCurrentPosition
navigator.geolocation.watchPosition((position) => {
  console.log(position.coords.latitude, position.coords.longitude);
});
// console.log(myPosition);
*/



