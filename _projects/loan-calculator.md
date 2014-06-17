---
title: loan calculator
reference: loan
subtitle: loan calculator
layout: project
customJS:
- lib: angular
- file: calc.js
---


<div ng-app>
<div ng-controller="Bingo">
	
<h1 class="title">Batshit Bingo</h1>

<div class="bingo__board">
	<div class="grid" ng-repeat="i in getNumber(board) track by $index" ng-click="highlightSpace()" ng-class="{'bingo--active' : boardSort[$index].selected == true, 'bingo--winner' : boardSort[$index].glittery == true, 'no-go' : boardSort.length == 0}"><p ng-bind="boardSort[$index].text"></p></div>
</div>

<aside class="control__panel">
<form ng-submit="pushList()">
<input ng-model="test" placeholder="add possible square" class="new__possible"><button class="button possible">+</button>
</form>
	
<ol class="instructions">
	<li ng-repeat="item in instruct"><input class="instruction__item" ng-model="item.feeling"></li>
</ul>

<button ng-click="generateBoard()" class="button">generate bingo board</button>
<a href="#" ng-if="instruct.length !== 0" ng-click="resetChoices()" class="button mini">delete current choice list</a>
</aside>

</div>
</div>
