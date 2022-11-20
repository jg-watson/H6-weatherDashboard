//Declared variables 
var searchCity = $("search-city");
var currentForecast = ('c-forecast');
//Api Key 
var apiKey="dff049b28f04d7e6c1fe41fa2dd60317";

function forecast(cityid) {
    var forecastURL= "https://api.openweathermap.org/data/2.5/weather?id="+ cityid + "&appid=" + APIKey;

var searchButton = document.querySelector('#search');

    function fetchWeather(location) 
    var {lon} = longitude;
    var {lat} = latitude;
    var{timezone} = timezone;
    var {current} = currentWeather;
    var {apiCall} = `${weatherUrl}https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=${apiKey}`;

    fetch(forecastUrl)
    .then(function(res) {
    return res.json();
    })
    .catch (function (err) {
        console.error(err);
    });
}

//search button
function searchButton() {
    document.getElementById('search').click();
}