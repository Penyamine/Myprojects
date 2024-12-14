<?php
header('Content-Type: application/json');


$servername = "sql309.infinityfree.com";
$username = "if0_37877661";
$password = "mO2iI7KR3K47"; // Update with your database password
$dbname = "if0_37877661_product";

$conn = new mysqli($servername, $username, $password, $dbname);

//echo ("good connection");
if ($conn->connect_error) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "Database connection failed"]);
    exit;
}

$product_id = $_GET['product_id'] ?? '';
if ($product_id==='') {
    http_response_code(400); // Bad Request
    echo json_encode(["error" => "Product ID is required"]);
    exit;
}

///echo "Product ID received: " . $product_id . "<br>";
//error_log("Good Connection...");
$sql = "SELECT product_name, product_description, product_image FROM product_detail WHERE product_id = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param('s', $product_id);
$stmt->execute();
if ($stmt->execute() === false) {
    http_response_code(500); // Internal Server Error
    echo json_encode(["error" => "Query execution failed"]);
    exit;
}

$result = $stmt->get_result();
//error_log("Number of rows returned: " . $result->num_rows);
if ($result->num_rows > 0) {
     $data = $result->fetch_assoc();

     if (isset($data['product_image'])) {
        error_log($data['product_image']);
        $data['product_image'] = base64_encode($data['product_image']);
    }
    echo json_encode($data); // Send the product details as a JSON response
} else {
    http_response_code(404); // Not Found
    echo json_encode(["error" => "Product not found"]);
}


$stmt->close();
$conn->close();
?>