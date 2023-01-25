let apiKey = "86d582dd5437f2bf03bda3254505ee23";
let fetchButton = document.querySelector("#searchBtn");
const currentDiv = document.querySelector('#currentWeather')
// querySelect allows selecting both class name & ID

//user submit from input box. take the string to plug into geocoding api then run our api function with the geo coding long/lat pulled into above to run the city 
//create placeholder value that passes "cityValue". whatever passes through cityValue will transfer to URL
function getGeo(cityValue) {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityValue}&appid=${apiKey}&units=imperial`;
    //retrieve city name the user inputs
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            currentWeather(data)
           // console.log(data)
        })
}

//current conditions: weather, temp, humidity, wind speed
function currentWeather(currentData) {
    console.log(currentData)
    let currentHTML = `
    <h2>${currentData.city.name}</h2>
    <img src="http://openweathermap.org/img/wn/${currentData.list[0].weather[0].icon}@2x.png" alt="">
    <p>Temp: ${currentData.list[0].main.temp} °F</p>
    <p>Humidity:  ${currentData.list[0].main.humidity} %</p>
    <p>Wind Speed: ${currentData.list[0].wind.speed} mps</p>
    `
    currentDiv.innerHTML = currentHTML
}

//future conditions (forecast): weather, temp, humidity, wind speed

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

