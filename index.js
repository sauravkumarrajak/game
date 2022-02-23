let computerGuess;
let userGuess = [];
let userWarning = document.getElementById("warning");
let userNumberUpdate = document.getElementById("inputBox");
let audio = new Audio("./audio/game.wav");

const init = () => {
  computerGuess = Math.floor(Math.random() * 100 + 1);
  document.getElementById("newGameButton").style.display = "none";
  document.getElementById("gameArea").style.display = "none";
};

// Start New Game

const startNewGame = () => {
  document.getElementById("newGameButton").style.display = "inline";
  userNumberUpdate.setAttribute('disabled',true);
}

// Reload the home page of our game

const newGameBegin = () => {
  audio.play();
  window.location.reload();
}

const startGame = () => {
  document.getElementById("welcomeScreen").style.display = "none";
  document.getElementById("gameArea").style.display = "block";
};


// Main logic of our app



const compareGuess = () => {
  audio.play();
  const userNumber = Number(document.getElementById("inputBox").value);
  userGuess = [...userGuess, userNumber];
  document.getElementById("guesses").innerHTML = userGuess;

  // Chek the number is high or low
  if (userGuess.length < maxGuess) {
    if (userNumber > computerGuess) {
      userWarning.innerHTML = "Your guess is too high 😲";
      userNumberUpdate.value = "";
    } else if (userNumber < computerGuess) {
      userWarning.innerHTML = "Your guess is too low 😞";
      userNumberUpdate.value = "";
    } else {
      userWarning.innerHTML = "It's Correct 😊";
      userNumberUpdate.value = "";
      startNewGame();
    }
  } else {
    if (userNumber > computerGuess) {
      userWarning.innerHTML = `You Loose !! Correct Number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else if (userNumber < computerGuess) {
      userWarning.innerHTML = `You Loose !! Correct Number was ${computerGuess}`;
      userNumberUpdate.value = "";
      startNewGame();
    } else {
      userWarning.innerHTML = "It's Correct 😊";
      userNumberUpdate.value = "";
      startNewGame();
    }
  }

  document.getElementById("attempts").innerHTML = userGuess.length;

  // Check if the attempts is more or less
};

const easyMode = () => {
  audio.play();
  maxGuess = 10;
  startGame();
};

const hardMode = () => {
  audio.play();
  maxGuess = 5;
  startGame();
};


