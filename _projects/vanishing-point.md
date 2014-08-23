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
.control-toggle {
	position: fixed;
	right: 0;
	top: 0;
	z-index: 501;
}
.vp__control-panel {
	position: fixed;
	z-index: 500;
	right: 0;
	background-color: rgba(255,255,255,0.5);
}

</style>

<div ng-app="vanish" ng-controller="vanishingSettings">
	<button class="control-toggle" ng-click="toggleCtrlPanel()">Toggle Control Panel</button>
	
	<div class="vp__control-panel" ng-if="openControl">
		show vertices
		<input type="checkbox" ng-model="showVertices">
		
		show horizons
		<input type="checkbox" ng-model="showGrid">
		
		show sightlines
		<input type="checkbox" ng-model="showSightlines">
		
		show scanlines
		<input type="checkbox" ng-model="scanlines">
		
		
		{{scanlines}}
		
		<button ng-click="deselectAll()">Deselect All</button>
		
		<input ng-model="horizon">
		
		{{horizon}}
		
		<ul>
			<li ng-repeat="prism in dataset">
				<input type="text" ng-model="prism.width" />
				<input type="text" ng-model="prism.height" />
				<input type="text" ng-model="prism.depth" />
				<input type="text" ng-model="prism.seedX" />
				<input type="text" ng-model="prism.seedY" />
				
			</li>
		</ul>
		
		<button ng-click="redraw()">Redraw</button>
	</div>
</div>
{% endraw %}