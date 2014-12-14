var plans = angular.module('plans', []);

plans.controller("planSettings", function planSettings ($scope) {

});

var floorplans = {
	"init": function() {
		floorplans.plan();
	},
	"layouts": {
		"prodaq": {
			"rooms": [
				{
					"name": "West",
					"startX":  220,
					"startY": 200,
					"coords": [
						//"M", 220, ",", 200,
						"l", -130, ",", 0,
						"l", 0, ",", -40,
						"l", 10, ",", 0,
						"l", -10, ",", 0,
						"l", 0, ",", -100,
						"l", 150, ",", 0,
						"l", 0, ",", 120
					],
					"maxWidth": 150
				},
				{
					"name": "East",
					"coords": [
						//"M", 400, ",", 200,
						"l", -170, ",", 0,
						"l", 0, ",", -140,
						"l", 170, ",", 0,
						"l", 0, ",", 120
					],
					"maxWidth": 190
				},
				{
					"name": "East",
					"coords": [
						//"M", 400, ",", 200,
						"l", -25, ",", 0
					],
					"maxWidth": 60
				}
			],
			"timeline": [
				{
					"date": "September 2013",
					"description": "First move into the new space",
					"personnel": 7,
					"contents":	[
						// prodaq west
						{
							"ref": "lc",
							"coord": [-310, -80]
						},
						// prodaq east, left side
						{
							"ref": "vd",
							"coord": [-240, -140]
						},
						{
							"ref": "vd",
							"coord": [-240, -100]
						},
						{
							"ref": "vd",
							"coord": [-240, -60]
						},
						{
							"ref": "cc",
							"coord": [-220, -120]
						},
						{
							"ref": "cc",
							"coord": [-220, -80]
						},
						{
							"ref": "cc",
							"coord": [-220, -40]
						},
						{
							"ref": "food",
							"coord": [-240, -20]
						},
						// prodaq east, right side
						{
							"ref": "vd",
							"coord": [-90, -140]
						},
						{
							"ref": "vd",
							"coord": [-90, -100]
						},
						{
							"ref": "vd",
							"coord": [-90, -60]
						},
						{
							"ref": "cc",
							"coord": [-90, -120]
						},
						{
							"ref": "cc",
							"coord": [-90, -80]
						},
						{
							"ref": "cc",
							"coord": [-90, -40]
						},
						{
							"ref": "mc",
							"coord": [-155, -80]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20]
						}
					]
				},
				{
					"date": "November 2013",
					"description": "Big furniture shipment",
					"personnel": 8,
					"contents":	[
						// prodaq west
						{
							"ref": "lc",
							"coord": [-310, -80]
						},
						// prodaq east, left side
						{
							"ref": "vd",
							"coord": [-240, -140]
						},
						{
							"ref": "vd",
							"coord": [-240, -100]
						},
						{
							"ref": "vd",
							"coord": [-240, -60]
						},
						{
							"ref": "cc",
							"coord": [-220, -120]
						},
						{
							"ref": "cc",
							"coord": [-220, -80]
						},
						{
							"ref": "cc",
							"coord": [-220, -40]
						},
						{
							"ref": "food",
							"coord": [-240, -20]
						},
						// prodaq east, right side
						{
							"ref": "vd",
							"coord": [-90, -140]
						},
						{
							"ref": "vd",
							"coord": [-90, -100]
						},
						{
							"ref": "vd",
							"coord": [-90, -60]
						},
						{
							"ref": "cc",
							"coord": [-90, -120]
						},
						{
							"ref": "cc",
							"coord": [-90, -80]
						},
						{
							"ref": "cc",
							"coord": [-90, -40]
						},
						{
							"ref": "wt",
							"coord": [-175, -120]
						},
						{
							"ref": "wbh",
							"coord": [-170, -130]
						},
						{
							"ref": "wbh",
							"coord": [-170, -45]
						},
						{
							"ref": "wbv",
							"coord": [-185, -115]
						},
						{
							"ref": "wbv",
							"coord": [-185, -75]
						},
						{
							"ref": "wbv",
							"coord": [-140, -115]
						},
						{
							"ref": "wbv",
							"coord": [-140, -75]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "wmc",
							"coord": [-180, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20]
						},
						{
							"ref": "vd",
							"coord": [-30, -80]
						},
						{
							"ref": "cc",
							"coord": [-30, -60]
						}
					]
				},
				{
					"date": "January 2014",
					"description": "One round of new hires",
					"personnel": 13,
					"contents":	[
						// prodaq west
						{
							"ref": "lc",
							"coord": [-310, -80]
						},
						// prodaq east, left side
						{
							"ref": "vd",
							"coord": [-240, -140]
						},
						{
							"ref": "vd",
							"coord": [-240, -100]
						},
						{
							"ref": "vd",
							"coord": [-240, -60]
						},
						{
							"ref": "cc",
							"coord": [-220, -120]
						},
						{
							"ref": "cc",
							"coord": [-220, -80]
						},
						{
							"ref": "cc",
							"coord": [-220, -40]
						},
						{
							"ref": "food",
							"coord": [-240, -20]
						},
						// prodaq east, right side
						{
							"ref": "vd",
							"coord": [-90, -140]
						},
						{
							"ref": "vd",
							"coord": [-90, -100]
						},
						{
							"ref": "vd",
							"coord": [-90, -60]
						},
						{
							"ref": "cc",
							"coord": [-90, -120]
						},
						{
							"ref": "cc",
							"coord": [-90, -80]
						},
						{
							"ref": "cc",
							"coord": [-90, -40]
						},
						{
							"ref": "wt",
							"coord": [-175, -120]
						},
						{
							"ref": "wbh",
							"coord": [-170, -130]
						},
						{
							"ref": "wbh",
							"coord": [-170, -45]
						},
						{
							"ref": "wbv",
							"coord": [-185, -115]
						},
						{
							"ref": "wbv",
							"coord": [-185, -75]
						},
						{
							"ref": "wbv",
							"coord": [-140, -115]
						},
						{
							"ref": "wbv",
							"coord": [-140, -75]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "wmc",
							"coord": [-180, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20]
						},
						{
							"ref": "vd",
							"coord": [-30, -80]
						},
						{
							"ref": "cc",
							"coord": [-30, -60]
						},
						// literal siberia
						{
							"ref": "vd",
							"coord": [-340, 60]
						},
						{
							"ref": "cc",
							"coord": [-340, 80]
						},
						{
							"ref": "vd",
							"coord": [-340, 100]
						},
						{
							"ref": "cc",
							"coord": [-340, 120]
						},
						{
							"ref": "vd",
							"coord": [-340, 140]
						},
						{
							"ref": "cc",
							"coord": [-340, 160]
						},
						{
							"ref": "vd",
							"coord": [-320, 60]
						},
						{
							"ref": "cc",
							"coord": [-300, 80]
						},
						{
							"ref": "vd",
							"coord": [-320, 100]
						},
						{
							"ref": "cc",
							"coord": [-300, 120]
						},
						{
							"ref": "vd",
							"coord": [-320, 140]
						},
						{
							"ref": "cc",
							"coord": [-300, 160]
						},
						{
							"ref": "mc",
							"coord": [-320, 230]
						},
						{
							"ref": "special",
							"coord": [-400, 20]
						}
					]
				},
				{
					"date": "February 2014",
					"description": "Tear down this wall",
					"personnel": 14,
					"contents":	[
						// prodaq west
						{
							"ref": "food",
							"coord": [-390, -60]
						},
						{
							"ref": "shd",
							"coord": [-390, -110]
						},
						{
							"ref": "shd",
							"coord": [-345, -110]
						},
						{
							"ref": "shd",
							"coord": [-330, -55]
						},
						{
							"ref": "shd",
							"coord": [-285, -55]
						},
						{
							"ref": "cc",
							"coord": [-380, -90]
						},
						{
							"ref": "cc",
							"coord": [-360, -110]
						},
						{
							"ref": "cc",
							"coord": [-330, -90]
						},
						{
							"ref": "cc",
							"coord": [-310, -110]
						},

						{
							"ref": "cc",
							"coord": [-300, -55]
						},
						{
							"ref": "cc",
							"coord": [-250, -55]
						},
						{
							"ref": "cc",
							"coord": [-320, -35]
						},
						{
							"ref": "td",
							"coord": [-242, -20]
						},

						// prodaq east, left side
						{
							"ref": "vd",
							"coord": [-240, -140]
						},
						{
							"ref": "vd",
							"coord": [-240, -100]
						},
						{
							"ref": "vd",
							"coord": [-240, -60]
						},
						{
							"ref": "cc",
							"coord": [-220, -120]
						},
						{
							"ref": "cc",
							"coord": [-220, -80]
						},
						{
							"ref": "cc",
							"coord": [-220, -40]
						},
						// prodaq east, right side
						{
							"ref": "vd",
							"coord": [-90, -140]
						},
						{
							"ref": "vd",
							"coord": [-90, -100]
						},
						{
							"ref": "vd",
							"coord": [-90, -60]
						},
						{
							"ref": "cc",
							"coord": [-90, -120]
						},
						{
							"ref": "cc",
							"coord": [-90, -80]
						},
						{
							"ref": "cc",
							"coord": [-90, -40]
						},
						{
							"ref": "wt",
							"coord": [-175, -120]
						},
						{
							"ref": "wbh",
							"coord": [-170, -130]
						},
						{
							"ref": "wbh",
							"coord": [-170, -45]
						},
						{
							"ref": "wbv",
							"coord": [-185, -115]
						},
						{
							"ref": "wbv",
							"coord": [-185, -75]
						},
						{
							"ref": "wbv",
							"coord": [-140, -115]
						},
						{
							"ref": "wbv",
							"coord": [-140, -75]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "wmc",
							"coord": [-180, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20]
						}
					]
				},
				{
					"date": "March 2014",
					"description": "Get rid of Z-formation",
					"personnel": 15,
					"contents":	[
						// prodaq west
						{
							"ref": "food",
							"coord": [-330, -140]
						},
						{
							"ref": "shd",
							"coord": [-390, -110]
						},
						{
							"ref": "shd",
							"coord": [-285, -110]
						},
						{
							"ref": "shd",
							"coord": [-390, -60]
						},
						{
							"ref": "shd",
							"coord": [-285, -60]
						},
						{
							"ref": "cc",
							"coord": [-380, -90]
						},
						{
							"ref": "cc",
							"coord": [-360, -110]
						},
						{
							"ref": "cc",
							"coord": [-275, -90]
						},
						{
							"ref": "cc",
							"coord": [-255, -110]
						},

						{
							"ref": "cc",
							"coord": [-360, -60]
						},
						{
							"ref": "cc",
							"coord": [-250, -60]
						},
						{
							"ref": "wmc",
							"coord": [-325, -15]
						},
						{
							"ref": "td",
							"coord": [-242, -20]
						},
						{
							"ref": "vd",
							"coord": [-390, -40]
						},
						{
							"ref": "cc",
							"coord": [-370, -20]
						},

						// prodaq east, left side
						{
							"ref": "vd",
							"coord": [-240, -140]
						},
						{
							"ref": "vd",
							"coord": [-240, -100]
						},
						{
							"ref": "vd",
							"coord": [-240, -60]
						},
						{
							"ref": "cc",
							"coord": [-220, -120]
						},
						{
							"ref": "cc",
							"coord": [-220, -80]
						},
						{
							"ref": "cc",
							"coord": [-220, -40]
						},
						// prodaq east, right side
						{
							"ref": "vd",
							"coord": [-90, -140]
						},
						{
							"ref": "vd",
							"coord": [-90, -100]
						},
						{
							"ref": "vd",
							"coord": [-90, -60]
						},
						{
							"ref": "cc",
							"coord": [-90, -120]
						},
						{
							"ref": "cc",
							"coord": [-90, -80]
						},
						{
							"ref": "cc",
							"coord": [-90, -40]
						},
						{
							"ref": "wt",
							"coord": [-175, -120]
						},
						{
							"ref": "wbh",
							"coord": [-170, -130]
						},
						{
							"ref": "wbh",
							"coord": [-170, -45]
						},
						{
							"ref": "wbv",
							"coord": [-185, -115]
						},
						{
							"ref": "wbv",
							"coord": [-185, -75]
						},
						{
							"ref": "wbv",
							"coord": [-140, -115]
						},
						{
							"ref": "wbv",
							"coord": [-140, -75]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "wmc",
							"coord": [-180, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20]
						},
						{
							"ref": "vd",
							"coord": [-30, -80]
						},
						{
							"ref": "cc",
							"coord": [-30, -60]
						}
					]
				},
				{
					"date": "July 2014",
					"description": "Big reorganization"
				},
				{
					"date": "September 2014",
					"description": "Prodaq West seating change"
				},
				{
					"date": "December 2014",
					"description": "Post-Christmas layout"
				}
			],
			"furniture": [
				{
					"name": "Desk Vertical",
					"ref": "vd",
					"dimensions": [20, 40]
				},
				{
					"name": "Desk Horizontal",
					"ref": "hd",
					"dimensions": [40, 20]
				},
				{
					"name": "Desk Horizontal Squiggly",
					"ref": "shd",
					"dimensions": [45, 20]
				},
				{
					"name": "Office chair",
					"ref": "cc",
					"dimensions": [10]
				},
				{
					"name": "Fridge",
					"ref": "food",
					"dimensions": [20, 20]
				},
				{
					"name": "Medium Circle table",
					"ref": "mc",
					"dimensions": [30]
				},
				{
					"name": "Large Circle table",
					"ref": "lc",
					"dimensions": [40]
				},
				{
					"name": "Wooden Table",
					"ref": "wt",
					"dimensions": [40, 80]
				},
				{
					"name": "Wooden Bench Vertical",
					"ref": "wbv",
					"dimensions": [15, 30]
				},
				{
					"name": "Wooden Bench Horizontal",
					"ref": "wbh",
					"dimensions": [30, 15]
				},
				{
					"name": "Television",
					"ref": "tv",
					"dimensions": [30, 5]
				},
				{
					"name": "Wooden Media Console",
					"ref": "wmc",
					"dimensions": [50, 15]
				},
				{
					"name": "Scale break",
					"ref": "special",
					"dimensions": ["l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15","l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15"]
				},
				{
					"name": "Teardown",
					"ref": "td",
					"dimensions": [5, 15]
				}
			]
		},
		"apartment": {

		}
	},
	"plan": function() {
		var paper =  Raphael(0, 0, 10000, 700);
		var selectedPlan = floorplans.layouts.prodaq;

		var xOffset = 0;

		var xStart = 200;
		var yStart = 300;

		// pre-process room loop for the max width
		for (var j = 0; j < selectedPlan.rooms.length; j++) {
			xOffset += selectedPlan.rooms[j].maxWidth + 20;
		}

		function assignWidths(x, y, cache) {
			if (cache[0] == "M") {
				cache.splice(0, 4);	
			}
			cache.unshift(y);
			cache.unshift(",");
			cache.unshift(x);
			cache.unshift("M");
			return cache;
		}
		
		for (var m = 0; m < selectedPlan.timeline.length; m++) {
			var cumulativeOffset = 0;
			var currentTimeline = selectedPlan.timeline[m];
			var xProper = xStart + (m * xOffset);

			// {?} draw rooms
			for (var i = 0; i < selectedPlan.rooms.length; i++) {
				
				if (i !== 0) {
					cumulativeOffset += selectedPlan.rooms[i].maxWidth;
				}

				
				var currentRoom = selectedPlan.rooms[i];
				var coords = currentRoom.coords;
				

				//console.log(cumulativeOffset + xProper)

				var currentPath = assignWidths(i === 0 ? xProper : xProper + cumulativeOffset, yStart, coords).join("");
				paper.path(currentPath).attr({'stroke-width': 3});
				if (i == 0) {
					paper.text(xProper, yStart - 150, currentTimeline.date);
					paper.text(xProper, yStart - 180, currentTimeline.description + " (" + currentTimeline.personnel + " NYC personnel)");
				}
			}

			
			// {?} cache furniture references
			var furnitureRefs = [];
			for (var r = 0; r < selectedPlan.furniture.length; r++) {
				furnitureRefs.push(selectedPlan.furniture[r].ref)
			}

			// {?} draw contents per timeline
			if (currentTimeline.contents !== undefined) {
				for (var f = 0; f < currentTimeline.contents.length; f++) {
					//console.log(currentTimeline.contents[f]);

					currentObject = currentTimeline.contents[f];

					//console.log(selectedPlan.furniture)

					var lookupIndex = furnitureRefs.indexOf(currentObject.ref);
					//console.log(selectedPlan.furniture[lookupIndex])

					var refObject = selectedPlan.furniture[lookupIndex];
					var objX = xProper + cumulativeOffset + 10 + currentObject.coord[0];
					var objY = yStart + currentObject.coord[1];
					var assembleFurniture;

					if (refObject.dimensions.length === 2) {
						assembleFurniture = paper.rect(objX, objY, refObject.dimensions[0], refObject.dimensions[1]).attr({"stroke": "#00E7FF"});
						if (refObject.ref === "td") {
							assembleFurniture.attr({"stroke": "none", "fill": "#69878c"})
						}
					} else if (refObject.dimensions.length === 1) {
						assembleFurniture = paper.circle(objX, objY, refObject.dimensions[0]).attr({"stroke": "#00E7FF"});
					} else {
						var assemble = "M" + objX + "," + objY + refObject.dimensions.join("");
						assembleFurniture = paper.path(assemble).attr({"stroke": "#008C9B", "stroke-width": 3});
					}
					
				}
			}
		}
	}
}


$(document).ready(function() {
	floorplans.init();
});