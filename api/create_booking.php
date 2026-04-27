<?php
header("Access-Control-Allow-Origin: *");

include "db_config.php";

$user_id = $_POST['user_id'];
$room_id = $_POST['room_id'];
$check_in = $_POST['check_in'];
$check_out = $_POST['check_out'];

$sql = "INSERT INTO bookings (user_id, room_id, check_in, check_out)
VALUES ('$user_id', '$room_id', '$check_in', '$check_out')";

if ($conn->query($sql) === TRUE) {
    echo "Booking created successfully";
} else {
    echo "Error: " . $conn->error;
}
?>