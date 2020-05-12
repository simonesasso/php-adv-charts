<?php

 require 'database.php';

 header('Content-Type: application/json');

 // $test = [["grafico" =>"","labels" => [], "data" => []],["grafico" =>"","labels" => [], "data" => []]];
 $test = [];
 $i = 1;
 foreach ($graphs as $key => $val) {
   if ($key=="fatturato") {
     $test[0]["grafico"] = "fatturato";
     $test[0]["tipo"] = $val["type"];
     $test[0]["data"] = $val["data"];
   }elseif ($key!="fatturato") {
     $test[$i]["grafico"] = $key;
     $test[$i]["tipo"] = $val["type"];
     $labels = [];
     $data = [];
     $arr = $graphs[$key][data];
     foreach ($arr as $key => $value) {
       $labels[] = $key;
       $data[] = $value;

     }
     $test[$i]["labels"] = $labels;
     $test[$i]["data"] = $data;
     $i++;
   }
   }


 echo json_encode($test);

?>
