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
	width: 75%;
	margin: auto;
	font-size: 150%;
	position: relative;
}
input {
	border: 1px solid #E4EAEA;
	padding: 0.75em 0.5em 0.25em;
	font: 1.5em "Cutive Mono";
	width: 33.333333%;
	margin-top: -1px;
}
div, li {
	clear: both;
}
ul {
	list-style: none;
}
div input, .outside__loan li {
	float: left;
}
input:focus {
	outline: none;
	border-left-color: #0FBCB8;
}
label {
	position: absolute;
	margin-left: 0.5rem;
	font-size: 75%;
	color: #ADB2B2;
}
.your__name {
	width: 70%;
}
.income {
	width: 40%;
}
.number {
	width: 20%;
}
.tinynumber {
	width: 10%;
}
.outside__loan {
	border-top: 4px solid #E4EAEA;
	border-bottom: 4px solid #E4EAEA;
	overflow: auto;
	margin-bottom: 1em;
}
.loan__adder {
	font: 1.5em "Cutive Mono";
	background-color: #C6CCCC;
	color: white;
	border: none;
	padding: 0.5em;
	display: inline-block;
	float: right;
}
.loan__adder:hover {
	background-color: #ADB2B2;
}
.loan__adder:focus {
	background-color: #0FBCB8;
}
.success {
	color: #94e515;
}
.result__calc {
	padding: 1em 0;
	line-height: 2;
}
.result__calc div {
	display: inline-block;
}
.result__calc div[class^='calc--'] {
	position: relative;
}
.result__calc small {
	position: absolute;
	font-size: 40%;
	color: #C6CCCC;
	width: 100%;
	border-top: 1px solid #C6CCCC;
	text-transform: uppercase;
	text-align: center;
	margin-top: -12px;
}
.show-work {
	color: #C6CCCC;
}
.debt {
	padding-top: 0.5rem;
	border-top: 1px solid #E4EAEA;
}
</style>

<!--
#Shit to worry about re: loans

* Money earned
* Money cost in taxes
* Money cost of living
* Money able to loan
-->

<div ng-app ng-controller="Calculator">
	<h1 class="title">Loan Calculator</h1>

	<div class="initial__settings">
		<label>Your name</label>
		<input ng-model="yourname" type="text" class="your__name">

		<label>Principal</label>
		<input ng-model="principal" type="text" class="number">
	
		<label>Months</label>
		<input ng-model="monthsleft" type="text" class="tinynumber">
	</div>

	<div class="initial__income">
		<label><span ng-show="yourname" ng-bind="yourname"></span><span ng-hide="yourname">Person 1</span> Main Income</label>
		<input type="text" ng-model="main" class="income">
	
		<label>Hr/wk</label>
		<input type="text" ng-model="hoursWk" class="tinynumber">
	
		<label><span ng-show="yourname" ng-bind="yourname"></span><span ng-hide="yourname">Person 1</span> Side Income</label>
		<input type="text" ng-model="side" class="income">
	
		<label>Hr/wk</label>
		<input type="text" ng-model="shoursWk" class="tinynumber">
	</div>

	<div class="outside__loan">
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
	</div>
	

	<div class="results">
		<button ng-click="addNewLoaner()" class="loan__adder">+ Loan</button>
		<p>Results</p>
	
		<h3 class="result__calc">
			<div class="calc--principal">
				<span ng-bind="principal"></span> 
				<small>principal</small>
			</div>
		
			<div ng-if="main > 0">- 
			<div class="calc--main">
				<span ng-bind="calcHourly(main)"></span>
			
				<em class="show-work">(<span ng-bind="main"></span> * <span ng-bind="monthsleft"></span> * <span ng-bind="hoursWk"></span> * <span>2</span>)</em>
			<small><span ng-show="yourname" ng-bind="yourname"></span> main hr * mo * hr/wk * wks*mo/2</small></div>
			</div>
		
			<div ng-if="side > 0">-
			<div class="calc--side">
				<span ng-bind="calcHourly(side)"></span>
			
				<em class="show-work">(<span ng-bind="side"></span> * <span ng-bind="monthsleft"></span> * <span ng-bind="shoursWk"></span> * <span>2</span>)</em>
				<small><span ng-show="yourname" ng-bind="yourname"></span> side hr * mo * hr/wk * wks*mo/2</small></div>
				</div>
		
			<span ng-if="loaners.length > 0">-</span> <span ng-if="loaners.length > 1">(</span>
			<span ng-repeat="loaner in loaners">
				<span ng-if="$index !== 0"> + </span>
				<div class="calc--debt">
					<span ng-bind="loaners[$index].loan"></span>
					<small ng-bind="loaners[$index].name"></small>
				</div>
			</span>
			<span ng-if="loaners.length > 1">)</span>
			= 
			<span ng-bind="calculated()" ng-class="{success: calculated() <= 0}"></span>
		</h3>
	
		<div class="debt">
			<p>Debt incurred</p>
			<h5 class="result__calc"><span ng-if="loaners.length > 1">(</span>
				<div class="calc--debt" ng-repeat="loaner in loaners">
					<span ng-if="$index !== 0"> +</span>(<span ng-bind="loaners[$index].loan"></span> * <span ng-bind="percentage($index)"></span>)
				<small><span ng-bind="loaners[$index].name"></span> loan * int</small></div> <span ng-if="loaners.length > 1">)</span> = 
	    	
			<span ng-bind="debt()"></span>
			</h5>
		</div>
	</div>

</div>
