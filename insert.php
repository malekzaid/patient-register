<?php
require ('connection.php');
// echo $_POST['name'];

if(isset($_POST['name'])){
    $name=$_POST['name'];
    $age=$_POST['age'];
    $gen=$_POST['gender'];
    $ph=$_POST['contact'];
    $img=$_POST['image'];
    $add=$_POST['address'];
    $pin=$_POST['pincode'];
    $city=$_POST['city'];
    $chronic=$_POST['chronic'];
    $chMed=$_POST['chMed'];
    $history=$_POST['history'];
    $family=$_POST['family'];
    $appointment=$_POST['appointment'];
    $illness=$_POST['illness'];
    $doctor=$_POST['doctor'];
    $charge=$_POST['charge'];

    $a=array($name,$age,$gen,$ph,$img,$add,$pin,$city,$chronic,$chMed,$history,$family,$appointment,$illness,$doctor,$charge);
    // header("Content-Type: application/json");
           


    // echo "kkkkk";
    $query1 = "insert into patient(PatientName,PatientAge,PatientGender,PatientContact,PatientImage,PatientAddress,PatientPincode,PatientCity) values('$name',$age,'$gen','$ph','$img','$add',$pin,'$city')";
    $result=$conn->query($query1) ;
    if($result){

        // echo $_POST['Name'];
        $query2="insert into patientDisease(PatientId,ChronicIllness,ChronicMedicine,PatientHistory,PatientFHistory,PresentIllness,AppointmentDate,CaseCharge,Doctor) values($conn->insert_id,'$chronic','$chMed','$history','$family','$illness','$appointment',$charge,'$doctor')";
        $result2= $conn->query($query2);
        if($result){
            // echo json_encode($a);
            echo 1;   
        }
        else{
        //  echo $query2;
         // echo JSON_ENCODE($query2);
            echo json_encode($query2);
        }

    } 
    else{
        echo json_encode($query1);
        
    }
}
else{
    // var_dump($_POST['data']);
    // echo "<br>";
    echo json_encode("hello");

}
?>