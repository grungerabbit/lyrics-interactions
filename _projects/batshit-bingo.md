---
title: batshit bingo
reference: bingo
subtitle: a bingo board generator
layout: project
customJS:
- lib: angular
- file: bingo.js
---
<style>
@import url(http://fonts.googleapis.com/css?family=Oswald:400,300,700);
body {
	font: 1em 'Oswald';
	font-weight: 300;
}
.title {
	text-align: center;
}
.grid, .button {
	cursor: pointer;
}
.grid {
	border: 1px solid #666;
	width: 200px;
	height: 200px;
	float: left;
	margin-left: -1px;
	margin-top: -1px;
}
.grid ::selection {
	background: none;
}
.grid p {
	font-weight: 700;
	text-transform: uppercase;
	text-align: center;
	margin-top: 90px;
	font-size: 1.5em;
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
	width: 100%;
}
input:focus, .button:focus {
	outline: none;
}
.instruction__item:focus {
	border-bottom-style: solid;
}
.button {
	border: none;
	background: #ccc;
	padding: 0.5em;
	margin-top: 0.25em;
	display: inline-block;
}
.button, input {
	font: 1.5em "Oswald";
	font-weight: 300;
}
.bingo--active {
	color: white;
	background-color: black;
}
.bingo--winner {
	background: url("/lib/img/stars.gif");
}
.new__possible {
	border: 3px solid #ccc;
	height: 3rem;
	margin: 0;
}
.new__possible:focus {
	border-color: black;
}
.possible {
	top: 0px;
	height: 3rem;
	padding: 0.125em 0.5em;
}
.button:focus, .button.mini:hover {
	background-color: black;
}
.new__possible:hover {
	border-color: yellow;
}
.button:hover {
	background-color: yellow;
}
.no-go {
	cursor: not-allowed;
}
.button.mini {
	font-size: .95em;
	background-color: transparent;
	border: 1px solid #ccc;
}
</style>

<div ng-app>
<div ng-controller="Bingo">
	
<h1 class="title">Batshit Bingo</h1>

<div class="bingo__board">
	<div class="grid" ng-repeat="i in getNumber(board) track by $index" ng-click="highlightSpace()" ng-class="{'bingo--active' : boardSort[$index].selected == true, 'bingo--winner' : boardSort[$index].glittery == true, 'no-go' : boardSort.length == 0}"><p ng-bind="boardSort[$index].text"></p></div>
</div>

<aside class="control__panel">
<form ng-submit="pushList()">
<input ng-model="test" placeholder="add possible square" class="new__possible"><button class="button possible">+</button>
</form>
	
<ol class="instructions">
	<li ng-repeat="item in instruct"><input class="instruction__item" ng-model="item.feeling"></li>
</ul>

<button ng-click="generateBoard()" class="button">generate bingo board</button>
<a href="#" ng-if="instruct.length !== 0" ng-click="resetChoices()" class="button mini">delete current choice list</a>
</aside>

</div>
</div>
