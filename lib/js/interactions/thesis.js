function Thesis($scope) {
    $scope.question = "";
	$scope.export = "";
	
	$scope.addReminder = false;
	$scope.setReminder = function() {
		$scope.addReminder = $scope.addReminder === false ? true : false;
	}
	
	$scope.gogo = "";
	$scope.motivation = [];
	$scope.addMotivation = function() {
		$scope.motivation.push($scope.gogo);
		$scope.gogo = "";
	}
}

function Panic($scope) {
	$scope.panic = "";
	$scope.instructions = "you can log all of your panic, chores, distractions here, to get them out of your head."
	
	$scope.noteEntry = "";
	$scope.storedNotes = [];
}




(function($){
	var development = true;
	
	var prototype = {
		'config' : {
			'module' : $(""),
		},
                
		'init' : function () {
			var main = prototype.mainMethods();
			main.setup();
			
			prototype.pictureFrame();
		},
		'mainMethods' : function () {
		
			function sanityCheck() {
				console.log("you're wonderful keep up the good work")
			}
			
			return {
				setup: function () {
					sanityCheck();
				},
      
			};
		},
		'pictureFrame' : function () {
			var $input = $(".picture-frame");
			var $output = $(".pf__finished");
			var $piece = $(".pf--done");
			var $cp = $(".pf__control");
			
			function processLinebreaks(text) {
				var check = /\n\n/g;
				return text.replace(check, "</p><p>");
			}
			
			function checkIfImport(text) {
				var dReg = /\#\#\#\#\#\#/g;
				var lReg = /\-\-\-\-\-\-/g;
			
				if (text.match(dReg) && text.match(lReg)) {
					var chunks = text.split(lReg);
					var humpty = [];
					
					for (var i=0; i<chunks.length; i++) {
						var post = chunks[i].split(dReg);
						
						var content = post[0];
						var date = post[1];
						
						humpty.push("<div class='pf--done'><div class='pf__control'><button class='pf__edit'>edit</button><button class='pf__delete'>delete</button></div><p>" + processLinebreaks(content) + "</p><p class='hidden'></p><small><span class='hidden'>######</span>" + date +"</small><div class='hidden'>------</div></div>");
					}
					$output.prepend(humpty.join(""));
					$input.val("");
					$input.trigger("focus");		
					
				} else {
					done(text);
				}
			}
			
			function done(para) {
				$output.prepend("<div class='pf--done'><div class='pf__control'><button class='pf__edit'>edit</button><button class='pf__delete'>delete</button></div><p>" + processLinebreaks(para) + "</p><p class='hidden'></p><small><span class='hidden'>######</span>" + moment().format('MMMM Do YYYY, h:mm:ss a') + "</small><div class='hidden'>------</div></div>");
				$input.val("");
				$input.trigger("focus");
			}
			
			function SelectText(element) {
			    var doc = document
			        , text = doc.getElementById(element)
			        , range, selection
			    ;    
			    if (doc.body.createTextRange) {
			        range = document.body.createTextRange();
			        range.moveToElementText(text);
			        range.select();
			    } else if (window.getSelection) {
			        selection = window.getSelection();        
			        range = document.createRange();
			        range.selectNodeContents(text);
			        selection.removeAllRanges();
			        selection.addRange(range);
			    }
			}
		
			function showControl(element) {
				element.find(".pf__control").fadeIn();
				return;
			}
			
			function hideControl(element) {
				element.find(".pf__control").fadeOut();
				return;
			}

			function editFinished($control) {
				var fText = $control.closest(".pf--done").find("p").text();
				$input.val(fText);
				$input.trigger("focus");
			}
			
			function deleteFinished($control) {
				$control.closest(".pf--done").remove();
			}
			
			function checkEnter(e, $element) {
				var keydown = e.which || e.keyCode;
				var currentText = $element.val();
				
				if (keydown === 13 && event.shiftKey) {
					$element.trigger("change");
				}
				
				//if (keydown === 13) {
				//	$element.val(currentText + "\n")
				//} else {
				//	return;
				//}
			}
			
			if (!development) {
				$(window).on('beforeunload', function(){
					return 'Save your changes!';
				});
			}

			$input.on("change", function() {
				checkIfImport($(this).val());
			});
			
			$("body").on("mouseenter", ".pf--done", function() {
				showControl($(this));
			});
			
			$("body").on("mouseleave", ".pf--done", function() {
				hideControl($(this));
			});
			
			$("body").on("click", ".pf__edit", function() {
				editFinished($(this));
			});
			
			$("body").on("click", ".pf__delete", function() {
				deleteFinished($(this));
			});
			
			$("body").on("keydown", ".picture-frame", function(e) {
				checkEnter(e, $(this));
			});
			
			$("#clear").on("click", function () {
				$(this).siblings(".picture-frame").val("");
			});
			
			$('.pf__finished').dblclick(function() {
			     SelectText('select');
			});
		}         
	};
	$(document).ready( function() {
		prototype.init();
	});
}(jQuery));