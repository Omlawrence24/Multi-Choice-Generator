
var q1 =("How many dollars is a gallon of milk?");
var q2=("How many strips are on the American Flag?");
var q3=("How many stars are on the American Flag?");
var q4=("How many Bootcamp classes are thier a week?");
var q5=("What is the average speed limit?");
var q6=("How many Hours does class last during the week?"); 

var wrong =("Wrong Answer");
var correct =("Correct Answer");
var userScore= ("You got" + wrong "Answers. And" + correct "Answers.  Your final score is:");
var userInput= "";

var a1 =("3");
var a2 =("13");
var a3 =("50");
var a4=("3");
var a5=("70");
var a6=("3");

// created an object

var questions = {
 q1 =("How many dollars is a gallon of milk?"),
 q2=("How many strips are on the American Flag?"),
 q3=("How many stars are on the American Flag?"),
 q4=("How many Bootcamp classes are thier a week?"),
 q5=("What is the average speed limit?"),
 q6=("How many Hours does class last during the week?"), 
};

var questions = ["q1","q2","q3","q4","q5"];

//demo//
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

// I created this for Loop to generate the Quiz questions
var questions = ["q1","q2","q3","q4","q5"];
var quiz ="";
var i;
for (i = 0; i < questions.length; i++) {
    quiz += questions[i] + "<br>";
}
document.getElementById("questions").innerHTML = quiz;

question = document.querySelector(h5);
document.body.appendChild(h5)


// My function for a timer 
function setTime(){
    var timeInterval = setInterval(function() {
        secondsleft--;
        timeInterval.textContent = secondsleft + "Time Left"
    )
}


var q1answered = (userInput  )