---
title: recipe calculator
reference: recipe
subtitle: recipe calculator
layout: project
customJS:
- lib: angular
- file: recipe.js
---

<style>
@import url(http://fonts.googleapis.com/css?family=Cabin:500,500italic);

body {
	font-family: "Cabin", sans-serif;
	box-sizing: border-box;
	background: url("/lib/img/food.png");
}
.project {
	width: 100%;
	margin: auto;
	font-size: 150%;
	position: relative;
}
input {
	background-color: #FAD48C;
	border: none;
	border-bottom: 5px solid purple;
	padding: 0.75em 0.5em 0.25em;
	font: 1.5em "Cabin";
	width: 33.333333%;
}
ul {
	list-style: none;
}
input:focus {
	outline: none;
	border-bottom-color: white;
}
label {
	position: absolute;
	margin-left: 0.5rem;
	font-size: 75%;
	color: #ADB2B2;
}
.intro {
	text-align: center;
	padding: 2em 0;
}
.half {
	width: 50%;
	float: left;
	padding: 1em;
	min-height: 30em;
}
.notes {
	width: 20%;
}
.store .notes {
	float: left;
}
.homemade .notes {
	float: right;
}
.homemade {
	border-left: 5px solid red;
}
.store {
	border-right: 5px solid blue;
}
.recipe__info {
	width: 80%;
	float: left;
}
.recipe__header {
	border-bottom: 3px solid #FAD48C;
}
.item__name {
	text-align: center;
}
</style>

<div ng-app ng-controller="Recipe">

<header class="intro">
	<input class="item__name" ng-model="name" />
</header>

<div class="half store">
	<div class="notes">
	aaa
	</div>
	<div class="recipe__info">
		<header class="recipe__header">
			<h2>Store Bought</h2>
			price, servings, taxes, time, quality
		</header>
		
		<button ng-click="test()">aaa</button>
		
		<ul ng-repeat="(quality, input) in store">
			<li>
				<label ng-bind="quality"></label>
				<input ng-model="input" />
			</li>
		</ul>
		
		
		
	</div>
</div>
<div class="half homemade">
	<div class="notes">
	aaa
	</div>
	<div class="recipe__info">
		<header class="recipe__header">
			<h2>Homemade</h2>
			price, servings, equipment, time, quality
		</header>
	</div>
</div>

</div>