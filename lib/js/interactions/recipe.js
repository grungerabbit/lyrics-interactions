function Recipe($scope) {
	
	$scope.name = "";
	
	$scope.fields = ["price", "servings", "time", "quality"]
	$scope.store = {
		"price": 0, 
		"servings": 1,
		"time": 0,
		"quality": 3,
		"special": 0
	}
	
	$scope.storeName = "";
	$scope.storeMinutes = "";
	$scope.timeToTable = 0;
	
	$scope.ingredients = [];
	
	$scope.ingName = "";
	$scope.ingPrice = "";
	$scope.ingUse = "";
	
	$scope.addIngredient = function() {
		$scope.ingredients.push(new foodItem($scope.ingName, $scope.ingPrice, $scope.ingUse));
		$scope.ingName = "";
		$scope.ingPrice = "";
		$scope.ingUse = "";
	}
	
	var costs = [];
	
	function addCost() {
		var current = 0;
		for (var i = 0; i < costs.length; i++) {
			current += costs[i];
		}
	    return current;
	}
	
	$scope.removeIngredient = function(index) {
		$scope.ingredients.splice(index, 1);
		costs.splice(index, 1);
		if (costs.length === 0) {
			$scope.home.price = 0;
		}
	}
	
	var foodItem = function(name, price, use) {
		this.name = name;
		this.price = price;
		this.use = use;
		this.calc = function() {
			var multiplier;
			
			if (use.match("/")) {
				var split = use.split("/");
				multiplier = split[0]/split[1];
			} else {
				multiplier = parseFloat(use);
			}
			var result = parseFloat(price) * multiplier;
			
			costs.push(result);
			$scope.home.price = addCost();
			
			return result;
		}
	}
	
	
	$scope.home = {
		"price": 0, 
		"servings": 1,
		"time": 0,
		"quality": 3,
		"special": 0
	}
	

	$scope.$watch("store.quality", function(newValue, oldValue) {
		var stars = newValue;
		var starHandicap;
		switch (newValue) {
			case "0":
				starHandicap = 10;
				break;
			case "1":
				starHandicap = 5;
				break;
			case "2":
				starHandicap = 2;
				break;
			case "3":
				starHandicap = 1;
				break;
			case "4":
				starHandicap = .5;
				break;
			case "5":
				starHandicap = .2;
				break;
			default:
				starHandicap = 1;
				break;
		}
		$scope.store.starHandicap = starHandicap;
	});
	
	$scope.$watch("home.quality", function(newValue, oldValue) {
		var stars = newValue;
		var starHandicap;
		switch (newValue) {
			case "0":
				starHandicap = 10;
				break;
			case "1":
				starHandicap = 5;
				break;
			case "2":
				starHandicap = 2;
				break;
			case "3":
				starHandicap = 1;
				break;
			case "4":
				starHandicap = .5;
				break;
			case "5":
				starHandicap = .2;
				break;
			default:
				starHandicap = 1;
				break;
		}
		$scope.home.starHandicap = starHandicap;
	});
	
	$scope.$watch("store.time", function(newValue) {
		var newMin = parseInt($scope.storeMinutes.length > 0 ? parseInt($scope.storeMinutes) : 0);
		var coerce = parseInt(newValue);
		var timeToTable = parseInt(coerce + newMin);
		
		var diff = parseInt(timeToTable - $scope.home.time);
		var timeHandicap = 1;
		
		if (coerce > 10) {
			if (diff <= 10) {
				timeHandicap = 1;
			} else if (diff > 10 && diff <= 30) {
				timeHandicap = 1.25;
			} else if (diff > 30 && diff <= 60) {
				timeHandicap = 1.5;
			} else if (diff > 60 && diff <= 120) {
				timeHandicap = 2;
			} else if (diff > 120) {
				timeHandicap = 4;
			}
		}
		if (diff > 0) {
			$scope.store.timeHandicap = timeHandicap;
		} else {
			$scope.home.timeHandicap = timeHandicap;
		}
		
		$scope.timeToTable = timeToTable ? timeToTable : 0;
	});
	
	$scope.$watch("storeMinutes", function(newValue) {
		var newMin = parseInt($scope.storeMinutes.length > 0 ? parseInt($scope.storeMinutes) : 0);
		var cookTime = parseInt($scope.store.time);
		
		$scope.timeToTable = newMin + cookTime;
	});
	
	$scope.$watch("home.time", function(newValue) {
		var coerce = parseInt(newValue);
		var newMin = parseInt($scope.storeMinutes.length > 0 ? parseInt($scope.storeMinutes) : 0);
		var diff = parseInt(coerce - ($scope.store.time + newMin));
		var timeHandicap = 1;
		
		// if it takes any longer than 10 minutes absolutely
		if (coerce > 10) {
			if (diff <= 10) {
				timeHandicap = 1;
			} else if (diff > 10 && diff <= 30) {
				timeHandicap = 1.25;
			} else if (diff > 30 && diff <= 60) {
				timeHandicap = 1.5;
			} else if (diff > 60 && diff <= 120) {
				timeHandicap = 2;
			} else if (diff > 120) {
				timeHandicap = 4;
			}
		}
		
		if (diff > 0) {
			$scope.home.timeHandicap = timeHandicap;
		} else {
			$scope.store.timeHandicap = timeHandicap;
		}
	});
	
	$scope.storeFinal = function() {
		return ($scope.store.price / $scope.store.servings) * $scope.store.timeHandicap * $scope.store.starHandicap + $scope.store.special;
	}
	
	
	$scope.homeFinal = function() {
		return ($scope.home.price / $scope.home.servings) * $scope.home.timeHandicap * $scope.home.starHandicap + $scope.home.special;
	}
	
	
	$scope.savings = function() {
		return Math.abs($scope.storeFinal() - $scope.homeFinal());
	}
	
	$scope.ingTotal = function() {
		var total = 0;
		for (var j = 0; j < $scope.ingredients.length; j++) {
			total += parseFloat($scope.ingredients[j].price);
		}
		return total;
	}
	
	$scope.winner = function() {
		var winner;
		
		if ($scope.storeFinal() == $scope.homeFinal()) {
			winner = "either"
		} else if ($scope.storeFinal() < $scope.homeFinal()) {
			winner = $scope.storeName.length > 0 ? $scope.storeName : "the store";
		} else {
			winner = "home";
		}
		
		return winner;
	}
	
	$scope.processQuality = function(reading) {
		var rating;
		switch (reading) {
			case "0":
				rating = "Awful";
				break;
			case "1":
				rating = "Poor";
				break;
			case "2":
				rating = "Fair";
				break;
			case "3":
				rating = "Average";
				break;
			case "4":
				rating = "Good";
				break;
			case "5":
				rating = "Sublime";
				break;
			default:
				rating = "Average";
				break;
		}
		return rating;
	}
	

}