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
		
			function annotate() {
				console.log("GO!")
				
			    var offsets = [];
    
			    $("sup").each(function() {
			        offsets.push(this.offsetTop);
					$(this).text(offsets.length)
			    });
    
			    $(".post__annotate li").each(function() {
			        var currentNumber = $(this).attr("id").slice(5) - 1;
			        $(this).css("top", (offsets[currentNumber] - 0));
			    });
			}     
			
			return {
				project: function () {
					hideTitle();
					annotate();
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