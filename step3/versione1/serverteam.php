<?php

 require 'database.php';

 header('Content-Type: application/json');


 $myArr = [];


     $myArr["team_efficiency"]["tipo"] = $graphs["team_efficiency"]["type"];

     $labels = [];
     $data = [];
     $arr = $graphs["team_efficiency"]["data"];
     foreach ($arr as $key => $value) {
       $labels[] = $key;
       $data[] = $value;

     }
     $myArr["team_efficiency"]["labels"] = $labels;
     $myArr["team_efficiency"]["data"] = $data;



 echo json_encode($myArr);

?>
