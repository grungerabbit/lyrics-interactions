---
title: ledger
reference: ledger
subtitle: Instant, beautiful, printable spreadsheet
layout: project
customJS:
- lib: backbone
- file: ledger.js
---

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
.ledger__form.item {
	width: 60%;
}
.ledger__form.cost {
	width: 40%;
}
.ledger__add {
	width: 5%;
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

<div class="ledger">
	<h1>Ledger</h1>

	<div class="ledger__row">
		<input type="text" class="ledger__form item" placeholder="item">
		<input type="text" class="ledger__form cost" placeholder="cost">
		<!--<button class="ledger__menu">?</button>-->
	</div>
	<footer class="ledger__total">
		<h3>Total: $0</h3>
	</footer>
</div>