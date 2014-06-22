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
.control__panel {
	position: absolute;
	right: 0px;
	background-color: yellow;
	z-index: 10;
}
</style>

<div ng-app="tiles" ng-controller="tileSettings">

<div class="control__panel">
	<h3>Control Panel</h3>
	<ul>
		<li ng-repeat="colors in palette"><input ng-model="colors.color"></li>
	</ul>
	
	<p ng-bind="palette.color"></p>
	<button ng-click="regenerate()">regen</button>
</div>

</div>