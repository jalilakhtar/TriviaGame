$(document).ready(function(){

	var timerId;
	function countdown() {
	    var i = document.getElementById('counter');
	    i.innerHTML = parseInt(i.innerHTML)-1;
	    if (parseInt(i.innerHTML)===0) {
	       clearInterval(timerId);
	    }
	}
	var timerId = setInterval(function(){ countdown(); },1000);

	var correctAnswer=0;
	var wrongAnswer=0;

	var update = function() {
		$("#results").html("You have "+correctAnswer+" correct and "+wrongAnswer+" wrong answers!")
		a1.off();
		a2.off();
		a3.off();
		a4.off();
	}
	var a1 = $('#a1');
	var a2 = $('#a2');
	var a3 = $('#a3');
	var a4 = $('#a4');

	a1.on("click", function(){
		correctAnswer++;
		update(); //calling the function 'update'
	});
	a2.on("click", function(){
		wrongAnswer++;
		update();
	});
	a3.on("click", function(){
		wrongAnswer++;
		update();
	});
	a4.on("click", function(){
		wrongAnswer++;
		update();
	});


});

