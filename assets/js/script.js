

// let apiKey = "95d015b55c7f192344f9c89c2f0a415b";
// //apikey issue (using Daniel's lol)

//my api key: 86d582dd5437f2bf03bda3254505ee23
let apiKey = "86d582dd5437f2bf03bda3254505ee23";

function getApi() {
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=40.71&lon=-74.00&appid=${apiKey}`;
    // var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=86d582dd5437f2bf03bda3254505ee23';
    //back ticks to use template literal 
    //lat long -- figure out how to retrieve the long/lat for a user's input 
  
    //1 get data from user and translate to data using the function below
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) { //data is the response.json
        // for (var i = 0; i < data.length; i++) {
        //   var listItem = document.createElement('li'); //creates HTML list element (empty)
        //   listItem.textContent = data[i].html_url; //set HTML list item to the html URL
        //   repoList.appendChild(listItem); //appending it to HTML element called repoList
        // }
        var cityName = document.createElement('h1');
        cityName.textContent = data.city.name;
        document.getElementById("citynameheader").appendChild(cityName);
        console.log(data);
        //2. dynamically append 
        //create loop for 5 day forecast
      });
  }
  

  //need loop for local storage recent searches 
//   fetchButton.addEventListener('click', getApi);
getApi()
  
//user submit from input box. take the string to plug into geo coding api then run our api function with the geo coding long/lat pulled into above to run the city 