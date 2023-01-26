let apiKey = "86d582dd5437f2bf03bda3254505ee23";
let fetchButton = document.querySelector("#searchBtn");
const currentDiv = document.querySelector('#currentTemp')
const forecastDiv = document.querySelector('#forecastEd')
const forecastOne = document.querySelector('.forecast-1')
const forecastTwo = document.querySelector('.forecast-2')
const forecastThree = document.querySelector('.forecast-3')
const forecastFour = document.querySelector('.forecast-4')
const forecastFive = document.querySelector('.forecast-5')
const fiveDayHeader = document.querySelector('.fiveday-header')
// querySelect allows selecting both class name & ID

//user submit from input box. take the string to plug into geocoding api then run our api function with the geo coding long/lat pulled into above to run the city 
//create placeholder value that passes "cityValue". whatever passes through cityValue will transfer to URL
function getGeo(cityValue) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${apiKey}&units=imperial&date=long`;
    //retrieve city name the user inputs
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            currentWeather(data)
           // console.log(data)
           weatherForecast(data)
        })
}

//current conditions: weather, temp, humidity, wind speed
function currentWeather(currentData) {
    console.log(currentData)
    let currentHTML =`
    <h2>${currentData.city.name} Current Weather</h2>
    <img src="http://openweathermap.org/img/wn/${currentData.list[0].weather[0].icon}@2x.png" alt="">
    <p>Temp: ${currentData.list[0].main.temp} °F</p>
    <p>Humidity:  ${currentData.list[0].main.humidity} %</p>
    <p>Wind Speed: ${currentData.list[0].wind.speed} mps</p>
    `
    
    currentDiv.innerHTML = currentHTML
}


//future conditions (forecast): weather, temp, humidity, wind speed (current time then ever 24 hours)
function weatherForecast(forecastData) {
    console.log(forecastData)
    fiveDayHeader.innerHTML = "<h3>5-Day Forecast: <h3>"
    let currentHTML = `    
    <p>${new Date(forecastData.list[3].dt_txt).toLocaleDateString()}</p>
    <img src="http://openweathermap.org/img/wn/${forecastData.list[3].weather[0].icon}@2x.png" alt="">
    <p>Temp: ${forecastData.list[3].main.temp} °F</p>
    <p>Humidity: ${forecastData.list[3].main.humidity} %</p>
    <p>Wind Speed: ${forecastData.list[3].wind.speed} mps</p>
    `
    forecastOne.innerHTML = currentHTML;

    currentHTML= 
    `<p>${new Date(forecastData.list[11].dt_txt).toLocaleDateString()}</p>
    <img src="http://openweathermap.org/img/wn/${forecastData.list[11].weather[0].icon}@2x.png" alt="">
    <p>Temp: ${forecastData.list[11].main.temp} °F</p>
    <p>Humidity: ${forecastData.list[11].main.humidity} %</p>
    <p>Wind Speed: ${forecastData.list[11].wind.speed} mps</p>`
    forecastTwo.innerHTML = currentHTML;

    currentHTML= 
    `<p>${new Date(forecastData.list[19].dt_txt).toLocaleDateString()}</p>
    <img src="http://openweathermap.org/img/wn/${forecastData.list[19].weather[0].icon}@2x.png" alt="">
    <p>Temp: ${forecastData.list[19].main.temp} °F</p>
    <p>Humidity: ${forecastData.list[19].main.humidity} %</p>
    <p>Wind Speed: ${forecastData.list[19].wind.speed} mps</p>`
    forecastThree.innerHTML = currentHTML;

    currentHTML= 
    `<p>${new Date(forecastData.list[27].dt_txt).toLocaleDateString()}</p>
    <img src="http://openweathermap.org/img/wn/${forecastData.list[27].weather[0].icon}@2x.png" alt="">
    <p>Temp: ${forecastData.list[27].main.temp} °F</p>
    <p>Humidity: ${forecastData.list[27].main.humidity} %</p>
    <p>Wind Speed: ${forecastData.list[27].wind.speed} mps</p>`
    forecastFour.innerHTML = currentHTML;

    currentHTML= 
    `<p>${new Date(forecastData.list[35].dt_txt).toLocaleDateString()}</p>
    <img src="http://openweathermap.org/img/wn/${forecastData.list[35].weather[0].icon}@2x.png" alt="">
    <p>Temp: ${forecastData.list[35].main.temp} °F</p>
    <p>Humidity: ${forecastData.list[35].main.humidity} %</p>
    <p>Wind Speed: ${forecastData.list[35].wind.speed} mps</p>`
    forecastFive.innerHTML = currentHTML;
}


// forecastData.text(dayjs.unix(data.list[i].dt).format("ddd, MMM D, YYYY"));
// function weatherForecast(forecastData) {
//     $(".forecast-1").empty();

//     for (let i=0; i < data.list.length; i +=8){
//         let dayForecast = $("<h3>");

//         dayForecast.text(dayjs.unix(forecastData.list[i].dt).format("ddd, MMM D, YYYY"));
//     }
// }



// let z = 0;
// for (let i = 7; i < y.length; i += 8) {
//   let date = new Date(y[i].dt * 1000).toLocaleDateString("en-us", {
//     weekday: "long",
//     year: "numeric",
//     month: "short",
//     day: "numeric",
//   });
//   document.querySelector(`.forecast${z}Title`).innerHTML = `<h7>${date}</h7>`;
//   document.querySelector(
//     `.forecast${z}Icon`
//   ).innerHTML = `<img src=http://openweathermap.org/img/wn/${y[i].weather[0].icon}.png></img>`;
//   document.querySelector(`.forecast${z}Temp`).textContent =
//     "Temperature: " + y[i].main.temp + " \u00B0F";
//   document.querySelector(`.forecast${z}Wind`).textContent =
//     "Wind: " + y[i].wind.speed + " MPH";
//   document.querySelector(`.forecast${z}Humidity`).textContent =
//     "Humidity: " + y[i].main.humidity + " %";
//   z++;
// }


//getGeo retrieved forcast -- no longer need the following
// function getApi() {
//     var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${apiKey}`;
//     //back ticks to use template literal 
//     //ex lat=40.71 lon=-74.00 (new york)
  
//     //Then 1. get data from user and translate to data using the function below
//     fetch(requestUrl)
//       .then(function (response) {
//         return response.json();
//       })
//       .then(function (data) { //data is the response.json
//         // for (var i = 0; i < data.length; i++) {
//         //   var listItem = document.createElement('li'); //creates HTML list element (empty)
//         //   listItem.textContent = data[i].html_url; //set HTML list item to the html URL
//         //   repoList.appendChild(listItem); //appending it to HTML element called repoList
//         // }
//         var cityName = document.createElement('h1');
//         cityName.textContent = data.city.name;
//         document.getElementById("citynameheader").appendChild(cityName);
//         console.log(data);
//         //2. dynamically append 
//         //create loop for 5 day forecast
//       });
//   }
  
  //need loop for local storage recent searches 

//   $("search").on("click", function() {
//     const searchCity 
//     const forecast 
//     localStorage.setItem(cityName, forecast)
// })
fetchButton.addEventListener('click', function(){
    const cityInput = document.querySelector(".cityInput");
    let city = cityInput.value;
    getGeo(city)
     
});

