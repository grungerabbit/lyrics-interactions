function Recipe($scope) {
	
	$scope.name = "Macaroni";
	
	$scope.test = function() {
		console.log("CLASSY")
		console.log($scope.store)
	}
	
	$scope.test2 = 5;
	
	$scope.fields = ["price", "servings", "time", "quality", "special"]
	$scope.store = {
		"price": 0, 
		"servings": 0,
		"time": 0,
		"quality": 0,
		"special": 0
	}
	
	$scope.home = {
		"price": 0, 
		"servings": 0,
		"time": 0,
		"quality": 0,
		"special": 0
	}
	
	
}