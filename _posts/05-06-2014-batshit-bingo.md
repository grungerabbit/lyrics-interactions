---
title: batshit bingo
subtitle: a bingo board generator
layout: post
featured: false
design: 
version: 0.0.0
image: 
category: 
customJS:
- lib: angular
- file: bingo.js
description: Batshit bingo
---
<style>
.grid {
	border: 1px solid black;
	width: 200px;
	height: 200px;
	float: left;
}
.bingo__board {
	width: 1000px;
	float: left;
}
.control__panel {
	padding: 0 2em;
	float: left;
}

</style>

<div ng-app>
<div ng-controller="Bingo">
	
<h1>Batshit Bingo</h1>

<div class="bingo__board">
	<div class="grid" ng-repeat="i in getNumber(board) track by $index"></div>
</div>

<aside class="control__panel">
<input ng-model="test">
<button ng-click="pushList()">hi</button>
	
<textarea ng-model="array">asdfasfdafsd</textarea>

<p ng-bind="array"></p>

<ol class="instructions">
	<li ng-repeat="item in array" ng-bind="item"></li>
</ul>
</aside>

</div>
</div>
