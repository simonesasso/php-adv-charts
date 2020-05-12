<?php

 require 'database.php';

 header('Content-Type: application/json');


 $myArr = [];
 $i = 1;
 foreach ($graphs as $key => $val) {
   if ($key=="fatturato") {
     $myArr[0]["grafico"] = "fatturato";
     $myArr[0]["tipo"] = $val["type"];
     $myArr[0]["data"] = $val["data"];
   }elseif ($key!="fatturato") {
     $myArr[$i]["grafico"] = $key;
     $myArr[$i]["tipo"] = $val["type"];
     $labels = [];
     $data = [];
     $arr = $graphs[$key][data];
     foreach ($arr as $key => $value) {
       $labels[] = $key;
       $data[] = $value;

     }
     $myArr[$i]["labels"] = $labels;
     $myArr[$i]["data"] = $data;
     $i++;
   }
   }



 echo json_encode($myArr);

?>
