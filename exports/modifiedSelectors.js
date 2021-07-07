export const modifiedSelectors = () => {
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
