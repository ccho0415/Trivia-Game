//Objects for the Question
var questions = [{
	question: "What is 1*5?",
	choices: [2,5,10,15],
	correctAnswer: 5,
	finished: 0
},
{
	question: "What is 5*2?",
	choices: [2,5,10,15],
	correctAnswer: 10,
	finished: 0
},
{
	question: "What is 5*3?",
	choices: [2,5,10,15],
	correctAnswer: 15,
	finished: 0
}
];
// which question number we are on
var qcounter= 0;
//timer functionality
var timer;
var timerobj = {
	time: 5,
	count: function(){
		timerobj.time--;
		$("#timer2").html(timerobj.time);
		if (timerobj.time<=0){
			timerobj.stop();
			console.log("Time's Up!")
			$("#nextButton").show();
		};
	},
	reset: function(){
		timerobj.time = 5;
		$("#timer2").html(timerobj.time);
	},
	start: function(){
		timer = setInterval(timerobj.count, 1000);
	},
	stop: function(){
		clearInterval(timer);
	}

};
//what happens when we are on a question
function currentQ(){
//random question generator!
 	num = Math.floor(Math.random()*questions.length);
 	var i = num;
 	console.log(i);
	$("#question").text(questions[i].question);
	$("#a").text(questions[i].choices[0]);
	$("#b").text(questions[i].choices[1]);
	$("#c").text(questions[i].choices[2]);
	$("#d").text(questions[i].choices[3]);

};
// when the document is ready!
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
	timerobj.start();
});
$("#nextButton").on("click", function(){
	$("#nextButton").hide();
	timerobj.reset();
	timerobj.start();
//figure out where to place this so that the q counter function does not show up early
	qcounter++
	currentQ();
//final results
if (qcounter > questions.length){
	$("#finalScore").show();
	$("#resetButton").show();
}
});
//registering if correct or incorrect made it dry! Got an idea from class and christian (use class and this!!)

$(".choice").on("click", function(event){
	var input = $(this).text().trim();
		console.log(input);
	console.log(questions[qcounter].correctAnswer);
	if(""+input+"" !== ""+ questions[qcounter].correctAnswer +""){
		console.log("FAIL");
			timerobj.stop();
	}else{
		console.log("beepboop");
				timerobj.stop();
	}
});
    $("#timetest").on ("click", function(event){
    	console.log("BEEP")
      timerobj.stop();
    });