<?php

    // echo 'hello';
    $servername = "sql309.infinityfree.com";
    $username = "if0_37877661";
    $password = "mO2iI7KR3K47"; // Update with your database password
    $dbname = "if0_37877661_product";

  $conn=new mysqli($servername, $username, $password, $dbname);

  if($conn->connect_error)
      die("Connection error ");
    // else
    //     echo "Connection success";
  $username=$_POST['username'];
  $password=$_POST['password']; 
  
    $sql="select *from admin_detail where username=? and password=?";
    $stmt=$conn->prepare($sql);
    $stmt->bind_param('ss',$username,$password);
    $stmt->execute();
    $stmt->store_result();
    // echo $username;
    // echo $password;
    if($stmt->num_rows()>0)
    {
        // echo ('welcome');
       echo json_encode(['success'=>'Welcome']);
        exit;
    }
    else{
            // echo("sorry");
       echo json_encode(['error'=>'Sorry Contact Admin ....']);
        exit;
    }
    $stmt->close();
    $conn->close();
?>