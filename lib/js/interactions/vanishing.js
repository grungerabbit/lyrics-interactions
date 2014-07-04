$(document).ready(function () {
	var paper = Raphael(0, 0, 2000, 4000);

	var vertices = [];

	var Vertex = function(x, y) {
		this.xCoord = x;
		this.yCoord = y;
	}

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
	
	Vanishing.prototype.guideSeg = function(segX, segY, color) {
		color = color ? color : "#aaa";
		this.pointX = this.pointX ? this.pointX : segX;
		this.pointY = this.pointY ? this.pointY : segY;
		
		this.v1 = this.gc(this.vpX1, this.vpY1);
		this.v2 = this.gc(this.vpX2, this.vpY2);
		this.v3 = this.gc(this.vpX3, this.vpY3);
		this.p = this.gc(segX, segY);
		
		paper.circle(segX, segY, 5);
		vertices.push(new Vertex(segX, segY));
		
		this.seg(this.v1, this.p).attr({"stroke-dasharray": "--", "stroke" : color});
		this.seg(this.v2, this.p).attr({"stroke-dasharray": "--", "stroke" : color});
		this.seg(this.v3, this.p).attr({"stroke-dasharray": "--", "stroke" : color});
	};
	
	Vanishing.prototype.edge = function(start, end) {
		this.seg(start, end).attr({"stroke-width": 2});
	}
	
	Vanishing.prototype.getSlope = function(selected, compareX, compareY) {
		compareX = compareX ? compareX : this.pointX;
		compareY = compareY ? compareY : this.pointY;
		
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
		
		this.checkX = x - compareX;
		
		return (y - compareY) / (x - compareX);
	}
	
	Vanishing.prototype.getHypotenuse = function(selected) {
		this.slope = this.getSlope(selected);
		return Math.sqrt(1 + (this.slope * this.slope));
	}
	
	Vanishing.prototype.getNearVertex = function(distance, selected, color) {
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
		this.guideSeg(vertexX, vertexY, "#ccc");
		this.edge(this.gc(vertexX, vertexY), this.gc(this.pointX, this.pointY));
	}
	
	Vanishing.prototype.getMidVertex = function(vpoint1, vertex1, vpoint2, vertex2, color) {
		var color = color ? color : "red";
		
		var vertex1 = vertices[vertex1];
		var vertex2 = vertices[vertex2];
		var vertex1X = vertex1.xCoord;
		var vertex1Y = vertex1.yCoord;
		var vertex2X = vertex2.xCoord;
		var vertex2Y = vertex2.yCoord;
		
		var slope1 = this.getSlope(vpoint1, vertex1X, vertex1Y);
		var slope2 = this.getSlope(vpoint2, vertex2X, vertex2Y);
		
		// point-slope
		// y = slope1(x - vertex1X) + vertex1Y
		// slope1(x - vertex1X) + vertex1Y = slope2(x - vertex2X) + vertex2Y
		// slope1(x) - slope1(vertex1X) + vertex1Y = slope2(x) - slope2(vertex2X) + vertex2Y
		// slope1(x) - slope2(x) = slope1(vertex1X) - vertex1Y - slope2(vertex2X) + vertex2Y
		
		var x = ((slope1 * vertex1X) - vertex1Y - (slope2 * vertex2X) + vertex2Y) / (slope1 - slope2);
		var y = (slope1 * (x - vertex1X)) + vertex1Y;

		vertices.push(new Vertex(x, y));
		paper.circle(x,y,3).attr({"fill": color});
		this.guideSeg(x, y, "#eee");
		this.edge(this.gc(x, y), this.gc(vertex1X, vertex1Y));
		this.edge(this.gc(x, y), this.gc(vertex2X, vertex2Y));
	}
	
	Vanishing.prototype.getFarVertex = function() {
		
		
	}
	
	Vanishing.prototype.dev = function(segX, segY) {
		this.guideSeg(segX, segY);
		
		this.getNearVertex(100, "one", "yellow");
		this.getNearVertex(450, "two", "cyan");
		this.getNearVertex(300, "three", "magenta");
		
		this.getMidVertex("one", 2, "two", 1, "red");
		this.getMidVertex("one", 3, "three", 1, "green");
		this.getMidVertex("two", 3, "three", 2, "blue");
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
	
	console.log(vertices)
});