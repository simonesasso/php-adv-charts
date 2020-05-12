$( document ).ready(function() {
console.log(level);
if (level == "guest") {
  ajaxFatturato();
}else if (level == "employee") {
  ajaxFatturato();
  ajaxFatturatoAgent();
}else if (level == "clevel") {
  ajaxFatturato();
  ajaxFatturatoAgent();
  ajaxFatturatoTeam();
}

// CHIAMATA AJAX PER GRAFICO LINE FATTURATO
function ajaxFatturato() {
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
}

// CHIAMATA AJAX PER GRAFICO PIE FATTURATOBYAGENT
function ajaxFatturatoAgent() {
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
}

// CHIAMATA AJAX PER GRAFICO CON TRE LINEE / TEAM
function ajaxFatturatoTeam() {
  $.ajax({
 url: "serverteam.php",
 method: "GET",

 success: function (data,stato) {
 console.log(data);

   generaGraficoTreLinee(data);



},
error: function (richiesta,stato,errore) {
  alert("Si è verificato un errore", errore);
}
})
}


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

function generaGraficoTreLinee(data) {
  var ctx = $('#myChart2');
  var myChart = new Chart(ctx, {
     type: data[0]["tipo"],
     data: {
         labels: ['Gennaio', 'Febbraio', 'Marzo', 'Aprile', 'Maggio', 'Giugno', 'Luglio', 'Agosto', 'Settembre', 'Ottobre', 'Novembre', 'Dicembre'],
         datasets: [{
             label: data[0]["labels"][0],
             data: data[0]["data"][0],
             borderColor: [
                 'rgba(255, 0, 0, 0.8)',
               ]


           },
           {
             label:  data[0]["labels"][1],
             data: data[0]["data"][1],
             borderColor: [
                 'rgba(0, 255, 0, 0.3)',
               ]
           },
           {
             label:  data[0]["labels"][2],
             data: data[0]["data"][2],
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
