---
title: floorplans
reference: floorplans
subtitle: small multiples floorplan timeline
layout: project
customJS:
- lib: raphael
- lib: angular
- file: floorplans.js
---
{% raw %}
<style>
body {
	background-color: #555;
}
circle {
	cursor: help;
}
#selectedLayout {
	position: fixed;
	top: 0;
	right: 0;
	z-index: 100;
}
</style>

<div ng-app="plans" ng-controller="planSettings">


<select ng-model="selectedFloorplan" ng-options="name for (name, value) in layouts" id="selectedLayout"></select>

</div>

{% endraw %}