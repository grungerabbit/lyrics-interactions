$(document).ready(function () {
	var breathing = Raphael(500,200,200,200);
	
	
	square.animate({
	  x: 170,
	  y: 70
	}, 5000, function() {
	  this.animate({
	    opacity: .25
	  }, 2000, function() {
	    // and apply transformations
	    this.animate({
	      transform: "r45,s1.5",
	      opacity: 0
	    }, 2000);
	  });
	});
	
	
	
	
	//var grow = Raphael.animation({cx: 10, cy: 20, "fill": "white"}, 1000);
	//var back = Raphael.animation({cx: 50, cy: 50, "fill": "black"}, 1000);
	//
	
	
	var anim = Raphael.animation({cx: 10, cy: 20, "fill": "white"}, 1000, function() {this.animate({cx: 50, cy: 50, "fill": "black"}, 1000
	)}).repeat(Infinity)
	
	//.repeat(Infinity);
	
	var circle1 = breathing.circle(50,50,100).attr({"stroke" : "white"});
	
	circle1.animate(anim)
})






//(function () {
//	'init' : function () {
//		
//	},
//	'breathe' : function () {
//		$(".breathing__box")
//	}
//})();