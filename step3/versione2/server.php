<?php

 require 'database.php';

 header('Content-Type: application/json');

 $level = $_GET["livello"];
 $myArr1 = [];
 $myArr2 = [];
 $myArr3 = [];

 $myArr1["tipo"] = $graphs["fatturato"]["type"];
 $myArr1["data"] = $graphs["fatturato"]["data"];

 $myArr2["tipo"] = $graphs["fatturato_by_agent"]["type"];
 $labelsagent = [];
 $dataagent = [];
 foreach ($graphs["fatturato_by_agent"]["data"] as $key => $value) {
   $labelsagent[] = $key;
   $dataagent[] = $value;
 }
 $myArr2["data"] = $dataagent;
 $myArr2["labels"] = $labelsagent;

 $myArr3["tipo"] = $graphs["team_efficiency"]["type"];
 $labelsteam = [];
 $datateam= [];
 foreach ($graphs["team_efficiency"]["data"] as $key => $value) {
   $labelsteam[] = $key;
   $datateam[] = $value;
 }
 $myArr3["data"] = $datateam;
 $myArr3["labels"] = $labelsteam;

 $myArrTot = [];
 if ($level == "guest") {
   $myArrTot["fatturato"] = $myArr1;
 }elseif ($level == "employee") {
   $myArrTot["fatturato"] = $myArr1;
   $myArrTot["fatturatoAgent"] = $myArr2;
 }elseif ($level == "clevel") {
   $myArrTot["fatturato"] = $myArr1;
   $myArrTot["fatturatoAgent"] = $myArr2;
   $myArrTot["team"] = $myArr3;
 }





 echo json_encode($myArrTot);

?>
