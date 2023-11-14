<?php

header("Access-Control-Allow-Origin: *"); // 모든 도메인에서 접근을 허용합니다.
header("Content-Type: application/json; charset=UTF-8");

$host = 'localhost';
$db   = 'kproject';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$connection = new mysqli($host, $user, $pass, $db);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// 카트 cart 데이터 가져오기 (GET 요청)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $connection->query("SELECT * FROM `cart` ORDER BY `id` ASC");
    $menus = array();

    while($row = $result->fetch_assoc()) {
        $menus[] = $row;
    }

    header("Access-Control-Allow-Origin: *");
    header('Content-Type: application/json');
    echo json_encode($menus);
} 
$connection->close();
?>
