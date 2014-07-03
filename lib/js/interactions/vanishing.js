$(document).ready(function () {
	var paper = Raphael(0, 0, 2000, 4000);
	

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
	
	Vanishing.prototype.seg = function(start, finish) {
		return paper.path("M" + start + finish);
	}
	
	Vanishing.prototype.horizon = function() {
		this.seg(this.v1, this.v2);
	}
	
	Vanishing.prototype.guideSeg = function(segX, segY) {
		this.pointX = segX;
		this.pointY = segY;
		
		this.v1 = this.gc(this.vpX1, this.vpY1);
		this.v2 = this.gc(this.vpX2, this.vpY2);
		this.v3 = this.gc(this.vpX3, this.vpY3);
		this.p = this.gc(segX, segY);
		
		paper.circle(segX, segY, 5);
		
		this.seg(this.v1, this.p).attr({"stroke-dasharray": "--"});
		this.seg(this.v2, this.p).attr({"stroke-dasharray": "--"});
		this.seg(this.v3, this.p).attr({"stroke-dasharray": "--"});
	};
	
	Vanishing.prototype.getSlope = function() {
		this.slope = (this.vpY1 - this.pointY) / (this.vpX1 - this.pointX);
		paper.text(this.pointX, this.pointY - 20, this.slope + " slope");
	}
	
	Vanishing.prototype.getB = function() {
		// y = mx + b
		// this.pointY - (this.slope * this.pointX) = b
		
		this.yIntercept = this.pointY - (this.slope * this.pointX);
		paper.text(this.pointX, this.pointY - 30, this.yIntercept + " yIntercept");
	}
	
	Vanishing.prototype.getHypotenuse = function() {
		return Math.sqrt(1 + (this.slope * this.slope));
	}
	
	Vanishing.prototype.getEndpoint = function(distance) {
		this.hyp = this.getHypotenuse();
		this.cos = 1 / (this.hyp);
		this.sin = this.slope / (this.hyp);
		
		
		var adjX = distance * this.cos;
		var adjY = distance * this.sin;
		
		//var endpoint1 = this.gc();
		//var endpoint2 = this.gc();
		
		paper.circle((this.pointX + adjX), (this.pointY + adjY), 7).attr({"fill": "green"});
		paper.circle((this.pointX - adjX), (this.pointY - adjY), 7).attr({"fill": "green"});
	}
	
	Vanishing.prototype.cube = function() {
		
	}
	
	Vanishing.prototype.dev = function(segX, segY) {
		this.guideSeg(segX, segY);
		this.getSlope();
		this.getB()
		
		this.getEndpoint(50)
	}
	
	
	var test = {
		"vpX1" : 40,
		"vpY1" : 100,
		"vpX2" : 1500,
		"vpY2" : 100,
		"vpX3" : 400,
		"vpY3" : 3500
	}
	
	var seed = new Vanishing(test);
	seed.drawSeed();
	
	seed.dev(500, 300);
	
	
	//seed.dev(800, 800);
	//seed.dev(800, 800);
	//seed.dev(450, 800);
	
	seed.horizon();
});