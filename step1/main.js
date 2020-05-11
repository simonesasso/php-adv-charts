$( document ).ready(function() {

  $.ajax({
 url: "server.php",
 method: "GET",

 success: function (data,stato) {
  var ctx = $('#myChart');
  var myChart = new Chart(ctx, {
     type: 'line',
     data: {
         labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
         datasets: [{
             label: 'Vendite',
             data: data,
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





},
error: function (richiesta,stato,errore) {
 alert("Si è verificato un errore", errore);
}
})
})
