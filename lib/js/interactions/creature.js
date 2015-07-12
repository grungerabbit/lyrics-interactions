(function() {
	var creature = {
		"init": function() {
			var paper = new Raphael(0, 0, 2000, 2000);
			var circleCreature = paper.circle(100, 100, 100);
			circleCreature.click(function() {

				console.log("fuck me")

				this.animate({x: 300}, 400, "elastic", function() { console.log("fuck"); });
			});

		},
		"drawCreature": function() {
			
		}

	}

	$(document).ready(function() {
		creature.init();	
	});



})(jQuery);