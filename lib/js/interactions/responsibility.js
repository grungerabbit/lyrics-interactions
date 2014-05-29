$(document).ready(function () {
	var breathing = Raphael(0,0,2000,2000);
	
	var square = breathing.rect(200,50,50,50).attr({"fill" : "white", "stroke" : "white", "opacity" : 0}).rotate(45);
	square.glow({"width": 50, "color": "white"});

	function fadeInOut(which, dur) {
		return Raphael.animation({ opacity: which }, dur)
	};
	
	var timer = 2;
	var time = 6000;
	var $breathe = $(".breathe--annotate");
	
	setInterval(function() {
		if (timer % 2 === 0) {
			timer--;
			square.animate(fadeInOut(1, 3000));
			time -= 1000;
			$breathe.text("inhale")
		} else {
			timer++;
			square.animate(fadeInOut(0, 4000));
			time += 1000;
			$breathe.text("exhale")
		}	
	}, time);
	
	
});

function Transfer($scope) {
	$scope.worry = "My worry";
}