let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let winnerMsg = document.querySelector("#msg");
let newGameBtn = document.querySelector("#new-game-btn");
let msgContainer = document.querySelector(".msg-container");

let turnPlayerO = true;

let winningCombonations = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    // console.log("Boxx was clicked");
    // box.innerHTML = "X";
    if (turnPlayerO) {
      box.innerHTML = "O";
      turnPlayerO = false;
    } else {
      box.innerHTML = "X";
      turnPlayerO = true;
    }
    box.disabled = true;
    checkWinnder();
  });
});

function checkWinnder() {
  for (let winningPattern of winningCombonations) {
    //   console.log(
    //     boxes[winningPattern[0]],
    //     boxes[winningPattern[1]],
    //     boxes[winningPattern[2]]
    //   );
    //   console.log(winningPattern[0], winningPattern[1], winningPattern[2]);

    let positionOneValue = boxes[winningPattern[0]].innerText;
    let positionTwoValue = boxes[winningPattern[1]].innerText;
    let positionThreeValue = boxes[winningPattern[2]].innerText;
    //   console.log(positionOneValue);
    //   console.log(positionTwoValue);
    //   console.log(positionThreeValue);

    if (
      positionOneValue != "" &&
      positionTwoValue != "" &&
      positionThreeValue != ""
    ) {
      if (
        positionOneValue === positionTwoValue &&
        positionTwoValue === positionThreeValue
      ) {
        // console.log(`WINNER================== ${positionOneValue}`);
        displayWinnerMsg(positionOneValue);
        break;
      }
    }
  }
}

function displayWinnerMsg(winner) {
  winnerMsg.innerText = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disabledBoxes();
}

function disabledBoxes() {
  for (box of boxes) {
    box.disabled = true;
  }
}

function enableBoxes() {
  for (box of boxes) {
    box.disabled = false;
    box.innerHTML = "";
  }
}

function resetGame() {
  turnPlayerO = true;
  enableBoxes();
  //   msgContainer.classList.remove("hide");
  msgContainer.classList.add("hide");
}

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
