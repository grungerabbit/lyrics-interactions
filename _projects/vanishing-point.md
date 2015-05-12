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
	width: 40%;
	opacity: 0.25;
	background-color: rgba(252,251,247,.95);
	transition: 0.25s opacity;
}
.vp__control-panel:hover {
	opacity: 1;
}
.hide {
	display: none;
}
.vp__control-style {
	display: block;
	margin-bottom: 1em;
}
.vp__group {
	padding: 0.25em 0;
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
	background-color: #eaeaea;
	border-radius: 4px;
	transition: background-color 0.25s;
	cursor: pointer;
}
.vp__button:hover {
	background-color: #f8d516;
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
.prism__scroller {
	height: 350px;
	margin-top: 0.5em;
	overflow-y: auto;
}
</style>

<div ng-app="vanish" ng-controller="vanishingSettings">
	<button class="control-toggle" ng-click="toggleCtrlPanel()"><i class="ion-gear-b" data-pack="default" data-tags="settings, options, cog"></i> Toggle Control Panel</button>
	
	<div class="vp__control-panel" ng-class="{'hide': !openControl}">
		<section class="vp__control-style">
			<h3>Display Settings</h3>

			<div class="vp__group">
				<span class="vp__group-label">canvas</span>
				<label class="vp__setting">
				<input type="checkbox" ng-model="showVertices">
				show vertices
				</label>
				
				<label class="vp__setting">
				<input type="checkbox" ng-model="showGrid">
				show horizon
				</label>
				
				<label class="vp__setting">
				<input type="checkbox" ng-model="showSightlines">

				show sightlines
				</label>
			</div>
			<div class="vp__group">
				<span class="vp__group-label">prism</span>
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
			</div>
			
			<!-- <button class="vp__button" ng-click="deselectAll()">Deselect All</button> -->
		</section>
		
		<section class="vp__control-style">
			<h3>Horizon and Vanishing Points</h3>

			<table class="vp__config-table point__definitions">
				<thead>
					<tr>
						<th>vpY1 + vpY2</td>
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
		<span class="vp__group-label">presets</span> <select ng-model="dataset" ng-options="preset.set as preset.name for preset in presets"></select>
		
		<div class="prism__scroller">
			<table class="vp__config-table prism__dimensions">
				<thead>
					<tr>
						<th>Width (rel)</th>
						<th>Height (rel)</th>
						<th>Depth (rel)</th>
						<th>Seed X (abs)</th>
						<th>Seed Y (abs)</th>
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
		</div>
	</section>
		<button ng-click="addPrism()" class="vp__button">Add prism</button>
		<button ng-click="redraw()" class="vp__button vp__button--redraw">Redraw</button>
	</div>
</div>
{% endraw %}