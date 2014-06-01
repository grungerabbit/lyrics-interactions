(function($){
	var welcome = {
		'config' : {
			'module' : $(""),
		},      
		'init' : function () {
			var main = welcome.mainMethods();
			main.setup();
			main.post();
			
			$("body").on("click", ".post-header", function() {
				main.postHover();
			});
		},
		'mainMethods' : function () {
			var $ph = $(".post-header");
			var $info = $ph.find(".post__metadata");
			
			function hideTitle() {
				$info.hide();
			}
			function slideTitle() {
				if (!$ph.hasClass("title--show")) {
					$info.slideDown();
					$ph.toggleClass("title--show");
				} else {
					$ph.toggleClass("title--show");
					$info.slideUp();
				}
			}
			function toggleShow() {
				$ph.toggleClass("small");
			}
			
			function bigZ() {
				$(".post--album").mouseenter(function() {
					$(".big-overlay").show();
				})
				
				$(".post--description").mouseleave(function() {
					$(".big-overlay").fadeOut(100);
				})
			}
			          
			return {
				setup: function () {
					//bigZ();
				},
				post: function () {
					hideTitle();
				},
				postHover: function () {
					toggleShow();
					slideTitle();
				}                
			};
		}         
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));