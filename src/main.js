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
  console.log(response);
}

async function makeApiCall() {
  const response = await MarsWeatherService.getWeatherData();
  getElements(response);
}

makeApiCall();

