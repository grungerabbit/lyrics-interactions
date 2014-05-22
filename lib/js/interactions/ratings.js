(function($) {		
		var $test = $("#test");
		var $allReviews = $(".reviews");
	
		var pretty = {
			'config' : {
				'theme': {
					//hueChoices: {
					//	red: 10,
					//	gold: 50,
					//	mint: 155,
					//	purple: 250
					//},
					'hue': 155,
					'sat': function(i) {
						var sat = 8.75;
						
						return sat * i;
					},
					'light': function(i) {
						var light = 3.65;
						
						return light * i;
					},
				},
				'container': $(".container"),
			},
			'init' : function() {
				
				var year = "???";
				var pricetest = function(multiplier) {return (Math.floor(Math.random() * multiplier))+1};


				var itemData = {
					year: year,                    

	
					items : [
					{ title: 'Medium Coffee', creator: 'Nathans Deli', series: 'Bed Stuy', category: 'food', subcategory: 'deli', year: 2013, rate: [ {rating: 4, reviewer: 'Clayton', comment: 'cheapest nicest coffee there is'}  ],price: 0.75 },
					{ title: 'Thus Spake Zarathustra', creator: 'Nietzsche', series: 'Wilco Book Series', category: 'book', subcategory: 'book', year: 2005, rate: [ {rating: 5, reviewer: 'Clayton', comment: 'totally boring'}  ],price: 4 },
					{ title: 'Sushi and Juice', creator: 'Beyond Sushi', series: 'USQ', category: 'food', subcategory: 'restaurant', year: 2013, rate: [ {rating: 7, reviewer: 'Clayton', comment: ' '}  ],price: 15 },
					{ title: 'Milkshake', creator: 'One Lucky Duck', series: 'Gramercy', category: 'food', subcategory: 'restaurant', year: 2013, rate: [ {rating: 3, reviewer: 'Clayton', comment: 'I felt like crying'}  ],price: 13 },
		
					{ title: '8302013', creator: 'YACHT', series: 'Music Hall of Williamsburg', category: 'music', subcategory: 'concert', year: 2013, rate: [ {rating: 8, reviewer: 'Cheryl', comment: 'hoping it will be good'}  ],price: 17 },
					{ title: 'Psychic City', creator: 'YACHT', series: 'See Mystery Lights', category: 'music', subcategory: 'song', year: 2010, rate: [ {rating: 6, reviewer: 'Cheryl', comment: 'really feels like NYC'}  ],price: 5 },
					{ title: 'Marcel Duchamp: The Afternoon Interviews', creator: 'Calvin Tomkins', series: 'Badlands United', category: 'book', subcategory: 'nonfiction', year: 2013, price: 16 },
					{ title: 'Friday', creator: 'Rebecca Black', series: 'Friday', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: 2, reviewer: 'Pitchfork', comment: 'what'}  ],price: 1 },
					{ title: 'Flank Steak', creator: 'Do or Dine', series: 'Bed Stuy', category: 'food', subcategory: 'restaurant', year: 2013, rate: [ {rating: 9, reviewer: 'Cheryl', comment: 'mmm'}  ],price: 22 },
					{ title: 'Foie Gras Donut', creator: 'Do or Dine', series: 'Bed Stuy', category: 'food', subcategory: 'restaurant', year: 2013, rate: [ {rating: 10, reviewer: 'Cheryl', comment: 'delicious'}  ],price: 11 },
					{ title: 'Starling, Tiger, Fox', creator: 'HOTEL MEXICO', series: 'HIS JEWELLED LETTER BOX', category: 'music', subcategory: 'song', year: 2011, price: 12 },
					{ title: 'JFK to SFO', creator: 'Delta', series: 'USA', category: 'travel', subcategory: 'air', year: 2010, rate: [ {rating: 1, reviewer: 'Cheryl', comment: 'shitty shitty shitty'}  ],price: 400 },
	
	
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },
					{ title: 'Everything Goes My Way', creator: 'Metronomy', series: 'The English Riviera', category: 'music', subcategory: 'song', year: 2011, rate: [ {rating: parseInt(Math.ceil((Math.random())  * (10 - 1) + 1)), reviewer: 'The Village Voice', comment: 'summery fizzy pop'}  ],price: pricetest(40) },

					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, rate: [ {rating: 1, reviewer: 'test', comment: 'whatever forever'}  ],price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, rate: [ {rating: 2, reviewer: 'test', comment: 'whatever forever'}  ],price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, rate: [ {rating: 3, reviewer: 'test', comment: 'whatever forever'}  ],price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, rate: [ {rating: 4, reviewer: 'test', comment: 'whatever forever'}  ],price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, rate: [ {rating: 5, reviewer: 'test', comment: 'whatever forever'}  ],price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, rate: [ {rating: 6, reviewer: 'test', comment: 'whatever forever'}  ],price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, rate: [ {rating: 7, reviewer: 'test', comment: 'whatever forever'}  ],price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, rate: [ {rating: 8, reviewer: 'test', comment: 'whatever forever'}  ],price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, rate: [ {rating: 9, reviewer: 'test', comment: 'whatever forever'}  ],price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, rate: [ {rating: 10, reviewer: 'test', comment: 'whatever forever'}  ],price: 5 },
					{ title: 'TEST', creator: 'TEST', series: 'TEST', category: 'TEST', subcategory: 'TEST', year: 0, price: 5 },


						// END OBJECT ARRAY
					]
				};


				var itemTemplate = "\
				{{#items}}\
				<div class='reviews {{category}} {{subcategory}}'>\
					{{#price}}\
						<div class=\"price\"><h6>${{price}}</h6></div>\
					{{/price}}\
					{{#rate}}\
						<h5>{{reviewer}} says</h5>\
						<h2>{{title}} <span class=\"rating\">{{rating}}</span></h2>\
						<em>&quot;{{comment}}&quot;</em>\
					{{/rate}}\
					{{^rate}}\
						<h5>No one has rated</h5>\
						<h2>{{title}}</h2>\
						<a href=\"#\" class=\"right\">add review now</a><br>\
						<h5 class=\"right\">...yet!</h5>\
					{{/rate}}\
					<div class=\"info\">\
					{{creator}} <div class=\"pull-right\">{{category}} &bull; {{subcategory}}</div>\ <br>{{series}} <div class=\"pull-right\">{{year}}</div>\
					</div>\
				</div>\
				{{/items}}";


				var itemOutput = Mustache.to_html(itemTemplate, itemData);
				$('#friend').html(itemOutput);
				
				pretty.Colorize();
				pretty.Responsive();
			},
			'Square' : function(el, size) {
				return el.width(size).height(size);
			},
			'Rainbow' : function(hue, sat, light) {
				return 'hsl(' + hue + ',' + sat +'%,' + light + '%)';
			},
			// make this better later
			'Opacity' : function(hue, sat, light, opacity) {
				return 'hsla(' + hue + ',' + sat +'%,' + light + '%,' + opacity + ')'; 
			},
			
			'Colorize' : function() {
				$allReviews.each( function() {
					var $rating = $(this).find(".rating");
					var $ratingNum = parseInt($rating.text(), 10);
					
					for (var i=0; i<=10; i++) {
						if ($ratingNum === i) {		
					
							var theme = pretty.config.theme.hue;
							var setSat = pretty.config.theme.sat;
							var setLight = pretty.config.theme.light;
					
							
							$(this).css("background-color", pretty.Rainbow(theme, setSat(i), setLight(i)+i^2));
							if (i===10) {
								$(this).css("background-color", pretty.Rainbow(theme, 100, setLight(i)+i^2));
							}
							
							//text color switching let's rewrite this later
							if (i <= 5) {
								$(this).find("h2, h5, em").css("color", pretty.Opacity(theme, i*19, 100-(i*12), i/20+0.5));
								$(this).find(".info").css("background-color", pretty.Opacity(theme, i*15, 100-(i*12), 0.25));
							}
							else {
								$(this).find("h2, h5, em").css("color", pretty.Opacity(theme, i*12, i*9.2, i/8));
								$(this).find(".info").css("background-color", pretty.Opacity(theme, i*15, i*9.2, 0.3));
							}
						}
					}
				});
			},
			'Responsive' : function() {
				var $reviews = $(".reviews");
				var cols;
				var containerWidth = parseInt(pretty.config.container.width());
				
				if (containerWidth < 500) {
					var cols = 1;
				}
				else if (containerWidth < 770) {
					var cols = 2;
				}
				else if (containerWidth < 1350) {
					var cols = 3;
				}
				else if (containerWidth < 1600) {
					var cols = 4;
				}
				else {
					var cols = 5;
				}
				
				var square = (containerWidth / cols) - 50;
				var squareRound = Math.floor(square / 10) * 10;
		
				pretty.Square($reviews, squareRound);
				$(".info").width(squareRound+14).css("padding", "3px .5em");
				
				if (squareRound <= 250) {
					$reviews.addClass("mini");
				}
				else if (squareRound >= 330) {
					$reviews.addClass("large")
				}
				else if (squareRound >= 400) {
					$reviews.addClass("huge")
				}
			},
			
			
			// REMEMBER YOUR COMMAS MAN
			'BG' : function(el, color) {
				el.css("background-color", color);
			}
		
		};
		
	$(document).ready(function() {	
		pretty.init();
	});
})(jQuery);
				