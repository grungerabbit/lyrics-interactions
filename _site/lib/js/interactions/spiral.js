$(document).ready(function () {
	var paper = Raphael(10, 50, 2000, 2000);

	var population = 2;
	
	var rngLimit = 100;

	var Agent = function(startX, startY, name) {
		this.name = name;
		this.radius = 10;
		this.x = startX;
		this.y = startY;
		this.fitness = 0;
		this.dead = false;
	}
	
	Agent.prototype.draw = function() {
		paper.circle(this.x, this.y, this.radius);
	}
	
	Agent.prototype.grow = function(condition) {
		this.checkDead();
		
		if (this.dead === true) {
			return true;
		}
		
		if (condition === true) {
			this.x += (this.RNG(0, 10) * this.neg());
			this.y += (this.RNG(0, 10) * this.neg());
			this.fitness += 1;
			this.radius += 1;
		} else {
			this.radius -= 1;
			this.x += 10;
		}
	}
	
	
	Agent.prototype.RNG = function (min, max) {
		return Math.floor(Math.random() * max + min);
	}
	
	Agent.prototype.simple = function () {
		var a, b;
		a = this.RNG(0,rngLimit);
		b = this.RNG(0,rngLimit);
		
		return a > b ? true : false;
	}
	
	Agent.prototype.neg = function () {
		return this.simple === true ? -1 : 1;
	}
	
	Agent.prototype.match = function (toMatch) {
		return this.RNG(0, rngLimit) > toMatch ? true : false;
	}
	
	Agent.prototype.conditions = [];
	
	Agent.prototype.checkDead = function () {
		if (this.radius <= 0) {
			this.dead = true;
		}
	}
	
	Agent.prototype.processAgent = function () {
		
		var self = this;
		var round = setInterval(function() {
		
			var conditions = [self.simple(), self.match(self.RNG(1, 100))];
			var cl = conditions.length;
			var randomCondition = conditions[self.RNG(0, cl)];
			self.grow(randomCondition);
			
			
			if (self.dead === true) {
				clearInterval(round);
				return;
			}
			
			self.draw();
			console.log(self)
			
		}, 100);
	}
	

	for (var i = 0; i < population; i++) {
		var startEq = (150+i*10)
		var spi = new Agent(startEq, startEq, i);
		
		spi.draw();
		spi.processAgent();
	}
});
