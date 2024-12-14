<?php

    header('Content-Type: application/json');

    $servername = "sql309.infinityfree.com";
    $username = "if0_37877661";
    $password = "mO2iI7KR3K47"; // Update with your database password
    $dbname = "if0_37877661_product";
    
    $conn=new mysqli($servername, $username, $password, $dbname);

    
    if ($conn->connect_error) {
        http_response_code(500); // Internal Server Error
        echo json_encode(["error" => "Database connection failed"]);
        exit;
    }

    function updateProductName($conn,$product_id,$product_name)
    {
        $sql="update product_detail set product_name=? where  product_id={$product_id} ";
        $stmt=$conn->prepare($sql);
        $stmt->bind_param('s',$product_name);
        $stmt->execute();

        if($stmt->execute()===false)
        {
            http_response_code(500); // Internal Server Error
            echo json_encode(["error" => "Query execution failed"]);
            exit;    
        }
        else{
          echo json_encode(['success' => 'Product Name Updated Successfully']); 
           $stmt->close();
          exit();
        }
    }
    function updateProductDesc($conn,$product_id,$product_desc)
    {
        $sql="update product_detail set product_description=? where  product_id={$product_id} ";
        $stmt=$conn->prepare($sql);
        $stmt->bind_param('s',$product_desc);
        $stmt->execute();

        if($stmt->execute()===false)
        {
            http_response_code(500); // Internal Server Error
            echo json_encode(["error" => "Query execution failed"]);
            exit;    
        }

        $stmt->close();
    }
    function updateProductAvailability($conn,$product_id,$product_availability)
    {
        // $sql="select available from product_detail where product_id={$product_id}";
        // if(available==$product_availability)
        // {
        //     echo json_encode(["error"=>"No Need to Update.....Already Product Availability is there What u Want..."]);
        //     exit();
        // }
        // else
        // {
            $sql="update product_detail set available=? where product_id={$product_id}";
            $stmt=$conn->prepare($sql);
            $stmt->bind_param('i',$product_availability);
            $stmt->execute();   
            
            if($stmt->execute()===false)
            {
                http_response_code(500); // Internal Server Error
                echo json_encode(["error" => "Query execution failed"]);
                exit;  
            }
        // }
    }


    if ($_SERVER['REQUEST_METHOD'] == 'POST') 
    {

        $data = json_decode(file_get_contents('php://input'), true); 
        $product_id = $data['product_id'] ?? ''; 
        if (json_last_error() !== JSON_ERROR_NONE) { 
            echo json_encode(['error' => 'Invalid JSON input']);
             exit; 
            }
        $product_name = $data['product_name'] ?? '';
        $product_desc=$data['product_description']??''; 
        $product_availability=$data['product_availability']??'';
        error_log($product_id);
        if($product_id && $product_availability)
        {
//            updateProductAvailability($conn,$product_id,$product_availability);
            echo json_encode(['success'=>'Product Availability is Updated....']);
            exit();
        }
        else if ($product_id && $product_name) 
        { 
            updateProductName($conn, $product_id, $product_name); 
            echo json_encode(['success' => 'Product Name Updated Successfully']); 
            exit();
        } 
        else if($product_id && $product_desc)
        {
            updateProductDesc($conn,$product_id,$product_desc);
            echo json_encode(['success'=> 'Product Desc updated Successfully']);
            exit();
        }
    }  
?>