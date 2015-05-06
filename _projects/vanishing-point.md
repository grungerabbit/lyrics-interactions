---
title: vanishing point
subtitle: 3-point graphical perspective plotting.
reference: vp
layout: project
customJS:
- lib: raphael
- lib: angular
- file: vanishing.js
---
{% raw %}

<style>
* {
	box-sizing: border-box;
	padding: 0;
	margin: 0;
}
body {
	font-family: "WhitneyLight", helvetica, arial, sans-serif;
}
.control-toggle {
	position: fixed;
	right: 0;
	top: 0;
	z-index: 501;
	border: none;
	background: none;
	font-family: "WhitneyLight", helvetica, arial, sans-serif;
	color: rgba(0,0,0,0);
	transition: color 0.5s;
}
.control-toggle i {
	color: rgba(130,11,4,255);
	position: absolute;
	right: 5px;
	top: 5px;
	font-size: 20px;
	transition: color 0.5s;
}
.control-toggle:before {
	content: "";
	height: 0;
	width: 0;
	float: right;
	display: block;
	border-right: 25px solid #f8d516;
	border-top: 25px solid #f8d516;
	border-bottom: 25px solid transparent;
	border-left: 25px solid transparent;
}
.control-toggle:hover {
	color: rgba(0,0,0,1);
	cursor: pointer;
}
.control-toggle:focus {
	outline: none;
}
.control-toggle:hover i { 
	color: #fef9dc;
}
.vp__control-panel {
	position: fixed;
	height: 100%;
	z-index: 500;
	top: 0;
	padding: 50px 25px;
	right: 0;
	width: 50%;
	background-color: rgba(252,251,247,.9);
}
.hide {
	display: none;
}
.vp__control-style {
	display: block;
}
.vp__config-table {
	border-collapse: collapse;
	width: 100%;
}
.vp__config-table tr {
	border-bottom: 1px solid #eee;
}
.vp__config-table th {
	width: 20%;
}
.vp__config-table tbody td {
	border-right: 1px solid #eee;
	width: 20%;
}
.vp__config-table tr input {
	border: none;
	padding: 0.5em;
	font: 1em "WhitneyLight", helvetica, arial, sans-serif;
	width: 100%;
}
.vp__button {
	font: 1em "WhitneyLight", helvetica, arial, sans-serif;
	padding: 0.5em;
	border: 1px solid #eee;
}
.vp__setting {
	background-color: white;
	padding: 2px 5px;
	border-radius: 50px;
}
.vp__button--redraw {
	background-color: #94e515;
	float: right;
	margin-top: 1em;
}
.prism__dimensions .vp__button {
	display: none;
}
.prism__dimensions td {
	position: relative;
}
.prism__dimensions tr:hover .vp__button {
	display: block;
	position: absolute;
	right: 0;
	top: 0;
}
</style>

<div ng-app="vanish" ng-controller="vanishingSettings">
	<button class="control-toggle" ng-click="toggleCtrlPanel()"><i class="ion-gear-b" data-pack="default" data-tags="settings, options, cog"></i> Toggle Control Panel</button>
	
	<div class="vp__control-panel" ng-class="{'hide': !openControl}">
		<section class="vp__control-style">
			<h3>Display Settings</h3>
			<label class="vp__setting">
			<input type="checkbox" ng-model="showVertices">
			show vertices
			</label>
			
			<label class="vp__setting">
			<input type="checkbox" ng-model="showGrid">
			show horizons
			</label>
			
			<label class="vp__setting">
			<input type="checkbox" ng-model="showSightlines">

			show sightlines
			</label>
			
			<label class="vp__setting">
			<input type="checkbox" ng-model="showEdges">
			show edges
			</label>
			
			<label class="vp__setting">
			<input type="checkbox" ng-model="scanlines">
			show scanlines
			</label>

			<label class="vp__setting">
			<input type="checkbox" ng-model="scanlineUniform">
			uniform scanline
			</label>
			
			<!-- <button class="vp__button" ng-click="deselectAll()">Deselect All</button> -->
		</section>
		
		<section class="vp__control-style">
<!-- 		
			<label></label>
			<input ng-model="horizon">

			<label>vpX1</label>
			<input ng-model="vpX1">

			<label>vpX2</label>
			<input ng-model="vpX2">

			<label>vpX3</label>
			<input ng-model="vpX3">

			<label>vpY3</label>
			<input ng-model="vpY3"> -->

			<h3>Horizon and Vanishing Points</h3>

			<table class="vp__config-table point__definitions">
				<thead>
					<tr>
						<th>Horizon (Y1 and Y2)</td>
						<th>vpX1</td>
						<th>vpX2</td>
						<th>vpX3</td>
						<th>vpY3</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><input ng-model="horizon"></td>
						<td><input ng-model="vpX1"></td>
						<td><input ng-model="vpX2"></td>
						<td><input ng-model="vpX3"></td>
						<td><input ng-model="vpY3"></td>
					</tr>
				</tbody>
			</table>
		</section>
		
	<section class="vp__control-style">
		<h3>Configure Prisms</h3>
		<select ng-model="dataset" ng-options="preset.set as preset.name for preset in presets"></select>
		
		<table class="vp__config-table prism__dimensions">
			<thead>
				<tr>
					<th>Width (rel)</td>
					<th>Height (rel)</td>
					<th>Depth (rel)</td>
					<th>Seed X (abs)</td>
					<th>Seed Y (abs)</td>
				</tr>
			</thead>
			<tbody>
				<tr ng-repeat="prism in dataset">
					<td>
						<input type="text" ng-model="prism.width" />
					</td>
					<td>
						<input type="text" ng-model="prism.height" />
					</td>
					<td>
						<input type="text" ng-model="prism.depth" />
					</td>
					<td>
						<input type="text" ng-model="prism.seedX" />
					</td>
					<td>
						<input type="text" ng-model="prism.seedY" />
						<button class="vp__button" ng-click="removePrism($index)">X</button>
					</td>
				</tr>
			</tbody>
		</table>
	</section>
		<button ng-click="addPrism()" class="vp__button">Add prism</button>
		<button ng-click="redraw()" class="vp__button vp__button--redraw">Redraw</button>
	</div>
</div>
{% endraw %}