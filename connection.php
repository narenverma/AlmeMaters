<?php

// date_default_timezone_set("UTC");

// ## localhost
// $hostname = "localhost";
// $username = "root";
// $password = "";
// $db="almematter";


// ## hybclient server
$hostname = "localhost";
$username = "u886461235_am";
$password = "Pass#@123456";
$db = "u886461235_am";

// ## server
// $hostname = "";
// $username = "";
// $password = "";
// $db = "";

$charset = 'utf8mb4';
$options = [
    PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES   => false,
];
$dsn = "mysql:host=$hostname;dbname=$db;charset=$charset";
try 
{
    $pdo = new PDO($dsn, $username, $password, $options);
    // $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // echo "Connected successfully";
} 
catch (PDOException $e) 
{
    throw new PDOException($e->getMessage(), (int)$e->getCode());
    // echo "Connection failed: " . $e->getMessage();
}

function sanitize_data($data)
{
    $data = trim($data);
    $data = stripslashes($data);
    $data = strip_tags($data);
    $data = htmlspecialchars($data);
    return $data;
}

?>