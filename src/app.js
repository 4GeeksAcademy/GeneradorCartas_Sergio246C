import './style.css';
window.onload = function () {
  const palos = ["♦", "♥", "♠", "♣"]
  const num = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]

  const generarCartas = () => {
    const randomPalos = palos[Math.floor(Math.random() * palos.length)];
    const randomNum = num[Math.floor(Math.random() * num.length)];

    const isRed = randomPalos === "♥" || randomPalos === "♦";

    document.querySelector(".top-suit").innerHTML = randomPalos
    document.querySelector(".number").innerHTML = randomNum
    document.querySelector(".bottom-suit").innerHTML = randomPalos
    if (isRed) {
      document.querySelector(".card").classList.add("red")
    }

  }
};



