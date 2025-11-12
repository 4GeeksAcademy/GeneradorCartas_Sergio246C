import './style.css';
const palos = ["♦", "♥", "♠", "♣"];
const num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

const generarCartas = () => {
  const randomPalos = palos[Math.floor(Math.random() * palos.length)];
  const randomNum = num[Math.floor(Math.random() * num.length)];

  if (randomPalos === "♥" || randomPalos === "♦") {
    document.querySelector(".card").classList.add("cardRed")
  }

  document.querySelector(".top-suit").innerHTML = randomPalos
  document.querySelector(".number").innerHTML = randomNum
  document.querySelector(".bottom-suit").innerHTML = randomPalos
}

window.onload = function () {
  generarCartas()
};



