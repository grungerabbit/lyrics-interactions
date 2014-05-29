// transfer 0.4.0
// last modified: 05/28/2014

$(document).ready(function () {
	var universe = 3000;
	var breathing = Raphael(0,0,universe,universe);
	
	var square = breathing.rect(200,50,50,50).attr({"fill" : "white", "stroke" : "white", "opacity" : 0}).rotate(45);
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
			var star = breathing.circle(randomUniverse(), randomUniverse(), size).attr({"fill" : "white", "stroke" : "none", "opacity" : size/10});
			if (size > 5) {
				star.glow({"width" : 20, "color" : "white"})
			}
		}
	}
	
	generateStarfield(universe/2);
	
	
	$("body").on("click", ".transfer", function() {
		var newTop = randomUniverse();
		var newLeft = randomUniverse();
		
		var $big = $("#big__worry");
		var cache = $big.text() + " - " + moment().format('MMMM Do YYYY, h:mm:ss a');
		
		$big.css({"-webkit-transition": "font 7s cubic-bezier(0.190, 1.000, 0.220, 1.000)", "font-size": "2px", "position" : "absolute", "left": newLeft, "top": newTop});
		$("body").animate({"delay" : 1000, "scrollLeft": newLeft, "scrollTop": newTop, "duration": 7000});
		
		setTimeout(function() {
			$big.addClass("done").attr("title", cache);
		}, 5000)
	});
});

function Transfer($scope) {
	$scope.worry = "";
}