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
					]
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
					]
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

		for (var m = 0; m < selectedPlan.timeline.length; m++) {
			var xOffset = 400;

			for (var i = 0; i < selectedPlan.rooms.length; i++) {
				//console.log(selectedPlan.rooms[0].coords.join(""))

				var coords = selectedPlan.rooms[i].coords;
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

				var xProper = 200 + (m * xOffset);
				// 180 is a magic number, get rid of it later
				var currentPath = assignWidths(i === 0 ? xProper : xProper + 180, 300, coords).join("");

				paper.path(currentPath);
				paper.text(xProper, 100, selectedPlan.timeline[m].date)


			}
		}
		

		

		//paper.circle(10, 10, 100);

	}
}


$(document).ready(function() {
	floorplans.init();
});