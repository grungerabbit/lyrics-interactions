(function($){
	var welcome = {
		'config' : {
			'module' : $(""),
		},
                
		'init' : function () {
			var main = welcome.mainMethods();
			main.post();
			
			$("body").on("click", ".post-header", function() {
				main.postHover();
			});
			
			//var ko = welcome.knockout();
			//ko.activate();
		},
		'knockout' : function () {
			function welcomeKO() {
				var self = this;
			}
			return {
				activate: function () {
					ko.applyBindings(new welcomeKO());
				}
			}
		},
		'mainMethods' : function () {
			function fittype() {
				$("#masthead").fitText(0.55);	
			}     
			
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
			          
			return {
				setup: function () {
					fittype();
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