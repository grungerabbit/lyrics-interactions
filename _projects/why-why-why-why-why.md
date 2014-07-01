---
title: why why why why why
reference: why
subtitle: the five whys
layout: project
customJS:
- lib: angular
- file: why.js
---

<style>
@import url(http://fonts.googleapis.com/css?family=Lora:400,400italic);

body {
	background-color: #d8fcf6;
	text-align: center;
	font-family: "Lora", serif;
}
header {
	padding: 2em 0;
}
.zen {
	font-style: italic;
}
.meditation, .meditation input {
	font-size: 2em;
}
.query, .why {
	padding: 6em 0;
}
.meditation input {
	font-family: "Lora", serif;
	padding: 0.5em;
	background: none;
	border: none;
	border-bottom: 2px dashed white;
	text-align: center;
}
.meditation input:focus {
	outline: none;
	border-bottom-style: solid;
}
.huge {
	font-size: 200%;
	line-height: .5;
}
.answer--1 {
	font-size: 50%;
}
.answer--2 {
	font-size: 75%;
}
.answer--3 {
	font-size: 100%;
}
.answer--4 {
	font-size: 125%;
}
.answer--5 {
	font-size: 150%;
}
.answer--6 {
	font-size: 175%;
}
.conclusion {
	font-style: italic;
	padding: 2em 0;
}
</style>

<div ng-app ng-controller="Why">
	<header>
		<h1>The Five Whys</h1>
	</header>
	
	<div class="meditation">
		<section class="first query">
			<h3 class="zen">What do you feel?</h3>
			
			<input type="text" ng-model="feeling">
		</section>
		<section class="first why" ng-show="feeling">
			<!--<h3 class="zen"><em ng-class="{'huge' : feeling}">Why</em><p ng-if="feeling"> are you <span ng-bind="feeling"></span></p>?</h3>-->
			
			<h3 class="zen"><em>Why</em>?</h3>
			<input type="text" ng-model="first">
		</section>
		<section class="second why" ng-show="first">
			<h3 class="zen"><em>Why</em>?</h3>
			
			<input type="text" ng-model="second">
		</section>
		<section class="third why" ng-show="second">
			<h3 class="zen"><em>Why</em>?</h3>
			
			<input type="text" ng-model="third">
		</section>
		<section class="fourth why" ng-show="third">
			<h3 class="zen"><em>Why</em>?</h3>
			
			<input type="text" ng-model="fourth">
		</section>
		<section class="fifth why" ng-show="fourth">
			<h3 class="zen"><em>Why</em>?</h3>
			
			<input type="text" ng-model="fifth">
		</section>
		
		<article ng-show="fifth">
			<p class="answer--1" ng-bind="feeling"></p> <em>because...</em>
			<p class="answer--2" ng-bind="first"></p> <em>because...</em>
			<p class="answer--3" ng-bind="second"></p> <em>because...</em>
			<p class="answer--4" ng-bind="third"></p> <em>because...</em>
			<p class="answer--5" ng-bind="fourth"></p> <em>because...</em>
			<p class="answer--6" ng-bind="fifth"></p>!
			
			<h4 class="conclusion">Examine yourself. What comes next?</h4>
		</article>
	</div>
</div>
