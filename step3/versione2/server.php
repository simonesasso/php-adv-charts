<?php

 require 'database.php';
 session_start();
 $utente = $_SESSION['utente'];


 header('Content-Type: application/json');
require 'index.php';
 if ($utente=="clevel") {
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
 }elseif ($utente=="employee") {
   $myArr = [];

   foreach ($graphs as $key => $val) {
     if ($key=="fatturato") {
       $myArr[0]["grafico"] = "fatturato";
       $myArr[0]["tipo"] = $val["type"];
       $myArr[0]["data"] = $val["data"];
     }elseif ($key!="fatturato") {
       $myArr[1]["grafico"] = $key;
       $myArr[1]["tipo"] = $val["type"];
       $labels = [];
       $data = [];
       $arr = $graphs[$key][data];
       foreach ($arr as $key => $value) {
         $labels[] = $key;
         $data[] = $value;

       }
       $myArr[1]["labels"] = $labels;
       $myArr[1]["data"] = $data;

     }
     }
 }elseif ($utente=="guest") {
   $myArr = [];

   foreach ($graphs as $key => $val) {
     if ($key=="fatturato") {
       $myArr[0]["grafico"] = "fatturato";
       $myArr[0]["tipo"] = $val["type"];
       $myArr[0]["data"] = $val["data"];
     }
 }
}


 echo json_encode($myArr);

?>
