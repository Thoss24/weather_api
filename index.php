<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css" ></link>
    <title>Document</title>
</head>
<body>

    <main>
    <div id="header">
    <h1>Weather Api</h1>
    
    <div>
        <form action="" id="get-weather-form">
            <label for="location_val">Enter your Location</label>
            <input type="text" id="location_val">
            <button type="submit" id="get-weather">Get Weather</button>
        </form>
    </div>
    </div>
    <div class="results-container">
    <h2>Results</h2>
    <div id="results">
    </div>
    </div>

    <div class="results-container">
    <h2>History</h2>
    <div id="results-history">
    </div>
    </div>
    </main>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="./requests.js"></script>
</body>
</html>