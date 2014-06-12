$(document).ready(function () {
	var paper = Raphael(0,0,2000,2000);
	
	// 1: red
	// 2: yellow
	// 3: green
	// 4: blue
	// 5: grey

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
	
	var Tile = function(north, east, south, west, originX, originY) {
		this.north = north;
		this.east = east;
		this.south = south;
		this.west = west;
		this.originX = originX;
		this.originY = originY;
	}
	
	Tile.prototype.drawSquare = function(size) {
		this.size = size;
		paper.rect(this.originX, this.originY, size, size);
	}
	
	Tile.prototype.triangles = function() {
		
		console.log(this.size)
		
		var arrange = "M" + this.originX + "," + this.originY + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX + this.size) + "," + (this.originY) + "Z";
		console.log(arrange);
		paper.path(arrange).attr({"fill":"green"});
	}
	
	
	Tile.prototype.drawTile = function() {
		square.drawSquare(100);
		square.triangles();
	}
	
	var square = new Tile("red", "red", "red", "red", 50, 50);
	square.drawTile();

});