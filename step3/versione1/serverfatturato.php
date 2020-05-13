<?php

 require 'database.php';

 header('Content-Type: application/json');


 $myArr = [];

     $myArr["fatturato"] = $graphs["fatturato"];
     



 echo json_encode($myArr);

?>
