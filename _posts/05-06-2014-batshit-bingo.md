---
title: batshit bingo
subtitle: a bingo board generator
layout: post
featured: false
design: 
version: 0.2.1
image: 
category: 
customJS:
- lib: angular
- file: bingo.js
description: Batshit bingo
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
}
.button, input {
	font: 1.5em "Oswald";
	font-weight: 300;
}
.bingo--active {
	color: white;
	background: url("http://a1star.com/images/shimmering-multistars.gif");
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
	position: relative;
	top: 0px;
	height: 3rem;
	padding: 0.125em 0.5em;
}
.button:focus {
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
</style>

<div ng-app>
<div ng-controller="Bingo">
	
<h1 class="title">Batshit Bingo</h1>

<div class="bingo__board">
	<div class="grid" ng-repeat="i in getNumber(board) track by $index" ng-click="highlightSpace()" ng-class="{'bingo--active' : boardSort[$index].selected == true, 'no-go' : boardSort.length == 0}"><p ng-bind="boardSort[$index].text"></p></div>
</div>

<aside class="control__panel">
<input ng-model="test" placeholder="add possible square" class="new__possible"><button ng-click="pushList()" class="button possible">+</button>
	
<ol class="instructions">
	<li ng-repeat="item in instruct"><input class="instruction__item" ng-model="item"></li>
</ul>

<button ng-click="generateBoard()" class="button">generate bingo board</button>
</aside>

</div>
</div>
