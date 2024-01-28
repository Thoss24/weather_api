document.addEventListener("DOMContentLoaded", () => {
  const getWeather = () => {

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

        // look in database for existing weather searches for current location & display those searches in addition to most recent search
        // put previous searches in a "History" section and most recent search above that section
      },
    });
  };

  $('#get-weather').on('click', (e) => {
    e.preventDefault()
    getWeather()
  });

  const getPreviousSearches = (location) => {
    
    const resultsHistory = $('#results-history')[0]

    $.ajax({
        url: `http://localhost/weather_api/api.php?id=${location}`,
        method: 'GET',
        dataType: 'text',
        success: (result) => {
            console.log(result)
            resultsHistory.append(result)
        }
    })
  };

  const addSearchToDb = (search) => {

    const results = $('#results')[0]

    $.ajax({
        url: `http://localhost/weather_api/api.php`,
        method: 'POST',
        dataType: 'text',
        data: JSON.stringify(search),
        success: () => {
            getPreviousSearches(search.location)
            results.append(search)
        }
    })
  };

});
