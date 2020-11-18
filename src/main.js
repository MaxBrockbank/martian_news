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
  console.log(responseArray);
  const solData = responseArray.filter( sol => sol[1].AT);
  console.log(solData);
  // const{"698":sol698, "699":sol699, "700":sol700} = response;
  // console.log(sol698, sol699, sol700);

}

async function makeApiCall() {
  const response = await MarsWeatherService.getWeatherData();
  getElements(response);
}

makeApiCall();

