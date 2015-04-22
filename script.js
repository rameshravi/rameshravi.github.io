var heading = ["Eat","Sleep", "Rave", "Repeat"];
var images = ["check.gif","test.gif","test1.gif","test3.gif"];
var color = ["red", "green", "yellow", "blue"];
var size = 0
var i = 0;
var secondsRemaining;
var check;
var intervalHandle;
var initial, body;
	
function changeMess() {
	var head = document.getElementById("test");
	body = document.getElementById('body');
	if (i==4) {
		i = 0;
	}
	size = (60*i)+50;	
	body.setAttribute("style","background: url("+ images[i] +") fixed; background-size: cover; background-repeat: no-repeat;");
	console.log(i);
	console.log(heading[i]);      
	head.innerHTML = heading[i];
	head.setAttribute("style", "font-size: "+size+"px;color: "+color[i]+";text-align: center;");
	i++;
}

function tick() {

	var timeDisplay = document.getElementById("timer");
	var mins = Math.floor(secondsRemaining/60);
	var secs = secondsRemaining - (mins*60);
	var message = mins.toString() + ":" + secs.toString();
	timeDisplay.innerHTML = message;

	if (secondsRemaining === 0) {
		var audio = new Audio('trippy.mp3');
		audio.play();
		body.setAttribute("style","background: url('trippyexplosion.GIF') fixed; background-size: cover; background-repeat: no-repeat;");
		clearInterval(initial);
		setTimeout(function(){ audio.pause() }, 33000);
		clearInterval(intervalHandle);
		document.getElementById("timer").style.display = "none";
		document.getElementById("inst").style.display = "block";
 	}
	secondsRemaining--;

}

function startCountDown() {
	var minutes = document.getElementById("minutes").value;
	var secs = document.getElementById("secs").value;
	console.log(minutes);
	if (isNaN(minutes) && isNaN(secs)) {
		alert("please enter a number");
		return;
	}
	secondsRemaining = (minutes * 60) + secs ;
	intervalHandle = setInterval(tick, 1000);
	document.getElementById("inst").style.display = "none";

}



window.onload = function() {
		
	initial = setInterval(changeMess,500);
	check = document.createElement("input");
	check.setAttribute("type", "text");
	check.setAttribute("id", "minutes");
	check.setAttribute("value", "Set minutes");
	check1 = document.createElement("input");
	check1.setAttribute("type", "text");
	check1.setAttribute("id", "secs");
	check1.setAttribute("value", "Set seconds");
	var butt = document.createElement("input");
	butt.setAttribute("id", "butt");
	butt.setAttribute("type", "button");	
	butt.setAttribute("value", "Start");
	butt.onclick = function() {
		startCountDown();
	};	
	document.getElementById("inst").appendChild(check);
	document.getElementById("inst").appendChild(check1);	
	document.getElementById("inst").appendChild(butt);
	document.getElementById("inst").style.textAlign = "center";
	
};


