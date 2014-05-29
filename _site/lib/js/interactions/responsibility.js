// transfer 0.3.0
// last modified: 05/28/2014

$(document).ready(function () {
	var breathing = Raphael(0,0,2000,2000);
	
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
	
	
	function generateStarfield(number) {
		for (var i = 0; i < number; i++) {
			//var size = Math.log(Math.random() * 1000) / Math.LN10;
			
			var size = Math.ceil(Math.random() * (3 + (Math.random() > 0.9 ? Math.random() * 4 : 0)));
			var star = breathing.circle(Math.random() * 2000, Math.random() * 2000, size).attr({"fill" : "white", "stroke" : "none", "opacity" : size/10});
			if (size > 5) {
				star.glow({"width" : 20, "color" : "white"})
			}
		}
	}
	
	generateStarfield(1000);
	
	
});

function Transfer($scope) {
	$scope.worry = "";
}