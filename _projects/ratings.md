---
title: ratings prototype
subtitle: 
reference: ratings
layout: project
customJS:
- lib: jquery
- lib: mustache
- file: ratings.js
---

<style>
body {
  font: 0.875em 'helvetica';
}
.container {
  width: 100%;
  margin: auto;
}
.right,
.pull-right {
  float: right;
}
.left,
.pull-left {
  float: left;
}
.reviews {
  opacity: 1;
  position: relative;
  width: 300px;
  height: 300px;
  background: #828282;
  padding: 1em;
  margin: .5em;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
  float: left;
}
.reviews:hover {
  opacity: 1;
}
.reviews h2 {
  margin: 0 0 1em 0;
  font-size: 2.25em;
  line-height: 1.2em;
}
.reviews h5 {
  font-size: 1.25em;
  font-weight: normal;
  font-style: italic;
}
.reviews h5.right {
  position: absolute;
  right: 1em;
  bottom: 4.35em;
}
.reviews em,
.reviews a {
  position: absolute;
  right: 1em;
  bottom: 3.5em;
}
.reviews .price,
.reviews .rating,
.reviews .info {
  position: absolute;
}
.reviews .price {
  width: 0;
  border-top: 75px solid #e3156b;
  border-left: 75px solid transparent;
  right: 0;
  top: 0;
}
.reviews .price h6 {
  font-size: 1.75em;
  margin: 0;
  position: absolute;
  right: .25em;
  margin-top: -72px;
  letter-spacing: -1px;
}
.reviews .rating {
  right: 14px;
  bottom: 55px;
  font: 300% helvetica;
  font-weight: bold;
  color: white;
  text-shadow: -1px 0px 3px rgba(0, 0, 0, 0.3);
}
.reviews .info {
  background: rgba(230, 230, 230, 0.35);
  margin-left: -1em;
  bottom: 0;
  padding: 4px .5em;
}
.reviews.mini h2 {
  font-size: 1.65em;
  margin-top: -0.5em;
}
.reviews.mini h5 {
  font-size: 1.15em;
}
.reviews.mini h5.right {
  bottom: 2.5em;
}
.reviews.mini em,
.reviews.mini a {
  position: absolute;
  right: .75em;
  bottom: 45px;
  font-size: .95em;
}
.reviews.mini .rating {
  bottom: 52px;
}
.reviews.mini .price {
  width: 0;
  border-top: 50px solid #e3156b;
  border-left: 50px solid transparent;
  right: 0;
  top: 0;
}
.reviews.mini .price h6 {
  font-size: 1.25em;
  margin: 0;
  position: absolute;
  right: 3px;
  margin-top: -49px;
  letter-spacing: -1px;
}
.reviews.large h2 {
  font-size: 2.75em;
}
.reviews.large h5 {
  font-size: 1.5em;
}
.reviews.large .rating {
  font-size: 3.25em;
}
.reviews.huge h2 {
  font-size: 3em;
}
.reviews.huge h5 {
  font-size: 1.5em;
}
.reviews.huge em,
.reviews.huge a {
  font-size: 1.25em;
  bottom: 3.15em;
}
.reviews.huge .rating {
  font-size: 4em;
}
.reviews.huge .price {
  width: 0;
  border-top: 112.5px solid #e3156b;
  border-left: 112.5px solid transparent;
  right: 0;
  top: 0;
}
.reviews.huge .price h6 {
  font-size: 2.65em;
  margin: 0;
  position: absolute;
  right: 3px;
  margin-top: -111.5px;
  letter-spacing: -1px;
}
</style>

<div class="container">	
<h1>Ratings!</h1>
<div id="test"></div>
<div id="friend">No ratings yet...</div>
</div>

<script src="//cdnjs.cloudflare.com/ajax/libs/mustache.js/0.7.2/mustache.min.js"></script>

<script>

				



</script>