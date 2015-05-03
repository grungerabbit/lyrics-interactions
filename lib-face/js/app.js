(function($){
	var welcome = {
		'config' : {
			'module' : $(""),
		},
                
		'init' : function () {
			var main = welcome.mainMethods();
			main.setup();
		},
		'mainMethods' : function () {
			function headerFitText() {
				$("#masthead").fitText(0.59);	
			}     
			
			function helloWorld() {
				console.log("iPad on a Face is brought to you by the letter E and the number 5.")
			}
			          
			return {
				setup: function () {
					helloWorld();
					headerFitText();
				},
                                
			};
		}         
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));