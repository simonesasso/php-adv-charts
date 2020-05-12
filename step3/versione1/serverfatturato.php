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
   }
   }


 echo json_encode($myArr);

?>
