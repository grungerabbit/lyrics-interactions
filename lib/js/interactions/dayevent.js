$(document).ready(function() {
	var dayevent = {
		'init' : function() {
			dayevent.viz();
		},
		'data': {
			'days': [
				{
					'date': "August 1st",
					'events': [
						{
							'title': 'Bamboo',
							'type': ["party", "high tea"],
							'attendees': 25
						},
						{
							'title': 'Tree',
							'type': ["party", "high tea"],
							'attendees': 36
						},
						{
							'title': 'Bee',
							'type': ["high tea"],
							'attendees': 12
						},
						{
							'title': 'Puppycat',
							'type': ["party", "high tea"],
							'attendees': 34
						}
					]
				},
				{
					'date': "August 2nd",
					'events': [
						{
							'title': 'Snax',
							'type': ["party", "high tea"],
							'attendees': 50
						}
					]
				},
				{
					'date': "August 3rd",
					'events': [
						{
							'title': 'Lollipop',
							'type': ["party", "high tea"],
							'attendees': 20
						},
						{
							'title': 'Booboo',
							'type': ["party", "high tea"],
							'attendees': 40
						},
						{
							'title': 'Cloud',
							'type': ["party", "high tea"],
							'attendees': 45
						}
					]
				},
				{
					'date': "August 4th",
					'events': [
						{
							'title': 'Marshmallow',
							'type': ["party", "high tea"],
							'attendees': 45
						},
						{
							'title': 'Pillow',
							'type': ["party", "high tea"],
							'attendees': 44
						},
						{
							'title': 'Ice Cream',
							'type': ["party", "high tea"],
							'attendees': 34
						}
					]
				},
				{
					'date': "August 5th",
					'events': [
						{
							'title': 'Happy',
							'type': ["party", "high tea"],
							'attendees': 56
						}
					]
				},
				{
					'date': "August 6th",
					'events': [
						{
							'title': 'Pizza',
							'type': ["party", "high tea"],
							'attendees': 12
						},
						{
							'title': 'Teeth',
							'type': ["party", "high tea"],
							'attendees': 345
						}
					]
				},
				{
					'date': "August 7th",
					'events': [
						{
							'title': 'Face',
							'type': ["party", "high tea"],
							'attendees': 23
						}
					]
				},
			]
		},
		'viz' : function() {
			var vWidth = $(window).width();
			var vHeight = $(window).height();
			var visPaper = Raphael(0, 0, vWidth, vHeight);

			var days = dayevent.data.days.length;

			// {?} drawing the timeline
			for (var i = 0; i < days + 1; i++) {
				var dayNum = i;

				var division = vWidth / days;
				var baseline = vHeight - 40;
				var currentDay, date;

				var timeline = visPaper.path("M" + 0 + "," + baseline + "," + vWidth + "," + baseline);

				var dayLeftEdge = division * dayNum;

				if (i !== days) {
					var currentDay = dayevent.data.days[dayNum];
					var date = currentDay.date;
					visPaper.text((dayLeftEdge + (division/2)), baseline + 25, date);
				}
			
				// ("M" + this.vx1 + "," + this.vy1 +"," + this.vx2 + "," + this.vy2 + "," + this.vx3 + "," + this.vy3 + ",Z");
				visPaper.circle((dayLeftEdge), baseline, 10);

				//console.log(currentDay.events);

				for (var j = 0; j < currentDay.events.length; j++) {
					var eventNum = j;
					var event = currentDay.events[eventNum];
					console.log(event);

					for (var k = 0; k < event.attendees; k++) {
						var barDivvy = event.attendees > 100 ? k % 9 : k % 3;

						visPaper.circle((dayLeftEdge + 10 + (eventNum * (division/4)) + (barDivvy * 10)), baseline - (Math.floor(k / (event.attendees > 100 ? 9 : 3)) * 10), 5);
					}
				}
			}
		}
	};
	dayevent.init();
});