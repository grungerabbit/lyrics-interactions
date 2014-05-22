---
title: sutphin boulevard
subtitle: blood orange - coastal grooves
layout: post
design: monotron + raphael.js
---

<style>
@import url(http://fonts.googleapis.com/css?family=Playfair+Display:900italic);

body {
	
}
h1 {
    font-size: 4em;
    line-height: 1;
    max-width: 50%;
}
.tagline {
	display: none;
    position: absolute;
    bottom: 75px;
    left: 100px;
	text-align: right;
    z-index: 1000;
}
::selection {
    background-color: white;
}
</style>



<h1 class="tagline">jeweler, pick me something pretty for my wife</h1>


<script>
var paper = Raphael(10, 50, 2000, 2000);

var limit = 80;

function eTriangle(oS, oX, oY, mS, mX, mY, color, animate) {
    var s = oS + (i*mS);
    var ox = oX + (i*mX);
    var oy = oY + (i*mY);    
    
    var begX = ox + s;
    var equilX = (begX + ox) / 2;
    var equil = oy + (s * .866);
    
    var generated = paper.path("M" + ox + "," + oy + "," + begX + "," + oy + "," + equilX + "," + equil + ",Z");
}

function parabolicCurve(numAxis, l, oX, oY) {
	var cx = 100;
	var cy = 100;
	var cx2 = 100;
	var cy2 = 400;
	
	var xAxis = paper.path("M" + cx + "," + cy + "," + cx2 + "," + cy2).attr({"stroke-width": "5"});
}

parabolicCurve();


for (i=0; i<limit; i++) {
    //eTriangle(10, 50, 300, 25, 5, 0);
}

</script>