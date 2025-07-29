const h1 = document.createElement("h1");
h1.textContent = "My Counter:";
const nombres = document.createElement("p");
nombres.textContent = "0";

document.body.appendChild(h1);
document.body.appendChild(nombres);

const bouton1 = document.createElement("button");
bouton1.textContent = "Incrémenter+";

const bouton2 = document.createElement("button");
bouton2.textContent = "Décrémenter-";

const reset = document.createElement("button");
reset.textContent = "Reset";

const nouveauParagraphe = document.createElement("p");
nouveauParagraphe.textContent = "\u221e";

document.body.appendChild(bouton1);
document.body.appendChild(bouton2);
document.body.appendChild(reset);
document.body.appendChild(nouveauParagraphe);

let nombresValue = 0;

bouton1.addEventListener("click", function () {
  nombresValue++;
  nombres.textContent = nombresValue;
});
bouton2.addEventListener("click", function () {
  nombresValue--;
  nombres.textContent = nombresValue;
});
reset.addEventListener("click", function () {
  nombresValue = 0;
  nombres.textContent = nombresValue;
});
