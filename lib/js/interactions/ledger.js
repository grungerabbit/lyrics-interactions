function Ledger($scope) {
	$scope.inventory = [
		{"item": "sample", "cost": 3}
	];
	$scope.costs = function() {
		var total = 0;
		for (var i = 0; i < $scope.inventory.length; i++) {
			total += parseInt($scope.inventory[i].cost, 0);
		}
		return total;
	};

	function Item(item, cost) {
		this.item = item;
		this.cost = cost;
	}

	$scope.addCost = function() {
		$scope.inventory.push(new Item("sample", 0));
	}
}