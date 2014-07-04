---
title: vanishing point
reference: vp
subtitle: 3-point perspective 
layout: post
featured: false
design: 
image: 
version: 0.6.1
category: 
description: 
---



<!-- 	What is it and why is it important? What were you inspired by? What were you interested in exploring?

		How does it work? How did you build it? What libraries do you use and why? Methodology? What kind of skills did you have at the time?

		Results? How long did it take you? How done is it? Are you satisfied, what parts are you looking to improve?
-->

Vanishing Point is a 3-point perspective viewer that allows you to algorithmically define prisms. It is built in Javascript and Raphael.js. As of version 0.5.0, you can:

* Define 3 vanishing points
* Draw a basic rectangular prism in perspective with 4/8 of the vertices defined
* Draw dashed guidelines from vanishing points to vertices
* Choose a seed point, which becomes vertex 1 (the closest vertex to the viewer)
* Use distances from the seed point to draw the 3 next closest vertices
* Draw solid edges between the defined vertices


I am currently working on the last 4 vertices. I hope to not only be able to generate this prism, but a visual treatment which simulates hatching lines also leading to the vanishing points. I may later build a control panel like in the [Wang Tiles](/projects/wang-tiles.html) I made earlier.

This project applies two concepts first learned in middle school art and math class. The two pedagogic methods had vastly different results: almost a decade later, I still have a clear concept of what vanishing points are, as well as how to notice and draw realistic perspective. Slope, however, not so much, even though the concept is just as foundational. I remember learning about slope, slope intercept, and triangle concepts in the sequential order of pre-algebra, geometry, and trigonometry from middle school and early high school, but I had no idea of their practical application at that time. I had only the dimmest memory of slope intercept form when I started building Vanishing Point.

I am lucky I can search the internet for this forgotten information! Math is art, and math is life. Helpful posts:

* [Slope](http://www.purplemath.com/modules/slope.htm)
* [Slope Intercept Form](http://www.purplemath.com/modules/strtlneq.htm)
* [Cosine](http://mathworld.wolfram.com/Cosine.html)
* [Line intersection](http://zonalandeducation.com/mmts/intersections/intersectionOfTwoLines1/intersectionOfTwoLines1.html)
* [Intercepts](http://www.purplemath.com/modules/intrcept.htm)
* [Point-slope](http://www.purplemath.com/modules/strtlneq2.htm)
* [Endpoint of a line knowing slope, start and distance](http://math.stackexchange.com/questions/9365/endpoint-of-a-line-knowing-slope-start-and-distance)

![3-point](http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/3-point_perspective_1-px-line.svg/1000px-3-point_perspective_1-px-line.svg.png)