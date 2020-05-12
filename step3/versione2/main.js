$( document ).ready(function() {

  $.ajax({
 url: "server.php",
 method: "GET",

 success: function (data,stato) {
 console.log(data);
 if (data.length==3) {
   generaGraficoLine(data);
   generaGraficoPie(data);
   generaGraficoTreLinee(data);
 }else if (data.length==2) {
   generaGraficoLine(data);
   generaGraficoPie(data);
 }else if (data.length==1) {
   generaGraficoLine(data);
 }

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
     type: data[1]["tipo"],
     data: {
         labels: data[1]["labels"],
         datasets: [{
             label: 'Vendite',
             data: data[1]["data"],
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
     type: data[2]["tipo"],
     data: {
         labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
         datasets: [{
             label: data[2]["labels"][0],
             data: data[2]["data"][0],
             borderColor: [
                 'rgba(255, 0, 0, 0.8)',
               ]


           },
           {
             label:  data[2]["labels"][1],
             data: data[2]["data"][1],
             borderColor: [
                 'rgba(0, 255, 0, 0.3)',
               ]
           },
           {
             label:  data[2]["labels"][2],
             data: data[2]["data"][2],
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
