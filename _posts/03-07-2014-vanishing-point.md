---
title: vanishing point
reference: vp
subtitle: 3-point perspective 
layout: post
featured: true
image: vp.png
version: 0.8.0
status: In active development
description: Generates a 2D line drawing of a 3D prism in three-point graphical perspective. The user defines initial locations and dimensions, then the program uses slope to calculate a horizon line and Cartesian coordinates for other vertices.
todo: 
- Build hatching
- Allow additional objects
- Control Panel
- Draggable?
annotations:
- Not a properly "3D" object. It's an illusion, Michael
- AKA height, width, depth
- Or some other kind of control
- Caveat * In later high school, I did not take "AP" calculus, while I did take "AP" studio art. This may have contributed to the disparity. However, I believe the retention differences may be useful for comparing art vs. math secondary education in the No Child Left Behind era. The difference is alarming even in a relatively privileged public school district such as the one I attended. (My example is obviously anecdotal, but I would like to explore the question in further quantitative research.)
- Those word problems with the building and angle of the sun did not seem real enough to count as practical applications.
---

Vanishing Point is a 3-point perspective viewer that allows you to plot and calculate 3D objects in 2D space.<sup></sup> It is built in Javascript using the [Raphael.js](http://raphaeljs.com/) SVG library. As of version 0.8.0, you can:

* Draw a basic rectangular prism in perspective
* Draw dashed guidelines from vanishing points to vertices
* Define 3 vanishing points
* Choose a seed point, which becomes vertex 1 (the closest vertex to the viewer)
* Use distances from the seed point<sup></sup> to draw the 3 next closest vertices
* Use vertices 2-4 and the vanishing points to define the last 4 vertices
* Draw solid edges of the prism

I hope to next add a visual treatment which simulates hatching lines leading to the vanishing points. I may later build a control panel<sup></sup> like in the [Wang Tiles](/projects/wang-tiles.html) project I made earlier.

###Why

I was inspired to build vanishing point off of a doodle: I drew a chair with the surfaces composed of stacked perspective lines. It occurred to me vanishing points and hatching lines could be calculated, with the image generated from the math... slope? Using Raphael for the graphics was a natural choice, and I started reviewing middle school and high school math to write the algorithms for plotting.

###How

This project applies two concepts first learned in middle school art and math class. The two pedagogic methods had vastly different results:<sup></sup> almost a decade later, I still have a clear concept of what vanishing points and horizon lines are, as well as how to notice these in real life and apply them to draw realistic perspective. 

![3-point](http://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/3-point_perspective_1-px-line.svg/1000px-3-point_perspective_1-px-line.svg.png)

Slope, however, I forgot completely, even though the concept is just as foundational. I vaguely remember learning about slope, finding intersections and endpoints, and triangle concepts. I know we covered these in the sequential order of pre-algebra, geometry, and trigonometry from middle school and early high school. I had no idea of their practical application at that time.<sup></sup>  As a result, I had a dim memory of slope when I started building Vanishing Point.

Lucky for me, the internet has this forgotten information! Helpful posts:

* [Slope](http://www.purplemath.com/modules/slope.htm)
* [Slope Intercept Form](http://www.purplemath.com/modules/strtlneq.htm)
* [Cosine](http://mathworld.wolfram.com/Cosine.html)
* [Line intersection](http://zonalandeducation.com/mmts/intersections/intersectionOfTwoLines1/intersectionOfTwoLines1.html)
* [Intercepts](http://www.purplemath.com/modules/intrcept.htm)
* [Point-slope](http://www.purplemath.com/modules/strtlneq2.htm)
* [Endpoint of a line knowing slope, start and distance](http://math.stackexchange.com/questions/9365/endpoint-of-a-line-knowing-slope-start-and-distance)

