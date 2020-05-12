<?php

 require 'database.php';

 header('Content-Type: application/json');


 $myArr = [];

 foreach ($graphs as $key => $val) {
   if ($key!="fatturato") {
     $myArr[0]["grafico"] = $key;
     $myArr[0]["tipo"] = $val["type"];
     $labels = [];
     $data = [];
     $arr = $graphs[$key][data];
     foreach ($arr as $key => $value) {
       $labels[] = $key;
       $data[] = $value;

     }
     $myArr[0]["labels"] = $labels;
     $myArr[0]["data"] = $data;
     
   }
   }


 echo json_encode($myArr);

?>
