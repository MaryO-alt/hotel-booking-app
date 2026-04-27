<?php
$conn = new mysqli("localhost", "root", "", "hotel_ db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "Connection successful!";
?>