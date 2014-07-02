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
	padding: 3em 0 9em;
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
.progress__bar {
	width: 1.5rem;
	position: fixed;
	right: 0;
	top: 40%;
	margin: 0 2rem;
}
.progress__bar li {
	list-style: none;
	height: 1.5rem;
}
.progress__bar li, .marker {
	border: 2px solid white;
	color: white;
	border-radius: 100px;
	display: block;
	margin-bottom: 0.5em;
	font-size: 1rem;
}
.marker {
	height: 1.5rem;
	width: 1.5rem;
	text-align: center;
	margin: 0 auto;
}
.progress__bar li.active {
	color: #08F7C9;
	border-color: #08F7C9;
}
.analysis p {
	padding: 0.5rem 0;
}
.next__trigger {
	display: none;
}
.reset {
	border: 2px dashed white;
	background: none;
	padding: 0.25em 0.5em;
	font: 1rem "Lora", serif;
}
.reset:hover {
	border-style: solid;
}
.reset:focus {
	border-color: #08f7c9;
	outline: none;
}
</style>

<div ng-app="why">
	<div ng-controller="whyControl" id="top">
	<header>
		<h1>The Five Whys</h1>
	</header>
	
	<nav class="progress__bar">
		<ol>
			<li class="active">?</li>
			<li ng-class="{'active' : first}">1</li>
			<li ng-class="{'active' : second}">2</li>
			<li ng-class="{'active' : third}">3</li>
			<li ng-class="{'active' : fourth}">4</li>
			<li ng-class="{'active' : fifth}">5</li>
			<li ng-class="{'active' : analysis}">!</li>
		</ol>
	</nav>
	
	<div class="meditation">
		<section class="first query">
			<h3 class="zen">What do you feel?</h3>
			<form ng-submit="simpleScroll('first')">
			<input type="text" ng-model="feeling">
			<button class="next__trigger">next</button>
			</form>
		</section>
		<section class="first why" ng-show="feeling" id="first">
			<h3 class="zen"><em>Why</em>?</h3>
			<form ng-submit="simpleScroll('second')">
			<input type="text" ng-model="first" sync-focus-with="focus[0]">
			<button class="next__trigger">next</button>
			</form>
		</section>
		<section class="second why" ng-show="first" id="second">
			<h3 class="zen"><em>Why</em>?</h3>
			<form ng-submit="simpleScroll('third')">
			<input type="text" ng-model="second" sync-focus-with="focus[1]">
			<button class="next__trigger">next</button>
			</form>
		</section>
		<section class="third why" ng-show="second" id="third">
			<h3 class="zen"><em>Why</em>?</h3>
			<form ng-submit="simpleScroll('fourth')">
			<input type="text" ng-model="third" sync-focus-with="focus[2]">
			<button class="next__trigger">next</button>
			</form>
		</section>
		<section class="fourth why" ng-show="third" id="fourth">
			<h3 class="zen"><em>Why</em>?</h3>
			<form ng-submit="simpleScroll('fifth')">
			<input type="text" ng-model="fourth" sync-focus-with="focus[3]">
			<button class="next__trigger">next</button>
			</form>
		</section>
		<section class="fifth why" ng-show="fourth" id="fifth">
			<h3 class="zen"><em>Why</em>?</h3>
			<form ng-submit="simpleScroll('analysis')">
			<input type="text" ng-model="fifth" sync-focus-with="focus[4]">
			<button class="next__trigger">next</button>
			</form>
		</section>
		
		<article ng-show="fifth" class="analysis" id="analysis">
			<span class="marker">?</span>
			<p class="answer--1" ng-bind="feeling"></p> 
			
			<span class="marker">1</span>
			<p class="answer--2" ng-bind="first"></p> 
			
			<span class="marker">2</span>
			<p class="answer--3" ng-bind="second"></p>
			
			<span class="marker">3</span>
			<p class="answer--4" ng-bind="third"></p> 
			
			<span class="marker">4</span>
			<p class="answer--5" ng-bind="fourth"></p>
			
			<span class="marker">5</span>
			<p class="answer--6" ng-bind="fifth"></p>
			
			<span class="marker">!</span>
			
			<h4 class="conclusion">Examine yourself. What comes next? <button class="reset" ng-click="reset('top')">or ask again</button></h4>
		</article>
	</div>
</div>
</div>