"use strict";

const secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);

  // when there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";

    // when guess is to high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = score;

      // when lost the game
    } else {
      document.querySelector(".message").textContent = "😭 You lost the game!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "rgb(206, 56, 56)";
    }

    // when guess is to low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = score;

      // when lost the game
    } else {
      document.querySelector(".message").textContent = "😭 You lost the game!";
      document.querySelector(".score").textContent = 0;

      document.querySelector("body").style.backgroundColor = "rgb(206, 56, 56)";
    }
  }
});