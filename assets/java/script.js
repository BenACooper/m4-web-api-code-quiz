// - Click start button to start time and receive question.
// - When answering a question be presented with another question.
// - If answer is incorrect time is subracted from clock.
// - Game ends when all questions are answered or timer reaches 0.
// - Once game is over I can save my initials and score.

//Create the timer: Declare variable for the timer. Declare a second cariable for the HTML element on which to display it. Declare function for the quizTimer with parameters 5000ms and anonymous function for the countdown.
function quizTimer() {
    var timer = 60;
    var timerEl = document.getElementById("timer")

    var timerInterval = setInterval(function () {
        timer--;
        timerEl.textContent = "Seconds remaining: " + timer;

        if (timer === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

}

//Declare a variable that equates to the <button> element from HTML.
var startButtonEl = document.getElementById("startButton")
//Declare a function that starts the game when the user pushes the button.
function startGame() {
    quizTimer() //Starts the timer when the user presses the button.
}
//Call the function when the user presses the start button.
startButtonEl.addEventListener("click", startGame)

