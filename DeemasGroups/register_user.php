<?php
    $servername = "sql309.infinityfree.com";
    $username = "if0_37877661";
    $password = "mO2iI7KR3K47"; // Update with your database password
    $dbname = "if0_37877661_product";

    $conn=new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error)
        die("Connection error ");

    $username=$_POST['username'];
    $email=$_POST['email'];
    $phone=$_POST['phone'];
    $password=$_POST['password']; 
    
    $sql="select *from user_detail where email=? or phone_number=?";
    $stmt=$conn->prepare($sql);
    $stmt->bind_param('ss',$email,$phone);
    $stmt->execute();
    $stmt->store_result();
    error_log($stmt->num_rows);
    if($stmt->num_rows>0)
    {
        echo json_encode(['error'=>'This Email or this Phone Number  Exists.... So Give Unique Phone Number and Email...']);
        exit;
    }

    $sql="insert into user_detail(name,email,phone_number,password) values(?,?,?,?)";
    $stmt=$conn->prepare($sql);
    $stmt->bind_param('ssss',$username,$email,$phone,$password);
    if($stmt->execute())
        echo json_encode(['success'=>'Welcome For being a part of this Organization ']);
    else
        echo json_encode(['Error'=>'Some Issue At this Moment....']);

        $stmt->close();
?>