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
</style>

<div ng-app ng-controller="Why">
	<header>
		<h1>The Five Whys</h1>
	</header>
	
	<div class="meditation">
		<section class="first query">
			<h3 class="zen">How are you?</h3>
			
			<input>
		</section>
		<section class="second why">
			<h3 class="zen">Why?</h3>
			
			<input>
		</section>
		<section class="third why">
			<h3 class="zen">Why?</h3>
			
			<input>
		</section>
		<section class="fourth why">
			<h3 class="zen">Why?</h3>
			
			<input>
		</section>
		<section class="fifth why">
			<h3 class="zen">Why?</h3>
			
			<input>
		</section>
		<section class="sixth why">
			<h3 class="zen">Why?</h3>
			
			<input>
		</section>
	</div>
</div>
