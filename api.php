<?php

header('Content-Type: application/json');
header('Access-Control-Allow-Methods: PATCH, POST, GET, OPTIONS, DELETE');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: Content-Type');

$dbHost = "localhost";
$dbUser = "root";
$dbPass = "";
$dbName = "user_management_db";

try {
    $pdo = new PDO("mysql:host=$dbHost;dbname=$dbName;charset=utf8", $dbUser, $dbPass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Error: " .$e->getMessage());
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response(200);
    exit();

} else if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    $id = $_GET['id'];

    $stmt = $pdo->prepare('SELECT * FROM weather_data WHERE location = :id');
    $stmt->bindValue(':id', $id);
    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    
    if (count($results) === 1) {
        return;
    } else {
        echo json_encode($results); 
    }

} else if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $request_data = json_decode(file_get_contents('php://input'), true);

    $location = $request_data['location'];
    $temp = $request_data['temp'];
    $icon = $request_data['icon'];
    $description = $request_data['description'];

    $stmt = $pdo->prepare('INSERT INTO weather_data (location, temp, icon, description) VALUES (:location, :temp, :icon, :description)');
    $stmt->bindValue(':location', $location);
    $stmt->bindValue(':temp', $temp);
    $stmt->bindValue(':icon', $icon);
    $stmt->bindValue(':description', $description);

    $stmt->execute();
}
else if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {

    $request_data = json_decode(file_get_contents('php://input'), true);

    echo $request_data;

    $id = $request_data;

    $stmt = $pdo->prepare('DELETE FROM weather_data WHERE id = :id');
    $stmt->bindValue(':id', $id);
    $stmt->execute();

} 
else {
    http_response(405);

    $data = array('error', 'Method not allowed');

    echo json_encode($data);
}

?>