---
title: wang tiles
reference: tiles
subtitle: aperiodic tiles
layout: project
customJS:
- lib: angular
- lib: raphael
- file: tiles.js
---
<style>
body {
	font-family: "WhitneyLight", helvetica, arial, sans-serif;
	font-weight: normal;
}
.control__panel {
	position: fixed;
	right: 0;
	bottom: 0;
	width: 100%;
	background-color: yellow;
	z-index: 10;
	overflow: auto;
}
.control__panel > div {
	float: left;
	width: 25%;
}
.size__settings input {
	display: block;
}
</style>

<div ng-app="tiles" ng-controller="tileSettings">

<div class="control__panel">
	<h3>Control Panel</h3>
	
	<div class="size__settings">
		<h5>size settings</h5>
		<label>Number of Tiles</label>
		<input type="text" ng-model="numberTiles">
		<label>Tile Size (px)</label>
		<input type="text" ng-model="sizeTiles">
		<label>Breakpoint</label>
		<input type="text" ng-model="breakpoint">
	</div>
	
	<div class="change__colors">
		<h5>color changer</h5>
		<ul>
			<li ng-repeat="colors in palette"><input ng-model="colors.color"></li>
		</ul>
	</div>
	
	<div class="design__palettes">
		<h5>or try a palette</h5>
	</div>
	
	<div class="regen">
		<button ng-click="regenerate()">regenerate tiles</button>
	</div>
</div>

</div>