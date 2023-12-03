<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: DELETE"); // DELETE 메소드 허용
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

// 삭제할 전화번호의 주문을 받아옴
if(isset($_GET['phone_number'])) {
    $phone_number = $_GET['phone_number'];

    // 전화번호에 해당하는 모든 주문 삭제
    $deleteQuery = "DELETE FROM `cart` WHERE `phone_number` = '$phone_number'";
    if ($connection->query($deleteQuery) === TRUE) {
        echo "주문이 삭제되었습니다.";
    } else {
        // 서버 측 에러 로그 추가
        echo "Error deleting orders by phone number: " . $connection->error;
    }
} else {
    // 전화번호가 제공되지 않았거나 유효하지 않은 경우 처리
    header("HTTP/1.1 400 Bad Request");
    echo "Invalid phone number";
}

$connection->close();
?>
