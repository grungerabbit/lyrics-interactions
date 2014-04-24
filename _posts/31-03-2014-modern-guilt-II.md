---
title: modern guilt II
subtitle: beck - modern guilt
layout: post
design: playfair display italic + raphael.js
---

<style>
@import url(http://fonts.googleapis.com/css?family=Playfair+Display:900italic);

body {
    background: #330033;
	font-family: 'Playfair Display', serif;
	font-style: italic;
}
h1 {
    font-size: 4em;
    line-height: 1;
    max-width: 50%;
}
.tagline {
    position: fixed;
    bottom: 75px;
    left: 100px;
	text-align: right;
    z-index: 1000;
	color: #33ffff;
}
::selection {
    background-color: white;
}
</style>



<h1 class="tagline">don't know what i've done but i feel ashamed</h1>


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

</script>