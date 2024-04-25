const num = Math.floor(Math.random() * 20);
console.log("num", num);
let score = 20;
document.querySelector(".message").textContent = "Start guessing...";
function check() {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (num === guess) {
    document.querySelector("body").style.backgroundColor =
      "rgb(88, 145, 3)";
    document.querySelector(".message").textContent = "Correct Number!";
    document.querySelector(".number").textContent = num;
  } else {
    if (guess > num) {
      document.querySelector(".message").textContent =
        "Number is too high!";
    } else if (guess < num) {
      document.querySelector(".message").textContent =
        "Number is too low!";
    }  else {
      document.querySelector(".message").textContent =
        "Not Correct Number!";
    }
    score--;
    document.querySelector(".score").textContent = score;
  }
  if (score < 1) {
    document.querySelector(".message").textContent = "Game over!";
    document.querySelector(".check").disabled = true;
  }
}

console.log(check());

