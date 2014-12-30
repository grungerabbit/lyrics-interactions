---
title: lucid editor
reference: lucid
subtitle: make yourself more clear, positive
layout: project
customJS:
- lib: angular
- file: lucid.js
---
{% raw %}
<style>
@import url(http://fonts.googleapis.com/css?family=Abel);
	body {
		font-family: "Abel";
	}
	.lucid__header {
		text-align: center;
	}
	.half {
		width: 50%;
		float: left;
		height: 100%;
		min-height: 1000px;
		position: relative;
	}
	.negative {
		background-color: #343434;
		border-right: 1px #2288ff;
	}
	.half textarea {
		width: 100%;
		min-height: 1000px;
		font: 2em "Abel";
		border: none;
		background: none;
		padding: 1.5em;
	}
	.negative textarea {
		color: #eee;
	}
	.positive {

	}
	.original__length {
		position: absolute;
	}
</style>

<div ng-app="lucid">
	<div ng-controller="editor">
		<header class="lucid__header">
			<h1>Lucid</h1>

			{{over}}
		</header>
		<div class="half negative">

		<textarea ng-model="original"></textarea>

		
		</div>
		<div class="half positive">
			<h1 class="original__length">{{original.length}} ... {{edited.length}} </h1>

			<textarea ng-model="edited" ng-change="isOver()"></textarea>
		</div>
	</div>
</div>
{% endraw %}