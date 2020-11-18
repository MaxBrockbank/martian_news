import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './../src/css/styles.css';
import MarsWeatherService from './../src/js/marsWeather.js'
import marsRoverCamera from './../src/js/marsRover.js'
$
/*
let mars = MarsWeatherService.getWeatherData();
console.log(mars); */

function getElements(response) {
  const responseArray = Object.entries(response);
  return responseArray.filter( sol => sol[1].AT && sol[1].HWS && sol[1].PRE);
}

async function displayWeather(solArray){
  const results = $("#results");
  solArray.forEach(sol => {
    results.append(`<div class="solWeather clearfix" id="${sol[0]}"> <div class="info"><h3>Sol ${sol[0]}</h3><strong>Temp:</strong> ${sol[1].AT.av}°F<br><strong>Wind Speed:</strong> ${sol[1].HWS.av} m/s<br><strong>Atmospheric Pressure:</strong> ${sol[1].PRE.av} Pa</div></div>`);
    grabRoverImages(sol);
  })
}

async function grabRoverImages(sol){
  const response = await marsRoverCamera.getRoverPhoto(sol);
  console.log(response);
  if(response.photos.length > 0) {
    let i = Math.floor(Math.random() * response.photos.length);
    console.log(response.photos[i].img_src, sol);
    $(`#${sol[0]}`).append(`<img src="${response.photos[i].img_src}" alt="Mars Rover Photo" id="${sol[0]}img" class="solImg">`)
  }
  /*const formattedResponse = Object.entries(rawResponse);
  formattedResponse[0][1].forEach( imageSet => {
    if(imageSet[0].camera.sol === sol){
      $(`#${sol}`).append(`<img src="${imageSet[0].img_src}">`)
    }
  })*/

}

async function makeApiCall() {
  const response = await MarsWeatherService.getWeatherData();
  const solData = getElements(response);
  displayWeather(solData);
}

$("#getWeather").on('click', function(){
  makeApiCall();
  $("#getWeather").hide();
  $("#removeWeather").show();
});

$("#removeWeather").on('click', function(){
  $("#results").html("");
  $("#getWeather").show();
  $("#removeWeather").hide();
})

