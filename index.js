//  Page run delay

setTimeout(reroll, 3000); // auto-reroll after 3 second

// Event Listener

document.querySelector("h1").addEventListener("click", function () {
  document.querySelector("h1").innerText = "Here Comes the Rerrooollllll!";
  setTimeout(reroll, 3000);
}); // auto-reroll after 3 second

// Rerrol Function

function reroll() {
  let randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  let randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
  let randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
  let image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);
  // Path: index.js
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;
  let randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // refactored randomDiceImage + randomImageSource in 1 line
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2); // refactored image1 redundant; querySelectorAll + setAttribute in 1 line 🚩
  // Path: index.js
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
    document.querySelectorAll("p")[0].style.color = "#ff0000"; // method 1 to select p1
  } else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
    document.getElementsByTagName("p")[1].style.color = "#ff0000"; // method 2 to select p2
  } else {
    document.querySelector("h1").innerText = "Draw!";
  }
}
