//Declared variables 

var searchButton = $("search-button");
var searchCity = $("search-city");

//Api Key 
var APIKey="dff049b28f04d7e6c1fe41fa2dd60317";

function forcast(cityid) {
    var queryForecastURL= "https://api.openweathermap.org/data/2.5/weather?id="+ cityid + "&appid=" + APIKey;
}

