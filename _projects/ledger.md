---
title: ledger
reference: ledger
subtitle: Instant, beautiful, printable spreadsheet
layout: project
customJS:
- lib: angular
- file: ledger.js
---
{% raw %}
<style>
@import url(http://fonts.googleapis.com/css?family=Fira+Mono);
body {
	font-family: "Fira Mono";
}
.ledger {
	width: 60%;
	margin: auto;
}
.ledger__row {
	border-bottom: 1px solid #aaa;
	overflow: auto;
}
.ledger__total {
	text-align: right;
}
.ledger__menu {
	padding: 0.5em;
	font: 1.5em "Fira Mono";
	border: none;
	background: none;
	float: right;
	display: none;
}
.ledger__form {
	padding: 0.5em;
	font: 1.5em "Fira Mono";
	border: none;
	border-right: 1px solid #aaa;
	/*border-bottom: 5px solid transparent;*/
	display: inline-block;
	margin: 0;
	float: left;
}
.ledger__form:focus {
	outline: none;
	/*border-bottom-color: #9151bb;*/
	color: black;
}
.item {
	width: 60%;
}
.cost {
	width: 40%;
	text-align: right;
}
.ledger__add {
	width: 5%;
}
.total__count {
	float: left;
	text-align: right;
}

@media print {
	.project-header {
		display: none !important;
	}
	.ledger {
		width: 100%;
	}
}
</style>

<div ng-app ng-controller="Ledger">
<div class="ledger">
	<h1>Ledger</h1>

	<div class="ledger__row" ng-repeat="row in inventory track by $index">
		<form ng-submit="addCost()">
		<input type="text" class="ledger__form item" placeholder="item" ng-model="row.item">
		<input type="text" class="ledger__form cost" placeholder="cost" ng-model="row.cost">
		<button class="ledger__menu">?</button>
		</form>
	</div>
	<footer class="ledger__total">
		<h3 class="total__count item">Items: {{inventory.length}}</h3>
		<h3 class="total__count cost">Total: ${{costs()}}</h3>
	</footer>
</div>
</div>
{% endraw %}