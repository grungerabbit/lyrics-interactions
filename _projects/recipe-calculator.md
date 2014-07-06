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

::-webkit-input-placeholder {
   color: #BFA06D;
}
:-moz-placeholder { /* Firefox 18- */
   color: #BFA06D;  
}
::-moz-placeholder {  /* Firefox 19+ */
   color: #BFA06D;  
}
:-ms-input-placeholder {  
   color: #BFA06D;  
}
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
.item__name {
	text-align: center;
	width: 100%;
	padding: 1em 0;
	font-size: 200%;
}
.half {
	width: 50%;
	float: left;
	padding: 0 1em;
	min-height: 60em;
	overflow: auto;
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
.recipe__header h2 {
	min-height: 4em;
	width: 100%;
	text-align: center;
}
.half h4 {
	padding: 1em;
	text-align: right;
}
.card.start {
	min-height: 20em;
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
.final__analysis {
	padding: 2em;
	clear: both;
	border-top: 5px solid purple;
	text-align: center;
	overflow: auto;
}
.final {
	font-size: 200%;
}
.analysis__details .third {
	width: 33%;
	float: left;
}
.winner {
	color: green;
}
.shopping__list {
	text-align: left;
	padding: 1em;
	width: 80%;
	margin: auto;
}
.shopping__list li {
	overflow: auto;
}
.shopping__list li > p {
	float: left;
}
.list__ing {
	width: 75%;
}
.list__price {
	width: 25%;
	border-left: 1px solid #BFA06D;
	text-align: right;
}
</style>

<div ng-app ng-controller="Recipe">

<header class="intro">
	<input class="item__name" ng-model="name" placeholder="food name..." />
</header>

<div class="half store">
	<div class="notes">
	aaa
	</div>
	<div class="recipe__info">
		<header class="recipe__header">
			<h2><span ng-if="!storeName">Store Bought</span><span ng-if="storeName" ng-bind="storeName"></span> <span ng-if="name" ng-bind="name"></span></h2>
		</header>
		
		<section class="card start">
			<h4>Location Info</h4>
			<label>store name</label>
			<input ng-model="storeName" />
			
			<label>minutes from home</label>
			<input ng-model="storeMinutes" />
		</section>
		
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
			
			<h5 class="final" ng-bind="storeFinal()"></h2>
			
			<p>(<span ng-bind="store.price"></span> / <span ng-bind="store.servings"></span>) * <span ng-bind="home.timeHandicap"></span> * <span ng-bind="store.starHandicap"></span> + 
			<span ng-bind="store.special"></span></p>
			<p><small>(price / servings) * timeHandcap * starHandicap + special</small></p>
		</section>
	</div>
</div>
<div class="half homemade">
	<div class="notes">
	aaa
	</div>
	<div class="recipe__info">
		<header class="recipe__header">
			<h2>Homemade <span ng-if="name" ng-bind="name"></span></h2>
		</header>
		<section class="card start">
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
			
			<h5 class="final" ng-bind="homeFinal()"></h5>
			
			<p>(<span ng-bind="home.price"></span> / <span ng-bind="home.servings"></span>) * <span ng-bind="home.timeHandicap"></span> * <span ng-bind="home.starHandicap"></span> + 
			<span ng-bind="home.special"></span></p>
			<p><small>(price / servings) * timeHandcap * starHandicap + special</small></p>
		</section>
	</div>
</div>

<div class="final__analysis">
	<p>Per serving,</p>
	<h1><span ng-bind="name"></span> cost(s) <span ng-class="{'winner' : storeFinal() < homeFinal()}">$<span ng-bind="storeFinal()"></span></span> from <span ng-if="storeName" ng-bind="storeName"></span> <span ng-if="!storeName">the store</span> and <span ng-class="{'winner' : homeFinal() < storeFinal()}">$<span ng-bind="homeFinal()"></span></span> made at home.</h1>
	
	<section class="analysis__details">
		
		<div class="third">
			<p>The meal takes [time].</p>
		</div>
		
		<div class="third">
			<p>You save <span class="winner">$<span ng-bind="savings()"></span></span> if you eat at <span ng-bind="winner()"></span>.</p>
		</div>
		
		<div class="third">
			<p>Homemade <span ng-bind="name"></span> requires <span ng-bind="ingredients.length"></span> ingredient<span ng-if="ingredients.length !== 1">s</span>.</p>
			
			<div ng-show="ingredients.length > 0">
				<p>They originally cost $<span ng-bind="ingTotal()"></span>.</p>
				
				<ul class="shopping__list">
					<li ng-repeat="ing in ingredients"><p ng-bind="ing.name" class="list__ing"></p> <p ng-bind="ing.price" class="list__price"></p></li>
				</ul>
			</div>
		</div>
	</section>
</div>


</div>