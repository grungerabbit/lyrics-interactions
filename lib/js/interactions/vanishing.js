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
		paper.circle(this.vpX1, this.vpY1, 10).attr({"fill": "black"});
		paper.circle(this.vpX2, this.vpY2, 10).attr({"fill": "black"});
		paper.circle(this.vpX3, this.vpY3, 10).attr({"fill": "black"});
	};
	
	Vanishing.prototype.seg = function(start, finish) {
		return paper.path("M" + start + finish);
	}
	
	Vanishing.prototype.horizon = function() {
		this.seg(this.v1, this.v2);
	}
	
	Vanishing.prototype.guideSeg = function(segX, segY) {
		this.pointX = this.pointX ? this.pointX : segX;
		this.pointY = this.pointY ? this.pointY : segY;
		
		this.v1 = this.gc(this.vpX1, this.vpY1);
		this.v2 = this.gc(this.vpX2, this.vpY2);
		this.v3 = this.gc(this.vpX3, this.vpY3);
		this.p = this.gc(segX, segY);
		
		paper.circle(segX, segY, 5);
		
		this.seg(this.v1, this.p).attr({"stroke-dasharray": "--", "stroke" : "#aaa"});
		this.seg(this.v2, this.p).attr({"stroke-dasharray": "--", "stroke" : "#aaa"});
		this.seg(this.v3, this.p).attr({"stroke-dasharray": "--", "stroke" : "#aaa"});
	};
	
	Vanishing.prototype.edge = function(start, end) {
		this.seg(start, end).attr({"stroke-width": 2});
	}
	
	Vanishing.prototype.getSlope = function(selected) {
		var x, y;
		switch (selected) {
			case "one": 
				x = this.vpX1;
				y = this.vpY1;
				break;
			case "two": 
				x = this.vpX2;
				y = this.vpY2;
				break;
			case "three": 
				x = this.vpX3;
				y = this.vpY3;
				break;
		}
		
		this.checkX = x - this.pointX;
		
		return (y - this.pointY) / (x - this.pointX);
	}
	
	Vanishing.prototype.getB = function() {
		// y = mx + b
		// this.pointY - (this.slope * this.pointX) = b
		
		this.yIntercept = this.pointY - (this.slope * this.pointX);
		paper.text(this.pointX, this.pointY - 30, this.yIntercept + " yIntercept");
	}
	
	Vanishing.prototype.getHypotenuse = function(selected) {
		this.slope = this.getSlope(selected);
		return Math.sqrt(1 + (this.slope * this.slope));
	}
	
	Vanishing.prototype.getEndpoint = function(distance, selected, color) {
		color = color ? color : "red";
		this.hyp = this.getHypotenuse(selected);
		this.cos = 1 / (this.hyp);
		this.sin = this.slope / (this.hyp);
		
		var adjX = distance * this.cos;
		var adjY = distance * this.sin;
		var vertexX, vertexY;
		
		if (this.checkX < 0) {
			vertexX = this.pointX - adjX;
			vertexY = this.pointY - adjY;
		} else {
			vertexX = this.pointX + adjX;
			vertexY = this.pointY + adjY;
		}
		
		paper.circle(vertexX, vertexY, 7).attr({"fill": color});
		this.guideSeg(vertexX, vertexY);
		this.edge(this.gc(vertexX, vertexY), this.gc(this.pointX, this.pointY));
	}
	
	Vanishing.prototype.cube = function() {
		
	}
	
	Vanishing.prototype.dev = function(segX, segY) {
		this.guideSeg(segX, segY);
		this.getEndpoint(100, "one", "yellow");
		this.getEndpoint(450, "two", "cyan");
		this.getEndpoint(300, "three", "magenta")
	}
	
	var test = {
		"vpX1" : 40,
		"vpY1" : 100,
		"vpX2" : 1900,
		"vpY2" : 100,
		"vpX3" : 400,
		"vpY3" : 3500
	}
	
	var seed = new Vanishing(test);
	seed.drawSeed();
	seed.dev(200, 300);

	seed.horizon();
});