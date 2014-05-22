$(document).ready(function () {
	var paper = Raphael(10, 50, 2000, 2000);

	var limit = 80;

	function eTriangle(oS, oX, oY, mS, mX, mY, color, animate) {
	    var s = oS + (i*mS);
	    var ox = oX + (i*mX);
	    var oy = oY + (i*mY);    
    
	    var begX = ox + s;
	    var equilX = (begX + ox) / 2;
	    var equil = oy + (s * .866);
    
	    var generated = paper.path("M" + ox + "," + oy +"," + begX + "," + oy + "," + equilX + "," + equil + ",Z").attr({"stroke": "#cc0000"});
	}

	for (i=0; i<limit; i++) {
	    eTriangle(10, 50, 300, 25, 5, 0);
		eTriangle(50, 50, 70, 205, 5, 0);
		eTriangle(160, 500, 0, 44, 4, 4);
		eTriangle(600, 30, 700, 10, 8, 3);
		eTriangle(400, -500, 300, 2, 40, 40);
		eTriangle(20, 0, 1800, 2, 5, 0);
		eTriangle(70, 0, 1800, 1, 1, 0);
		eTriangle(40, 100, 0, 0, 0, 100);
		eTriangle(400, 100, 0, 0, 0, 50);
	}
});
