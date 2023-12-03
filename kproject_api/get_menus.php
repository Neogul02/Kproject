<?php


$host = 'localhost';
$db   = 'kproject';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$connection = new mysqli($host, $user, $pass, $db);

if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
}

// 메뉴 DB 가져오기 (GET 요청)
if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $result = $connection->query("SELECT * FROM `menu` ORDER BY `kind` ASC");
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
