<?php
header("Access-Control-Allow-Origin: *");

include "db_config.php";

$sql = "SELECT * FROM hotels";
$result = $conn->query($sql);

$hotels = array();

while($row = $result->fetch_assoc()) {
    $hotels[] = $row;
}

echo json_encode($hotels);
?>