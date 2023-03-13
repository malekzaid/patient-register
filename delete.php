<?php
require ('connection.php');

if(isset($_POST['id'])){
    $query = "Delete FROM patient where id =".$_POST['id'];
    $result=$conn->query($query) ;
    if($result){
        echo 1;
    }
    else{
        echo json_encode($query);
    } 
    
}
else{
     echo 0;
}


?>