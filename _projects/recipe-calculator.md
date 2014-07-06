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
.card {
	margin-bottom: 1em;
	padding: 0.25rem 0;
	overflow: auto;
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
	border-bottom-width: 1px;
}
.half input:focus {
	background-color: rgba(255,255,255,.8);
}
.store input, .store h4 {
	border-bottom-color: blue;
}
.homemade input, .homemade h4 {
	border-bottom-color: red;
}
.recipe__info {
	width: 80%;
	float: left;
}
.recipe__header {
	padding: 2em 0;
}
.half h4 {
	padding: 1em;
	text-align: right;
}
.item__name {
	text-align: center;
}
.add__ingredient {
	padding: 1em;
	font: 1em "Cabin";
	float: right;
	border-radius: 100px;
	background-color: red;
	border: none;
}
.ingredient__label {
	display: inline-block;
	float: left;
	border: 1px solid red;
	padding: 0.25em 0.5em;
	font-size: 75%;
}
.ingredient__math {
	font-size: 75%;
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
		</header>
		
		<section class="card">
			<h4>Cost</h4>
			
			<ul ng-repeat="field in fields">
				<li>
					<label ng-bind="field"></label>
					<input ng-model="store[field]" />
				</li>
			</ul>
		</section>
		
		<section class="card">
			<h4>Analysis</h4>
			
			<p ng-bind="store.price"></p>
			<p ng-bind="store.servings"></p>
			<p ng-bind="store.time"></p>
			<p ng-bind="store.quality"></p>
			<p ng-bind="store.special"></p>
		</section>
	</div>
</div>
<div class="half homemade">
	<div class="notes">
	aaa
	</div>
	<div class="recipe__info">
		<header class="recipe__header">
			<h2>Homemade</h2>
		</header>
		<section class="card">
			<h4>Ingredients</h4>
			<form ng-submit="addIngredient()">
				<label>name</label>
				<input ng-model="ingName" />
				
				<label>price</label>
				<input ng-model="ingPrice" />
				
				<label>portion used in recipe</label>
				<input ng-model="ingUse" />
			<button class="add__ingredient" ng-class="{'active' : ingName.length > 0}">Add ingredient</button>
			</form>
			
			<ul ng-repeat="ing in ingredients">
			<li class="ingredient__label">
				<p ng-bind="ing.name"></p> $<span ng-bind="ing.calc"></span> 
				<p class="ingredient__math">
					<small class="show__work">= <span ng-bind="ing.price"></span> * <span ng-bind="ing.use"></span></small> 
				</p>
			</li>
			</ul>
		</section>
		
		<section class="card">
			<h4>Cost</h4>
			<ul ng-repeat="field in fields">
				<li>
					<label ng-bind="field"></label>
					<input ng-model="home[field]" />
				</li>
			</ul>
		</section>
		
		<section class="card">
			<h4>Analysis</h4>
	
			<p>(See docs for methodology)</p>
			
			(<span ng-bind="home.price"></span> * <span ng-bind="home.servings"></span>) 
			<p ng-bind="home.time"></p>
			<p ng-bind="home.quality"></p>
			<p ng-bind="home.special"></p>
		</section>
	</div>
</div>

</div>