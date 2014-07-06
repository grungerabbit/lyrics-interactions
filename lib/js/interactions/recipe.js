function Recipe($scope) {
	
	$scope.name = "Macaroni";
	
	$scope.test = function() {
		console.log("CLASSY")
		console.log($scope.store)
	}
	
	
	$scope.store = {
		"price": "",
		"servings" : "",
		"taxes" : "",
		"time" : "",
		"quality" : ""
	}
	
	$scope.home = {
		"price": "",
		"servings" : "",
		"equipment" : "",
		"time" : "",
		"quality" : ""
	}
	
	
}