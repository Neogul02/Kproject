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

// 메뉴 데이터 가져오기 (GET 요청)
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
// 장바구니 데이터 저장하기 (POST 요청)
else if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"));

    if (isset($data->cartItems)) {
        foreach ($data->cartItems as $item) {
            // 장바구니 데이터를 `cartTable`에 저장 (cartTable은 예시 테이블 이름이며 실제 테이블 이름으로 변경 필요)
            $stmt = $connection->prepare("INSERT INTO cartTable (itemId, quantity) VALUES (?, ?)");
            $stmt->bind_param("si", $item->id, $item->quantity); // 각 아이템은 id와 quantity를 가진다고 가정
            $stmt->execute();
        }
        echo json_encode(['message' => 'Success']);
    } else {
        echo json_encode(['message' => 'No data received']);
    }
}

$connection->close();
?>
