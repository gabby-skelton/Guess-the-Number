function check() {
  var randomNum = Math.floor(Math.random() * 11);
  var input = parseInt(document.getElementById("guess").value);
  var message = document.getElementById("message");
  if(input == randomNum) {
    message.innerHTML = "Congrats! You guessed the right number.";
    message.style.color = "green";
  }
  else {
    message.innerHTML = "The correct number is " + randomNum + ". Try again!";
    message.style.color = "red";
  }
}
