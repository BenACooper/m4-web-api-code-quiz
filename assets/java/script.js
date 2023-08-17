// - Click start button to start time and receive question.
// - When answering a question be presented with another question.
// - If answer is incorrect time is subracted from clock.
// - Game ends when all questions are answered or timer reaches 0.
// - Once game is over I can save my initials and score.

//initFunction
//startTimerFunction//questionFunction
//checkAnswerFunction
//questionFunction
//repeat
//endQuizFunction

//Declare global varibles.
var timerEl = document.getElementById("timer");
var viewScoresEl = document.getElementById("viewHighscores");
var introContainerEl = document.getElementById("introContainer");
var quizContainerEl = document.getElementById("quizContainer");
var outroContainerEl = document.getElementById("outroContainer");
var scoreContainerEl = document.getElementById("scoreContainer");
var scoreList = document.getElementById("scoresList")
var scoresArray = [];
var clearButtonEl = document.getElementById("clearScores");
var startButtonEl = document.getElementById("startButton");
var submitButtonEl = document.getElementById("submitButton");
var goBackButtonEl = document.getElementById("goBack");
var clarButton = document.getElementById("clearButton");
var userInitials;
var timeRemaining = 60;
var pagesIndex = 0;
var score;
var pagesArray = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: 2,
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: 3,
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables",
    choices: ["commas", "curly brackets", "quotes", "parantheses"],
    correctAnswer: 2,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to be debugger is:",
    choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: 3,
  },
];

//Declare fuction to start the quiz. Invoked when user presses startButton.
function init() {
  timeRemaining = 60;
  pagesIndex = 0;
  introContainerEl.setAttribute("class", "hide");
  startTimer();
  displayQuiz();
  nextPage(pagesIndex);
}
startButtonEl.addEventListener("click", init);

//Declare function to start the countdown.
function startTimer() {
  timeInterval = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = "Time: " + timeRemaining;
    if (timeRemaining === 0) {
      clearInterval(timeInterval);
    }
  }, 1000);

  return timeInterval;
}

// Declare functions to hide the current container and display the next one.
//Invoked when the startButton is pushed.
function displayQuiz() {
  introContainerEl.setAttribute("class", "hide");
  quizContainerEl.setAttribute("class", null);
}

// Invoked when choiceButton is clicked, and the end of pagesArray has been reached..
function displayOutro() {
  quizContainerEl.setAttribute("class", "hide");
  outroContainerEl.setAttribute("class", null);
  clearInterval(timeInterval);
  score = timeRemaining;
  var scoreSpan = document.getElementById("score");
  scoreSpan.textContent = score;
}

// Invoked when the submitButton is clicked.
function displayScores() {
  saveInitials() 
  outroContainerEl.setAttribute("class", "hide");
  scoreContainerEl.setAttribute("class", null);
  var liEl = document.createElement("li")
  liEl.textContent = userInitials + "-" + score;
  scoreList.appendChild(liEl);
}
submitButtonEl.addEventListener("click", displayScores)

// Invoked when the goBack button is clicked.
function displayIntro() {
  scoreContainerEl.setAttribute("class", "hide");
  introContainerEl.setAttribute("class", null);
  timeRemaining = 60;
  timerEl.textContent = "Time: " + timeRemaining;
}
goBackButtonEl.addEventListener("click", displayIntro)


//Invoked when the startQuiz button is clicked, or when a choiceButton is clicked while the pagesIndex is less than the pagesArray.
function nextPage(pagesIndex) {
  var quizQuestions = document.getElementById("quizQuestions");
  var choicesContainerEl = document.getElementById("choicesContainer");

  if (pagesIndex < pagesArray.length) {
    quizQuestions.textContent = pagesArray[pagesIndex].question;
    choicesContainerEl.innerHTML = "";
    createQuizButtons(pagesArray[pagesIndex].choices);
  } else {
    displayOutro();
  }
}

//Declare a function to create buttons from the choices array. Invoked by the nextPage function.
function createQuizButtons(choices) {
  var choicesContainerEl = document.getElementById("choicesContainer");

  for (var i = 0; i < choices.length; i++) {
    var choiceButton = document.createElement("button");
    choiceButton.textContent = choices[i];
    choiceButton.setAttribute("data-index", i);

    choiceButton.addEventListener("click", function (event) {
      var choiceIndex = parseInt(event.target.getAttribute("data-index"));
      checkAnswer(choiceIndex, pagesArray[pagesIndex].correctAnswer);
    });
    choicesContainerEl.appendChild(choiceButton);
  }
  return choicesContainerEl;
}

//Declare a function to check if the clicked button equates to the correct answer, and reduce the time if it doesn't.
function checkAnswer(choiceIndex, correctAnswer) {
  if (choiceIndex !== correctAnswer) {
    console.log("Incorrect!");
    timeRemaining -= 10;
  } else if (choiceIndex === correctAnswer) {
    console.log("Correct!");
  }
  pagesIndex++;
  nextPage(pagesIndex);
}

//Declare a function to save user initials locally. Invoke when score page is displayed.
function saveInitials() {
  var initialsInputEl = document.getElementById("initialsInput");
  userInitials = initialsInputEl.value;
  localStorage.setItem("userInitials", userInitials);
  localStorage.setItem("userSCore", score)
}

//Declare a function to display the initals and score.


//Declare a function to clear the scores by removing the <li> elements from the scoresList.
function clearScores() {
  var liElements = scoreList.getElementsByTagName("li");

  for (var i = liElements.length - 1; i >= 0; i--) {
    scoreList.removeChild(liElements[i]);
  }
}
clearButtonEl.addEventListener("click", clearScores)