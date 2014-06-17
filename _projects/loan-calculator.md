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
	position: relative;
}
input {
	border: 1px solid #ccc;
	padding: 0.75em 0.5em 0.25em;
	font: 1.5em "Cutive Mono";
	width: 33%;
	margin-top: -1px;
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
	position: absolute;
	top: 0;
	right: 0;
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
	
	<!--<label>Interest</label>
	<input ng-model="interest" type="text" class="tinynumber">-->
	
</div>

<div class="initial__income">
	<label><span ng-show="yourname" ng-bind="yourname"></span><span ng-hide="yourname">Person 1</span> Main Income</label>
	<input type="text" ng-model="main">
	
	<label><span ng-show="yourname" ng-bind="yourname"></span><span ng-hide="yourname">Person 1</span> Side Income</label>
	<input type="text" ng-model="side">
</div>

<button ng-click="addNewLoaner()" class="loan__adder">+ Loan</button>

<ul>
	<li ng-repeat="loaner in loaners">
		<label>Name</label>
		<input type="text" ng-model="loaners[$index].name">
		<label><span ng-bind="loaners[$index].name"></span> Loan</label>
		<input type="text" ng-model="loaners[$index].loan">
		<label><span ng-bind="loaners[$index].name"></span> Interest</label>
		<input type="text" ng-model="loaners[$index].interest">
	</li>
</ul>

<div class="results">
	<p>Results</p>
	
	<h3>
		<span ng-bind="principal"></span> - 
		(<span ng-bind="main"></span> * <span ng-bind="monthsleft"></span> * 160) -
		(<span ng-bind="side"></span> * <span ng-bind="monthsleft"></span> * 160)
		
		<span ng-if="loaners.length > 0">- (</span><span ng-repeat="loaner in loaners"><span ng-if="$index !== 0"> + </span>(<span ng-bind="loaners[$index].loan"></span> + <span ng-bind="loaners[$index].interest"></span>)</span><span ng-if="loaners.length > 0">)</span>
		
		= 
		<span ng-bind="calculated()"></span>
	</h3>
	
</div>

</div>
</div>
