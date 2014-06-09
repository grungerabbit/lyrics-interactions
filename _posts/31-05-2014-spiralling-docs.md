---
title: spiralling documentation
reference: spiral
layout: post
featured: true
design: cellular automata
version: 1.0.0
image: spiral.png
amazon: //ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=ss_til&ad_type=product_link&tracking_id=main05-20&marketplace=amazon&region=US&placement=B000777J2S&asins=B000777J2S&linkId=F5RYVQOJC2VOBEAA
category: song
description: |
  A cellular automaton inspired by the song Spiralling by Antony and the Johnsons. 
  The parameters include growth, birth, and death states broadly modeled on biological selection.
  As the circle lineages uncoil, their overlapping lines reveal the lyrics of Spiralling.
---

Built with Javascript using the Raphael library. We start with 10 seeds that have the same settings.
These parameters include size, fitness, age. I used a mix of biological ideas including natural and kin selection.
In the growth stage, the next agent in the series is determined by a true/false condition chosen randomly from a list.
These conditions themselves are either random (random number, probability) or semi-random (size, fitness, "age")