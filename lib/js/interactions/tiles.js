$(document).ready(function () {
	var paper = Raphael(0,0,2000,2000);
	
	
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