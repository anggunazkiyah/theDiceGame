// left dice
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceNumber = `dice${randomNumber1}.png`;
document.querySelector(".img1").setAttribute("src", randomDiceNumber);

// right dice
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomRightNumber = `dice${randomNumber2}.png`;
document.querySelector(".img2").setAttribute("src", randomRightNumber);

// deciding the winner
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
} else {
  document.querySelector("h1").innerHTML = "It's a Draw!";
}
