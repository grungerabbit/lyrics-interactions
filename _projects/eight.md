---
title: eight
subtitle: a new york city love story
reference: eight
layout: project
customJS:
- lib: raphael
- file: eight.js
---

{% raw %}
<style>
@import url(http://fonts.googleapis.com/css?family=Playfair+Display:400,900italic);
body {
  padding: 0;
  margin: 0;
  font-family: 'Playfair Display', serif;
}
.eight__header {
  position: absolute;
  background: black;
  height: 40px;
  width: 100%;
  padding: 5px;
  z-index: 100;
  top: 0;
  padding-left: 75px;
}
.eight__header a {
  color: #aaa;
  text-decoration: none;
  margin-right: 10px;
}
.eight__header a:hover {
  border-bottom: 1px dotted #aaa;
}
button {
  width: 100px;
  padding: 10px;
}
.person__name {
  display: inline-block;
  width: 150px;
  color: #555;
}
.eight__intro {
  position: absolute;
  z-index: 150;
  right: 10%;
  border-left: 1px dashed black;
  height: 100%;
  padding-left: 100px;
}
.eight__title {
  margin: 50px auto 15px;
  text-align: right;
  font-weight: 900;
  font-style: italic;
  font-size: 3em;
}
.eight__subtitle {
  font-weight: normal;
}
.eight__subtitle span {
  font-size: .75em;
}
.cute {
  position: absolute;
  right: 10%;
  text-align: right;
  top: 190px;
  width: 200px;
  line-height: 1.25;
}
.cute strong {
  display: block;
  font-weight: 900;
  font-style: italic;
}
.hackNY {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 0 5px;
}
</style>

    
<header class="eight__header">
  <a class="okcupid" href="#">okCupid</a>
  <a class="duration" href="#">duration</a>
  <a class="school" href="#">school</a>
  <a class="SOTU" href="#">state of the union</a>
  <a class="reset" href="#">reset</a>
</header>

<div class="person__name">the person's name!</div>
    
<div class="eight__intro">
  <h1 class="eight__title">eight</h1>
    <h3 class="eight__subtitle">a new york city love story, told in raphael.js <span>v1.0</span></h3><br>
</div>
  
<p class="cute">
  <strong>7</strong> romances 
  <strong>6</strong> 20-somethings 
  <strong>5</strong> relationships 
  <strong>4</strong> estrangements 
  <strong>3</strong> universities 
  <strong>2</strong> years 
  <strong>1</strong> city
</p>

<span class="hackNY">built over 24 hours at <a href="http://hackny.org/">hackNY fall 2013</a></span>
{% endraw %}