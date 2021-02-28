"use strict";


function getWeather(){
	var xmlHttp = new XMLHttpRequest();
	xmlHttp.onreadystatechange = function() {
		if(xmlHttp.readyState == 4 && xmlHttp.status == 200){

			var jsonObject = JSON.parse(xmlHttp.responseText);
			document.getElementById("c1").innerHTML = jsonObject.main.temp + "&#8451"
		}
	}


	let apiKey = config.weather_api_key; // stored in config.js file
	let url = "http://api.openweathermap.org/data/2.5/weather?q=sydney&appid="+ apiKey +"&units=metric";

	xmlHttp.open("GET",url,true)
	xmlHttp.send(null);

}


function init(){


	// Get data from api
	document.getElementById("c1").innerHTML = "Echo Hello";
	// get weather
	getWeather();

}



window.onload = init;