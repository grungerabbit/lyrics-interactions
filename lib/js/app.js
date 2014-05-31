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
			var $title = $ph.find(".post-header__title");
			
			function hideTitle() {
				$title.hide();
			}
			function slideTitle() {
				if (!$ph.hasClass("title--show")) {
					$title.slideDown();
				} else {
					$title.slideUp();
				}
			}
			function toggleShow() {
				$ph.toggleClass("title--show");
			}
			
			function overlay() {
				$(".big-overlay").hide();
			}
			var originalZ;
			function bigZ() {
				$(".post--description").hover(function() {
					//originalZ  = $(this).css("z-index");
					//$(this).css("z-index", "1000");
					$(".big-overlay").show();
				}, function() {
					//$(this).css("z-index", originalZ);
					$(".big-overlay").fadeOut(100);
				})
			}
			          
			return {
				setup: function () {
					overlay();
					bigZ();
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