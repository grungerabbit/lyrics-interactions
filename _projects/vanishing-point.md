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

<div ng-app="vanish" ng-controller="vanishingSettings" style="position: fixed; z-index: 500">
	i'm just a poor little baby
	<input type="checkbox" ng-model="ycontrol">
	
	<p ng-bind="ycontrol"></p>
	
	
</div>