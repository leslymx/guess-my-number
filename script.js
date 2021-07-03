"use strict";

let secretNumber = Math.floor(Math.random() * 20) + 1;
let scoreInitial = 20;
let highscore = 0;

const mainFunctions = () => {
  const displayMessage = (message) =>
    (document.querySelector(".message").textContent = message);

  const changeBackgroundColor = (color) =>
    (document.querySelector("body").style.backgroundColor = color);

  const modifiedScore = (score) =>
    (document.querySelector(".score").textContent = score);

  return {
    displayMessage,
    changeBackgroundColor,
    modifiedScore,
  };
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  // when there is no input
  if (!guess) {
    mainFunctions().displayMessage("⛔ No number!");

    // when player wins
  } else if (guess === secretNumber) {
    mainFunctions().displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    mainFunctions().changeBackgroundColor("#60b347");
    document.querySelector(".number").style.width = "30rem";

    if (scoreInitial > highscore) {
      highscore = scoreInitial;
      document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (scoreInitial > 1) {
      mainFunctions().displayMessage(
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!"
      );
      scoreInitial--;
      mainFunctions().modifiedScore(scoreInitial);

      // when lost the game
    } else {
      mainFunctions().displayMessage("😭 You lost the game!");
      mainFunctions().modifiedScore(0);
      mainFunctions().changeBackgroundColor("rgb(206, 56, 56)");
    }
  }
});

// restart values
document.querySelector(".again").addEventListener("click", function () {
  scoreInitial = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  mainFunctions().displayMessage("Start guessing...");
  mainFunctions().modifiedScore(scoreInitial);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  mainFunctions().changeBackgroundColor("#222");
  document.querySelector(".number").style.width = "15rem";
});
