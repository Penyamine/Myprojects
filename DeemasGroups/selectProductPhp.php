<?php
    $servername = "sql309.infinityfree.com";
    $username = "if0_37877661";
    $password = "mO2iI7KR3K47"; // Update with your database password
    $dbname = "if0_37877661_product";
    
    $conn=new mysqli($servername, $username, $password, $dbname);
    if ($conn->connect_error) { 
        die("Connection failed: " . $conn->connect_error); 
    }
    // else
    //     echo "success";
    $sql = "SELECT * FROM product_detail"; 
    $result = $conn->query($sql); 
    $data = array(); 
    if ($result->num_rows > 0) { 
        while($row = $result->fetch_assoc()) { 
            $row['product_image']=base64_encode($row['product_image']);
            $data[] = $row; 
        } 
    }
     echo json_encode($data);
     $conn->close();
?>