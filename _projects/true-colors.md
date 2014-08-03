---
title: true colors
reference: truecolors
subtitle: color combination matchup tool
layout: project
customJS:
- lib: angular
- file: truecolors.js
---

<h1>Color Matcher</h1>

<p>A way to test color combinations</p>

<div ng-app="colors">
	<div ng-controller="colorMatcher">
		
		<p ng-bind="test"></p>
	</div>
</div>