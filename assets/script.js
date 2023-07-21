GeOwego
geoowego
Online

Nina — Yesterday at 9:18 PM
I'm so sorry! I'm just seeing this now I was having  lunch/dinner
GeOwego — Yesterday at 9:28 PM
No problem at all.
My head is pounding!  It mostly was a pathing issue.
GeOwego — Yesterday at 9:35 PM
For some reason when I run a password from the github account it still isn't giving the password at the end.  Im going nutso!  lol
Nina — Yesterday at 9:48 PM
were you able to fix it with Eli?
so the code in your github not the same one in your local?
GeOwego — Yesterday at 9:49 PM
It's the same.  Clarence said it was fixed but I think he was looking at the local file or copy pasting.  The deployed page isn't working properly.  I am going to wait a couple hours and try again as it may just be behind.  Fingers crossed.
Nina — Yesterday at 10:19 PM
I can help you with that on break
GeOwego — Yesterday at 10:19 PM
Im seriously getting twisted over this.  I need to just calm down.
Nina — Yesterday at 10:29 PM
yes just don't worry about it you still got time
Nina — Yesterday at 10:44 PM
is that for which project
I don't see the image in the html file
Nina — Yesterday at 10:52 PM
so i see it in the css
GeOwego — Yesterday at 10:52 PM
Because it's a hero image (Background banner) they are typically placed in the css stylesheet.  Also, I know it works because it's fine when run locally.
Nina — Yesterday at 10:54 PM
oh ok! I feel like its file issue
GeOwego — Yesterday at 10:54 PM
It has to be!  ARRRGGGGGGG lol
Im just gonna focus on class.
Nina — Yesterday at 10:55 PM
yess you got this!!
Nina — Today at 2:20 PM
Hiii Happy Thursday
GeOwego — Today at 2:20 PM
Hey there
Nina — Today at 2:20 PM
I wanna vent haha
GeOwego — Today at 2:20 PM
K whats up?
You want on chat?
Nina — Today at 2:20 PM
can you hop on study room 1
GeOwego — Today at 2:21 PM
yep give me 2 minutes
Nina — Today at 2:21 PM
sounds good
GeOwego — Today at 2:27 PM
Im on btw
GeOwego — Today at 3:14 PM
"use strict";
GeOwego — Today at 3:29 PM
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Declare characters to be used in password

var charactertype = [];
Expand
script.js
3 KB
Nina — Today at 3:32 PM
do you have the css file?
GeOwego — Today at 3:34 PM
Why I work hard....
Image
Mouth full of banana 
Image
GeOwego — Today at 3:42 PM
I havent finished the css or gone back to finishing the html.
Nina — Today at 3:42 PM
aww hes so cute
GeOwego — Today at 3:42 PM
That is my next to do
Nina — Today at 3:42 PM
ok the code you sent me is for the generate password
not the quiz
GeOwego — Today at 3:43 PM
Ah hell give me a minute
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JavaScript Quiz</title>
Expand
index.html
2 KB
//Quiz opens on page load

document.addEventListener('DOMContentLoaded', function() {
    
    var questions = [
        {
Expand
script.js
6 KB
I also have the highscore html to do and haven;t styled the site yet so css too
Like I said I was only about an hour or so maybe 2 into the coding so not near completion quite yet....
Nina — Today at 4:19 PM
no worries! your doing great
Nina — Today at 5:15 PM
hi hii
your code is done
GeOwego — Today at 5:15 PM
?  Nina what the heck?
get in chat please.
Nina — Today at 6:01 PM
//Quiz opens on page load
document.addEventListener('DOMContentLoaded', function () {

    var questions = [

        {
Expand
script.js
7 KB
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Courier New", Courier, monospace;
}
Expand
style.css
2 KB
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JavaScript Quiz</title>
Expand
index.html
2 KB
﻿
//Quiz opens on page load
document.addEventListener('DOMContentLoaded', function () {

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