// transfer 0.6.0
// last modified: 05/28/2014

$(document).ready(function () {
	var universe = 3000;
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
	
	var coordsTop = [];
	var coordsLeft = [];
	$("body").on("click", ".transfer", function() {

		
		var $finished = $(".finished__worry");
		var cache = $finished.text() + " - " + moment().format('MMMM Do YYYY, h:mm:ss a');
		
		setTimeout(function() {
			var newTop = randomUniverse();
			var newLeft = randomUniverse();
			
			$finished.css({"-webkit-transition": "font 20s cubic-bezier(0.190, 1.000, 0.220, 1.000)", "font-size": "2px", "position" : "absolute", "left": newLeft, "top": newTop});
			$("body").animate({"delay" : 1000, "scrollLeft": newLeft, "scrollTop": newTop, "duration": 7000});	
		}, 1000);
		
		setTimeout(function() {
			$finished.addClass("done").attr("title", cache);
		}, 5000)
	});
	
	$("body").on("click", ".done", function () {
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