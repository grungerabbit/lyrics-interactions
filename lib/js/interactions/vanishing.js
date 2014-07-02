$(document).ready(function () {
	var paper = Raphael(0, 0, 1400, 4000);
	

	var Vanishing = function(obj) {
		this.vpX1 = obj.vpX1;
		this.vpY1 = obj.vpY1;
		this.vpX2 = obj.vpX2;
		this.vpY2 = obj.vpY2;
		this.vpX3 = obj.vpX3;
		this.vpY3 = obj.vpY3;
	};
	
    Vanishing.prototype.gc = function gC(x, y) {
        return x + "," + y + ",";   
    };
	
	Vanishing.prototype.drawSeed = function() {
		paper.circle(this.vpX1, this.vpY1, 10).attr({"fill": "red"});
		paper.circle(this.vpX2, this.vpY2, 10).attr({"fill": "red"});
		paper.circle(this.vpX3, this.vpY3, 10).attr({"fill": "red"});
	};
	
	Vanishing.prototype.guideSeg = function(segX, segY) {
		this.pointX = segX;
		this.pointY = segY;
		
		
		paper.circle(segX, segY, 5);
		paper.path("M" + this.gc(this.vpX1, this.vpY1) + this.gc(segX, segY)).attr({"stroke-dasharray": "--"});
		paper.path("M" + this.gc(this.vpX2, this.vpY2) + this.gc(segX, segY)).attr({"stroke-dasharray": "--"});
		paper.path("M" + this.gc(this.vpX3, this.vpY3) + this.gc(segX, segY)).attr({"stroke-dasharray": "--"});
	};
	
	Vanishing.prototype.getSlope = function() {
		this.slope = (this.vpX1 - this.pointX) / (this.vpY1 - this.pointY);
		paper.text(this.pointX, this.pointY - 20, this.slope + " slope");
	}
	
	Vanishing.prototype.getB = function() {
		// y = mx + b
		// this.pointY - (this.slope * this.pointX) = b
		
		this.yIntercept = this.pointY - (this.slope * this.pointX);
		paper.text(this.pointX, this.pointY - 30, this.yIntercept + " yIntercept");
	}
	
	
	
	
	Vanishing.prototype.dev = function(segX, segY) {
		this.guideSeg(segX, segY);
		this.getSlope();
		this.getB()
	}
	
	
	var test = {
		"vpX1" : 40,
		"vpY1" : 300,
		"vpX2" : 1000,
		"vpY2" : 300,
		"vpX3" : 400,
		"vpY3" : 1300
	}
	
	var seed = new Vanishing(test);
	seed.drawSeed();
	
	seed.dev(500, 100);
	
	
	seed.dev(500, 800);
	seed.dev(800, 800);
	seed.dev(450, 800);
});