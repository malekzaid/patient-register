<?php
require ('connection.php');
// echo $_POST['name'];
        // echo json_encode($_POST['charge']);


if(isset($_POST['name'])){
    $id=$_POST['id'];
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

    $query1 = "update patient set PatientName='$name',PatientAge=$age,PatientGender='$gen',PatientContact='$ph',PatientImage='$img',PatientAddress='$add',PatientPincode=$pin,PatientCity='$city' where id= $id ";
      $result=$conn->query($query1) ;
    if($result){

        // echo $_POST['Name'];
        $query2="update  patientDisease set ChronicIllness='$chronic',ChronicMedicine='$chMed',PatientHistory='$history',PatientFHistory='$family',PresentIllness='$illness',AppointmentDate='$appointment',CaseCharge=$charge,Doctor='$doctor' where PatientId=$id";
        $result2= $conn->query($query2);
        if($result2){
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
    echo 0;
}


?>