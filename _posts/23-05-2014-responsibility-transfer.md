---
title: responsibility transfer
subtitle: from the charisma myth
layout: post
design: raphael.js
version: 0.1.0
customJS:
- lib: raphael
- lib: angular
- file: responsibility.js
---

<style>
@import url(http://fonts.googleapis.com/css?family=Montserrat);
body {
	background: black;
	color: white;
	font: 1em 'Montserrat';
	text-align: center;
}
.breathe--annotate {
	position: absolute;
	top: 150px;
	left: 175px;
	width: 100px;
	text-align: center;
}
</style>

#responsibility transfer

###breathe

<div class="breathing__box"></div>

<div class="breathe--annotate">follow me</div>


tell the universe what you're worried about

<div ng-app>
	<div ng-controller="Transfer">
		<input ng-model="worry" />
		
		<h3 ng-bind="worry"></h3>
	</div>
</div>
