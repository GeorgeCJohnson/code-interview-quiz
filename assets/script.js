//Quiz opens on page load
document.addEventListener

('DOMContentLoaded', function () {

    var questions = [

        {
            question: 'What mode should you run JavaScript in to avoid hoisting?',
            answers: ['Strict', 'Sloppy', 'Strict and Sloppy', 'None of the above'],
            correctAnswer: 0,
        },

        {
            question: 'What is the correct syntax for referring to an external script called "script.js"?',
            answers: ['<script src="script.js">', '<script href="script.js">', '<script ref="script.js">', '<script name="script.js">'],
            correctAnswer: 0,
        },

        {
            question: 'What is the NaN property of the global object?',
            answers: ['Not a Number', 'Not a Null', 'Not a Negative', 'Not a Ninja'],
            correctAnswer: 0,
        },

        {
            question: 'What are callbacks?',
            answers: ['A function that is passed into another function as an argument', 'A function that is called after another function has finished executing', 'A function that is called before another function has finished executing', 'A function that is called before another function has started executing'],
            correctAnswer: 0,
        },

        {
            question: 'What is the difference between call() and apply()?',
            answers: ['The call() method takes arguments separately whereas the apply() method takes arguments as an array', 'The call() method takes arguments as an array whereas the apply() method takes arguments separately', 'The call() method takes arguments as an array whereas the apply() method takes arguments as an array', 'The call() method takes arguments separately whereas the apply() method takes arguments separately'],
            correctAnswer: 0,
        },
    ];

    var questionIndex = 0;
    var time = 60;
    var timeInterval;
    var startButton = document.getElementById("start-button");
    var answerButtonsEl = document.getElementById('answerButtons');
    var resultEl = document.getElementById('result');
    var timerEl = document.getElementById('time');
    var initialsInput = document.getElementById('initials');
    var submitButton = document.getElementById('submit');

    //Timer display on page
    function clockTick() {
        time--;
        if (time <= 0) {
            clearInterval(timeInterval);
            endQuiz();
            timerEl.textContent = time;
        }
        timerEl.textContent = time;
    }

    //starting the quiz
    function startQuiz() {
        var startScreenEl = document.getElementById('start-screen');
        startScreenEl.style.display = 'none';

        var quizSection = document.querySelector('.quiz');
        quizSection.style.display = 'block';

        var questionEl = document.getElementById('question');
        questionEl.style.display = 'block';
        timeInterval = setInterval(clockTick, 1000);
        timerEl.textContent = time;
        displayQuestion();
    }

    startButton.addEventListener('click', startQuiz);

    function displayQuestion() {
        var questionTextEl = document.getElementById('question-text');
        var question = questions[questionIndex];

        questionTextEl.textContent = question.question;
        answerButtonsEl.innerHTML = '';

        for (var i = 0; i < question.answers.length; i++) {
            var answerButton = document.createElement('button');
            answerButton.setAttribute('class', 'data-answer');
            answerButton.setAttribute('data-answer', i);
            answerButton.textContent = question.answers[i];
            answerButtonsEl.appendChild(answerButton);
        }

        // Attach event listener to answer buttons
        for (var i = 0; i < answerButtonsEl.children.length; i++) {
            answerButtonsEl.children[i].addEventListener('click', checkAnswers);
        }
    }

    //Tmeout for wrong answers
    function checkAnswers(event) {
        var answer = event.target.getAttribute('data-answer');
        var result = document.getElementById('result');

        if (parseInt(answer, 10) === questions[questionIndex].correctAnswer) {
            result.textContent = 'Correct!';
        } else {
            result.textContent = 'Take time to study this content!';
            time -= 10;
        }
        questionIndex++;
        if (questionIndex === questions.length) {
            endQuiz();
        } else {
            displayQuestion();
        }
    }

    // Saving the score
    var submitButton = document.getElementById('submit');

    function saveScore() {
        var initials = initialsInput.value.trim();
        if (initials !== '') {
            var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
            var newScore = {
                score: time,
                initials: initials,
            };
            highscores.push(newScore);
            localStorage.setItem('highscores', JSON.stringify(highscores));
            showHighscores();
        }
    }

    submitButton.addEventListener('click', saveScore);

    //Ending the quiz
    function endQuiz() {
        clearInterval(timeInterval);
        var endScreenEl = document.getElementById('end-screen');
        endScreenEl.style.display = 'block';

        var finalScoreEl = document.getElementById('final-score');
        finalScoreEl.textContent = time;

        var questionEl = document.getElementById('question');
        questionEl.style.display = 'none';
    }
    function highScorelist(highScores) {
        document.querySelector("#highscore").style.display = "block"; // Corrected ID
        var highscoreListEl = document.getElementById('highscorelist');
        highscoreListEl.innerHTML = '';
        highScores.sort(function (a, b) {
            return b.score - a.score;
        })
        for (var i = 0; i < highScores.length; i++) {
            var highScoreEl = document.createElement("tr");
            highScoreEl.innerHTML = "<td>" + highScores[i].score + "</td><td>" + highScores[i].initials + "</td>";
            highscoreListEl.appendChild(highScoreEl);
        }
    }
    var buttonEl = document.querySelector("#clear-highscore")
    buttonEl.addEventListener("click", function () {
        localStorage.removeItem("Highscore")
        var highScorelist = document.querySelector("#highscorelist")
        highScorelist.innerHTML = "";
    })

});
script.js
7 KB