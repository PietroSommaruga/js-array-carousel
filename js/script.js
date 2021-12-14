// Creo la lista di titoli

const title = ["Sciopero", "Sanità", "Storia", "Cronaca", "Gossip", "News", "no-vax"];

// Creo la lista di testi da associare ai titoli
const text = ["Sciopero generale del 16 dicembre, ecco i settori che si fermeranno e quelli esentati dalla protesta",
  "Scatta l'obbligo vaccinale per forze dell'ordine e soccorso: la circolare del Viminale con regole e sanzioni. Cosa vale per la scuola",
  "Scoperta in Liguria la più antica tomba di neonato in Europa | I paleontologi: Era una bimba, l'abbiamo chiamata Neve",
  "Muore a 15 anni dopo il pranzo col sushi: la procura apre un'inchiesta, due indagati",
  "Il caso Peloton: lo spot per rimediare al disastro cyclette nel sequel di Sex and the city",
  "Furti seriali di carte bancomat: la tecnica della banda che ha derubato 12 anziani",
  "Covid, muore operatrice sanitaria No Vax dell'ospedale. Diceva: Il virus? Spero di prendermelo Video", ];

let currentIndex = 0;

// creo le variabili
const documentTitleHtml = document.querySelector(".title");
const documentTextHtml = document.querySelector(".text");

const arrowRight = document.getElementById("arrow-right");
const arrowLeft = document.getElementById("arrow-left");

documentTitleHtml.innerHTML = title[currentIndex];
documentTextHtml.innerHTML = text[currentIndex];


// cambio colore di sfondo
const colors = ['blue', 'red', 'green', 'black', 'orange', 'yellow', 'purple',];
const boxColored = document.querySelector ('.box');
boxColored.style.backgroundColor = colors[currentIndex];

// utilizzo la funzione click per scorrere tra un titolo/testo verso destra
arrowRight.addEventListener("click", function () {
  currentIndex++;
//   Se il currentIndex finisce la lista ricomincia da capo
  if (currentIndex > title.length - 1 && currentIndex > text.length - 1) {
    currentIndex = 0;
  }
//   cambio sfondo
  boxColored.style.background = colors[currentIndex];

//   stampo titolo/testo
  documentTitleHtml.innerHTML = title[currentIndex];
  documentTextHtml.innerHTML = text[currentIndex];
});


// utilizzo la funzione click per scorrere tra un titolo/testo verso sinistra
arrowLeft.addEventListener("click", function () {
  currentIndex--;
// Se il currentIndex arriva all'inzio della lista ricomincio dall'ultimo elemento

  if (currentIndex < 0) {
    currentIndex = title.length - 1;
    currentIndex = text.length - 1;
  }
//   cambio sfondo
  boxColored.style.background = colors[currentIndex];

//  stampo titolo/testo
  documentTitleHtml.innerHTML = title[currentIndex];
  documentTextHtml.innerHTML = text[currentIndex];
});