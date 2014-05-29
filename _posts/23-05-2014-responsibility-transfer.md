---
title: responsibility transfer
subtitle: from the charisma myth
layout: post
design: raphael.js
version: 0.6.0
customJS:
- lib: raphael
- lib: angular
- lib: moment
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
h1 {
	color: #999;
}
#breathing__star {
	position: fixed;
	width: 200px;
	top: 25px;
	right: 80px;
}
.breathe--annotate {
	text-align: center;
	color: #aaa;
	margin-left: 30px;
}
.worry__box {
	position: absolute;
	z-index: 1000;
	width: 50em;
	left: 50%;
	margin-left: -25em;
}
.worry__box input {
	background: none;
	border: none;
	border-bottom: 3px solid white;
	color: #ccc;
	font: 1em "Montserrat";
}
.worry__box input:focus, select:focus {
	outline: none;
	border-bottom-color: #cc00cc;
}
.worry__box h3 {
	font-size: 5em;
}
.finished__worry {
	font-size: 20em;
}
.transfer {
	color: #cc00cc;
}
select {
	background: none;
	color: white;
	font: 1em "Montserrat";
	border: none;
	border-bottom: 3px solid white;
}
/*.done:after {
	content: ':)';
	font-size: 30px;
	color: blue;
	position: absolute;
}*/
.done {
	cursor: help;
}
li {
	list-style: none;
}
</style>

#responsibility transfer

<div id="breathing__star">
<div class="breathe--annotate"><p>breathe after me</p> <small>in and out through your nose</small></div>
</div>

<div ng-app class="worry__box">
	<div ng-controller="Transfer">
		<span id="worry__instructions">Dear 
		<select>
			<option>Universe</option>
			<option>Fate</option>
			<option>God</option>
		</select>, I am worried that
			
			<input ng-model="worryText" /></span>
		
		<h3 ng-bind="worryText" id="big__worry"></h3>
		
		<a href="#" ng-if="worryText.length > 0" class="transfer" ng-click="addWorry()">transfer responsibility</a>
		<li ng-repeat="text in worry">
			<p ng-bind="text.text" ng-click="Transfer.resetWorries()" class="finished__worry" style="font-size: 20em"></p>
		</li>
		
	</div>
</div>
