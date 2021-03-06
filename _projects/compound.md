---
title: compound interest
subtitle: a calculator comparing interest
reference: compound
layout: project
customJS:
- lib: knockout
- lib: moment
- file: compound.js
---
<style>
@import url(http://fonts.googleapis.com/css?family=Prata);
* {
    margin: 0;
    padding: 0;
}
body {
    font-family: 'Prata', serif;
}
section {
    padding: 1em;
}
span {
    border-bottom: 1px dashed black;
}
input {
    border: none;
    border-bottom: 1px dashed #333;
    font-family: 'Prata', serif;
    font-size: 1em;
    max-width: 5em;
}
input:focus {
    outline: none;
    border-bottom: 1px solid #111;
}
input.percent {
    width: 2em;
}
input.date {
    margin-right: 1em;
}
input.date:after {
    content: "/";
}
.winner {
    color: #94e515;
}
p {
    margin: 1em 0;
}
.interest__detail {
    border: 1px solid black;
    padding: 1em;
}
label {
    color: #ccc;
    display: block;
    float: right;
}
</style>

<section>
<h2>Loan is $<input id="test" data-bind="value: amount, valueUpdate: 'afterkeydown'" /></h2>

<input class="date month" data-bind="value: chooseMonth, valueUpdate: 'afterkeydown'" />
<input class="date day" data-bind="value: chooseDay, valueUpdate: 'afterkeydown'" />
<input class="date year" data-bind="value: chooseYear, valueUpdate: 'afterkeydown'" />
<select data-bind="options: choices, optionsText: 'name', value: $root.compound"></select>

<p>Today is <span data-bind="text: moment">##</span></p>
<p>Loan taken out on <span data-bind="text: dateLoan">##</span></p>
<p>It has been <span data-bind="text: monthsSince, valueUpdate: 'afterkeydown'">##</span> months, or <span data-bind="text: years, valueUpdate: 'afterkeydown'">##</span> years.</p>
<p>Interest is <input class="percent" data-bind="value: displayRate, valueUpdate: 'afterkeydown'" />%. If compound, calculated 
<!-- ko with: compound -->	<span data-bind="text: period">x</span> times a year (<span data-bind="text: name"></span>)<!-- /ko -->
</p>




<div class="interest__detail">
<p>Simple Interest: $<span data-bind="text: simplenow, css: { winner: simplenow() > compoundnow() }">now</span></p>
<p>Compound Interest: $<span data-bind="text: compoundnow, css: { winner: compoundnow() > simplenow() }">now</span></p>

<!--  <p>SPP: $<span data-bind="text: (simplenow() / monthsToPay()), css: { winner: simplenow() > compoundnow() }">now</span> over <span data-bind="text: monthsToPay"></span> months</p>
<p>CPP: $<span data-bind="text: (compoundnow() / monthsToPay()), css: { winner: compoundnow() > simplenow() }">now</span></p> -->
</div>


</section>