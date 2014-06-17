---
title: loan calculator
reference: loan
subtitle: loan calculator
layout: project
customJS:
- lib: angular
- file: calc.js
---

<style>
@import url(http://fonts.googleapis.com/css?family=Cutive+Mono);

body {
	font-family: "Cutive Mono";
}
.project {
	width: 95%;
	margin: auto;
	font-size: 150%;
}
input {
	border: 1px solid #ccc;
	padding: 0.75em 0.5em 0.25em;
	font: 1.5em "Cutive Mono";
}
div input {
	margin-left: -1em;
}
input:focus {
	outline: none;
	border-color: black;
}
label {
	position: absolute;
	margin-left: -1rem;
	font-size: 75%;
}
.number {
	width: 5em;
}
.tinynumber {
	width: 3em;
}
.loan__adder {
	font: 1.5em "Cutive Mono";
	background-color: black;
	color: white;
	border: none;
	padding: 0.5em;
	display: inline-block;
}
</style>

<!--
#Shit to worry about re: loans

* Money earned
* Money cost in taxes
* Money cost of living
* Money able to loan
-->

<div ng-app>
<div ng-controller="Calculator">
	
	
	
<h1 class="title">Loan Calculator</h1>

<p>All income figures inputted hourly</p>


<div class="initial__settings">
	
	<label>Your name</label>
	<input ng-model="yourname" type="text">

	<label>Principal</label>
	<input ng-model="principal" type="text" class="number">
	
	<label>Time</label>
	<input ng-model="monthsleft" type="text" class="tinynumber">
	
</div>

<div class="initial__income">
	<label><span ng-show="yourname" ng-bind="yourname"></span><span ng-hide="yourname">Person 1</span> Main Income</label>
	<input type="text">
	
	<label><span ng-show="yourname" ng-bind="yourname"></span><span ng-hide="yourname">Person 1</span> Side Income</label>
	<input type="text">
</div>

<button ng-click="addNewLoaner()" class="loan__adder">+ Loan</button>

<ul>
	<li ng-repeat="loaner in loaners">
		<label>Name</label>
		<input type="text">
		<label><span ng-bind="loaners[index].name"></span> Main Income</label>
		<input type="text">
		<input type="text">
		<p ng-bind="$index"></p>
		
		<p ng-bind="loaners[index]"></p>
	</li>
</ul>

<div class="results">
	<h3 ng-bind="principal"></h3>
</div>

</div>
</div>
