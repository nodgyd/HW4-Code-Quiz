var questions = [
    
    {
        title: 'Which of the following is not a primitive type?', 
        choice: ["String", "Number", "Boolean", "Object"],
        answer: ["Object"],
    },

    {
        title: 'What syntax is utilized to initiate a loop command?',
        choice: ["for", "if", "else", "var"],
        answer: ["for"],
    },

    {
        title: '',
        choice: [],
        answer: [],
    },
]

var cardEl = document.querySelector('#card')
var questionEl = document.querySelector('#questions')
var startQuizEl = document.querySelector('#startQuiz')
var choicesEl = document.querySelector('#choices')
var timerEL = document.querySelector('#timer')

var secondsLeft = 45;

function setTime() {
    var timeInterval = setInterval(function) {
        secondsLeft--;
        timerEL.textContent = secondsLeft + " seconds left to answer questions!"
        

    }
}