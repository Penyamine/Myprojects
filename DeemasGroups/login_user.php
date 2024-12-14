<?php
    $servername = "sql309.infinityfree.com";
    $username = "if0_37877661";
    $password = "mO2iI7KR3K47"; // Update with your database password
    $dbname = "if0_37877661_product";

  $conn=new mysqli($servername, $username, $password, $dbname);

  if($conn->connect_error)
      die("Connection error ");

  $email=$_POST['email'];
  $password=$_POST['password']; 
  
    $sql="select *from user_detail where email=? and password=?";
    $stmt=$conn->prepare($sql);
    $stmt->bind_param('ss',$email,$password);
    $stmt->execute();
    $stmt->store_result();
    if($stmt->num_rows()>0)
    {
        echo json_encode(['success'=>'Welcome']);
        exit;
    }
    else{
        echo json_encode(['error'=>'If U have not Registered yet Please Register....']);
        exit;
    }
?>