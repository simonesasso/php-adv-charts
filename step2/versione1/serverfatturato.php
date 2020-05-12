<?php

 require 'database.php';

 header('Content-Type: application/json');


 $myarr = [];
 
 foreach ($graphs as $key => $val) {
   if ($key=="fatturato") {
     $myarr[0]["grafico"] = "fatturato";
     $myarr[0]["tipo"] = $val["type"];
     $myarr[0]["data"] = $val["data"];
   }
   }


 echo json_encode($myarr);

?>
