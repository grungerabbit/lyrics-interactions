(function($){
	var welcome = {
		'config' : {
			'module' : $(""),
		},      
		'init' : function () {
			var main = welcome.mainMethods();
			main.project();
			
			$("body").on("mouseenter", ".project-header", function() {
				main.projectEnter();
			});
			
			$("body").on("mouseleave", ".project-header", function() {
				main.projectLeave();
			});
		},
		'mainMethods' : function () {
			var $ph = $(".project-header");
			var $info = $ph.find(".project__metadata");
			
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
				project: function () {
					hideTitle();
				},
				projectEnter: function () {
					titleDown();
				},
				projectLeave: function () {
					titleUp();
				}            
			};
		}         
	};
	$(document).ready( function() {
		welcome.init();
	});
}(jQuery));