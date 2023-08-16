// - Click start button to start time and receive question.
// - When answering a question be presented with another question.
// - If answer is incorrect time is subracted from clock.
// - Game ends when all questions are answered or timer reaches 0.
// - Once game is over I can save my initials and score.

//Create the questions: Declare variable for the displayed quiz question. There are multiple questions, so they will be contained in an array to choose from randomlly. There are multiple answers to each question, so each item in the array must also be an object containing its own array.
var pagesArray = [
  {
    question: "Commonly used data types DO NOT include:",
    answers: ["Strings", "Booleans", "Alerts", "Numbers"],
    correctAnswer: 2,
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
    correctAnswer: 2,
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    answers: [
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
    answers: ["commas", "curly brackets", "quotes", "parantheses"],
    correctAnswer: 2,
  },
  {
    question:
      "A very useful tool used during development and debugging for printing content to be debugger is:",
    answers: ["JavaScript", "terminal / bash", "for loops", "console.log"],
    correctAnswer: 3,
  },
];

//Declare global varibles including those equating to HTML elements.
var timerEl = document.getElementById("timer");
var titleContainerEl = document.getElementById("titleContainer");
var buttonContainerEl = document.getElementById("buttonContainer");
var buttonEl = "";
var randomPage = "";
var trueAnswers = 0
var falseAnswers = 0

//initFunction 
//startTimerFunction//questionFunction
//checkAnswerFunction
//questionFunction
//repeat
//endQuizFunction
var startButton = document.getElementById('startButton')

//Basic fuction to intialize the game. Initally the header and button elements display the game title and a start button. The "startGame" function is called upon user clicking buttonEl, wh ch starts the timer & start presenting questions.
function init() {
  // var startTitleEl = document.createElement("h1");
  // var startButton = document.createElement("button");
  // startButton.setAttribute("class", "start-button")
  // startButtonEl = querySelectorAll(".start-button")
  // startTitleEl.textContent = "Coding Quiz Challenge!";
  // startButton.textContent = "Start Quiz!";
  var introEl = document.getElementById('intro')
  introEl.setAttribute('class', 'hide')
  // titleContainerEl.appendChild(startTitleEl);
  // buttonContainerEl.appendChild(startButton);
  var timeRemaining = 60;
  var interval = setInterval(startTimer, 1000)
  timerEl.textContent = "Seconds Remaining: " + timeRemaining;
  // startButton.addEventListener("click", function () {
    // startTimer();
    nextQuestion();
  // });
}
  startButton.addEventListener("click", init)

// init();

//Declare a function to start the timer when the "Start Quiz" button is clicked.
function startTimer() {

  // var timeInterval = setInterval(function () {
    timeRemaining--;
    timerEl.textContent = "Seconds Remaining: " + timeRemaining;

    if (timeRemaining === 0) {
      clearInterval(timeInterval);
    }
  // }, 1000);
}

//Declare a function to choose a random object from the pagesArray when the button element is clicked.
function choosePage() {
  for (var i = 0; i < pagesArray.length; i++) {
    randomPageIndex = Math.floor(Math.random() * pagesArray.length);
    randomPage = pagesArray[randomPageIndex];
  }
  return randomPage;
}

//Declare a function to empty the container divs, invoke the choosePage function, and then fill the containers with a new title and buttons derived from randomPage object.
function nextQuestion() {
    titleContainerEl.removeChild(startTitleEl)
    buttonContainerEl.removeChild(buttonEl)

    choosePage()

    titleEl = document.createElement("h1");
    titleEl.textContent = "Question: " + randomPage.question;
    titleContainerEl.appendChild(titleEl);

    for (var i = 0; i < randomPage.answers.length; i++) {
      var buttonText = randomPage.answers[i];
      var answerButton = document.createElement("button");
      answerButton.textContent = buttonText
      answerButton.setAttribute("data-index", i)
      buttonContainerEl.appendChild(answerButton)

      answerButton.addEventListener("click", function(event) {
        var answersIndex = parseInt(event.target.getAttribute("data-index"));
        checkAnswer(answersIndex, randomPage.correctAnswer);
      })
    }
}

//Decare a function to check if the index of the button pressed by user matches the correctAnswer value from the randomPage object.
function checkAnswer(num1, num2) {
  
  if (num1 === num2) {
      console.log("Correct!");
      trueAnswers++
  } else {
      console.log("Incorrect!");
      falseAnswers++
  }
  // You can also proceed to the next question here
  nextQuestion();
}

// function nextAnswers() {
//     buttonContainerEl.removeChild(buttonEl)
//     buttonEl = document.createElement("button");
//     for (var i = 0; i < answers.length)