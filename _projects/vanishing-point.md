---
title: vanishing point
subtitle: 
reference: vp
layout: project
customJS:
- lib: raphael
- lib: angular
- file: vanishing.js
---
{% raw %}

<style>
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
.vp__control-panel {
	position: fixed;
	height: 100%;
	z-index: 500;
	top: 20px;
	right: 0;
	width: 50%;
	background-color: rgba(255,255,255,0.5);
}

</style>

<div ng-app="vanish" ng-controller="vanishingSettings">
	<button class="control-toggle" ng-click="toggleCtrlPanel()">Toggle Control Panel</button>
	
	<div class="vp__control-panel" ng-show="openControl">
		<label>
		<input type="checkbox" ng-model="showVertices">
		show vertices
		</label>
		
		<label>
		
		<input type="checkbox" ng-model="showGrid">
		show horizons
		</label>
		
		<label>
		<input type="checkbox" ng-model="showSightlines">

		show sightlines
		</label>
		
		<label>
		<input type="checkbox" ng-model="scanlines">
		show scanlines
		</label>
		
		<label>
		<input type="checkbox" ng-model="showEdges">
		show edges
		</label>
		
		<label>
			<input type="checkbox" ng-model="scanlineUniform">
			uniform scanline
			</label>
		
		<button ng-click="deselectAll()">Deselect All</button>
		
		<input ng-model="horizon">
		
		
		<table>
			<thead>
				<tr>
					<td>Width (rel)</td>
					<td>Height (rel)</td>
					<td>Depth (rel)</td>
					<td>Seed X (abs)</td>
					<td>Seed Y (abs)</td>
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
					</td>
				</tr>
			</tbody>
		</table>
		
		<button ng-click="redraw()">Redraw</button>
	</div>
</div>
{% endraw %}