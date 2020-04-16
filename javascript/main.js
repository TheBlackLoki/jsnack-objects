// Creare un oggetto palla che abbia le seguenti proprietà. Nome = palla
// Peso = 10
// Attraverso un prompt dare la possibilità all’utente di modificare il peso della palla.


var oggetto = {
  "nome" : "palla",
  "peso" : 10
};
console.log(oggetto);

$(".fraseFinale").append("<p>la " + oggetto.nome + " inizialmente pesa: " + oggetto.peso + " kg</p>")

// input utente per cambiare peso lo prendiamo da input ()invece che prompt
// e poi stampiamo l’oggetto in pagina, quindi non grezzo tramite log in console, ma output “carino” in pagina
$("#invia").click(function () {
  oggetto.peso = $("#pesoPalla").val()
  console.log(oggetto.peso);
  if ($("#pesoPalla").val() > 0) {
    $(".fraseFinale").append("<p>la " + oggetto.nome + " ora pesa: " + oggetto.peso + " kg</p>")
  }else {
    alert("scrivi un numero positivo")
    $("#pesoPalla").val("")
  }
})
// Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore.


var bicicletta =
[
  {
    "nome" : "Pantani",
    "peso" : 30
  },
  {
    "nome" : "Cipollini",
    "peso" : 22
  },
  {
    "nome" : "Bartali",
    "peso" : 60
  }
]
var controllo = bicicletta[0].peso + 1
console.log(controllo);
for (var i = 0; i < bicicletta.length; i++) {
  var pesoFinale = bicicletta[i].peso
  if (controllo > pesoFinale) {
    controllo = pesoFinale
    var oggettoWinner = bicicletta[i]
    console.log(bicicletta[i]);
  }
  console.log(oggettoWinner);
}
$(".biciclette").append("<p>" + oggettoWinner.nome + "</p>")
