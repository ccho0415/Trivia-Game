//An Object Storing the Questions
var questions = [{
	question: "What is 1*5?",
	choices: [2,5,10,15],
	correctAnswer: 5,
	finish: 0
},
{
	question: "What is 5*2?",
	choices: [2,5,10,15],
	correctAnswer: 10,
	finish: 1
},
{
	question: "What is 5*3?",
	choices: [2,5,10,15],
	correctAnswer: 15,
	finish: 2
}
];
// global Variables
var notAnswered = [];
var finished = [];
var	num ;
// which question number we are on
var qcounter= 1;
//Timer
var timer;
var timerobj = {
	//This is where you would change the time
	time: 5,
	//This is where the timer ticks down
	count: function(){
		timerobj.time--;
		$("#timer2").html(timerobj.time);
		//This is where we stop everything to show that the Time Ran Out
		if (timerobj.time<=0){
			//Stop the Time
			timerobj.stop();
			//Push to Finished Variable
			finished.push(questions[num].finish);
			console.log("Time's Up!");
			//Hide Everything But the Ran Out and Next Button
			$("#startButton").hide();
			$("#timer1").hide();
			$("#timer2").hide();
			$("#question").hide();
			$("#a").hide();
			$("#b").hide();
			$("#c").hide();
			$("#d").hide();
			$("#correct").hide();
			$("#incorrect").hide();
			$("#finalScore").hide();
			$("#timetest").hide();
			$("#resetButton").show();
			$("#ranout").show();
			$("#nextButton").show();
			$("#ranout").html("<h1> You Ran Out of Time: The Answer was Actually:"  + questions[num].correctAnswer+ "</h1>")
		};
	},
	//Reset Time Function
	reset: function(){
		timerobj.time = 5;
		$("#timer2").html(timerobj.time);
	},
	//Start Time Function
	start: function(){
		timer = setInterval(timerobj.count, 1000);
	},
	//Stop Time Function
	stop: function(){
		clearInterval(timer);
	}

};
function generateQ(){
	num = Math.floor(Math.random()*questions.length);
}
//A Function That Runs When There is A Question
function currentQ(){
		//Hides Extraneous UI Shows Necessary UI
			$("#startButton").hide();
			$("#timer1").show();
			$("#timer2").show();
			$("#question").show();
			$("#a").show();
			$("#b").show();
			$("#c").show();
			$("#d").show();
			$("#correct").hide();
			$("#incorrect").hide();
			$("#finalScore").hide();
			$("#timetest").show();
			$("#resetButton").show();
			$("#ranout").hide();
			$("#nextButton").hide();
		//Grabs the Information from the Question Object and Changes the Text of the Div To Show the Question and the Answer Choices
			$("#question").text(questions[num].question);
			$("#a").text(questions[num].choices[0]);
			$("#b").text(questions[num].choices[1]);
			$("#c").text(questions[num].choices[2]);
			$("#d").text(questions[num].choices[3]);

};
// When the Doucment is Ready
$(document).ready(function(){
	//This is for another time. I think this will fix the next button issue but I need to think about this more
	// push everything into not answered array
	// get the value from randomly picked from the not answered array
	// push that into finished aray
	// remove used value into not answered array
	// rinse and repeat
	// for (i = 0; i<questions.length; i++) {
	// 	notAnswered.push(questions[i].finish);
	// }
//Only Showing Start Button Hiding Everything Else
			$("#startButton").show();
			$("#timer1").hide();
			$("#timer2").hide();
			$("#question").hide();
			$("#a").hide();
			$("#b").hide();
			$("#c").hide();
			$("#d").hide();
			$("#correct").hide();
			$("#incorrect").hide();
			$("#finalScore").hide();
			$("#resetButton").hide();
			$("#timetest").hide();
			$("#ranout").hide();
			$("#nextButton").hide();
});
//What happens when the Start button is clicked
$("#startButton").on("click", function(){
//Hide Everything But Question
	$("#startButton").hide();
			$("#timer1").show();
			$("#timer2").show();
			$("#question").show();
			$("#a").show();
			$("#b").show();
			$("#c").show();
			$("#d").show();
			$("#correct").hide();
			$("#incorrect").hide();
			$("#finalScore").hide();
			$("#timetest").show();
			$("#resetButton").show();
			$("#ranout").hide();
			$("#nextButton").hide();
			generateQ();
			currentQ();
			timerobj.start();
});
//What happens when the next Button is clicked
$("#nextButton").on("click", function(){
	if (finished.indexOf(questions[num].finish) === -1){
	console.log(finished.indexOf(questions[num].finish))
	timerobj.reset();
	timerobj.start();
//figure out where to place this so that the q counter function does not show up early
	qcounter++
	console.log(qcounter);
	currentQ();
	}else if (finished.indexOf(questions[num].finish) > -1){
		console.log(finished.indexOf(questions[num].finish))
		console.log("already answered this one!")
		event.preventDefault();
		generateQ();
		
	};
//registering if correct or incorrect; made it dry! Got an idea from christian (use class and this!!)

$(".choice").on("click", function(event){
	var input = $(this).text().trim();
	if(""+input+"" !== ""+questions[num].correctAnswer+""){
		console.log("FAIL");
			timerobj.stop();
			$("#timer1").hide();
			$("#timer2").hide();
			$("#question").hide();
			$("#a").hide();
			$("#b").hide();
			$("#c").hide();
			$("#d").hide();
			$("#finalScore").hide();
			$("#resetButton").hide();
			$("#incorrect").show();
			$("#incorrect").html("<h1>Incorrect. The Answer Was Actually: " + questions[num].correctAnswer+ "</h1>")
			finished.push(questions[i].finish);
			$("#nextButton").show();
			
	}else{
		console.log("beepboop");
				timerobj.stop();
			$("#timer1").hide();
			$("#timer2").hide();
			$("#question").hide();
			$("#a").hide();
			$("#b").hide();
			$("#c").hide();
			$("#d").hide();
			$("#finalScore").hide();
			$("#resetButton").hide();
			$("#correct").show();
			$("#correct").html("<h1>Correct!</h1>")
			finished.push(questions[num].finish);
				$("#nextButton").show();
				
	}
});
    $("#timetest").on ("click", function(event){
    	console.log("BEEP")

      timerobj.stop();
      
    });
//final results
if (qcounter > questions.length){
	$("#finalScore").show();
	$("#resetButton").show();
};
});
