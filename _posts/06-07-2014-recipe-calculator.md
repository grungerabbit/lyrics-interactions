---
title: recipe calculator
reference: recipe
subtitle: recipe calculator
layout: post
featured: false
status: active development
image: recipe.png
amazon: //ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ss&ref=ss_til&ad_type=product_link&tracking_id=main05-20&marketplace=amazon&region=US&placement=1583335307&asins=1583335307&linkId=ATRVLHILEORQHPHI
version: 1.0.0
description: What does it cost to buy food at a restaurant vs. make it at home?
annotations:
- I used to joke that I could burn water. I did, once.
- or at least a lot more, but let's think on it
- or $5 is what you expect to pay for coffee. What if you were a country mouse and expect to pay $1 for a coffee, and you came to NYC... hmmm...
todo:
- branding/color adjustment
- rounding to 2 decimal points where appropriate
- fix add/remove ingredients
- specials?
- quality stars
- better analysis (weight all of the possibilities)
---

Recipe Calculator helps you calculate the price of cooking at home vs. eating at a restaurant.

I live in Manhattan, so food is very expensive yet restaurants are constantly tempting. It is easy to say forget it, let's go get take out instead of cooking. Especially when you don't think you're a good chef.<sup></sup>

I started reading a lot of [Budget Bytes](http://www.budgetbytes.com) and I learned a lot about cooking. Her instructions clarified everything, and made it easy to follow along even for a n00b. I enjoyed the way she broke down the costs, even with ingredients like salt and pepper.

With that in mind, I was curious to build (another) calculator.

Version 1.0 built over the course of 8 hours on Sunday 7/6/2014.

###Notes
price / servings = 
base price

how to calculate time and quality?

#####Quality
0-5, 0 being worst and 5 being best

if something is really awful
the cost is basically infinite because
you should have never consumed it and
you should have never paid for it

if something is really great
the cost is basically nothing because
you would have paid anything<sup></sup> for it and 
whatever is the reality is a steal

e.g. You have two coffees, both purchased for $5. One is the best coffee you ever had, one is the worst. The best coffee would seem like a steal, and the worst coffee would seem like they stole from you.

In the equation, we can use literally make the prices correspond to the feelings. Current guide:

* 0 stars = 10
* 1 stars = 5
* 2 stars = 2
* 3 stars = 1
* 4 stars = .5
* 5 stars = .2

We will examine these handicaps. It may be a diff, as with time. It probably also relates to the stated price; if in our example, we had paid $1000 for both coffees, the 5-star one might still be worth $1000 but most likely not.

Another way to think about it is whether or not the price is appropriate for the rating. So a "meets expectations" coffee is perfectly priced. If you would pay $5 for an average coffee,<sup></sup> then it's a 3-star coffee. But if you would pay $10 for a great coffee, a 5-star coffee at $5 is a 3-star coffee at $10. And a great coffee worth $10 but priced at $100 is a 0-star coffee, because it's a rip off. Is this too complex? (And, related, can someone teach me economics?)

Hmm but subjectively best? Like "best coffee in the world who cares about price" shouldn't be compared to a "greatly surpasses expectations because dirt cheap coffee." This must be the problem with rating sites.

#####Time
Needs to be compared with
the store bought time, I think.

If something takes forever to make, that's annoying and possibly untenable. Some foods do not have this problem: tea will take 5 minutes at home and at a store, and may even take longer commercially prepared.

Diffs:

* 0 - 10 - no handicap - 1
* 10 - 30 - some handicap - 1.25
* 30 - 60 - some more handicap - 1.5
* 60 - 120 - quite a bit of handicap - 2
* 120+ - lots of handicap - 4

Again, these need to be validated.

#####Special

These may be too difficult to quantify...

Store:

* Taxes
* Environmental impact

Home:

* Washing dishes/cleanup
* Investment in equipment