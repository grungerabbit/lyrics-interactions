---
title: wave
subtitle: a interaction for flipping pages
reference: wave
layout: project
customJS:
- lib: jquery
---
<style>
@import url(http://fonts.googleapis.com/css?family=Cantarell|Karla);

body {
    font-family: "Cantarell";
    background: #222;
    color: #eee;
    cursor: pointer;
    min-height: 50em;
}
::selection {
  background: #263855;
  /* Safari */
}
::-moz-selection {
  background: #263855;
  /* Firefox */
}
h1 {
    font-family: 'karla';
}
article {
    width: 50%;
    margin: 5em auto 0;
    cursor: auto;
    position: relative;
    z-index: 100;
}
.gradient {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    display: none;
    background: -moz-linear-gradient(left,  rgba(255,255,255,0) 0%, rgba(255,255,255,0.44) 44%, rgba(255,255,255,1) 100%); /* FF3.6+ */
background: -webkit-gradient(linear, left top, right top, color-stop(0%,rgba(255,255,255,0)), color-stop(44%,rgba(255,255,255,0.44)), color-stop(100%,rgba(255,255,255,1))); /* Chrome,Safari4+ */
background: -webkit-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.44) 44%,rgba(255,255,255,1) 100%); /* Chrome10+,Safari5.1+ */
background: -o-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.44) 44%,rgba(255,255,255,1) 100%); /* Opera 11.10+ */
background: -ms-linear-gradient(left,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.44) 44%,rgba(255,255,255,1) 100%); /* IE10+ */
background: linear-gradient(to right,  rgba(255,255,255,0) 0%,rgba(255,255,255,0.44) 44%,rgba(255,255,255,1) 100%); /* W3C */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00ffffff', endColorstr='#ffffff',GradientType=1 ); /* IE6-9 */
}
.triangle {
	width: 0; 
	height: 0; 
	border-top: 15px solid transparent;
	border-left: 15px solid rgba(0, 0, 0, .15);
	border-bottom: 15px solid transparent;
    position: absolute;
}
</style>

<div class="gradient"></div>

<script>
$(document).ready(function() {
    var windowWidth = $(window).width();
    
    
    $( "body" ).mousemove(function( event ) {
        var xCoord = event.pageX;
        var yCoord = event.pageY;
        
        if (xCoord > windowWidth - 100 && $(".gradient:hidden")) {
            $(".gradient").fadeIn();
            
            // add crazy triangles
            if ($(".triangle").length < 20) {
                $("body").append("<div class='triangle' style='left:" + xCoord + "px; top:" + yCoord + "px;'></div>");
            }
            
        }
        else {
            $(".triangle").fadeOut();
            $(".gradient").fadeOut();
            $(".triangle").remove();
        }        
    });
});
</script>