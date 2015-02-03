$(document).ready(function() {
	console.log("there's only us left now");

	var Ledger = Backbone.Model.extend({
		initialize: function() {
			console.log("backbone Ledger going");
		},
		defaults: {
			item: "item",
			cost: 0
		}

	});


	var prettyLedger = new Ledger();
	var testLedger = new Ledger({"item": "rent", "cost": 2100});

	console.log(testLedger.get("cost"));

});