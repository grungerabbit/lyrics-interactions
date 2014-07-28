(function($) {
	var VP = {
		"config" : {
			"paper": function () { return Raphael(0, 0, 2000, 4000) },
			"horizon": 2800,
			"points": {
				"vpX1" : 40,
				"vpY1" : 2800,
				"vpX2" : 1900,
				"vpY2" : 2800,
				"vpX3" : 600,
				"vpY3" : -10000
			},
			"gridColor": "#94e515",
			"polyhedra" : [
				{
					"width": 200,
					"height": 500,
					"depth": 100,
					"seedX": 500,
					"seedY": 3500
				},
				{
					"width": 600,
					"height": 1000,
					"depth": 500,
					"seedX": 800,
					"seedY": 3200
				},
				{
					"width": 600,
					"height": 200,
					"depth": 500,
					"seedX": 1000,
					"seedY": 2000
				},
				{
					"width": 200,
					"height": 20,
					"depth": 40,
					"seedX": 100,
					"seedY": 3200
				},
				{
					"width": 100,
					"height": 400,
					"depth": 100,
					"seedX": 1800,
					"seedY": 3000
				},
				{
					"width": 500,
					"height": 500,
					"depth": 300,
					"seedX": 1300,
					"seedY": 3800
				},
				{
					"width": 1000,
					"height": 2600,
					"depth": 400,
					"seedX": 500,
					"seedY": 2850
				},
				{
					"width": 200,
					"height": 100,
					"depth": 400,
					"seedX": 150,
					"seedY": 3800
				}
			],
			"testCube" : [
				{
					"width": 600,
					"height": 1000,
					"depth": 500,
					"seedX": 800,
					"seedY": 1500
				}
			]
		},
		"init" : function () {
			var paper = VP.config.paper();
			var dataset = VP.config.polyhedra;
			
			for (var i = 0; i < dataset.length; i++) {
				var seed = VP.makePolyhedron(dataset[i], paper);
				seed.devPrism();
				
				if (i === 0) {
					VP.setupGrid(seed);
				}
			}
		},
		"setupGrid" : function (seed) {
			seed.drawVP();
			seed.horizon();
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
				paper.circle(this.vpX1, this.vpY1, 10).attr({"fill": VP.config.gridColor, "stroke-width" : 0});
				paper.circle(this.vpX2, this.vpY2, 10).attr({"fill": VP.config.gridColor, "stroke-width" : 0});
				paper.circle(this.vpX3, this.vpY3, 10).attr({"fill": VP.config.gridColor, "stroke-width" : 0});
			};
	
			Vanishing.prototype.seg = function(start, finish) {
				return paper.path("M" + start + finish);
			}
	
			Vanishing.prototype.horizon = function() {
				this.seg(this.v1, this.v2).attr({"stroke": VP.config.gridColor});
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
	

			Vanishing.prototype.devPrism = function() {
				vertices.length = 0;
				// seed
				this.guideSeg(this.seedX, this.seedY);
		
				// depth
				this.getNearVertex(this.depth, "one", "yellow");
				// width
				this.getNearVertex(this.width, "two", "magenta");
				// height
				this.getNearVertex(this.height, "three", "cyan");
		
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