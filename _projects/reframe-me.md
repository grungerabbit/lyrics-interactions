---
title: reframe me
reference: reframe
subtitle: a way to think outside your own perspective
layout: project
customJS:
- lib: angular
- file: reframe.js
---
{% raw %}
<style>
@import url(http://fonts.googleapis.com/css?family=Old+Standard+TT:400,400italic,700);

body {
	font-family: 'Old Standard TT', serif;
}
.egocentric, .selfless {
	min-height: 40em;
}
.egocentric {
	float: left;
	width: 33%;
	border-right: 2px solid #eee;
	position: fixed;
}
.selfless {
	float: right;
	width: 67%;
}
.question {
	margin: 3em 0 1em;
	padding: 1em;
	border-top: 2px solid #eee;
	position: relative;
}
input {
	padding: 0.25em;
	font-size: 1.5em;
}
input, textarea {
	font-family: "Old Standard TT", serif;
	width: 100%;
	border: none;
	border-left: 1rem solid #eee;
	padding-left: 0.5em;
}
input:focus, textarea:focus {
	border: none;
	outline: none;
	background-color: transparent;
	border-left: 1rem solid rgba(230,200,230,0.95);	
}
.selfless textarea {
	min-height: 5em;
	font-size: 2em;
}
.add__person {
	display: none;
	width: 2em;
	height: 2em;
	border-radius: 50%;
	border: none;
	background-color: rgba(230,200,230,0.95);
}
.add__person:focus {
	outline: none;
	background: rgba(210,190,210,0.95);
}
.question:hover .add__person {
	display: block;
	position: absolute;
	font: 1.5em "Old Standard TT", serif;
	right: 1em;
	margin-top: -2.25em;
}
.solution {
	width: 50%;
	float: left;
}
</style>

<div ng-app="reframe">
	<div ng-controller="editor">
	
		<div class="egocentric">
			<section class="question">
				<h3>What do you want?</h3>
				<input type="text" ng-model="wanted" placeholder="to..." />
			</section>
			<section class="question" ng-show="wanted.length > 0">
				<h3>Why do you want {{wanted}}?</h3>
				<input type="text" ng-model="why" placeholder="because..." />
			</section>
			<section class="question">
				<div ng-show="why.length > 0">
					<h3>Who else does wanting {{wanted}} affect?</h3>
					<form ng-submit="addAffected()">
						<input type="text" ng-model="namePerson" />
						<button class="add__person">+</button>
					</form>
					
					<em ng-if="affected.length == 1">That's {{affected.length}} other person.</em>
					<em ng-if="affected.length > 1">That's {{affected.length}} other (groups of) people.</em>
				</div>
			</section>
		</div>
		<div class="selfless">
			<section class="question" ng-repeat="person in affected">
				<h1>Why would {{person.name}} want to help you {{wanted}}?</h1>
				<em>What does {{person.name}} get in return?</em>
				<textarea ng-model="person.wish"></textarea>
			</section>
			
			<section class="question">
				<p ng-if="affected.length > 0"><em>See if you can reconcile your wish {{wanted}} with these {{affected.length}} other wishes.</em> If you can, you'll be more likely to find success.</p>
			</section>
			
			<section class="solution">
				<p ng-if="why && affected.length > 0"><em>You</em>: {{why}}</p>
			</section>
			<section class="solution" ng-if="affected.length > 0">
				<ul ng-repeat="person in affected">
					<li><em>{{person.name}}</em>: {{person.wish}}</li>
				</ul>
			</section>
		</div>
			
	</div>
</div>
{% endraw %}