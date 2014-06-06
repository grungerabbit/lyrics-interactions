---
title: batshit bingo
subtitle: a bingo board generator
layout: post
featured: false
design: 
version: 0.1.0
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
.instructions li {
	margin: 0.5em 0;
}
.instruction__item {
	border: none;
	font-size: 1em;
	border-bottom: 1px dotted #ccc;
}
.instruction__item:focus {
	outline: none;
	border-bottom-style: solid;
}
.button {
	border: none;
	background: #ccc;
	padding: 0.5em;
}
</style>

<div ng-app>
<div ng-controller="Bingo">
	
<h1>Batshit Bingo</h1>

<div class="bingo__board">
	<div class="grid" ng-repeat="i in getNumber(board) track by $index" ng-bind="boardSort[$index]"></div>
</div>

<aside class="control__panel">
<input ng-model="test">
<button ng-click="pushList()" class="button">Add possible square</button>
	
<ol class="instructions">
	<li ng-repeat="item in instruct"><input class="instruction__item" ng-model="item"></li>
</ul>

<button ng-click="generateBoard()" class="button">Generate bingo board</button>
</aside>

</div>
</div>
