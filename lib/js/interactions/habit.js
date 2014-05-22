function Habit($scope) {

	$scope.time = "12pm";
	$scope.where = "";

	var cues = [
		{cue :"time", prepend: "the time is ", used: false}, 
		{cue : "where", prepend: "my location is ", used: false},
		{cue : "people", prepend: "I am around ", used: false},
		{cue : "finished", prepend: "I have just finished ", used: false},
		{cue : "emotion", prepend: "I am feeling ", used: false},
	]

	$scope.combinedCue = function () {
		var test = "", used = 0;
		
		for (var i = 0; i < cues.length; i++) {
			var current = cues[i].cue;
	
			if ($scope[current] && $scope[current].length > 0) {
				cues[i].used = true;
				used += cues[i].used === true ? 1 : -1;
			
				var assemble = (used > 1 ? " and " : "") + cues[i].prepend + $scope[current];
				test += assemble;
			}
			cues[i].used = false;
		}
		return test;
	}

	//$scope.tog = "off";
	//$scope.toggleStep = function () {
	//	return this.tog = this.tog === 'off' ? 'on' : 'off';
	//}

	// can this be combined with cues?
	$scope.toggles = ["on", "off", "off", "off", "off"]



    $scope.routine = "your routine";
    $scope.reward = "your reward";

}