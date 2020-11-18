import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/css/styles.css';
import MarsWeatherService from './../src/js/marsWeather.js'
$
/*
let mars = MarsWeatherService.getWeatherData();
console.log(mars); */

function getElements(response) {
  const responseArray = Object.entries(response);
  return responseArray.filter( sol => sol[1].AT && sol[1].HWS && sol[1].PRE);
}

function displayWeather(solArray){
  const results = $("#results");
  solArray.forEach(sol => {
    console.log(sol);
    results.append(`<div> Sol ${sol[0]}
    <strong>Temp:</strong> ${sol[1].AT.av}
    <strong>Wind Speed:</strong> ${sol[1].HWS.av}
    <strong>Atmospheric Pressure:</strong> ${sol[1].PRE.av}`);
  })
}

async function makeApiCall() {
  const response = await MarsWeatherService.getWeatherData();
  const solData = getElements(response);
  displayWeather(solData);
}

$("#getWeather").on('click', makeApiCall);


