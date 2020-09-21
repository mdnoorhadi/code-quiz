// INITIALIZATION
var score = 0; // Default score is 0
var questionIndex = 0; // Default question index is 0
var questionsDiv = document.querySelector("#quizQuestion"); // Place the questions here
var ulCreate = document.createElement("ul"); // Create UL for choices

// // QUESTIONS AND ANSWERS
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        title: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];

// RENDER THE QUESTION AND CHOICES

function render(questionIndex) {
    // Clears existing data 
    questionsDiv.innerHTML = "";
    ulCreate.innerHTML = "";
    var currentQuestion = questionIndex + 1; // Get the current question number and not the question index
    // For loops to loop through all info in array
    for (var i = 0; i < questions.length; i++) {
        // Appends question title only
        var userQuestion = questions[questionIndex].title;
        var userChoices = questions[questionIndex].choices;
        questionsDiv.textContent = userQuestion;
    }
    // New for each for question choices
    userChoices.forEach(function (newItem) {
        var listItem = document.createElement("li");
        listItem.textContent = newItem;
        document.querySelector('#quizMainContainer').appendChild(ulCreate);
        ulCreate.appendChild(listItem);
        listItem.addEventListener("click", (compare));
    })
    document.querySelector("#questionNum").textContent = "Question " + currentQuestion; // This is the question number that appears on the page
}

// Check which questionIndex
// console.log(questionIndex);

function compare(event) {
    
    var element = event.target;
    var thisIsTheCurrentQuestion = questionIndex + 1; // Get the current question number and not the question index

    if (element.matches("li")) {

        if (element.textContent == questions[questionIndex].answer) {
            score++; // If answer is correct, user earns 1 point
            document.querySelector(".answerCorrect").style.display = "block";
            document.querySelector(".answerIncorrect").style.display = "none";
            document.querySelector(".answerCorrect").textContent = "Correct! The answer to question " + thisIsTheCurrentQuestion + " is: " + questions[questionIndex].answer;
        } else {
            document.querySelector(".answerIncorrect").style.display = "block";
            document.querySelector(".answerCorrect").style.display = "none";
            document.querySelector(".answerIncorrect").textContent = "Wrong! The correct answer to question " + thisIsTheCurrentQuestion + " is: " + questions[questionIndex].answer;
        }

    }
    // Question index determines number question user is on
    questionIndex++;

    if (questionIndex >= questions.length) {
        alert("End of quiz! You scored " + score + " points!"); // alert user that time is up
        window.open("./complete.html", "_self"); // open a new window
        //document.querySelector("#quizTotalScore").textContent = score;
    } else {
        render(questionIndex);
    }

}

// START AND SHOW TIMER FUNCTION

function startTimer(duration, display) {
    var getTimer = duration, minutes, seconds;
    var setTimer = setInterval(function () {
        minutes = parseInt(getTimer / 60, 10);
        seconds = parseInt(getTimer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;
        // console.log(display.textContent);

        if (--getTimer < 0) {
            getTimer = duration;
            clearInterval(setTimer); // stop the timer
            endQuiz(); // call the endQuiz function
        }
    }, 1000);
}

function showTimer() {
    var oneMinute = 30 * 1;
    display = document.querySelector('#qTimer');
    startTimer(oneMinute, display);
};

// END QUIZ
function endQuiz() {
    alert("Uh oh! Time is up!"); // alert user that time is up
    window.open("./timeout.html", "_self"); // open a new window
}

// RENDER
render(questionIndex);
showTimer();