---
title: responsibility transfer
subtitle: the charisma myth - olivia fox cabane
reference: responsibility
layout: project
design: raphael.js
version: 0.7.1
image: universe.png
featured: true
category: book
amazon: //ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=ss_til&ad_type=product_link&tracking_id=main05-20&marketplace=amazon&region=US&placement=1591845947&asins=1591845947&linkId=CGJUWOBO2F3DEBDC
customJS:
- lib: raphael
- lib: angular
- lib: moment
- file: responsibility.js
description: The universe is waiting for your worries.
---

<style>
@import url(http://fonts.googleapis.com/css?family=Montserrat);
* {
	box-sizing: border-box;
}
body {
	background: black;
	color: white;
	font: 1em 'Montserrat';
	text-align: center;
}
h1 {
	color: #999;
}
a:hover {
	text-decoration: none;
}
#breathing__star {
	position: fixed;
	width: 200px;
	top: 25px;
	right: 80px;
	z-index: 1000;
}
#breathing__star:hover {
	cursor: pointer;
}
.breathe--annotate {
	text-align: center;
	color: #aaa;
	margin-left: 30px;
}
.breathe--annotate em {
	font-style: normal;
	text-transform: uppercase;
	font-size: .85em;
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
.worry__box input:focus, select:focus, button:focus, .transfer:focus {
	outline: none;
	border-bottom-color: #cc00cc;
}
.worry__box h3 {
	font-size: 5em;
	margin: 1em 0;
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
.done:before {
	content: '';
	width: 3px;
	height: 3px;
	border: 1px solid #cc00cc;
	border-radius: 100px;
	position: absolute;
	margin-top: -2px;
}
.done {
	cursor: help;
}
li {
	list-style: none;
}
.transfer, .resetter {
	border: 3px solid #aaa;
	border-radius: 100px;
	background: none;
	color: #aaa;
	font: 1em "Montserrat";
}
.resetter {
	font-size: 0.75em;
	position: absolute;
	padding: 0.25em 0.5em;
}
.resetter:hover, .resetter:focus, .transfer:hover, .transfer:focus {
	border-color: #cc00cc;
	color: #cc00cc;
	box-shadow: 0 0 20px #cc00cc;
}
.transfer {
	padding: 1em;
	color: #cc00cc;
	border-color: #cc00cc;
	text-decoration: none;
}
</style>

<h1>responsibility transfer</h1>

<div id="breathing__star">
<div class="breathe--annotate"><p><em>breathing star</em></p> <p>breathe after me</p> <small>in and out through your nose</small></div>
</div>

<div ng-app class="worry__box">
	<div ng-controller="Transfer">
		<span id="worry__instructions">Dear 
		<select>
			<option>Universe</option>
			<option>Fate</option>
			<option>God</option>
		</select>, I am worried that
			
			<input ng-model="worryText" class="worry__input" /> <button class="resetter" ng-click="resetWorries()" ng-if="worryText.length > 0">x</button></span>
		
		<h3 ng-bind="worryText" id="big__worry"></h3>
		
		<a href="#" ng-if="worryText.length > 0" class="transfer" ng-click="addWorry()">transfer responsibility</a>
		<li ng-repeat="text in worry">
			<p ng-bind="text.text" ng-click="resetWorries()" class="finished__worry" style="font-size: 20em; opacity: 0"></p>
		</li>
		
	</div>
</div>