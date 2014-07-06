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
	background-color: transparent;
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
	background-color: #FAD48C;
}
label {
	position: absolute;
	margin-left: 0.5rem;
	font-size: 75%;
	color: #BFA06D;
}
.intro {
	text-align: center;
	padding: 0.5em 0;
}
.half {
	width: 50%;
	float: left;
	padding: 0 1em;
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
.half input {
	width: 100%;
}
.store input {
	border-bottom-color: blue;
}
.homemade input {
	border-bottom-color: red;
}
.recipe__info {
	width: 80%;
	float: left;
}
.recipe__header {
	padding: 2em 0;
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
		
	
		
		<ul ng-repeat="field in fields">
			<li>
				<label ng-bind="field"></label>
				<input ng-model="store[field]" />
			</li>
		</ul>
		
		
		<p ng-bind="store.price"></p>
		<p ng-bind="store.servings"></p>
		<p ng-bind="store.time"></p>
		<p ng-bind="store.quality"></p>
		<p ng-bind="store.special"></p>
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
		
		<h5>add ingredient!</h5>
		name, price, fraction used in recipe
		
		<ul ng-repeat="ing in ingredients">
		<li>
			<p ng-bind="ing.name"></p>
			<p ng-bind="ing.price"></p>
			<p ng-bind="ing.use"></p>
		</li>
		</ul>
		
		<button ng-click="addIngredient()">add</button>
		
		<ul ng-repeat="field in fields">
			<li>
				<label ng-bind="field"></label>
				<input ng-model="home[field]" />
			</li>
		</ul>
		
		<p ng-bind="home.price"></p>
		<p ng-bind="home.servings"></p>
		<p ng-bind="home.time"></p>
		<p ng-bind="home.quality"></p>
		<p ng-bind="home.special"></p>
	</div>
</div>

</div>