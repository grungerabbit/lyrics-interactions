var aay = angular.module('aay', []);

aay.controller('colors', function colorSettings ($scope) {
	$scope.base = "#E50000";
	$scope.art = "#1d1caa";

	// from nextlevel
	$scope.shirtColors = [
		{
			"name": "Kelly Green",
			"hex": "#00A64D"
		},
		{
			"name": "Tahiti Blue",
			"hex": "#00CDD6"
		},
		{
			"name": "Turquoise",
			"hex": "#0068CD"
		},
		{
			"name": "Royal",
			"hex": "#23007C"
		},
		{
			"name": "Purple Rush",
			"hex": "#79008C"
		},
		{
			"name": "Red",
			"hex": "#E50000"
		}
	]

	// from customink
	$scope.inkColors = [
		{
			"name": "Black",
			"hex": "#000000"
		},
		{
			"name": "Grey",
			"hex": "#646d70"
		},
		{
			"name": "Light Grey",
			"hex": "#ccc5ce"
		},
		{
			"name": "White",
			"hex": "#fefefe"
		},
		{
			"name": "Cardinal",
			"hex": "#af1225"
		},
		{
			"name": "Red",
			"hex": "#ff0000"
		},
		{
			"name": "Orange Red",
			"hex": "#ff0000"
		},
		{
			"name": "Pink",
			"hex": "#fdc5c6"
		},
		{
			"name": "Charity Pink",
			"hex": "#ffa6c0"
		},
		{
			"name": "Hot Pink",
			"hex": "#ff2299"
		},
		{
			"name": "Magenta",
			"hex": "#f70099"
		},
		{
			"name": "Orange",
			"hex": "#ff5c00"
		},
		{
			"name": "Light Orange",
			"hex": "#ff9700"
		},
		{
			"name": "Athletic Gold",
			"hex": "#ffb500"
		},
		{
			"name": "Tan",
			"hex": "#d4985f"
		},
		{
			"name": "Brown",
			"hex": "#8e3900"
		},
		{
			"name": "Old Gold",
			"hex": "#a78400"
		},
		{
			"name": "Olive",
			"hex": "#818600"
		},
		{
			"name": "Gold",
			"hex": "#dcb900"
		},
		{
			"name": "Yellow",
			"hex": "#f8ff00"
		},
		{
			"name": "Lemon",
			"hex": "#f1f374"
		},
		{
			"name": "Forest",
			"hex": "#006034"
		},
		{
			"name": "Kelly Green",
			"hex": "#005538"
		},
		{
			"name": "Teal",
			"hex": "#007574"
		},
		{
			"name": "Green",
			"hex": "#00b41c"
		},
		{
			"name": "Lime",
			"hex": "#93e66b"
		},
		{
			"name": "Navy",
			"hex": "#002d68"
		},
		{
			"name": "Royal",
			"hex": "#1d1caa"
		},
		{
			"name": "Blue",
			"hex": "#5900e0"
		},
		{
			"name": "Light Blue",
			"hex": "#9fcfe4"
		},
		{
			"name": "Turquoise",
			"hex": "#00bee6"
		},
		{
			"name": "Dark Purple",
			"hex": "#66005c"
		},
		{
			"name": "Bright Purple",
			"hex": "#550f93"
		},
		{
			"name": "Light Purple",
			"hex": "#cb89cc"
		},
		{
			"name": "Maroon",
			"hex": "#a3003b"
		}
	]
});