<?php
    
    header('Content-Type: application/json');

    $servername = "sql309.infinityfree.com";
    $username = "if0_37877661";
    $password = "mO2iI7KR3K47"; // Update with your database password
    $dbname = "if0_37877661_product";

    $conn=new mysqli($servername, $username, $password, $dbname);
    if($_SERVER['REQUEST_METHOD']=='POST' )
    {
        $product_id = $_POST['product-id-for-update'];
        if (isset($_FILES['image-for-update']) && $_FILES['image-for-update']['error'] == UPLOAD_ERR_OK) 
        {
            $image_data = file_get_contents($_FILES['image-for-update']['tmp_name']); 
            $image_type = $_FILES['image-for-update']['type']; 
            if (strpos($image_type, 'image') === false) 
            { 
                echo json_encode(['error'=> 'Only Images are Allowed!!!']);
                die("Only Image Files are Allowed!!!!"); 
            } 
            $sql = "UPDATE product_detail SET product_image=? WHERE product_id=?";
            $stmt = $conn->prepare($sql); 
//            $null = null; 
 //           $stmt->bind_param('bi', $null, $product_id); 
                $stmt->bind_param('si',$image_data,$product_id);
// $stmt->send_long_data(0, $image_data); 
           // error_log($image_data); 
            if ($stmt->execute() === false) 
            { 
                echo json_encode(['error' => 'Oops']); 
            } 
            else 
            { 
                echo json_encode(['success' => 'Image updated Successfully!!!']); 
            } 
            exit(); 
        } 
        else
         { 
            echo json_encode(['error' => 'No file uploaded or upload error.']); 
        }   
     }
?>
<!-- 
if($_SERVER['REQUEST_METHOD']=='POST' )
    {
        $product_id = $_POST['product-id-for-update'];
        if (isset($_FILES['image-for-update']) && $_FILES['image-for-update']['error'] == UPLOAD_ERR_OK) {
        $image_data=file_get_contents($_FILES['image-for-update']['tmp_name']);
        $image_type=$_FILES['image-for-update']['type'];
        if(strpos($image_type,'image')===false)
            die("Only Image Files are Allowed!!!!");
            $sql="update product_detail set product_image=? where product_id=?";
            $stmt=$conn->prepare($sql);
            $null=null;
            $stmt->bind_param('bi',$null,$product_id);
            $stmt->send_long_data(0,$image_data);
            error_log($image_data);
            if($stmt->execute()===false)
                echo json_encode(['error'=>'Oops']);
            else
                echo json_encode(['success'=> 'Image updated Successfully!!!']);
            exit();
        }
        else { echo json_encode(['error' => 'No file uploaded or upload error.']); }
    } -->