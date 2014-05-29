---
title: responsibility transfer
subtitle: from the charisma myth
layout: post
design: raphael.js
version: 0.4.0
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
.breathe--annotate {
	position: absolute;
	top: 150px;
	left: 175px;
	width: 100px;
	text-align: center;
	color: #aaa;
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
</style>

#responsibility transfer

<div class="breathe--annotate">breathe after me</div>


<div ng-app class="worry__box">
	<div ng-controller="Transfer">
		<span>Dear 
		<select>
			<option>Universe</option>
			<option>Fate</option>
			<option>God</option>
		</select>, I am worried that
			
			<input ng-model="worry" /></span>
		
		<h3 ng-bind="worry" id="big__worry"></h3>
		
		<a href="#" ng-if="worry.length > 0" class="transfer">transfer responsibility</a>
	</div>
</div>
