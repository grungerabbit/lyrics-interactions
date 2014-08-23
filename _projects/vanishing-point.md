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
<div ng-app="vanish" ng-controller="vanishingSettings" style="position: fixed; z-index: 500">
	i'm just a poor little baby
	<input type="checkbox" ng-model="ycontrol">
	
	<p ng-bind="ycontrol"></p>
	
	
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
{% endraw %}