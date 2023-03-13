<?php
$server='localhost';
$user='root';
$pass='password';
$db='patientData';

$conn= new mysqli($server,$user,$pass,$db);
if(!$conn){
    die("Failed:    ".mysqli_connect_errorno());
}

?>