<?php

 require 'database.php';

 header('Content-Type: application/json');


 $myarr = [];



     $myarr["fatturato"]["tipo"] = $graphs["fatturato"]["type"];
     $myarr["fatturato"]["data"] = $graphs["fatturato"]["data"];



 echo json_encode($myarr);

?>
