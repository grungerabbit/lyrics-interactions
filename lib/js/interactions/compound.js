$(document).ready(function () {
	function loanView() {
	    var self = this;

	    self.controlpanel = ko.observable(true);
    
	    self.choices = [
	        {
	            name: 'yearly',
	            period: 1
	        },
	        {
	            name: 'quarterly',
	            period: 4,
	        },
	        {
	            name: 'monthly',
	            period: 12,
	        },
	    ]
        
	    self.moment = moment().format('MMM. DD, YYYY');
    
	    self.chooseYear = ko.observable(2013);
	    self.chooseMonth = ko.observable(7);
	    self.chooseDay = ko.observable(14);
	        self.setTime = ko.computed(function() {
	            return [self.chooseYear(), self.chooseMonth() - 1, self.chooseDay()];
	    }, this);
 
    
	    self.dateLoan = ko.computed(function() {
	         return moment(self.setTime()).format('MMM. DD, YYYY');;
	    }, this);
        
	    self.monthsSince = ko.computed({
	        read: function () {
	            var a = moment();
	            var b = moment(self.setTime());
	            var test = a.diff(b, 'months');
  
	            return test;
	        },
	        write: function (value) {
	            var a = moment();
	            var b = moment(self.setTime());

	            var test = a.diff(b, 'months');
	            return test;
	        },
	        owner: this
	    });
    
	    self.monthsToPay = ko.observable(self.monthsSince());
    
	    self.amount = ko.observable(500);


	    self.rate = ko.observable(.1);
	//    self.display = ko.computed( function() {
	//        return self.rate() * 100;
	//    }, this);

	    self.displayRate = ko.computed({
	        read: function () {
	            return self.rate() * 100;
	        },
	        write: function (value) {
            
	            self.rate(value/100);
            
	        },
	        owner: this
	    });


	    self.compound = ko.observable("");
	    self.periods = ko.observable("");
	        self.years = ko.computed(function() {
	            var compute = self.monthsSince() / 12;
	            return compute.toFixed(6);
	        }, this);
    
    
	    self.simplenow = ko.computed( function() {
	        var rate = 1 + (self.rate() * self.years());  
	        var now = self.amount() * rate;
	        return now.toFixed(2);
	    }, this);
    
	     self.compoundnow = ko.computed( function() {
	         var base = (1+self.rate()/ self.compound().period) ;
	         var exp = self.compound().period * self.years();
	         var rate = Math.pow(base, exp);
	         var now = self.amount() * rate;
	         return now.toFixed(2);
	    }, this);
	}

	ko.applyBindings(new loanView());	
});
