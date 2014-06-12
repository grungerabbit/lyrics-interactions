$(document).ready(function () {
	var paper = Raphael(0,0,2000,2000);
	
	// 1: red
	// 2: yellow
	// 3: green
	// 4: blue
	// 5: grey
	
	var colors = ["red", "yellow", "green", "blue", "gray"];

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
	}
	
	Tile.prototype.drawSquare = function(size) {
		this.size = size;
		paper.rect(this.originX, this.originY, size, size);
	}
	
	Tile.prototype.triNorth = function() {
		var arrange = "M" + this.originX + "," + this.originY + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX + this.size) + "," + (this.originY) + "Z";
		paper.path(arrange).attr({"fill":"green"});
	}
	
	Tile.prototype.triEast = function() {
		var arrange = "M" + (this.originX + this.size) + "," + this.originY + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX + this.size) + "," + (this.originY + this.size) + "Z";
		paper.path(arrange).attr({"fill":"red"});
	}
	
	Tile.prototype.triSouth = function() {
		var arrange = "M" + (this.originX + this.size) + "," + (this.originY + this.size) + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX) + "," + (this.originY + this.size) + "Z";
		paper.path(arrange).attr({"fill":"blue"});
	}
	
	Tile.prototype.triWest = function() {
		var arrange = "M" + (this.originX) + "," + (this.originY + this.size) + "L" + (this.originX + (this.size/2)) + "," + (this.originY + (this.size/2)) + "L" + (this.originX) + "," + (this.originY) + "Z";
		paper.path(arrange).attr({"fill":"gray"});
	}
	
	Tile.prototype.quadrants = function() {
		square.triNorth();
		square.triEast();
		square.triSouth();
		square.triWest();
	}
	
	Tile.prototype.drawTile = function() {
		square.drawSquare(100);
		square.quadrants();
	}
	

	for (var i = 0; i < 4; i++) {
		var startX = 100;
		var startY = 100;
		
		var square = new Tile((i*startX), startY);
		square.drawTile();
	}
});