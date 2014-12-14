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
					"date": "January 2014",
					"description": "One round of new hires"
				},
				{
					"date": "March 2014",
					"description": "Tear down this wall"
				},
				{
					"date": "April 2014",
					"description": "Get rid of Z-formation"
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
				}
			]
		},
		"apartment": {

		}
	},
	"plan": function() {
		var paper =  Raphael(0, 0, 10000, 1000);
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
					paper.text(xProper, yStart - 150, selectedPlan.timeline[m].date)
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
					var objX = xOffset + currentObject.coord[0];
					var objY = yStart + currentObject.coord[1];

					if (refObject.dimensions.length === 2) {
						var assembleFurniture = paper.rect(objX, objY, refObject.dimensions[0], refObject.dimensions[1]).attr({"stroke": "#00E7FF"});
					} else {
						var assembleFurniture = paper.circle(objX, objY, refObject.dimensions[0]).attr({"stroke": "#00E7FF"});
					}
					
				}
			}
		}
	}
}


$(document).ready(function() {
	floorplans.init();
});