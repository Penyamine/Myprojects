<?php
    $toEmail = "mailtopenyamine@gmail.com";
       $subject="Hello man";

       $headers=array(
           "MIME-Version"=>"1.0",
           "Content-Type"=>"text/html;charset=UTF-8",
           "From"=>"mailtopenyamine@gmail.com",
           "Reply-To"=>"mailtopenyamine@gmail.com"
       );

         $message="Hello How are ?";
         if (mail($toEmail, $subject, $message, $headers)) {
    echo "Email sent successfully!";
} else {
    error_reporting(E_ALL);
    echo "Failed to send email. Check error logs or mail configuration.";
}


// //   echo"Hello";
// // if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     // Retrieve form data
// //    $fromEmail = $_POST['from_mail'];
//     $fromEmail="mailtopenyamine@gmail.com";
//     // $subject = $_POST['subject'];
// //    $message = $_POST['message'];
//     $message="Hello How are ?";   
//     $subject="Hello man";
//     $toEmail = "mailtopenyamine@gmail.com"; // Replace with the recipient's email address

//     // Headers
//     $headers = "From: " . $fromEmail . "\r\n";
//     $headers .= "Reply-To: " . $fromEmail . "\r\n";
//     $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

//     // Send email
//     if (mail($toEmail, $subject, $message, $headers)) {
//         //echo "Email sent successfully!";
// //        echo json_encode(['success','Good mail']);
//     } else {
//         echo "Failed to send email.";
//   //          echo json_encode(['error','bad mail']);
//     // }
// }

?>


