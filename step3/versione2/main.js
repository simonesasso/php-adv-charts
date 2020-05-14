$( document ).ready(function() {
console.log(level);
  $.ajax({
 url: "server.php",
 method: "GET",
 data: {livello: level},
 success: function (data,stato) {
 console.log(data);
 if (data["fatturato"]) {
   generaGraficoLine(data["fatturato"]);
 }
 if (data["fatturatoAgent"]) {

   generaGraficoPie(data["fatturatoAgent"]);
 }
 if (data["team"]) {

   generaGraficoTreLinee(data["team"]);
 }


},
error: function (richiesta,stato,errore) {
  alert("Si è verificato un errore", errore);
}
})

function generaGraficoLine(data) {
  var ctx = $('#myChart');
  var myChart = new Chart(ctx, {
     type: data["tipo"],
     data: {
         labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
         datasets: [{
             label: 'Vendite',
             data: data["data"],
             backgroundColor: [
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)'
             ],
             borderColor: [
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)'
             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero: true
                 }
             }]
         }
     }
 });
}

function generaGraficoPie(data) {
  var ctx = $('#myChart1');
  var myChart = new Chart(ctx, {
     type: data["tipo"],
     data: {
         labels: data["labels"],
         datasets: [{
             label: 'Vendite',
             data: data["data"],
             backgroundColor: [
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)',
                 'rgba(0, 255, 0, 0.8)'

             ],
             borderColor: [
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)',
                 'rgba(255, 0, 0, 0.8)'

             ],
             borderWidth: 1
         }]
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero: true
                 }
             }]
         }
     }
 });
}

function generaGraficoTreLinee(data) {
  var ctx = $('#myChart2');
  var myChart = new Chart(ctx, {
     type: data["tipo"],
     data: {
         labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
         datasets: [{
             label: data["labels"][0],
             data: data["data"][0],
             borderColor: [
                 'rgba(255, 0, 0, 0.8)',
               ]


           },
           {
             label:  data["labels"][1],
             data: data["data"][1],
             borderColor: [
                 'rgba(0, 255, 0, 0.3)',
               ]
           },
           {
             label:  data["labels"][2],
             data: data["data"][2],
             borderColor: [
                 'rgba(0, 0, 255, 0.3)',
               ]
           }
         ]
     },
     options: {
         scales: {
             yAxes: [{
                 ticks: {
                     beginAtZero: true
                 }
             }]
         }
     }
 });
}


})
