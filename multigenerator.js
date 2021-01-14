//  q2:"How many strips are on the American Flag?",
//  choices:["23", "4", "13", "6"],
//  answer: "13"},

//  q3: "How many stars are on the American Flag?",
//  hoices:["50", "77", "51", "6"],
//  answer: "50"},

//  q4:"How many Bootcamp classes are thier a week?",
//  hoices:["3", "4", "78", "6"],
//  answer: "3"},

//  q5=("What is the average speed limit?"),
//  choices:["3", "35", "70", "6"],
//  answer: "70"}

//  q6=("How many Hours does class last during the week?"), 
//  hoices:["3", "12", "24", "6"],
//  answer: "3"
// };

// created an object for the questions
var questions = [
    {
        currentQuestion:"How many dollars is a gallon of milk?",
        choices:["3", "4", "10", "6"],
        answer: "3"},
    {
        currentQuestion:"How many strips are on the American Flag?",
        choices:["23", "4", "13", "6"],
        answer: "13"},
    
]

//initialize data variables
var userInput= "";
var correctAns="";
var wrongAns = "";
var grades = "";
var highScore ="";
var currentQuestion = questions[0];

//grab elements from the dom
var startbtn =document.querySelector(".start-btn");
var questionEl = document.querySelector("#questions")
var reply1 = document.querySelector("#reply1");
var reply2 = document.querySelector("#reply2");
var reply3 = document.querySelector("#reply3");
var reply4 = document.querySelector("#reply4");
var btnGroup = document.querySelector(".btn-group");
var confirmation = document.querySelector(".confirmation");

//attach click handlers
startbtn.addEventListener("click", setCurrentQuestion);

btnGroup.addEventListener("click", function(event){
    var element = event.target;
    console.log(element.textContent)
    userInput = element.textContent
    if (userInput === correctAns) {
        confirmation.textContent= "Correct!"
    } else {
        confirmation.textContent= "Wrong!"
    }

    //how do we.....
    //1. keep track of whatever the current question in our array is
    //2. update 'currentQuestion' to be a new object every time we answer
    //3. use the new value for 'currentQuestion' to update the DOM (hint: this is what setCurrentQuestion is for)
});

//function that will update the DOM based on the current question
//We moved this into its own function so we can re-use it every time we need a new question
function setCurrentQuestion() {
    questionEl.textContent = currentQuestion.currentQuestion; 
    correctAns = currentQuestion.answer 
    console.log(setCurrentQuestion)
    reply1.textContent = currentQuestion.choices[0];
    reply2.textContent = currentQuestion.choices[1];
    reply3.textContent = currentQuestion.choices[2];
    reply4.textContent = currentQuestion.choices[3];  
}

 for (var i = 0; i < questions.length; i++) {
     var nextQuestion = questions.currentQuestion.setCurrentQuestion()
    textContent=questions.nextQuestion;
}

// // My function for a timer 
// function setTime(){
//     var timeInterval = setInterval(function() {
//         secondsleft--;
//         timeInterval.textContent = secondsleft + "Time Left"
//     )
// }
