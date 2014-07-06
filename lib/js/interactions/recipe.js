function Recipe($scope) {
	
	$scope.name = "";
	
	$scope.fields = ["price", "servings", "time", "quality", "special"]
	$scope.store = {
		"price": 0, 
		"servings": 1,
		"time": 0,
		"quality": 3,
		"special": 0
	}
	
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
	
	
	$scope.storeFinal = function() {
		var stars = $scope.store.quality;
		var starHandicap = 1;
		
		switch (stars) {
			case 0:
				starHandicap = 10;
				break;
			case 1:
				starHandicap = 5;
				break;
			case 2:
				starHandicap = 2;
				break;
			case 3:
				starHandicap = 1;
				break;
			case 4:
				starHandicap = .5;
				break;
			case 5:
				starHandicap = .2;
				break;
			default:
				starHandicap = 1;
				break;
		}
		
		$scope.store.starHandicap = starHandicap;
		
		return ($scope.store.price / $scope.store.servings) * starHandicap + $scope.store.special;
	}
	
	
	$scope.home.starHandicap = function() {
		
	}
	
	$scope.homeFinal = function() {
		var diff = $scope.home.time - $scope.store.time;
		var timeHandicap = 1;
		
		if (diff >= 10) {
			timeHandicap = 1.25;
		} else if (diff > 10 && diff <= 30) {
			timeHandicap = 1.5;
		} else if (diff > 30 && diff <= 60) {
			timeHandicap = 1.5;
		} else if (diff > 60 && diff <= 120) {
			timeHandicap = 2;
		} else if (diff > 120) {
			timeHandicap = 4;
		}
		
		var stars = $scope.home.quality;
		var starHandicap = 1;
		
		switch (stars) {
			case 0:
				starHandicap = 10;
				break;
			case 1:
				starHandicap = 5;
				break;
			case 2:
				starHandicap = 2;
				break;
			case 3:
				starHandicap = 1;
				break;
			case 4:
				starHandicap = .5;
				break;
			case 5:
				starHandicap = .2;
				break;
			default:
				starHandicap = 1;
				break;
		}
		
		$scope.home.timeHandicap = timeHandicap;
		$scope.home.starHandicap = starHandicap;
		
		return ($scope.home.price / $scope.home.servings) * timeHandicap * starHandicap + $scope.home.special;
	}
	
	
}