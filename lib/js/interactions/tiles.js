$(document).ready(function () {
	var paper = Raphael(0,0,2000,2000);
	
	var currentTiles = [];
	var startX = 50;
	var startY = 100;
	var originalX = 0;
	
	var colors = ["#000", "#444", "#888", "#ccc", "#fff", "#cc0000"];

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
	
	var errorSet = {"n": 1, "e": 1, "s": 1, "w": 1};
	
	var Tile = function(originX, originY, breakpoint) {
		this.originX = originX;
		this.originY = originY;
		this.breakpoint = breakpoint;
	};
	
	Tile.prototype.rando = function(min, max) {
		return Math.floor(Math.random() * max + min);
	};
	
	Tile.prototype.drawSquare = function(size) {
		this.size = size;
		var ctL = currentTiles.length;
		this.row = (ctL - (ctL % this.breakpoint));

		if (this.row !== 0) {
			this.originX = this.originX - (this.row * this.size);
		}

		paper.rect(this.originX, this.originY, size, size);
	};
	
	Tile.prototype.triDirection = function(direction) {
		var arrange, color;
		switch (direction) {
			case "n":
				arrange = "M" + this.originX + "," + this.originY + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX + this.size) + "," + (this.originY) + "Z";
				color = this.colorSet.n;
				break;
			case "e":
				arrange = "M" + (this.originX + this.size) + "," + this.originY + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX + this.size) + "," + (this.originY + this.size) + "Z";
				color = this.colorSet.e;
				break;
			case "s":
				arrange = "M" + (this.originX + this.size) + "," + (this.originY + this.size) + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX) + "," + (this.originY + this.size) + "Z";
				color = this.colorSet.s;
				break;
			case "w":
				arrange = "M" + (this.originX) + "," + (this.originY + this.size) + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX) + "," + (this.originY) + "Z";
				color = this.colorSet.w;
				break;
		}
		
		paper.path(arrange).attr({"fill":color});
	}
	
	Tile.prototype.triangles = function() {
		this.triDirection("n");
		this.triDirection("e");
		this.triDirection("s");
		this.triDirection("w");
	}
	
	Tile.prototype.chooseTile = function() {
		var choice, now;
		
		var ctL = currentTiles.length;
		var last = currentTiles[ctL-1];
		
		if (ctL === 0) {
			// {?} first tile
			choice = this.rando(0, tileSet.length);
			now = tileSet[choice];	
		} else if (ctL % this.breakpoint === 0) {
			// {?} any end tile
			this.originY += this.size;
			this.originX = originalX;
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
			
		} else if (this.row === 0 && ctL !== 0) {
			// {?} any end tile in first row
			var possible = [];
			
			for (var j = 0; j < tileSet.length; j++) {
				if (tileSet[j].w === last.set.e) {
					possible.push(tileSet[j]);
				}	
			}
			var pL = possible.length;
			choice = pL > 1 ? this.rando(0, pL) : 0;
			now = possible[choice];	
			
		} else {
			// {?} all other tiles
			var possible = [];
	
			if (this.originX - this.size === last.originX && this.originY === last.originY) {
				// check last east and current west
				var set2 = [];
				for (var k = 0; k < currentTiles.length; k++) {
					if (this.originX === currentTiles[k].originX && this.originY === (currentTiles[k].originY + this.size)) {
						for (var m = 0; m < tileSet.length; m++) {	
							if (currentTiles[k].set.s === tileSet[m].n) {
								possible.push(tileSet[m]);
							}
						}
					}
				}
				
				for (var q = 0; q < possible.length; q++) {
					if (possible[q].w == last.set.e) {
						set2.push(possible[q]);
					}
				}
				possible = set2;
				
				var pL = possible.length;
				choice = this.rando(0, pL);
				
				now = pL !== 0 ? possible[choice] : errorSet;	
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

	Tile.prototype.drawTile = function(size) {
		this.drawSquare(size);
		this.chooseTile();
		this.assignColors();
		this.triangles();
	};
	
	function makeBoard(numberTiles, tileSize, breakpoint) {
		for (var i = 0; i < numberTiles; i++) {	
			var square = new Tile((i*tileSize), startY, breakpoint);
			square.drawTile(tileSize);
		}
	}
	
	makeBoard(50,100, 10);
});