//Declared variables 
var currentDateEl =$("date");
var searchButton = $("search-button");
var searchCity = $("search-city");
var currentForecast = ('c-forecast');
//Api Key 
var APIKey="dff049b28f04d7e6c1fe41fa2dd60317";

function forecast(cityid) {
    var forecastURL= "https://api.openweathermap.org/data/2.5/weather?id="+ cityid + "&appid=" + APIKey;

function fetchWeather(location) 
    var {lon} = longitude;
    var {lat} = latitude;
    var{timezone} = timezone;
    var {current} = currentWeather;

    fetch(forecastUrl)
    .then(function(res) {
    return res.json();
    })
    .catch (function (err) {
        console.error(err);
    });
}





fetchButton.addEventListener('click',getApi);