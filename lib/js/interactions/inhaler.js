$(document).ready(function () {
	var paper = Raphael(10, 50, 1200, 1200);

	var limit = 150;

	function parabolaL(centerX, centerY, axisL, limit) {
	    var topX = centerX;
	    var topY = centerY - axisL;
	    var rightX = centerX + axisL;
	    var nodes = limit;
    
	    //vertical
	    paper.path( "M" + topX + "," + topY +"," + centerX + "," + centerY ).attr({"stroke-width": 4});
	    //horizontal
	    paper.path( "M" + centerX + "," + centerY +"," + rightX + "," + centerY ).attr({"stroke-width": 4});
    
	    for (var i=0; i<nodes; i++) {
	        var multiplier = axisL / nodes;
	        var startX = topX;
	        var startY = centerY - (i*multiplier);
	        var endX = centerX + ((nodes - i)*multiplier);
	        var endY = centerY;
        
	        paper.path( "M" + startX + "," + startY +"," + endX + "," + endY );
	    }
	}
	parabolaL(300, 1000, 2000, 100)
	parabolaL(200, 400, 300, 20);
	parabolaL(0, 700, 300, 100);
	parabolaL(0, 700, 500, 50);
	parabolaL(0, 700, 700, 100);
});
