$(document).ready(function () {
	var paper = Raphael(0, 0, 1400, 4000);

	var Vanishing = function(vpX, vpY) {
		this.vpX = vpX;
		this.vpY = vpY;
	}
	
	Vanishing.prototype.drawSeed = function() {
		paper.circle(this.vpX, this.vpY, 10);
	}
	
	var seed = new Vanishing(400, 200);
	seed.drawSeed();
});