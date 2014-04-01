---
title: modern guilt
subtitle: beck - modern guilt
layout: post
design: monotron + raphael.js
---

<h1 class="tagline">these people talk about impossible things</h1>


<style>
@import url(http://fonts.googleapis.com/css?family=Monoton);

body {
    background: #eee;
    font-family: "monoton";
    text-transform: uppercase;
}
h1 {
    text-transform: uppercase;
    font-size: 4em;
    line-height: 1;
    max-width: 50%;
}
.tagline {
    position: absolute;
    top: 75px;
    right: 0;
    z-index: 1000;
}
::selection {
    background-color: yellow;
}
</style>

<script>
var paper = Raphael(10, 50, 2000, 2000);

var limit = 150;

function eTriangle(oS, oX, oY, mS, mX, mY, color, animate) {
    var s = oS + (i*mS);
    var ox = oX + (i*mX);
    var oy = oY + (i*mY);    
    
    var begX = ox + s;
    var equilX = (begX + ox) / 2;
    var equil = oy + (s * .866);
    
    if (!color) {
        color = "#ffff00";   
    } else {
        animate = true;
    }
    
    var anim = Raphael.animation({"stroke-width": 2, "stroke": color}, 500);
    var resetAnim = Raphael.animation({"stroke-width": 1, "stroke": "#000"}, 500);
    var generated = paper.path("M" + ox + "," + oy +"," + begX + "," + oy + "," + equilX + "," + equil + ",Z");
    
    if (animate) {
        generated.hover(function() {
            generated.animate(anim.delay(100));
        }, function() {
            generated.animate(resetAnim.delay(2000));
        });
    }
}

for (i=0; i<limit; i++) {
    eTriangle(10, 50, 300, 2, 0, 0);
    eTriangle(100, 0, 0, 5, 0, 0, "#69FCFF");
    eTriangle(100, 100, 100, 5, 5, 5, "#FF0080");
    eTriangle(200, 100, 100, 0, 0, 0, null, true);
    eTriangle(100, 100, 100, 5, 2, 2, null, true);
}

</script>