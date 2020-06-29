<html>
<body>

<?php
date_default_timezone_set("Asia/Kolkata");
$dates=date("d-M-y");
$name=$_POST["name"];
$email=$_POST["email"];
$num=$_POST["num"];
$subject=$_POST["subject"];
$message=$_POST["message"];


$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "dbname";
$con=mysqli_connect($servername, $username, $password, $dbname);
//$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if (mysqli_connect_errno())
{
echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

$sql = "INSERT INTO ajay_contact (dates, name, email, conatct, subject, message)
VALUES ('$dates','$name', '$email', '$num', '$subject', '$message')";
mysqli_query($con,$sql);

$msg= <<<MESSAG
Hi $name,
Thank you for contacting me.
I will get to you soon.

Thanking you
Ajay Kumar
MESSAG;

$subjectas="Ajay will contact you soon.";
$msg2= <<<MESSAG2
Hi Ajay Kumar,
  Someone has contacted you with the following details.
  Date: $dates
  Name: $name
  Email-ID: $email
  Number: $num
  Subject: $subject
  Message: $message

Ajay Kumar
MESSAG2;

$subject2="New contact from ".$name;
$email2="ajaykumarcse.cec@gmail.com";

mail($email, $subjectas, $msg);
mail($email2, $subject2, $msg2);

echo '<script type="text/javascript">'; 
echo 'alert("Sent Successfully");'; 
echo 'window.location.href = "index.html";';
echo '</script>';
$conn->close();

?>

</body>
</html>
