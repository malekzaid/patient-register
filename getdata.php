<?php
require ('connection.php');
if(isset($_POST['id'])){
    $query = "SELECT * FROM patientData.patient as p1 inner join  patientData.patientDisease as p2 on p1.id=p2.PatientId where p1.id=".$_POST['id'];
    $result=$conn->query($query) ;
    $row=$result->fetch_assoc();
    echo json_encode($row);
}
else{

    $query = "SELECT * FROM patientData.patient as p1 inner join  patientData.patientDisease as p2 on p1.id=p2.PatientId";
    $result=$conn->query($query) ;
    // $count=0;   
    if($result){
        $data=array();
        while($row=$result->fetch_assoc()){
            array_push($data,$row);
            
        }
        echo json_encode($data);
    }
}

?>