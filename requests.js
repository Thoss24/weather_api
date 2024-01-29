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
      success: (result) => {

        // add handler if city not found - 404 & if api key is invalid - 401

        // add search results to database
        const search = { 
            location: result.name,
            temp: result.main.temp,
            icon: result.weather[0].icon,
            description: result.weather[0].description
        };
        addSearchToDb(search)

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
        success: (result) => {

          const resultsExcludingCurrentSearch = result.slice(0, result.length-1) // exclude most recent search

          resultsExcludingCurrentSearch.map((search) => {
            const shell = $(`<div class="history-item-shell">
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
        success: () => {
          getPreviousSearches(search.location)
            //console.log(search)
            const shell = $(`<div class="search-item-shell">
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
