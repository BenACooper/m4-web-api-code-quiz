// - Click start button to start time and receive question.
// - When answering a question be presented with another question.
// - If answer is incorrect time is subracted from clock.
// - Game ends when all questions are answered or timer reaches 0.
// - Once game is over I can save my initials and score.

//Create the questions: Declare variable for the displayed quiz question. There are multiple questions, so they will be contained in an array to choose from randomlly. There are multiple answers to each question, so each item in the array must also be an object containing its own array.
var questionsArray = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: 3,
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    Answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 3,
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: 4,
  },
  {
    question:
      "String values must be enclosed within _____ when being assigned to variables",
    Answers: ["commas", "curly brackets", "quotes", "parantheses"],
    correctAnswer: 3,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to be debugger is:",
    Answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: 4,
  },
];

//Declare global varibles including those equating to HTML elements.
var timerEl = document.getElementById("timer");
var titleContainerEl = document.getElementById("questionContainer");
var buttonContainerEl = document.getElementById("buttonContainer");
var titleEl = "";
var buttonEl = "";
var currentQuestion = "";

//Basic fuction to intialize the game. Initally the header and button elements display the game title and a start button rather than questions and answers. The "startGame" function is called upon user clicking buttonEl, which starts the timer & start presenting questions.
function init() {
  titleEl = document.createElement("h1");
  buttonEl = document.createElement("button");

  titleEl.textContent = "Coding Quiz Challenge!";
  buttonEl.textContent = "Start Quiz!";

  titleContainerEl.appendChild(titleEl);
  buttonContainerEl.appendChild(buttonEl);

  buttonEl.addEventListener("click", function () {
    startTimer();
    nextQuestion();
  });
}

init();

//Declare a function to start the timer. It will be called by button click during initilization.
function startTimer() {
  var timeRemaining = 60;

  var timerInterval = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = "Seconds Remaining: " + timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
}

//Declare a function to choose a random questios from the questionsArray.
function chooseQuestion() {
  for (var i = 0; i < questionsArray.length; i++) {
    questionsIndex = Math.floor(Math.random() * questionsArray.length);
    currentQuestion = questionsArray[questionsIndex];
  }
  return currentQuestion;
}

//Declare a function to reset the divs, choose a random question, and present it to the user. It will be called any time the user pushes a button in the buttonContainer div so hopefully this function works until the quiz is complete.
function nextQuestion() {
    chooseQuestion()

    titleContainerEl.removeChild(titleEl)
    buttonContainerEl.removeChild(buttonEl)

    titleEl = document.createElement("h1");
    buttonEl = document.createElement("button");

    titleEl.textContent = "Question: " + currentQuestion.question

    for (var i2 = i2 < currentQuestion.answers.length; i2++) {
        var buttonEl = document.createElement("button";
        buttonEl.textContent = currentQuestion.answer[i];)
        
    }

    titleContainerEl.appendChild(titleEl);
}
