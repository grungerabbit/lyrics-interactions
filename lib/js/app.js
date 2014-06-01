(function($){
	var welcome = {
		'config' : {
			'module' : $(""),
		},      
		'init' : function () {
			var main = welcome.mainMethods();
			main.post();
			
			$("body").on("mouseenter", ".post-header", function() {
				main.postEnter();
			});
			
			$("body").on("mouseleave", ".post-header", function() {
				main.postLeave();
			});
		},
		'mainMethods' : function () {
			var $ph = $(".post-header");
			var $info = $ph.find(".post__metadata");
			
			function hideTitle() {
				$info.hide();
			}
			function titleDown() {
				$ph.removeClass("small")
				$info.slideDown();
			}
			function titleUp() {
				$info.slideUp();
				$ph.addClass("small");
			}
		
			          
			return {
				post: function () {
					hideTitle();
				},
				postEnter: function () {
					titleDown();
				},
				postLeave: function () {
					titleUp();
				}            
			};
		}         
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));