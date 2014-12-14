---
title: floorplans
reference: floorplans
subtitle: small multiple floorplan timeline exploration
layout: post
featured: true
design: 
image: tritrail.png
version: 0.0.0
amazon: 
status: In progress
category: 
description: Small multiples floorplan viewer and illustrator.
todo:
annotations:
- Product Design at Nasdaq
---

Floorplans is a programmatic illustrator which makes small multiples of a given floorplan, along with a time series of changes. Edward Tufte advocates small multiples in his seminal book <a href="http://www.amazon.com/gp/product/0961392142/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&linkCode=as2">The Visual Display of Quantitative Information</a>, as a way for the viewer to understand an information system quickly. The base diagram is repeated multiple times and data is overlaid. They can be compared with each other due to their similarity. They also have a high data-ink ratio, meaning they communicate a lot of information within a small space.

Since floorplans are ever-changing, yet the building architecture remains the same, I wanted to make a system to display the interior design and spatial layout from any given moment. I also wanted the diagrams to become a history of a space. Perhaps there's a progress or genetic theory to explore with floorplans: the space becomes more and more optimized to us (or vice versa). As Churchill said, "We shape our dwellings, and afterwards, our dwellings shape us."

The floorplans themselves are stored in Javascript Objects, so they can be constructed many times with ease. I have started with the floorplan of Prodaq<sup>1</sup>, where I work, and with my own apartment. Both of these floorplans have evolved over the last year, and where appropriate, I have included historical annotations in the timelines.