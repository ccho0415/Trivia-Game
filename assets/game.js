//Objects for the Question
var questions = [{
	question: "What is 1*5?",
	choices: [2,5,10,15],
	correctAnswer: 5
},
{
	question: "What is 5*2?",
	choices: [2,5,10,15],
	correctAnswer: 10
},
{
	question: "What is 5*3?",
	choices: [2,5,10,15],
	correctAnswer: 15
}
];
//Question Counter
var qcounter = 0;

function startTime(){
//Vars for the Timer
var count = 5;
//Countdown!
var timer = setInterval(time, 1000);
//Timer Function
function time(){
	count--;
	$("#timer2").text(count);
//When we hit 0
	if (count<=0){
		clearInterval(timer);
		console.log("Time's Up!")
		$("#nextButton").show();
		return;
	}
}
};

function currentQ(){
	i = qcounter
	$("#question").text(questions[i].question);
	$("#a").text(questions[i].choices[0]);
	$("#b").text(questions[i].choices[1]);
	$("#c").text(questions[i].choices[2]);
	$("#d").text(questions[i].choices[3]);
};
$(document).ready(function(){
// Hiding all the elements from the get go! Don't want them to see the questions
	$("#timer1").hide();
	$("#timer2").hide();
	$("#question").hide();
	$("#a").hide();
	$("#b").hide();
	$("#c").hide();
	$("#d").hide();
	$("#nextButton").hide();
	$("#finalScore").hide();
	$("#resetButton").hide();
});

$("#startButton").on("click", function(){
// Now let's get the show on the road!
	$("#timer1").show();
	$("#timer2").show();
	$("#question").show();
	$("#a").show();
	$("#b").show();
	$("#c").show();
	$("#d").show();
	currentQ();
	startTime();
});
$("#nextButton").on("click", function(){
	$("#nextButton").hide();
	startTime();
//figure out where to place this so that the q counter function does not show up early
	qcounter++
	currentQ();
//final results
if (qcounter >= 2){
	$("#finalScore").show();
	$("#resetButton").show();
}
})

