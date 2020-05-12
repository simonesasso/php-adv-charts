<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="style.css">
    <title></title>
  </head>
  <body>
    <h1>test</h1>
  <?php

$tipoUtente = $_GET["level"];
   if ($tipoUtente == "guest") {
     echo '<div class="container">';
      echo '<canvas id="myChart"></canvas>';
     echo '</div>';
   }elseif ($tipoUtente == "employee") {
     echo '<div class="container">';
      echo '<canvas id="myChart"></canvas>';
     echo '</div>';

     echo '<div class="container">';
      echo '<canvas id="myChart1"></canvas>';
     echo '</div>';
   }elseif ($tipoUtente == "clevel") {
     echo '<div class="container">';
      echo '<canvas id="myChart"></canvas>';
     echo '</div>';

     echo '<div class="container">';
      echo '<canvas id="myChart1"></canvas>';
     echo '</div>';

      echo '<div class="container">';
       echo '<canvas id="myChart2"></canvas>';
      echo '</div>';

   }
   session_start();
   $_SESSION['utente'] = $tipoUtente;
   ?>





    <!-- chatjs -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    <!-- jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="main.js" charset="utf-8"></script>
  </body>
</html>
