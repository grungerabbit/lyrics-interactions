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
						"l", -150, ",", 0,
						"l", 0, ",", -40,
						"l", 10, ",", 0,
						"l", -10, ",", 0,
						"l", 0, ",", -100,
						"l", 180, ",", 0,
						"l", 0, ",", 120
					],
					"maxWidth": 180
				},
				{
					"name": "East",
					"coords": [
						//"M", 400, ",", 200,
						"l", -150, ",", 0,
						"l", 0, ",", -40,
						"l", 10, ",", 0,
						"l", -10, ",", 0,
						"l", 0, ",", -100,
						"l", 180, ",", 0,
						"l", 0, ",", 120
					],
					"maxWidth": 180
				},
				{
					"name": "East",
					"coords": [
						//"M", 400, ",", 200,
						"l", 20, ",", 0
					],
					"maxWidth": 50
				}
			],
			"timeline": [
				{
					"date": "September 2013"
				},
				{
					"date": "etc"
				}
			],
			"furniture": [
				{
					"name": "Desk",
					"dimensions": []
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
			for (var i = 0; i < selectedPlan.rooms.length; i++) {
				
				if (i !== 0) {
					cumulativeOffset += selectedPlan.rooms[i].maxWidth;
				}

				var currentRoom = selectedPlan.rooms[i];
				var coords = currentRoom.coords;
				var xProper = xStart + (m * xOffset);

				//console.log(cumulativeOffset + xProper)

				var currentPath = assignWidths(i === 0 ? xProper : xProper + cumulativeOffset, yStart, coords).join("");

				paper.path(currentPath);
				if (i == 0) {
					paper.text(xProper, yStart - 150, selectedPlan.timeline[m].date)
				}
			}
		}
	}
}


$(document).ready(function() {
	floorplans.init();
});