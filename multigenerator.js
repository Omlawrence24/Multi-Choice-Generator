
// created an object for the questions
var quiz = [
    {
        questionText:"How many dollars is a gallon of milk?",
        choices:["3", "4", "10", "6"],
        answer: "3"},
    {
        questionText:"How many strips are on the American Flag?",
        choices:["23", "4", "13", "6"],
        answer: "13"},
    {   
       questionText: "How many stars are on the American Flag?",
        choices:["50", "77", "51", "6"],
        answer: "50"},
    {
        questionText:"How many Bootcamp classes are thier a week?",
        choices:["3", "4", "78", "6"],
        answer: "3"},
    {
        questionText: "What is the average speed limit?",
        choices:["3", "35", "70", "6"],
        answer: "70"},
    {
        questionText:"How many Hours does class last during the week?", 
        hoices:["3", "12", "24", "6"],
        answer: "3"
        },
            
]



var scoreList = [
   
]

function saveQuizResult(name,score){
    var result = {}
    result.name=name
    result.score=score
    scoreList.push(result)
   localStorage.setItem("quizResults",JSON.stringify(scoreList)) 
}



//initialize data variables
var userInput= "";
var correctAns="";
var wrongAns = "";
var grades = "";
var highScore ="";
var userQuestion = 0;
var quizTimerId = 0;
var quizSeconds = 100;

//grab elements from the dom
var startbtn =document.querySelector(".start-btn");
var questionEl = document.querySelector("#questions")
var reply1 = document.querySelector("#reply1");
var reply2 = document.querySelector("#reply2");
var reply3 = document.querySelector("#reply3");
var reply4 = document.querySelector("#reply4");
var btnGroup = document.querySelector(".btn-group");
var confirmation = document.querySelector(".confirmation");
var timer = document.querySelector("#timer");
var scoreList = document.querySelector("scorelist")
var startScreen1= document.getElementById("startscreen")


//attach click handlers
startbtn.addEventListener("click", function(){
    userQuestion=0
    setCurrentQuestion()
    quizTimerId = window.setInterval(updateQuizTime,1000)
    console.log(quizTimerId)


});


// void btnGroup;SetVisible() {
//     SetVisible(startbtn);
// };

btnGroup.addEventListener("click", function(event){
    var element = event.target;
    console.log(element.textContent)
    userInput = element.textContent
    if (userInput === correctAns) {
        confirmation.textContent= "Correct!"
        correctAns += 1
    } else {
        confirmation.textContent= "Wrong!"
    }

    
saveQuizResult("stanley",100)
userQuestion += 1
setCurrentQuestion()


    //how do we.....
    //1. keep track of whatever the current question in our array is
    //2. update 'currentQuestion' to be a new object every time we answer
    //3. use the new value for 'currentQuestion' to update the DOM (hint: this is what setCurrentQuestion is for)
});

//function that will update the DOM based on the current question
//We moved this into its own function so we can re-use it every time we need a new question
function setCurrentQuestion() {
var currentQuestion = quiz[userQuestion]
    questionEl.textContent = currentQuestion.questionText; 
    correctAns = currentQuestion.answer 
    console.log(setCurrentQuestion)
    reply1.textContent = currentQuestion.choices[0];
    reply2.textContent = currentQuestion.choices[1];
    reply3.textContent = currentQuestion.choices[2];
    reply4.textContent = currentQuestion.choices[3];     
}

// function 
 for (var i = 0; i < scoreList.length; i++) {
    var scorePage = result
    scoreList.textContent= scorePage
    console.log(scorePage)
 }

// My function for a timer 
function updateQuizTime() {
quizSeconds--;
    timer.textContent= "Time Left:" + quizSeconds}
