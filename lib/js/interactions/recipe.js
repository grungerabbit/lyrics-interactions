function Recipe($scope) {
	
	$scope.name = "Macaroni";
	
	$scope.fields = ["price", "servings", "time", "quality", "special"]
	$scope.store = {
		"price": 0, 
		"servings": 0,
		"time": 0,
		"quality": 0,
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
		"servings": 0,
		"time": 0,
		"quality": 0,
		"special": 0
	}
}