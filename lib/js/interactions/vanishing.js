(function($) {
	var VP = {
		"config" : {
			"paper": function () { return Raphael(0, 0, 2000, 4000) },
			"horizon" : "",
			"points": {
				"vpX1" : 40,
				"vpY1" : 1650,
				"vpX2" : 1900,
				"vpY2" : 1650,
				"vpX3" : 600,
				"vpY3" : -3000
			},
			"polyhedra" : [
				{}
			],
		},
		"init" : function () {
			var paper = VP.config.paper();
			
	
			/*
				this.width = settings.width;
				this.height = settings.height;
				this.depth = settings.depth;
				this.seedX = settings.seedX;
				this.seedY = settings.seedY;
			*/
			
			var settings = {
				width: 200,
				height: 500,
				depth: 100,
				seedX: 500,
				seedY: 500
			}
	
			var seed = VP.makePolyhedron(settings, paper);
			
		
			//seed.drawVP();
			
			
			//console.log(VP.config.points)
			//console.log(seed)
			
			//seed.dev(200, 300);
			//seed.dev(800, 2000);
			//seed.cube(800,1500,300)
			//seed.cube(1200,1800,21)
			
			seed.cube()
	
			var seed2 = VP.makePolyhedron(settings, paper);
	
			//seed.dev(800,1500,300, 300, 200, 100)
			//seed2.dev(800,1800, 21, 155, 346, 500)

			//seed.cube(900,800,400);
			//seed2.cube(900,1200,200);

	
			//seed.test(500,2200,12)
			//seed.test(1000,100,12)
	
	
			for (var i = 0; i < VP.config.polyhedra.length; i++) {
		
				//new Vanishing(points)
				//
				//seed.init([])
			}
	

			VP.setupGrid(seed);
			
		},
		"setupGrid" : function (seed) {
			seed.drawVP();
			seed.horizon();
		},
		"drawPaper" : function () {
			return Raphael(0, 0, 2000, 4000);	
		},
		"makePolyhedron" : function (settings, paper) {
		
			
			
			var vertices = [];
			

			
			var Vertex = function(x, y) {
				this.xCoord = x;
				this.yCoord = y;
			}
			
			var Vanishing = function(settings) {
				this.vpX1 = VP.config.points.vpX1;
				this.vpY1 = VP.config.points.vpY1;
				this.vpX2 = VP.config.points.vpX2;
				this.vpY2 = VP.config.points.vpY2;
				this.vpX3 = VP.config.points.vpX3;
				this.vpY3 = VP.config.points.vpY3;
				this.width = settings.width;
				this.height = settings.height;
				this.depth = settings.depth;
				this.seedX = settings.seedX;
				this.seedY = settings.seedY;
			};
			
		    Vanishing.prototype.gc = function gC(x, y) {
		        return x + "," + y + ",";   
		    };
	
			Vanishing.prototype.drawVP = function() {
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
		
				this.guideSeg(vertexX, vertexY, "#ccc");
				paper.circle(vertexX, vertexY, 7).attr({"fill": color});
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

				this.guideSeg(x, y, "#eee");
				paper.circle(x,y,7).attr({"fill": color});
				this.edge(this.gc(x, y), this.gc(vertex1X, vertex1Y));
				this.edge(this.gc(x, y), this.gc(vertex2X, vertex2Y));
			}
	
			Vanishing.prototype.getFarVertex = function() {
				this.getMidVertex("one", 6, "two", 5, "purple");
				this.edge(this.gc(vertices[4].xCoord, vertices[4].yCoord), this.gc(vertices[7].xCoord, vertices[7].yCoord))	
			}
	
			Vanishing.prototype.dev = function() {
				// seed
				this.guideSeg(this.seedX, this.seedY);
		
				// width
				this.getNearVertex(this.width, "two", "magenta");
				// height
				this.getNearVertex(this.height, "three", "cyan");
				// depth
				this.getNearVertex(this.depth, "one", "yellow");
		
				this.getMidVertex("one", 2, "two", 1, "red");
				this.getMidVertex("one", 3, "three", 1, "green");
				this.getMidVertex("two", 3, "three", 2, "blue");
		
				// reconsider
				this.getFarVertex();
			}
	
			Vanishing.prototype.cube = function() {
				vertices.length = 0;
				// seed
				this.guideSeg(this.seedX, this.seedY);
		
				// depth
				this.getNearVertex(this.width, "one", "yellow");
				// width
				this.getNearVertex(this.width, "two", "magenta");
				// height
				this.getNearVertex(this.width, "three", "cyan");
		
				this.getMidVertex("one", 2, "two", 1, "red");
				this.getMidVertex("one", 3, "three", 1, "green");
				this.getMidVertex("two", 3, "three", 2, "blue");
		
				// reconsider
				this.getFarVertex();
			}
			
			
			
			return new Vanishing(settings);
		}
	}
	$(document).ready(function () {
		VP.init();
	});
})(jQuery);