<?php

 require 'database.php';

 header('Content-Type: application/json');


 $myArr = [];



     $myArr["fatturato_by_agent"]["tipo"] = $graphs["fatturato_by_agent"]["type"];
     $labels = [];
     $data = [];

     foreach ($graphs["fatturato_by_agent"]["data"] as $key => $value) {
       $labels[] = $key;
       $data[] = $value;

     }
     $myArr["fatturato_by_agent"]["labels"] = $labels;
     $myArr["fatturato_by_agent"]["data"] = $data;





 echo json_encode($myArr);

?>
