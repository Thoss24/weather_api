<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- <link rel="stylesheet" type="text/css" href="index.css" ></link> -->
    <link href="./output.css" rel="stylesheet"></link>
    <title>Document</title>
</head>
<body>

    <main>
    <div class="flex justify-center flex-col items-center gap-y-2" id="header">
    <h1>Weather Api</h1>
    
    <div class="w-full flex justify-center">
        <form action="" id="get-weather-form" class="flex flex-col w-3/4 items-center justify-center gap-y-3">
            <label for="location_val">Enter your Location</label>
            <input type="text" id="location_val" class="outline outline-1 outline-offset-1">
            <button class="rounded-xl p-0.5 outline outline-1 outline-offset-1" type="submit" id="get-weather">Get Weather</button>
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