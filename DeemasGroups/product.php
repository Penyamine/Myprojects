<?php

    header('Content-Type: application/json');

    header("Access-Control-Allow-Origin: *"); // Allow all domains
header("Access-Control-Allow-Methods: POST, GET, OPTIONS"); // Allow methods
header("Access-Control-Allow-Headers: Content-Type, Authorization"); // Allow headers


//     ini_set('log_errors', 1);
// ini_set('error_log', '/opt/lampp/logs/php_error_log');
// error_reporting(E_ALL);
// error_log("This is a forced error log entry for testing.");

$servername = "sql309.infinityfree.com";
$username = "if0_37877661";
$password = "mO2iI7KR3K47"; // Update with your database password
$dbname = "if0_37877661_product";

    $conn=new mysqli($servername, $username, $password, $dbname);

    if($conn->connect_error)
        die("Connection error ");
        error_log("oops");
//           echo("Good connection");
    if($_SERVER['REQUEST_METHOD']=='POST' )
    {
        $product_id=$_POST['product-id-for-add'];
        $product_name=$_POST['product-name-for-add'];
        $product_desc=$_POST['product-desc-for-add'];

        $image_data=file_get_contents($_FILES['product-image-for-add']['tmp_name']);
        $image_type=$_FILES['product-image-for-add']['type'];
        if(strpos($image_type,'image')===false)
            die("Only Image Files are Allowed!!!!");

        $stmt=$conn->prepare("select * from product_detail where product_id=?");
        $stmt->bind_param('i',$product_id);
        $stmt->execute();
        $stmt->store_result();
        if($stmt->num_rows>0)
        {
            echo json_encode(['error'=>"This Product Id Exists.... So Give Unique One..."]);
            exit;
        }
        // else{
        //     // echo("good");
        //     echo json_encode(['success'=>'good']);
        // }
        $stmt=$conn->prepare("insert into product_detail(product_id,product_name,
        product_description,product_image) values(?,?,?,?)");
        $stmt->bind_param("issb",$product_id,$product_name,$product_desc,$null);
        $stmt->send_long_data(3, $image_data);

//         ini_set('display_errors', 1);
// ini_set('log_errors', 1);
// error_log("An error occurred");

        if($stmt->execute())
            echo json_encode(['success'=> 'New Product Added Succesfully']);

//        echo "New Record Created Successfully";
        else
            echo json_encode(['error'=> 'Some Issue To Add This Product at this Moment!!!']);

            $stmt->close();
    }
?>