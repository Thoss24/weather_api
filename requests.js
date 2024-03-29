document.addEventListener("DOMContentLoaded", () => {
  
  $('#get-weather').on('click', (e) => { // search city handler
    e.preventDefault()
    getWeather()
  });
  
  const getWeather = () => { // GET data from feed

    const location = $("#location_val").val()
    const key = '4d3ec4866c4270e5095e1511ffb1bd78';

    $.ajax({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}&units=metric`,
      error: (error) => {

        const results = $('#results')[0];

        // remove any existing error messages
        while(results.lastElementChild) {
          results.removeChild(results.lastElementChild)
        }

        if (error.status === 404) {
          const cityNotFound = $(`<p>${error.status} Oops! No matching location found. Please try again!</p>`);
          results.append(cityNotFound[0])
        }
        if (error.status === 401) {
          const invalidKey = $(`<p>${error.status} Oops! Looks like you have an invalid api key! Make sure it's the correct key!</p>`)
          results.append(invalidKey[0])
        }
      },
      success: (result) => {

        // add search results to database
        const search = { 
            location: result.name,
            temp: result.main.temp,
            icon: result.weather[0].icon,
            description: result.weather[0].description
        };
        addSearchToDb(search)

        console.log(typeof result.weather[0].description)

        // if (result.weather[0].description.includes("rain")) {
        //   $('#header').css("background-image", "url(" + "http://localhost/weather_api/images/rain.jpg" + ")")
        // }
        // if (result.weather[0].description.includes("clear")) {
        //   $('#header').css("background-image", "url(" + "http://localhost/weather_api/images/clear_sky.jpg" + ")")
        // }
        // if (result.weather[0].description.includes("overcast")) {
        //   $('#header').css("background-image", "url(" + "http://localhost/weather_api/images/overcast.jpg" + ")")
        // }
        // if (result.weather[0].description.includes("mist")) {
        //   $('#header').css("background-image", "url(" + "http://localhost/weather_api/images/misty.jpg" + ")")
        // }
        // if (result.weather[0].description.includes("broken")) {
        //   $('#header').css("background-image", "url(" + "http://localhost/weather_api/images/broken_clouds.jpg" + ")")
        // }
        // if (result.weather[0].description.includes("clouds") && !result.weather[0].description.includes("overcast")) {
        //   $('#header').css("background-image", "url(" + "http://localhost/weather_api/images/clouds.jpg" + ")")
        // }

      },
    });
  };

  const getPreviousSearches = (location) => { // retrieve previous searches of current search from db
    
    const resultsHistory = $('#results-history')[0];
    
    while(resultsHistory.lastElementChild) {
      resultsHistory.removeChild(resultsHistory.lastElementChild)
    }

    $.ajax({
        url: `http://localhost/weather_api/api.php?id=${location}`,
        method: 'GET',
        dataType: "json",
        error: (error) => {
          console.log(error)
        },
        success: (result) => {

          const resultsExcludingCurrentSearch = result.slice(0, result.length-1) // exclude most recent search

          resultsExcludingCurrentSearch.map((search) => {
            const shell = $(`<div class="flex flex-col justify-center items-center shadow-black shadow-md rounded-xl p-1">
            <div>
              <img src="https://openweathermap.org/img/wn/${search.icon}.png">
             <p>${search.temp} &deg c</p>
            </div>
            <div>
              <p>${search.description} in ${search.location}</p>
              <p>Date: ${search.time}</p>
            </div>
            </div>`);
  
            resultsHistory.append(shell[0])
          })
        }
    })
  };

  const addSearchToDb = (search) => { // add current search to db

    const results = $('#results')[0];
    
    while(results.lastElementChild) {
      results.removeChild(results.lastElementChild)
    }

    $.ajax({
        url: `http://localhost/weather_api/api.php`,
        method: 'POST',
        dataType: 'text',
        data: JSON.stringify(search),
        error: (error) => {
          console.log(error)
        },
        success: () => {
          getPreviousSearches(search.location)
            //console.log(search)
            const shell = $(`<div class="flex flex-col justify-center items-center shadow-black shadow-md rounded-xl p-1">
            <div>
              <img src="https://openweathermap.org/img/wn/${search.icon}.png">
             <p>${search.temp} &deg c</p>
            </div>
            <div>
              <p>${search.description} in ${search.location}</p>
            </div>
            </div>`);

            results.append(shell[0])
        }
    })
  };

});
