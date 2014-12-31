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
		background-color: #e2e2e2;
		font-family: "Abel";
	}
	.lucid__header {
		text-align: center;
		width: 100%;
		position: fixed;
		z-index: 2;
		color: #25B79B;
		top: 320px;
	}
	.half {
		margin-top: -35px;
		width: 50%;
		float: left;
		height: 100%;
		min-height: 1000px;
		position: relative;
		overflow-x: hidden;
	}
	.negative {
		background-color: #343434;
		border-right: 1px solid #25B79B;
	}
	.half textarea {
		width: 100%;
		min-height: 1000px;
		font: 2em "Abel";
		border: none;
		background: none;
		padding: 2em;
	}
	.half textarea:focus {
		outline: none;
	}
	.negative textarea {
		color: #eee;
	}
	.positive {
		border-left: 1px solid #25B79B;
	}
	.original__length {
		position: fixed;
		width: 50%;
		background-color: rgba(37,183,155,.5);
		top: 0px;
	}
	.original__length--focus {
		background-color: #25B79B;
	}
	.original__length--caution {
		background-color: #FFE736 !important;
	}
	.original__length--error {
		background-color: #E51F1F !important;
	}
	.negative .original__length {
		left: 0px;
		padding-right: 20px;
		text-align: right;
		border-right: 1px solid #343434;
	}
	.positive .original__length {
		right: 0px;
		padding-left: 20px;
		text-align: left;
		border-left: 1px solid #e2e2e2;
	}
	.circle-crop {
		position: fixed;
		top: 300px;
		width: 50px;
		overflow: hidden;
	}
	.negative .circle-crop {
		right: 50%;
		margin-right: 1px;
	}
	.negative .circle {
		background-color: #e2e2e2;
	}
	.positive .circle-crop {
		left: 50%;
		margin-left: 1px;
	}
	.positive .circle {
		background-color: #343434;
		margin-left: -50px;
	}
	.circle {
		width: 100px;
		height: 100px;
		border-radius: 100px;
	}
	.copier {
		display: inline-block;
		margin-left: 2px;
		cursor: pointer;
	}
</style>

<div ng-app="lucid">
	<div ng-controller="editor">
		<header class="lucid__header">
			<h1>Lucid</h1>
			<h3 class="copier pos-neg" ng-click="copy('posNeg', original)">&raquo;</h3> <h3 class="copier neg-pos" ng-click="copy('negPos', edited)">&laquo;</h3>
		</header>
		<div class="half negative">
			<h1 class="original__length">{{original.length}}</h1>
			<div class="circle-crop">
				<div class="circle"></div>
			</div>
			<textarea ng-model="original"></textarea>
		</div>
		<div class="half positive">
			<h1 class="original__length" ng-class="{'original__length--error' : edited.length > original.length , 'original__length--caution' : edited.length > limit }">{{edited.length}}/{{limit}}</h1>
			<div class="circle-crop">
				<div class="circle"></div>
			</div>
			<textarea ng-model="edited" ng-focus="lol()"></textarea>
		</div>
	</div>
</div>
{% endraw %}