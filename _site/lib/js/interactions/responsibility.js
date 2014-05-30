// transfer 0.7.0
// last modified: 05/29/2014

$(document).ready(function () {
	var universe = 10000;
	var breathing = Raphael("breathing__star", 200,140);
	
	var starfield = Raphael(0,0,universe,universe);
	
	var square = breathing.rect(90,50,50,50).attr({"fill" : "white", "stroke" : "white", "opacity" : 0}).rotate(45);
	square.glow({"width": 50, "color": "white"});

	function fadeInOut(which, dur) {
		return Raphael.animation({ opacity: which }, dur)
	};
	
	var timer = 2;
	var time = 7000;
	var $breathe = $(".breathe--annotate");
	
	setInterval(function() {
		if (timer % 2 === 0) {
			timer--;
			square.animate(fadeInOut(1, 4000));
			time -= 1000;
			$breathe.text("inhale")
		} else {
			timer++;
			square.animate(fadeInOut(0, 5000));
			time += 1000;
			$breathe.text("exhale")
		}	
	}, time);
	
	function randomUniverse() {
		return Math.random() * universe;
	}
	
	function generateStarfield(number) {
		for (var i = 0; i < number; i++) {
			var size = Math.ceil(Math.random() * (3 + (Math.random() > 0.95 ? Math.random() * 4 : 0)));
			var star = starfield.circle(randomUniverse(), randomUniverse(), size).attr({"fill" : "white", "stroke" : "none", "opacity" : size/10});
			if (size > 5) {
				star.glow({"width" : 20, "color" : "white"})
			}
		}
	}
	
	generateStarfield(universe/2);
	
	
	$("body").on("click", ".transfer", function() {
		var $finished = $(".finished__worry").last();
		var cache = $finished.text() + " - " + moment().format('MMMM Do YYYY, h:mm:ss a');
		
		setTimeout(function() {
			var newTop = randomUniverse();
			var newLeft = randomUniverse();
			
			$finished.css({"-webkit-transition": "font 7s cubic-bezier(0.190, 1.000, 0.220, 1.000)", "font-size": "2px", "position" : "absolute", "left": newLeft, "top": newTop});
			$("body").animate({"delay" : 1000, "scrollLeft": newLeft, "scrollTop": newTop, "duration": 7000});	
		}, 1000);
		
		setTimeout(function() {
			
		}, 5000);
		
		function addDone() {
			$finished.addClass("done").attr("title", cache);
		};
		
		function scrollBack() {
			$(".resetter").trigger("click");
			$("body").animate({"scrollTop": 0, "scrollLeft" : 0});
			setTimeout(function(){ $(".worry__input").trigger("focus") }, 500);
		};
		
		var finCall = [addDone, scrollBack], q = 0, finTimer = setInterval(callDone, 4000);
		
		function callDone() {
			finCall[q++]();
			if (q === finCall.length) { clearInterval(timer) };
		}
		
	});
	
	$("body").on("click", ".done, #breathing__star", function () {
		$("body").animate({"scrollTop": 0, "scrollLeft" : 0});
	});
});

function Transfer($scope) {
	$scope.worry = [{}];
	
	$scope.addWorry = function() {
		$scope.worry.push({text: $scope.worryText});
	}
	
	$scope.resetWorries = function() {
		$scope.worryText = "";
	};
}