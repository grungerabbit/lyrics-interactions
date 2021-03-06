---
title: how to create a habit
subtitle: from charles duhigg
reference: habit
layout: project
customJS:
- lib: angular
- file: habit.js
---

<style>
@import url(http://fonts.googleapis.com/css?family=Permanent+Marker);
body {
    font: 0.85em futura;
    text-align: center;
}

h1 {
    font-size: 2em;
    font-weight: bold;
}
h2 {
    font-size: 1.75em;
}
.third {
    float: left;
    width: 33%;
}
input {
	border: none;
	font: 2em 'Permanent Marker';
	border-bottom: 1px solid black;
	text-align: center;
}
input:focus {
	border-bottom-color: green;
	outline: 0;
}
.madlibs {
	display: inline-block;
	position: relative;
	text-decoration: underline;
}
// good try
//.madlibs:after {
//	content: "";
//	position: absolute;
//	left: 0;
//	display: inline-block;
//	height: 1em;
//	width: 100%;
//	border-bottom: 1px solid black;
//	margin-top: 5px;
//}
[class^="step"] {
    border: 3px solid #ee0000;
    border-radius: 10px;
    margin: 0.5em 0;
}
.step__name {
    background: #ffee00;
    text-transform: uppercase;
    font-weight: bold;
}
.step {
    padding: 0.75em;
}
blockquote {
	line-height: 2;
}
.description {
	display: inline;
	position: relative;
	//border-bottom: 1px solid black;
}
.description small {
	display: block;
	color: red;
	font-size: 75%;
	margin-top: -0.75em;
	text-transform: uppercase;
	font-weight: bold;
	position: absolute;
	width: 100%;
	display: none;
}

.step input {
	width: 100%;
	display: none;
	font-size: 150%;
}
.on {
	border-color: green;
	text-align: center;
}
.on input {
	display: block;
}
.off input {
	display: none;
}
.addendum {
	font-weight: bold;
}
.addendum strong {
	text-transform: uppercase;
	font-weight: bold;
	color: red;
}
</style>

<div ng-app>
<div ng-controller="Habit">
<h1>How to Create a Habit</h1>
<a href="http://duhigg-site.s3.amazonaws.com/wp-content/uploads/2014/04/Flowchart-How-to-Create-a-Habit.pdf">duhigg</a>
<h3>What behavior do you want to create?</h3>
<input type="text" placeholder="your new habit" ng-model="routine" />

<br><br>
	<div class="cue third">
	<h2 class="step__name">The Cue</h2>
	
	<div class="step" ng-Dblclick="toggles[0] = toggles[0] === 'on' ? 'off' : 'on'" ng-class="toggles[0]">
		<label>What time will this habit occur?</label><input type="text" ng-model="time" />
		
		<!--<input type="text" ng-model="hours" />-->
	</div>
	<div class="step" ng-Dblclick="toggles[1] = toggles[1] === 'on' ? 'off' : 'on'" ng-class="toggles[1]">
		<label>Where will you be?</label><input type="text" ng-model="where" />
	</div>
	<div class="step" ng-Dblclick="toggles[2] = toggles[2] === 'on' ? 'off' : 'on'" ng-class="toggles[2]">
		<label>Who else will be around?</label><input type="text" ng-model="people" />
	</div>
	<div class="step" ng-Dblclick="toggles[3] = toggles[3] === 'on' ? 'off' : 'on'" ng-class="toggles[3]">
		<label>What will you have just finished?</label><input type="text" ng-model="finished" />
	</div>
	<div class="step" ng-Dblclick="toggles[4] = toggles[4] === 'on' ? 'off' : 'on'" ng-class="toggles[4]">
		<label>What emotion do you think you will be feeling?</label><input type="text" ng-model="emotion" />
	</div>
	
	<article class="addendum"><p>You don't need all of these to create a habit.</p> <strong>Only one of them is needed to become a cue.</strong> <p>But the more you test out, the faster the habit takes hold.</p></article>

</div>
<div class="reward third">
<h2 class="step__name">The Reward</h2>

<div class="step" ng-Dblclick = "toggles[5] = toggles[5] === 'on' ? 'off' : 'on'" ng-class="toggles[5]">
	<label>What reward will you give yourself at the end of the behavior?</label><input ng-model="reward" type="text" /><br>
</div>
</div>
<div class="routine third">
<h2 class="step__name">The Routine</h2>

<blockquote>When <div class="description"><span class="madlibs" ng-bind="combinedCue()"></span><small>Cue</small></div>, I will <div class="description"><span class="madlibs" ng-bind="routine"></span><small>Routine</small></div>, because<br>
	it provides me with <div class="description"><span class="madlibs" ng-bind="reward"></span><small>Reward</small></div> </blockquote>

<div class="step"><p>project this plan where you will see it. Try it for a week.</p>
<small>Eventually, studies say, the new behavior will become automatic.</small></div>
</div>
</div>

