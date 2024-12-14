<?php
// Set the content type to JSON
header('Content-Type: application/json');

// Database connection details
$servername = "sql309.infinityfree.com";
$username = "if0_37877661";
$password = "mO2iI7KR3K47";
$dbname = "if0_37877661_product";

// Establish database connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    echo json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]);
    exit;
}

// Process POST requests
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        echo json_encode(['error' => 'Invalid JSON input']);
        exit;
    }

    $product_id = $data['product_id'] ?? '';
    $product_availability = $data['product_availability'] ?? '';

    if ($product_id && $product_availability!=='') {
        // Update product availability in the database
        $sql = "UPDATE product_detail SET available = ? WHERE product_id = ?";
        $stmt = $conn->prepare($sql);

        if ($stmt === false) {
            echo json_encode(['error' => 'Failed to prepare statement']);
            exit;
        }

        $stmt->bind_param('ii', $product_availability, $product_id);

        if ($stmt->execute() === false) {
            echo json_encode(['error' => 'Failed to execute query: ' . $stmt->error]);
            exit;
        }

        // Close the statement
        $stmt->close();

        echo json_encode(['success' => 'Product Availability is Updated']);
        exit;
    } else {
        echo json_encode(['error' => 'Missing product_id or product_availability']);
        exit;
    }
} else {
    echo json_encode(['error' => 'Invalid request method']);
    exit;
}

// Close the connection
$conn->close();
?>
