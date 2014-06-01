$(document).ready(function () {
	var paper = Raphael(10, 50, 4000, 4000);

	var population = 5;
	
	var rngLimit = 100;
	
	var list = [];

	var Agent = function(startX, startY, radius) {
		this.radius = radius;
		this.x = startX;
		this.y = startY;
		this.fitness = radius;
		this.dead = false;
		this.iteration = 0;
	}

	Agent.prototype.setColor = function() {
		this.name.attrs.fill = "red";
	}
	
	Agent.prototype.draw = function(color) {
		var base = paper.circle(this.x, this.y, this.radius);
		return color ? base.attr({stroke: color}) : base;
	}
	
	Agent.prototype.grow = function(condition) {
		this.sickness();
		this.checkDead();
		
		if (this.dead === true) {
			return true;
		}
		
		if (condition === true) {
			//this.x += this.RNG(1, 5) * (this.RNG(0, 10) * this.neg());
			this.y += this.RNG(1, 5) * (this.RNG(0, 10) * this.neg());
			this.fitness += 20;
			this.radius += 2;
		} else {
			this.radius -= 1;
			this.fitness -= 6;
			this.x += this.neg();
			this.y += this.neg();
		}
	}
	
	Agent.prototype.pandemic = function() {
		if (population > 30) {
			var chance = this.match(20);
			
			if (chance) {
				console.log("omg pandemic");
				this.dead = true;
			}
		}
	}
	
	Agent.prototype.sickness = function() {
		if (this.fitness <= -50) {
			this.dead = true;
		}
	}
	
	Agent.prototype.breed = function() {
		//console.log(5 * this.iteration);
		
		var fitness = this.iteration * this.RNG(0, 200);
		//console.log(fitness)
		
		if (this.fitness > fitness) {
			//console.log("BREED!");
			var test = new Agent(this.x, this.y + 50, this.iteration);
			//console.log(test);
			
			population++;
			
			test.draw("red");
			test.processAgent();
			
			
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
	
	Agent.prototype.checkDead = function () {
		if (this.radius <= 0) {
			this.dead = true;
		}
	}
	
	Agent.prototype.processAgent = function () {
		
		var self = this;
		var round = setInterval(function() {
		
			var conditions = [self.simple(), self.match(self.RNG(1, 100)), self.match(85), self.simple()];
			var cl = conditions.length;
			var randomCondition = conditions[self.RNG(0, cl)];
			self.breed();
			self.grow(randomCondition);
			self.pandemic();
			
			self.iteration++;
			console.log(population)
			
			if (self.iteration >= 100) {
				self.dead === true;
				clearInterval(round);
				return;
			}
			
			if (self.dead === true) {
				population--;
				clearInterval(round);
				return;
			}
			
			
			self.draw();
			console.log(population)
			
		}, 100);
	}
	
	//seed
	for (var i = 0; i < population; i++) {
		var startEq = (150+i*100)
		var spi = new Agent(startEq, 50, 10);
		
		list.push(spi);
		
		spi.draw();
		spi.processAgent();
	}
});
