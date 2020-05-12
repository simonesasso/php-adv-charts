$( document ).ready(function() {

  $.ajax({
 url: "serverfatturato.php",
 method: "GET",

 success: function (data,stato) {
 console.log(data);
 generaGraficoLine(data);

},
 error: function (richiesta,stato,errore) {
  alert("Si è verificato un errore", errore);
 }
})

$.ajax({
 url: "serverfatagent.php",
 method: "GET",

 success: function (data,stato) {
  console.log(data);

  generaGraficoPie(data);
},
 error: function (richiesta,stato,errore) {
  alert("Si è verificato un errore", errore);
 }
})

function generaGraficoLine(data) {
  var ctx = $('#myChart');
  var myChart = new Chart(ctx, {
     type: data[0]["tipo"],
     data: {
         labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
         datasets: [{
             label: 'Vendite',
             data: data[0]["data"],
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
     type: data[0]["tipo"],
     data: {
         labels: data[0]["labels"],
         datasets: [{
             label: 'Vendite',
             data: data[0]["data"],
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
})
