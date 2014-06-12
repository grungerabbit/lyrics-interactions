$(document).ready(function () {
	var paper = Raphael(0,0,2000,2000);
	
	// 1: red
	// 2: yellow
	// 3: green
	// 4: blue
	// 5: grey
	
	var currentTiles = [];
	
	var side = 100;
	
	var startX = 100;
	var startY = 100;
	
	var originalX = 0;
	
	var breakpoint = 10;
	
	var colors = ["#000", "#444", "#888", "#ccc", "#fff"];

	var tileSet = [
		{"n": 3, "e": 3, "s": 4, "w": 1},
		{"n": 3, "e": 4, "s": 3, "w": 1},
		{"n": 3, "e": 4, "s": 4, "w": 3},
		{"n": 1, "e": 1, "s": 3, "w": 3},
		{"n": 1, "e": 1, "s": 4, "w": 4},
		{"n": 1, "e": 3, "s": 3, "w": 4},
		{"n": 2, "e": 2, "s": 3, "w": 2},
		{"n": 4, "e": 2, "s": 3, "w": 2},
		{"n": 3, "e": 5, "s": 1, "w": 2},
		{"n": 3, "e": 5, "s": 2, "w": 2},
		{"n": 2, "e": 5, "s": 1, "w": 5},
		{"n": 4, "e": 5, "s": 3, "w": 5},
		{"n": 3, "e": 2, "s": 3, "w": 5}
	]
	
	var Tile = function(originX, originY) {
		this.originX = originX;
		this.originY = originY;
	};
	
	Tile.prototype.drawSquare = function(size) {
		this.size = size;
		var ctL = currentTiles.length;
		var row = (ctL - (ctL % breakpoint));

		if (row !== 0) {
			this.originX = this.originX - (row * this.size);
		}

		paper.rect(this.originX, this.originY, size, size);
	};
	
	Tile.prototype.triNorth = function(color) {
		var arrange = "M" + this.originX + "," + this.originY + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX + this.size) + "," + (this.originY) + "Z";
		paper.path(arrange).attr({"fill":color});
	};
	
	Tile.prototype.triEast = function(color) {
		var arrange = "M" + (this.originX + this.size) + "," + this.originY + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX + this.size) + "," + (this.originY + this.size) + "Z";
		paper.path(arrange).attr({"fill":color});
	};
	
	Tile.prototype.triSouth = function(color) {
		var arrange = "M" + (this.originX + this.size) + "," + (this.originY + this.size) + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX) + "," + (this.originY + this.size) + "Z";
		paper.path(arrange).attr({"fill":color});
	};
	
	Tile.prototype.triWest = function(color) {
		var arrange = "M" + (this.originX) + "," + (this.originY + this.size) + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX) + "," + (this.originY) + "Z";
		paper.path(arrange).attr({"fill":color});
	};
	
	Tile.prototype.rando = function(min, max) {
		return Math.floor(Math.random() * max + min);
	};
	
	Tile.prototype.chooseTile = function() {
		var choice, now;
		
		var ctL = currentTiles.length;
		var last = currentTiles[ctL-1];
		if (ctL === 0) {
			choice = this.rando(0, tileSet.length);
			now = tileSet[choice];	
		} else if (ctL % breakpoint === 0) {
			this.originY += this.size;
			this.originX = originalX;

			//startX = this.originX;
			startY = this.originY;
			
			var possible = [];

			for (var k = 0; k < currentTiles.length; k++) {
				if (this.originX === currentTiles[k].originX && this.originY === (currentTiles[k].originY + this.size)) {
					for (var m = 0; m < tileSet.length; m++) {
						if (currentTiles[k].set.s === tileSet[m].n) {
							possible.push(tileSet[m]);
						}
					}
				}
			}
			
			var pL = possible.length;
			choice = this.rando(0, pL);
			now = possible[choice];
			
			this.set = now;
			currentTiles.push(this);
			
			return;
		} else {
			var possible = [];
			
			
			
			if (this.originX - this.size === last.originX) {
				// check last east and current west
			
				if (this.originY === last.originY) {
					for (var j = 0; j < tileSet.length; j++) {
						if (last.set && tileSet[j].w === last.set.e) {
							possible.push(tileSet[j]);
						}	
					}
				} 
				
				var pL = possible.length;
				choice = this.rando(0, pL);
				now = possible[choice];	
			}
		}
		
		this.set = now;
		currentTiles.push(this);
	};
	
	Tile.prototype.assignColors = function() {
		var obj = {};
		
		for (prop in this.set) {
			var num = parseInt(this.set[prop]) - 1;
			obj[prop] = colors[num];
		}
		this.colorSet = obj;
	}
	
	Tile.prototype.quadrants = function() {
		this.chooseTile();
		this.assignColors();
		
		console.log(currentTiles)
		
		square.triNorth(this.colorSet.n);
		square.triEast(this.colorSet.e);
		square.triSouth(this.colorSet.s);
		square.triWest(this.colorSet.w);
	};
	
	Tile.prototype.drawTile = function() {
		square.drawSquare(side);
		square.quadrants();
	};
	
	for (var i = 0; i < 25; i++) {		
		var square = new Tile((i*startX), startY);
		square.drawTile();
	}
});