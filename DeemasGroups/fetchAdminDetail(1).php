<?php

    header('Content-Type: text/html');

    $servername = "sql309.infinityfree.com";
    $username = "if0_37877661";
    $password = "mO2iI7KR3K47"; // Update with your database password
    $dbname = "if0_37877661_product";
    
      $conn=new mysqli($servername, $username, $password, $dbname);
    
    if($conn->connect_error)
        die("Connection error ");
    
    $sql="select phone from admin_detail ";

    $result = $conn->query($sql); 
    $data = array(); 
    if ($result->num_rows > 0) {
             // Output data of each row 
        while($row = $result->fetch_assoc()) 
        { 
            $data[] = $row; 
        } 
        echo json_encode($data);
    }        
?>