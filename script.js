var questions = [
    
    {
        title: 'Which of the following is not a primitive type?', 
        choice: ["String", "Number", "Boolean", "Object"],
        answer: "Object",
    },

    {
        title: 'What syntax is utilized to initiate a loop command?',
        choice: ["for", "if", "else", "var"],
        answer: "for",
    },

    {
        title: 'String values need to be enclosed with that notation to be assigned',
        choice: ["parenthesis's", "quotations", "curly bracket", 'bracket'],
        answer: "quotations",
    },

]


var cardEl = document.getElementById('#card')
var questionEl = document.getElementById('#questions')
var startQuizEl = document.getElementById('#startQuiz')
var choicesEl = document.getElementById('#choices')
var timer = document.getElementById('#timer')
var originEl = document.getElementsByClassName('.origin')

var secondsLeft = 30;
var intervalTime = 0;
var score = 0;
var questionsIndex = 0;

startQuizEl.addEventListener("click", function() {
    var timeInterval = setInterval(function(){
        secondsLeft--;
        timer.textContent = "Seconds Remaining to Finish Question: " + secondsLeft; 
    })
});


function render() {
    questionEl.innerText = "";
    choicesEl.innerText = "";

    var question = questions[questionsIndex].title;
    var choice = questions[questionsIndex].choice;
    questionEl.textContent = question;
    
    
    choice.forEach(function(newItem) {
        var choiceItem = document.createElement("li");
        choiceItem.setAttribute('id', 'choiceList')
        choiceItem.textContent = newItem;
        choicesEl.appendChild(choiceItem)
        choiceItem.addEventListener("click", function(){
            var isCorrect = newItem === questions[questionsIndex].answer;
            console.log("answer correct ---- ", isCorrect);
            //if correct, do something
            //else do something else

            //render next question;
            questionsIndex++;
            render()
        })
        
    });
}
