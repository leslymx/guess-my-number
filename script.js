import { modifiedSelectors } from './exports/modifiedSelectors.js';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let scoreInitial = 20;
let highscore = 0;


document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (!guess) {
    modifiedSelectors().displayMessage("⛔ No number!");

  } else if (guess === secretNumber) {
    modifiedSelectors().displayMessage("🎉 Correct Number!");
    document.querySelector(".number").textContent = secretNumber;
    modifiedSelectors().changeBackgroundColor("#60b347");
    document.querySelector(".number").style.width = "30rem";

    if (scoreInitial > highscore) {
      highscore = scoreInitial;
      document.querySelector(".highscore").textContent = highscore;
    }

  } else if (guess !== secretNumber) {
    if (scoreInitial > 1) {
      modifiedSelectors().displayMessage(
        guess > secretNumber ? "📈 Too High!" : "📉 Too Low!"
      );
      scoreInitial--;
      modifiedSelectors().modifiedScore(scoreInitial);

    } else {
      modifiedSelectors().displayMessage("😭 You lost the game!");
      modifiedSelectors().modifiedScore(0);
      modifiedSelectors().changeBackgroundColor("rgb(206, 56, 56)");
    }
  }
});

// restart values
document.querySelector(".again").addEventListener("click", function () {
  scoreInitial = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  modifiedSelectors().displayMessage("Start guessing...");
  modifiedSelectors().modifiedScore(scoreInitial);
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  modifiedSelectors().changeBackgroundColor("#222");
  document.querySelector(".number").style.width = "15rem";
});
