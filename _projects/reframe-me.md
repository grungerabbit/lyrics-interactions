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
	margin: 2.5em 0;
	padding: 1em;
	border-top: 2px solid #eee;
}
input {
	padding: 0.25em;
}
input, textarea {
	font: 2em "Old Standard TT", serif;
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
}

</style>

<div ng-app="reframe">
	<div ng-controller="editor">
	
		<div class="egocentric">
			<section class="question">
				<h1>What do you want?</h1>
				<input type="text" ng-model="wanted" />
			</section>
			<section class="question">
				<div ng-show="wanted.length > 0">
					<h1>Who else does wanting {{wanted}} affect?</h1>
					<form ng-submit="addAffected()">
						<input type="text" ng-model="namePerson" />
						<button>+</button>
					</form>
					
					<em ng-if="affected.length == 1">That's {{affected.length}} other person.</em>
					<em ng-if="affected.length > 1">That's {{affected.length}} other people.</em>
				</div>
			</section>
		</div>
		<div class="selfless">
			<section class="question" ng-repeat="person in affected">
				<h1>Why would {{person}} want to help you {{wanted}}?</h1>
				<em>What does {{person}} get in return?</em>
				<textarea></textarea>
			</section>
		</div>
			
	</div>
</div>
{% endraw %}