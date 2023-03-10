<?php
require ('connection.php');

    $query = "SELECT * FROM patientData.patient as p1 inner join  patientData.patientDisease as p2 on p1.id=p2.PatientId";
    $result=$conn->query($query) ;
    
    if($result){
        $data=array();
        while($row=$result->fetch_assoc()){
            $data+=array($row);
        }
        echo json_encode($data);
    }



?>