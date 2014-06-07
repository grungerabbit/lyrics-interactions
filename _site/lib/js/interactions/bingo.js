function Bingo($scope) {
	$scope.board = 25;

	$scope.test = "";
	
	$scope.getNumber = function(num) {
		return new Array(num);
	}
	
	$scope.instruct = [{"feeling" : "sad"}, {"feeling" : "angry"}, {"feeling" : "panic"}, {"feeling" : "jealous"}, {"feeling" : "desperate"}, {"feeling" : "ashamed"}, {"feeling" : "stupid"}, {"feeling" : "embarassed"}, {"feeling" : "guilty"}, {"feeling" : "moody"}, {"feeling" : "hungry"}, {"feeling" : "crying"}, {"feeling" : "hopeless"}, {"feeling" : "tired"}, {"feeling" : "pessimistic"}, {"feeling" : "elated"}, {"feeling" : "nervous"}, {"feeling" : "worried"}, {"feeling" : "paranoid"}, {"feeling" : "worthless"}, {"feeling" : "overwhelmed"}, {"feeling" : "bored"}, {"feeling" : "confrontational"}, {"feeling" : "self-loathing"}, {"feeling" : "dismissive"}];

	$scope.pushList = function() {
		$scope.instruct.unshift({"feeling": $scope.test});
		$scope.test = "";
	}

	$scope.boardSort = [];

	$scope.generateBoard = function() {
		var cache = $scope.board > $scope.instruct.length ? $scope.board : $scope.instruct.length;
		var cacheArray = $scope.instruct.slice(0);
		
		if ($scope.boardSort.length >= cache) {
			$scope.boardSort.length = 0;
		}
		
		function random(number) {
			return Math.floor(Math.random() * number + 0);
		}
		
		for (var i = 0; i < $scope.board; i++) {
			var currentRandom = random(cache);
			var result;
			
			if (cacheArray.length > currentRandom) {
				result = cacheArray[currentRandom].feeling;
				cacheArray.splice(currentRandom, 1);
				cache--;	
			} else {
				result = "Free Space";
			}
			$scope.boardSort.push({'text' : result, 'selected' : false});
		}
	}
	
	$scope.resetChoices = function() {
		$scope.instruct.length = 0;
	}
	
	$scope.highlightedBoard = [];
	
	$scope.highlightSpace = function() {	
		var thisSquare = $scope.boardSort[this.$index];
		
		if (thisSquare == undefined) {
			return;
		}
		
		thisSquare.selected = thisSquare.selected === false ? true : false;
		
		if (thisSquare.selected === true) {
			$scope.highlightedBoard.push(this.$index);
		} else {
			var getPop = $scope.highlightedBoard.indexOf(this.$index);
			$scope.highlightedBoard.splice(getPop, 1);
		}
		
		$scope.checkWins(this.$index);
	}
	
	$scope.checkWins = function(current) {
		var fromStart = current % 5;
		var row = (current - fromStart) / 5;
		
		var winConfig = [
			{
				"name" : "horizontal",
				"startPoint" : (current - fromStart),
				"win" : (row + 1)
			},
			{
				"name" : "vertical",
				"startPoint" : (current - (row * 5)),
				"win" : (fromStart + 1)
			},
			{
				"name" : "diagonal-1",
				"multiplier" : 6
			},
			{
				"name" : "diagonal-2",
				"multiplier" : 4
			}
		]
		
		function checker() {
			for (var j = 0; j < winConfig.length; j++) {
				var cacheCheck = [];
				var fixcheck;
				
				for (var i = 0; i < 5; i++) {
					var sp = winConfig[j].startPoint ? winConfig[j].startPoint : 0;
				
					switch(winConfig[j].name) {
						case "horizontal":
							fixCheck = sp+i;
							break;
						case "vertical":
							fixCheck = sp + (i * 5);
							break;
						case "diagonal-1":
							fixCheck = winConfig[j].multiplier * i;
							break;
						case "diagonal-2":
							fixCheck = winConfig[j].multiplier * (i+1);
							break;
						default:
							break;
					}
					
					var check = $scope.highlightedBoard.indexOf(fixCheck);
					cacheCheck.push(check);
				}
			
				if (cacheCheck.indexOf(-1) === -1) {
					if (winConfig[j].win) {
						console.log("you win " + winConfig[j].name + "! section " + winConfig[j].win)
					} else {
						if (current % winConfig[j].multiplier === 0) {
							console.log("you win " + winConfig[j].name);
						}
					}
				}
			}
		}
		
		function wholeBoard() {
			if ($scope.highlightedBoard.length === $scope.board) {
				console.log("all the squares! wow!");
			}
		}
		
		if ($scope.highlightedBoard.length >= 5) {
			checker();
			wholeBoard();
		}
	}
}