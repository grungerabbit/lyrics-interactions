
var vanish = angular.module('vanish', []);

vanish.controller('vanishingSettings', function vanishingSettings ($scope) {
	$scope.showVertices = true;
	$scope.showGrid = true;
	$scope.showSightlines = true;
	$scope.showEdges = true;
	$scope.scanlineUniform = false;
	
	$scope.openControl = false;
	
	$scope.toggleCtrlPanel = function() {
		$scope.openControl = !$scope.openControl;
	}
	
	$scope.scanlines = true;
	
	$scope.deselectAll = function() {
		$scope.showVertices = false;
		$scope.showGrid = false;
		$scope.showSightlines = false;
	}
	
	$scope.horizon = 2800;
	
	$scope.testCube = [
	{
		"width": 600,
		"height": 1000,
		"depth": 500,
		"seedX": 800,
		"seedY": 1500
	}
	];
	
	$scope.giantOnly = [
	{
		"width": 1000,
		"height": 2600,
		"depth": 400,
		"seedX": 500,
		"seedY": 2850
	}
	];
	
	$scope.polyhedra = [
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
	];
	
	$scope.dataset = $scope.polyhedra;
	
	var paper = Raphael(0, 0, 2000, 4000);
	
	
	$scope.redraw = function() {
		paper.remove();
		paper = Raphael(0, 0, 2000, 4000);
		
		console.log($scope.showVertices)
		console.log($scope.showGrid)
		console.log($scope.showSightlines)
		console.log($scope.scanlines)
		
		VP.init();
	}
	
	var VP = {
		"config" : {
			"paper": function () { return Raphael(0, 0, 2000, 4000) },
			"points": {
				"vpX1" : 40,
				"vpY1" : 2800,
				"vpX2" : 1900,
				"vpY2" : 2800,
				"vpX3" : 600,
				"vpY3" : -10000
			},
			"gridColor": "#94e515"
		},
		"init" : function () {
			//var paper = VP.config.paper();
		
			for (var i = 0; i < $scope.dataset.length; i++) {
				var seed = VP.makePolyhedron($scope.dataset[i], paper);
				seed.devPrism();
			
				if (i === 0) {
					VP.setupGrid(seed);
				}
				
				if ($scope.scanlines === true) {
					seed.makeScanlines(15);
				}
			}
		},
		"setupGrid" : function (seed) {
			if ($scope.showGrid === true) {
				seed.drawVP();
				seed.horizon();
			}
		},
		"makePolyhedron" : function (settings, paper) {
			var vertices = [];
		
			var Vertex = function(x, y, name) {
				this.xCoord = x;
				this.yCoord = y;
				this.name = name;
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

			Vanishing.prototype.guideSeg = function(segX, segY, color, name) {
				color = color ? color : "#aaa";
				this.pointX = this.pointX ? this.pointX : segX;
				this.pointY = this.pointY ? this.pointY : segY;
	
				this.v1 = this.gc(this.vpX1, this.vpY1);
				this.v2 = this.gc(this.vpX2, this.vpY2);
				this.v3 = this.gc(this.vpX3, this.vpY3);
				this.p = this.gc(segX, segY);
	
				if ($scope.showVertices === true) {
					paper.circle(segX, segY, 5);
				}
	
				vertices.push(new Vertex(segX, segY, name));
	
				if ($scope.showSightlines === true) {
					this.seg(this.v1, this.p).attr({"stroke-dasharray": "--", "stroke" : color});
					this.seg(this.v2, this.p).attr({"stroke-dasharray": "--", "stroke" : color});
					this.seg(this.v3, this.p).attr({"stroke-dasharray": "--", "stroke" : color});
				}
			};

			Vanishing.prototype.edge = function(start, end, thickness) {
				var thickness = thickness ? thickness : 2;
				this.seg(start, end).attr({"stroke-width": thickness, "stroke-linecap": "butt"});
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
					default:
						x = this.xCoord;
						y = this.yCoord;
						break;
				}
	
				this.checkX = x - compareX;
	
				return (y - compareY) / (x - compareX);
			}

			Vanishing.prototype.getDistance = function (first, second) {
				var x1 = first.xCoord;
				var x2 = second.xCoord;
				var y1 = first.yCoord;
				var y2 = second.yCoord;
				
				var subX = x2 - x1;
				var squareX = Math.pow(subX, 2);
				
				var subY = y2 - y1;
				var squareY = Math.pow(subY, 2);
				
				return Math.sqrt(squareX + squareY);
			}

			Vanishing.prototype.getHypotenuse = function(selected) {
				this.slope = this.getSlope(selected);
				return Math.sqrt(1 + (this.slope * this.slope));
			}

			Vanishing.prototype.getNearVertex = function(distance, selected, color, name) {
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
	
				this.guideSeg(vertexX, vertexY, "#ccc", name);
			
				if ($scope.showVertices === true) {
					paper.circle(vertexX, vertexY, 7).attr({"fill": color});
				}
			
				if ($scope.showEdges === true) {
					this.edge(this.gc(vertexX, vertexY), this.gc(this.pointX, this.pointY));
				}
				
			}

			Vanishing.prototype.getMidVertex = function(vpoint1, vertex1, vpoint2, vertex2, color, name) {
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

				this.guideSeg(x, y, "#eee", name);
			
				if ($scope.showVertices === true) {
					paper.circle(x,y,7).attr({"fill": color});
				}
			
				if ($scope.showEdges === true) {
					this.edge(this.gc(x, y), this.gc(vertex1X, vertex1Y));
					this.edge(this.gc(x, y), this.gc(vertex2X, vertex2Y));
				}
			}

			Vanishing.prototype.getFarVertex = function(name) {
				this.getMidVertex("one", 6, "two", 5, "purple", name);
				
				if ($scope.showEdges === true) {
					this.edge(this.gc(vertices[4].xCoord, vertices[4].yCoord), this.gc(vertices[7].xCoord, vertices[7].yCoord));
				}
			}
			
			Vanishing.prototype.makeScanlines = function(numScanlines) {
				
				/*
					TODO: make numScanlines actually about density, rather than prescriptive #
				*/
				
				var self = this; 
				// ref to Vanishing
				function findSegmentPair(firstPoint, secondPoint) {
					var check1, check2;
					
					for (var b = 0; b < vertices.length; b++) {
						if (vertices[b].name === firstPoint) {
							check1 = vertices[b];
							check1.place = "first";
						} else if (vertices[b].name === secondPoint) {
							check2 = vertices[b];
							check2.place = "second";
						}
					}
					
					var distance = self.getDistance(check1, check2);
					var collection = [distance, check1, check2]
					
					//console.log("the length of segment " + firstPoint + secondPoint + " is " + distance);
					return collection;
				}
				
				function findScanlineVertices(firstSeg, secondSeg, orientation) {
					// or rather, (7/8 * distance) / 8
					// (((numScanlines - 1) / numScanlines) * firstSeg[0]) / 8 
					
					function Lines(segment) {
						this.distance = segment[0];
						this.first = segment[1];
						this.second = segment[2]
						this.leading = (((numScanlines - 1) / numScanlines) * this.distance);
						this.offset = this.distance - this.leading;
						this.divisor = this.leading / numScanlines;
					}
					
					
					
					for (var u = 0; u < numScanlines; u++) {
						/* 
						originary line:
						this.first.yCoord = (self.slope * this.first.xCoord) + b
						b = first.yCoord - (self.slope * this.first.xCoord)
						
						new line:
						y = mx + b
						this.adjust = this.slope * x + b
						this.adjust = (this.slope * x) + b
						this.adjust - b = this.slope * x
						(this.adjust - b) / this.slope = x
						*/				
						
						if (orientation === "horizontal") {
							var firstLine = new Lines(firstSeg);
							var secondLine = new Lines(secondSeg);
							Lines.prototype.currentAdjustment = function() {
								this.adjust = (this.divisor * u) + this.first.yCoord + this.offset;
							}
							
							firstLine.currentAdjustment();
							secondLine.currentAdjustment();
							
							function adjustXvalues(segment, place) {
							
								var currentSlope = self.getSlope("three", segment.first.xCoord, segment.first.yCoord);
								b = segment.first.yCoord - (currentSlope * segment.first.xCoord)
							
								var vertexX = (segment.adjust - b) / currentSlope;
								var vertexY = segment.adjust
	                        
								if ($scope.showVertices === true) {
									paper.circle(vertexX, vertexY, 3).attr({"fill": "pink"});
								}
								return vertexX;
							} 
							
							var scanlineThickness = $scope.scanlineUniform === true ? 2 : u + 3;
							
							self.edge(self.gc(adjustXvalues(firstLine, "first"), firstLine.adjust), self.gc(adjustXvalues(secondLine, "second"), secondLine.adjust), scanlineThickness)
						} else if (orientation === "vertical") {
							
							
						}
					
						
						
					}
					
				
				
				}
				
				
				findScanlineVertices(findSegmentPair("P", "R"), findSegmentPair("Q", "S"), "horizontal")
				findScanlineVertices(findSegmentPair("Q", "S"), findSegmentPair("U", "W"), "horizontal")
				
				//findScanlineVertices(findSegmentPair("P", "Q"), findSegmentPair("T", "U"), "vertical")
			}


			Vanishing.prototype.devPrism = function() {
				vertices.length = 0;
				
				// {?} names using following diagram, to make it easier:
				// http://image.wistatutor.com/content/feed/u837/1_1.JPG
				
				// seed
				this.guideSeg(this.seedX, this.seedY, null, "S");
	
				// depth
				this.getNearVertex(this.depth, "one", "yellow", "R");
				// width
				this.getNearVertex(this.width, "two", "magenta", "W");
				// height
				this.getNearVertex(this.height, "three", "cyan", "Q");
	
				this.getMidVertex("one", 2, "two", 1, "red", "V");
				this.getMidVertex("one", 3, "three", 1, "green", "P");
				this.getMidVertex("two", 3, "three", 2, "blue", "U");
	
				// reconsider
				this.getFarVertex("T");
			}

			return new Vanishing(settings);
		}
	}
	
	VP.init();
});