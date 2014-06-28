$(document).ready(function () {
	var paper = Raphael(0, 0, 1400, 4000);

	var population = 5;
	var rngLimit = 100;
	var carryingK = 40;

	var Agent = function(startX, startY, radius) {
		this.radius = radius;
		this.x = startX;
		this.y = startY;
		this.fitness = radius;
		this.dead = false;
		this.iteration = 0;
	}

	Agent.prototype.draw = function(color) {
		var base = paper.circle(this.x, this.y, this.radius);
		return color ? base.attr({stroke: color}) : base;
	}
	
	Agent.prototype.grow = function(condition) {
		if (condition === true) {
			this.x += 2 * this.RNG(1, 7);
			this.y += this.RNG(1, 8) * (this.RNG(0, 10) * this.neg());
			this.fitness += 20;
			this.radius += 2;
		} else {
			this.radius -= 1;
			this.fitness -= 6;
			this.x -= 2 * this.RNG(1, 5);
			this.y += 3 * this.neg();
		}
	}
	
	// birth
	Agent.prototype.breed = function() {
		var fitness = this.iteration * this.RNG(0, 200);
		
		if (this.fitness > fitness) {
			var child = new Agent(this.x, this.y + 50, this.iteration);
			population++;
			
			child.draw("#C5E3EA");
			child.processAgent();
		}
	}
	
	// death
	Agent.prototype.die = function () {
		this.checkDead();
		this.sickness();
		this.pandemic();
	}
	
	Agent.prototype.sickness = function() {
		if (this.fitness <= -60) {
			this.dead = true;
		}
	}
	
	Agent.prototype.pandemic = function() {
		if (population > carryingK) {
			var chance = this.match(20);
			if (chance) {
				this.dead = true;
			}
		}
	}
	
	Agent.prototype.checkDead = function () {
		if (this.radius <= 0 || this.iteration >= 100 || this.y > 4000) {
			this.dead = true;
		}
	}
	
	Agent.prototype.RNG = function (min, max) {
		return Math.floor(Math.random() * max + min);
	}
	
	// conditions
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
	
	Agent.prototype.helpBaby = function() {
		return this.radius < 10 ? true : false;
	}
	
	Agent.prototype.helpElderly = function() {
		return this.iteration >= 20 ? true : false;
	}
	
	Agent.prototype.processAgent = function () {
		var self = this;
		var round = setInterval(function() {
			
			var conditions = [self.simple(), self.match(self.RNG(1, 100)), self.match(85), self.simple(), self.simple(), self.match(self.RNG(20,100)), self.helpBaby(), self.helpElderly()];
			var randomCondition = conditions[self.RNG(0, conditions.length)];
			
			self.grow(randomCondition);
			self.breed();
			self.die();
			
			self.iteration++;
			if (self.dead === true) {
				population--;
				clearInterval(round);
				return;
			}
			self.draw();
		}, 100);
	}
	
	//seed
	for (var i = 0; i < population; i++) {
		var startEq = (400+i*140);
		var seed = new Agent(startEq, 20, 10);
		
		seed.draw();
		seed.processAgent();
	}
});