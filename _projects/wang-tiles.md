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
	background-color: rgba(255,255,255,.8);
	padding: 0.5em;
	z-index: 10;
	overflow: auto;
	min-height: 8em;
}
.control__panel input {
	padding: 0.25em;
	font: 1em "WhitneyLight", helvetica, arial, sans-serif;
	border: 1px solid #ccc;
	margin: 0.05em 0;
}
.control__panel input:focus {
	outline: none;
	border-color: #432DE8;
}
.control__panel > div {
	float: left;
	width: 28%;
}
.control__panel h5 {
	text-transform: uppercase;
	letter-spacing: 1px;
	border-bottom: 1px solid #eee;
}
.size__settings li {
	float: left;
	width: 33%;
}
.control__panel ul {
	list-style: none;
}
.change__colors li {
	width: 50%;
	float: left;
}
div.regen {
	position: relative;
	width: 16%;
	height: 6.75em;
}
.regen button {
	padding: 0.25em 0.5em;
	font: 2em "WhitneyLight", helvetica, arial, sans-serif;
	border: 3px solid #432DE8;
	background: transparent;
	position: absolute;
	right: 0;
	bottom: 0;
}
.premade {
	float: left;
	width: 33%;
}
.color__chip {
	width: 20px;
	height: 20px;
	float: left;
	display: block;
	border: 1px solid #222;
}
</style>

<div ng-app="tiles" ng-controller="tileSettings">

<div class="control__panel">
	<div class="size__settings">
		<h5>size settings</h5>
		<ul>
			<li>
				<label># Tiles</label>
				<input type="text" ng-model="numberTiles">
			</li>
			<li>
				<label>Square Size (px)</label>
				<input type="text" ng-model="sizeTiles">
			</li>
			<li>
				<label>Breakpoint</label>
				<input type="text" ng-model="breakpoint">
			</li>
		</ul>
	</div>
	
	<div class="change__colors">
		<h5>color changer</h5>
		<ul>
			<li ng-repeat="colors in palette"><input ng-model="colors.color"></li>
		</ul>
	</div>
	
	<div class="design__palettes">
		<h5>or try a palette</h5>
		<ul>
			<li class="premade" ng-repeat="palette in designPalettes"><p ng-bind="palette.name"></p>
				<ul>
					<li ng-repeat="color in palette.shades"><div class="color__chip" ng-style="{'background-color': color.color}">&nbsp;</div></li>
				</ul>
			</li>
		</ul>
	</div>
	
	<div class="regen">
		<button ng-click="regenerate()">regenerate</button>
	</div>
</div>

</div>