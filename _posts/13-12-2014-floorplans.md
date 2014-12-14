---
title: floorplans
reference: floorplans
subtitle: small multiple floorplan timeline exploration
layout: post
featured: true
design: 
image: floorplan.png
version: 1.0.0
amazon: //ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=ss_til&ad_type=product_link&tracking_id=&marketplace=amazon&region=US&placement=0961392142&asins=0961392142&linkId=&show_border=true&link_opens_in_new_window=true
status: In progress
category: 
description: Small multiples floorplan viewer and illustrator.
todo:
- make timeline
- different layouts
- settings
annotations:
- Product Design at Nasdaq
- We had three very similar grey-greens, amongst other similar colors
- We did a White Elephant gift exchange, where each person brought in a gift. Your final gift was tied to your new seat. Seat exchanges post-gifts were possible. In this way, we "randomized" the seating. It'd be interesting to examine if personality affected the seats, as manifest in the gifts selected on both sides.

---

Floorplans is a programmatic illustrator which makes small multiples of a given floorplan, along with a time series of changes. Edward Tufte advocates small multiples in his seminal book <a href="http://www.amazon.com/gp/product/0961392142/ref=as_li_tl?ie=UTF8&camp=1789&creative=390957&linkCode=as2">The Visual Display of Quantitative Information</a>, as a way for the viewer to understand an information system quickly. The base diagram is repeated multiple times and data is overlaid. They can be compared with each other due to their similarity. They also have a high data-ink ratio, meaning they communicate a lot of information within a small space.

Since floorplans are ever-changing, yet the building architecture remains the same, I thought they would be perfect for small multiples. I wanted to make a system to display the interior design and spatial layout from any given moment. I also wanted the diagrams to become a history of a space. Perhaps there's a progress or genetic theory to explore with floorplans: the space becomes more and more optimized to us (or vice versa). As Churchill said, "We shape our dwellings, and afterwards, our dwellings shape us." How do our surroundings affect our relationships? Our moods? Is there a "most optimal" or "utopian" layout that each configuration strives towards?

The floorplans themselves are stored in Javascript Objects, so they can be constructed many times with ease. I have started with the floorplan of Prodaq<sup>1</sup>, where I work, and will expand to my own apartment. Both of these floorplans have evolved over the last year, and where appropriate, I have included historical annotations in the timelines. 

In the Prodaq floorplan, I have also included an anonymized seating chart, where I've colored the chairs to the occupant. Hovering over each will show you the person's job title. Since we use Github at work, I selected the colors from each person's Github Identicon and adjusted<sup>2</sup> when needed for contrast. Back to the biological exploration, I think we can see a "carrying capacity," as well as growing pains. Also notable is the seating consistency of the first year and how our recent (12/2014) seating change<sup>3</sup> affects the status quo.