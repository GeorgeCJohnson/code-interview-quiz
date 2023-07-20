//Quiz operns on page load

document.addEventListener('DOMContentLoaded', function() {
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
            answers: ['Not a Number', 'Not a Null', 'Not a Negative', 'Not a Negative'],
            correctAnswer: 0,
        },

        {   question: 'What are callbacks?',
            answers: ['A function that is passed into another function as an argument', 'A function that is called after another function has finished executing', 'A function that is called before another function has finished executing', 'A function that is called before another function has started executing'],
            correctAnswer: 0,
        },

        {   question: 'What is the difference between call() and apply()?',
            answers: ['The call() method takes arguments separately whereas the apply() method takes arguments as an array', 'The call() method takes arguments as an array whereas the apply() method takes arguments separately', 'The call() method takes arguments as an array whereas the apply() method takes arguments as an array', 'The call() method takes arguments separately whereas the apply() method takes arguments separately'],
            correctAnswer: 0,
        },
        ];


    //Variables
    var questionIndex = 0;
    var time = questions.length * 15;
    var timeInterval;
    
    //Timer area
    var timerEl = document.getElementById('time');

    //Timer display on page
    function clockTick() {
        time--;
        startTimer.textContent = time;
    }
    
        if (time <= 0) {
            clearInterval(timeInterval);
            endQuiz();
    }

    //Quiz start button
    var startButton = document.getElementById('start-button');
    startButton.addEventListener('click', startQuiz);

    //starting the quiz
    function startQuiz() {
        var startScreenEl = document.getElementById('start-screen');
        startScreenEl.setAttribute('class', 'hide');
        questionEl.removeAttribute('class');
        timeInterval = setInterval(clockTick, 1000);
        startTimer.textContent = time;
        displayQuestion();
    }

    //Questions retrieved from DOM
    var questionEl = document.getElementById('question');

    //Answers selection by User
    var answerButtonsEl = document.getElementById('answerButtons');
    var resultEl = document.getElementById('result');
   
        for (var i = 0; i < answerButtons.length; i++) {
            answerButtonsEl[1].setAttribute('id', 'answerButtons' + i);
            answerButtons[1].addEventListener('click', checkAnswers);
       }

    //Tmeout for wrong answers
    function checkAnswers(event) {
        var answer = event.target.getAttribute('data-answer');
        var result = document.getElementById('result');

        if (answer === questions[questionIndex].correctAnswer) {
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

    //Gradng the answers
    var scoreElement = document.getElementById('score');

    //User initials
    var initialsInput = document.getElementById('initials');
    var submitButton = document.getElementById('submit');

    //Saving the score
    function saveScore() {
        var initials = initialsInput.value.trim();
        if (initials !== '') {
            var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
            var newScore = {
                score: time,
                initials: initials,
            };
            highscores.push(newScore);
            window.localStorage.setItem('highscores', JSON.stringify(highscores));
            window.location.href = 'highscores.html';
        }
    }

    submitButton.addEventListener('click', saveScore);

    //Ending the quiz
    function endQuiz() {
        clearInterval(timeInterval);
        var endScreenEl = document.getElementById('end-screen');
        endScreenEl.removeAttribute('class');
        var finalScoreEl = document.getElementById('final-score');
        finalScoreEl.textContent = time;
        questionEl.setAttribute('class', 'hide');
    }
