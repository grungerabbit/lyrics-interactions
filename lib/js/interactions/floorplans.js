var plans = angular.module('plans', []);

plans.controller("planSettings", function planSettings ($scope) {


	$scope.layouts = {
		"prodaq": {
			"startX": 200,
			"startY": 300,
			"rooms": [
				{
					"name": "West",
					"coords": [
						//"M", 220, ",", 200,
						"l", -130, ",", 0,
						"l", 0, ",", -40,
						"l", 10, ",", 0,
						"l", -10, ",", 0,
						"l", 0, ",", -100,
						"l", 150, ",", 0,
						"l", 0, ",", 120
					],
					"maxWidth": 150
				},
				{
					"name": "East",
					"coords": [
						//"M", 400, ",", 200,
						"l", -170, ",", 0,
						"l", 0, ",", -140,
						"l", 170, ",", 0,
						"l", 0, ",", 120
					],
					"maxWidth": 190
				},
				{
					"name": "East",
					"coords": [
						//"M", 400, ",", 200,
						"l", -25, ",", 0
					],
					"maxWidth": 60
				}
			],
			"timeline": [
				{
					"date": "September 2013",
					"description": "First move into the new space",
					"personnel": 7,
					"contents":	[
						// prodaq west
						{
							"ref": "lc",
							"coord": [-310, -80]
						},
						// prodaq east, left side
						{
							"ref": "vd",
							"coord": [-240, -140]
						},
						{
							"ref": "vd",
							"coord": [-240, -100]
						},
						{
							"ref": "vd",
							"coord": [-240, -60]
						},
						{
							"ref": "cc",
							"coord": [-220, -120],
							"person": "LKE"
						},
						{
							"ref": "cc",
							"coord": [-220, -80],
							"person": "ZIB"
						},
						{
							"ref": "cc",
							"coord": [-220, -40],
							"person": "TQR"
						},
						{
							"ref": "food",
							"coord": [-240, -20]
						},
						// prodaq east, right side
						{
							"ref": "vd",
							"coord": [-90, -140]
						},
						{
							"ref": "vd",
							"coord": [-90, -100]
						},
						{
							"ref": "vd",
							"coord": [-90, -60]
						},
						{
							"ref": "cc",
							"coord": [-90, -120],
							"person": "EMR"
						},
						{
							"ref": "cc",
							"coord": [-90, -80],
							"person": "BKC"
						},
						{
							"ref": "cc",
							"coord": [-90, -40],
							"person": "JDO"
						},
						{
							"ref": "mc",
							"coord": [-155, -80]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20],
							"person": "SFN"
						}
					]
				},
				{
					"date": "November 2013",
					"description": "Big furniture shipment",
					"personnel": 8,
					"contents":	[
						// prodaq west
						{
							"ref": "lc",
							"coord": [-310, -80]
						},
						// prodaq east, left side
						{
							"ref": "vd",
							"coord": [-240, -140]
						},
						{
							"ref": "vd",
							"coord": [-240, -100]
						},
						{
							"ref": "vd",
							"coord": [-240, -60]
						},
						{
							"ref": "cc",
							"coord": [-220, -120],
							"person": "LKE"
						},
						{
							"ref": "cc",
							"coord": [-220, -80],
							"person": "ZIB"
						},
						{
							"ref": "cc",
							"coord": [-220, -40],
							"person": "TQR"
						},
						{
							"ref": "food",
							"coord": [-240, -20]
						},
						// prodaq east, right side
						{
							"ref": "vd",
							"coord": [-90, -140]
						},
						{
							"ref": "vd",
							"coord": [-90, -100]
						},
						{
							"ref": "vd",
							"coord": [-90, -60]
						},
						{
							"ref": "cc",
							"coord": [-90, -120],
							"person": "EMR"
						},
						{
							"ref": "cc",
							"coord": [-90, -80],
							"person": "BKC"
						},
						{
							"ref": "cc",
							"coord": [-90, -40],
							"person": "JDO"
						},
						{
							"ref": "wt",
							"coord": [-175, -120]
						},
						{
							"ref": "wbh",
							"coord": [-170, -130]
						},
						{
							"ref": "wbh",
							"coord": [-170, -45]
						},
						{
							"ref": "wbv",
							"coord": [-185, -115]
						},
						{
							"ref": "wbv",
							"coord": [-185, -75]
						},
						{
							"ref": "wbv",
							"coord": [-140, -115]
						},
						{
							"ref": "wbv",
							"coord": [-140, -75]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "wmc",
							"coord": [-175, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20],
							"person": "SFN"
						},
						{
							"ref": "vd",
							"coord": [-30, -80]
						},
						{
							"ref": "cc",
							"coord": [-30, -60],
							"person": "DZX"
						}
					]
				},
				{
					"date": "January 2014",
					"description": "One round of new hires",
					"personnel": 14,
					"contents":	[
						// prodaq west
						{
							"ref": "lc",
							"coord": [-310, -80]
						},
						// prodaq east, left side
						{
							"ref": "vd",
							"coord": [-240, -140]
						},
						{
							"ref": "vd",
							"coord": [-240, -100]
						},
						{
							"ref": "vd",
							"coord": [-240, -60]
						},
						{
							"ref": "cc",
							"coord": [-220, -120],
							"person": "LKE"
						},
						{
							"ref": "cc",
							"coord": [-220, -80],
							"person": "ZIB"
						},
						{
							"ref": "cc",
							"coord": [-220, -40],
							"person": "TQR"
						},
						{
							"ref": "food",
							"coord": [-240, -20]
						},
						// prodaq east, right side
						{
							"ref": "vd",
							"coord": [-90, -140]
						},
						{
							"ref": "vd",
							"coord": [-90, -100]
						},
						{
							"ref": "vd",
							"coord": [-90, -60]
						},
						{
							"ref": "cc",
							"coord": [-90, -120],
							"person": "EMR"
						},
						{
							"ref": "cc",
							"coord": [-90, -80],
							"person": "BKC"
						},
						{
							"ref": "cc",
							"coord": [-90, -40],
							"person": "JDO"
						},
						{
							"ref": "wt",
							"coord": [-175, -120]
						},
						{
							"ref": "wbh",
							"coord": [-170, -130]
						},
						{
							"ref": "wbh",
							"coord": [-170, -45]
						},
						{
							"ref": "wbv",
							"coord": [-185, -115]
						},
						{
							"ref": "wbv",
							"coord": [-185, -75]
						},
						{
							"ref": "wbv",
							"coord": [-140, -115]
						},
						{
							"ref": "wbv",
							"coord": [-140, -75]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "wmc",
							"coord": [-175, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20],
							"person": "SFN"
						},
						{
							"ref": "vd",
							"coord": [-30, -80]
						},
						{
							"ref": "cc",
							"coord": [-30, -60],
							"person": "AFY"
						},
						// literal siberia
						{
							"ref": "vd",
							"coord": [-340, 60]
						},
						{
							"ref": "cc",
							"coord": [-340, 80],
							"person": "KXP"
						},
						{
							"ref": "vd",
							"coord": [-340, 100]
						},
						{
							"ref": "cc",
							"coord": [-340, 120],
							"person": "HRI"
						},
						{
							"ref": "vd",
							"coord": [-340, 140]
						},
						{
							"ref": "cc",
							"coord": [-340, 160],
							"person": "NMT"
						},
						{
							"ref": "vd",
							"coord": [-320, 60]
						},
						{
							"ref": "cc",
							"coord": [-300, 80],
							"person": "DZX"
						},
						{
							"ref": "vd",
							"coord": [-320, 100]
						},
						{
							"ref": "cc",
							"coord": [-300, 120],
							"person": "OOL"

						},
						{
							"ref": "vd",
							"coord": [-320, 140]
						},
						{
							"ref": "cc",
							"coord": [-300, 160],
							"person": "PGR"
						},
						{
							"ref": "mc",
							"coord": [-320, 230]
						},
						{
							"ref": "special",
							"coord": [-400, 20]
						}
					]
				},
				{
					"date": "February 2014",
					"description": "Tear down this wall",
					"personnel": 14,
					"contents":	[
						// prodaq west
						{
							"ref": "food",
							"coord": [-390, -60]
						},
						{
							"ref": "shd",
							"coord": [-390, -110]
						},
						{
							"ref": "shd",
							"coord": [-340, -110]
						},
						{
							"ref": "shd",
							"coord": [-340, -55]
						},
						{
							"ref": "shd",
							"coord": [-290, -55]
						},
						{
							"ref": "cc",
							"coord": [-373, -90],
							"person": "NMT"
						},
						{
							"ref": "cc",
							"coord": [-355, -110],
							"person": "HRI"
						},
						{
							"ref": "cc",
							"coord": [-325, -90],
							"person": "SFN"
						},
						{
							"ref": "cc",
							"coord": [-305, -110],
							"person": "OOL"
						},

						{
							"ref": "cc",
							"coord": [-305, -55],
							"person": "PGR"
						},
						{
							"ref": "cc",
							"coord": [-255, -55],
							"person": "YHJ"
						},
						{
							"ref": "cc",
							"coord": [-325, -35],
							"person": "AFY"
						},
						{
							"ref": "td",
							"coord": [-242, -20]
						},

						// prodaq east, left side
						{
							"ref": "vd",
							"coord": [-240, -140]
						},
						{
							"ref": "vd",
							"coord": [-240, -100]
						},
						{
							"ref": "vd",
							"coord": [-240, -60]
						},
						{
							"ref": "cc",
							"coord": [-220, -120],
							"person": "ZIB"
						},
						{
							"ref": "cc",
							"coord": [-220, -80],
							"person": "TQR"
						},
						{
							"ref": "cc",
							"coord": [-220, -40],
							"person": "KXP"
						},
						// prodaq east, right side
						{
							"ref": "vd",
							"coord": [-90, -140]
						},
						{
							"ref": "vd",
							"coord": [-90, -100]
						},
						{
							"ref": "vd",
							"coord": [-90, -60]
						},
						{
							"ref": "cc",
							"coord": [-90, -120],
							"person": "EMR"
						},
						{
							"ref": "cc",
							"coord": [-90, -80],
							"person": "BKC"
						},
						{
							"ref": "cc",
							"coord": [-90, -40],
							"person": "JDO"
						},
						{
							"ref": "wt",
							"coord": [-175, -120]
						},
						{
							"ref": "wbh",
							"coord": [-170, -130]
						},
						{
							"ref": "wbh",
							"coord": [-170, -45]
						},
						{
							"ref": "wbv",
							"coord": [-185, -115]
						},
						{
							"ref": "wbv",
							"coord": [-185, -75]
						},
						{
							"ref": "wbv",
							"coord": [-140, -115]
						},
						{
							"ref": "wbv",
							"coord": [-140, -75]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "wmc",
							"coord": [-175, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20],
							"person": "LKE"
						}
					]
				},
				{
					"date": "March 2014",
					"description": "Get rid of Z-formation",
					"personnel": 15,
					"contents":	[
						// prodaq west
						{
							"ref": "food",
							"coord": [-330, -140]
						},
						{
							"ref": "shd",
							"coord": [-390, -110]
						},
						{
							"ref": "shd",
							"coord": [-290, -110]
						},
						{
							"ref": "shd",
							"coord": [-390, -60]
						},
						{
							"ref": "shd",
							"coord": [-290, -60]
						},
						{
							"ref": "cc",
							"coord": [-380, -90],
							"person": "NMT"
						},
						{
							"ref": "cc",
							"coord": [-360, -110],
							"person": "HRI"
						},
						{
							"ref": "cc",
							"coord": [-275, -90],
							"person": "SFN"
						},
						{
							"ref": "cc",
							"coord": [-255, -110],
							"person": "OOL"
						},

						{
							"ref": "cc",
							"coord": [-360, -60],
							"person": "AFY"
						},
						{
							"ref": "cc",
							"coord": [-250, -60],
							"person": "YHJ"
						},
						{
							"ref": "wmc",
							"coord": [-325, -15]
						},
						{
							"ref": "td",
							"coord": [-242, -20]
						},
						{
							"ref": "vd",
							"coord": [-390, -40]
						},
						{
							"ref": "cc",
							"coord": [-370, -20],
							"person": "PGR"
						},

						// prodaq east, left side
						{
							"ref": "vd",
							"coord": [-240, -140]
						},
						{
							"ref": "vd",
							"coord": [-240, -100]
						},
						{
							"ref": "vd",
							"coord": [-240, -60]
						},
						{
							"ref": "cc",
							"coord": [-220, -120],
							"person": "ZIB"
						},
						{
							"ref": "cc",
							"coord": [-220, -80],
							"person": "TQR"
						},
						{
							"ref": "cc",
							"coord": [-220, -40],
							"person": "KXP"
						},
						// prodaq east, right side
						{
							"ref": "vd",
							"coord": [-90, -140]
						},
						{
							"ref": "vd",
							"coord": [-90, -100]
						},
						{
							"ref": "vd",
							"coord": [-90, -60]
						},
						{
							"ref": "cc",
							"coord": [-90, -120],
							"person": "EMR"
						},
						{
							"ref": "cc",
							"coord": [-90, -80],
							"person": "BKC"
						},
						{
							"ref": "cc",
							"coord": [-90, -40],
							"person": "JDO"
						},
						{
							"ref": "wt",
							"coord": [-175, -120]
						},
						{
							"ref": "wbh",
							"coord": [-170, -130]
						},
						{
							"ref": "wbh",
							"coord": [-170, -45]
						},
						{
							"ref": "wbv",
							"coord": [-185, -115]
						},
						{
							"ref": "wbv",
							"coord": [-185, -75]
						},
						{
							"ref": "wbv",
							"coord": [-140, -115]
						},
						{
							"ref": "wbv",
							"coord": [-140, -75]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "wmc",
							"coord": [-175, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20],
							"person": "LKE"
						},
						{
							"ref": "vd",
							"coord": [-30, -80]
						},
						{
							"ref": "cc",
							"coord": [-30, -60],
							"person": "WXT"
						}
					]
				},
				{
					"date": "July 2014",
					"description": "Big reorganization",
					"personnel": 14,
					"contents":	[
						// prodaq west
						{
							"ref": "food",
							"coord": [-390, -60]
						},
						{
							"ref": "shd",
							"coord": [-380, -140]
						},
						{
							"ref": "cc",
							"coord": [-360, -120],
							"person": "NMT"
						},
						{
							"ref": "hd",
							"coord": [-335, -140]
						},
						{
							"ref": "cc",
							"coord": [-310, -120],
							"person": "SFN"
						},
						{
							"ref": "shd",
							"coord": [-295, -140]
						},
						{
							"ref": "cc",
							"coord": [-260, -120],
							"person": "OOL"
						},
						
						{
							"ref": "vd",
							"coord": [-330, -90]
						},
						{
							"ref": "cc",
							"coord": [-330, -70],
							"person": "AFY"
						},
						{
							"ref": "vd",
							"coord": [-305, -90]
						},
						{
							"ref": "cc",
							"coord": [-285, -70],
							"person": "YHJ"
						},

						{
							"ref": "shd",
							"coord": [-330, -50]
						},
						{
							"ref": "cc",
							"coord": [-310, -30],
							"person": "PGR"
						},
						{
							"ref": "wmcv",
							"coord": [-390, -40]
						},
						
						{
							"ref": "wbv",
							"coord": [-390, -105]
						},
						
						{
							"ref": "td",
							"coord": [-242, -20]
						},

						// prodaq east, left side
						
						{
							"ref": "vd",
							"coord": [-240, -120]
						},
						{
							"ref": "vd",
							"coord": [-240, -80]
						},
						
						{
							"ref": "cc",
							"coord": [-220, -100],
							"person": "KXP"
						},
						{
							"ref": "cc",
							"coord": [-220, -60],
							"person": "WXT"
						},
						{
							"ref": "wbh",
							"coord": [-210, -15]
						},

						// prodaq east, center

						{
							"ref": "hd",
							"coord": [-220, -140]
						},
						{
							"ref": "cc",
							"coord": [-205, -120],
							"person": "ZIB"
						},
						{
							"ref": "shd",
							"coord": [-178, -140]
						},
						{
							"ref": "cc",
							"coord": [-160, -120],
							"person": "TQR"
						},
						{
							"ref": "hd",
							"coord": [-130, -140]
						},
						{
							"ref": "cc",
							"coord": [-105, -120],
							"person": "EMR"
						},
						

						// prodaq east, right side
						
						{
							"ref": "vd",
							"coord": [-90, -120]
						},
						{
							"ref": "vd",
							"coord": [-90, -80]
						},
						
						{
							"ref": "cc",
							"coord": [-90, -100],
							"person": "BKC"
						},
						{
							"ref": "cc",
							"coord": [-90, -60],
							"person": "JDO"
						},
						{
							"ref": "wt",
							"coord": [-175, -105]
						},
						{
							"ref": "wbv",
							"coord": [-185, -100]
						},
						{
							"ref": "wbv",
							"coord": [-185, -60]
						},
						{
							"ref": "wbv",
							"coord": [-140, -100]
						},
						{
							"ref": "wbv",
							"coord": [-140, -60]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "bk",
							"coord": [-180, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20],
							"person": "LKE"
						}
					]
				},
				{
					"date": "September 2014",
					"description": "Prodaq West seating change",
					"personnel": 15,
					"contents":	[
						// prodaq west
						{
							"ref": "food",
							"coord": [-390, -60]
						},
						{
							"ref": "shd",
							"coord": [-380, -140]
						},
						{
							"ref": "cc",
							"coord": [-360, -120],
							"person": "NMT"
						},
						{
							"ref": "hd",
							"coord": [-335, -140]
						},
						{
							"ref": "cc",
							"coord": [-310, -120],
							"person": "SFN"
						},
						{
							"ref": "shd",
							"coord": [-295, -140]
						},
						{
							"ref": "cc",
							"coord": [-260, -120],
							"person": "OOL"
						},
						
						{
							"ref": "vd",
							"coord": [-330, -90]
						},
						{
							"ref": "cc",
							"coord": [-330, -70],
							"person": "AFY"
						},
						{
							"ref": "vd",
							"coord": [-305, -90]
						},
						{
							"ref": "cc",
							"coord": [-285, -70],
							"person": "XSM"
						},

						{
							"ref": "shd",
							"coord": [-330, -50]
						},
						{
							"ref": "cc",
							"coord": [-310, -30],
							"person": "PGR"
						},

						{
							"ref": "vd",
							"coord": [-390, -40]
						},
						{
							"ref": "cc",
							"coord": [-370, -20],
							"person": "YHJ"
						},

						{
							"ref": "wbv",
							"coord": [-390, -105]
						},
						{
							"ref": "td",
							"coord": [-242, -20]
						},

						// prodaq east, left side
						
						{
							"ref": "vd",
							"coord": [-240, -120]
						},
						{
							"ref": "vd",
							"coord": [-240, -80]
						},
						
						{
							"ref": "cc",
							"coord": [-220, -100],
							"person": "KXP"
						},
						{
							"ref": "cc",
							"coord": [-220, -60],
							"person": "WXT"
						},
						{
							"ref": "wbh",
							"coord": [-210, -15]
						},

						// prodaq east, center

						{
							"ref": "hd",
							"coord": [-220, -140]
						},
						{
							"ref": "cc",
							"coord": [-205, -120],
							"person": "ZIB"
						},
						{
							"ref": "shd",
							"coord": [-178, -140]
						},
						{
							"ref": "cc",
							"coord": [-160, -120],
							"person": "TQR"
						},
						{
							"ref": "hd",
							"coord": [-130, -140]
						},
						{
							"ref": "cc",
							"coord": [-105, -120],
							"person": "EMR"
						},
						

						// prodaq east, right side
						
						{
							"ref": "vd",
							"coord": [-90, -120]
						},
						{
							"ref": "vd",
							"coord": [-90, -80]
						},
						
						{
							"ref": "cc",
							"coord": [-90, -100],
							"person": "BKC"
						},
						{
							"ref": "cc",
							"coord": [-90, -60],
							"person": "JDO"
						},
						{
							"ref": "wt",
							"coord": [-175, -105]
						},
						{
							"ref": "wbv",
							"coord": [-185, -100]
						},
						{
							"ref": "wbv",
							"coord": [-185, -60]
						},
						{
							"ref": "wbv",
							"coord": [-140, -100]
						},
						{
							"ref": "wbv",
							"coord": [-140, -60]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "bk",
							"coord": [-180, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20],
							"person": "LKE"
						}
					]
				},
				{
					"date": "December 2014",
					"description": "Post-Christmas layout",
					"personnel": 15,
					"contents":	[
						// prodaq west
						{
							"ref": "food",
							"coord": [-390, -60]
						},
						{
							"ref": "shd",
							"coord": [-380, -140]
						},
						{
							"ref": "cc",
							"coord": [-360, -120],
							"person": "AFY"
						},
						{
							"ref": "hd",
							"coord": [-335, -140]
						},
						{
							"ref": "cc",
							"coord": [-310, -120],
							"person": "BKC"
						},
						{
							"ref": "shd",
							"coord": [-295, -140]
						},
						{
							"ref": "cc",
							"coord": [-260, -120],
							"person": "WXT"
						},
						
						{
							"ref": "vd",
							"coord": [-330, -90]
						},
						{
							"ref": "cc",
							"coord": [-330, -70],
							"person": "OOL"
						},
						{
							"ref": "vd",
							"coord": [-305, -90]
						},
						{
							"ref": "cc",
							"coord": [-285, -70],
							"person": "ZIB"
						},

						{
							"ref": "shd",
							"coord": [-330, -50]
						},
						{
							"ref": "cc",
							"coord": [-310, -30],
							"person": "JDO"
						},

						{
							"ref": "vd",
							"coord": [-390, -40]
						},
						{
							"ref": "cc",
							"coord": [-370, -20],
							"person": "KXP"
						},

						{
							"ref": "wbv",
							"coord": [-390, -105]
						},
						{
							"ref": "td",
							"coord": [-242, -20]
						},

						// prodaq east, left side
						
						{
							"ref": "vd",
							"coord": [-240, -120]
						},
						{
							"ref": "vd",
							"coord": [-240, -80]
						},
						
						{
							"ref": "cc",
							"coord": [-220, -100],
							"person": "PGR"
						},
						{
							"ref": "cc",
							"coord": [-220, -60],
							"person": "TQR"
						},
						{
							"ref": "wbh",
							"coord": [-210, -15]
						},

						// prodaq east, center

						{
							"ref": "hd",
							"coord": [-220, -140]
						},
						{
							"ref": "cc",
							"coord": [-205, -120],
							"person": "SFN"
						},
						{
							"ref": "hd",
							"coord": [-130, -140]
						},
						{
							"ref": "cc",
							"coord": [-105, -120],
							"person": "YHJ"
						},
						{
							"ref": "shd",
							"coord": [-178, -140]
						},
						{
							"ref": "cc",
							"coord": [-160, -120],
							"person": "XSM"
						},

						// prodaq east, right side
						
						{
							"ref": "vd",
							"coord": [-90, -120]
						},
						{
							"ref": "vd",
							"coord": [-90, -80]
						},
						
						{
							"ref": "cc",
							"coord": [-90, -100],
							"person": "EMR"
						},
						{
							"ref": "cc",
							"coord": [-90, -60],
							"person": "NMT"
						},
						{
							"ref": "wt",
							"coord": [-175, -105]
						},
						{
							"ref": "wbv",
							"coord": [-185, -100]
						},
						{
							"ref": "wbv",
							"coord": [-185, -60]
						},
						{
							"ref": "wbv",
							"coord": [-140, -100]
						},
						{
							"ref": "wbv",
							"coord": [-140, -60]
						},
						{
							"ref": "tv",
							"coord": [-170, -5]
						},
						{
							"ref": "bk",
							"coord": [-180, -15]
						},
						// intern siberia
						{
							"ref": "vd",
							"coord": [-30, -40]
						},
						{
							"ref": "cc",
							"coord": [-30, -20],
							"person": "LKE"
						}
					]
				}
			],
			"furniture": [
				{
					"name": "Desk Vertical",
					"ref": "vd",
					"dimensions": [20, 40]
				},
				{
					"name": "Desk Horizontal",
					"ref": "hd",
					"dimensions": [40, 20]
				},
				{
					"name": "Desk Horizontal Squiggly",
					"ref": "shd",
					"dimensions": [45, 20]
				},
				{
					"name": "Office chair",
					"ref": "cc",
					"dimensions": [10]
				},
				{
					"name": "Fridge",
					"ref": "food",
					"dimensions": [20, 20]
				},
				{
					"name": "Medium Circle table",
					"ref": "mc",
					"dimensions": [30]
				},
				{
					"name": "Large Circle table",
					"ref": "lc",
					"dimensions": [40]
				},
				{
					"name": "Wooden Table",
					"ref": "wt",
					"dimensions": [40, 80]
				},
				{
					"name": "Wooden Bench Vertical",
					"ref": "wbv",
					"dimensions": [15, 30]
				},
				{
					"name": "Wooden Bench Horizontal",
					"ref": "wbh",
					"dimensions": [30, 15]
				},
				{
					"name": "Television",
					"ref": "tv",
					"dimensions": [30, 5]
				},
				{
					"name": "Wooden Media Console",
					"ref": "wmc",
					"dimensions": [40, 15]
				},
				{
					"name": "Bookshelf",
					"ref": "bk",
					"dimensions": [50, 15]
				},
				{
					"name": "Wooden Media Console Vertical",
					"ref": "wmcv",
					"dimensions": [15, 40]
				},
				{
					"name": "Scale break",
					"ref": "special",
					"dimensions": ["l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15","l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15", "l", "15", ",", "15", "l", "15", ",", "-15"]
				},
				{
					"name": "Teardown",
					"ref": "td",
					"dimensions": [5, 15]
				}
			],
			"people": [
				{
					"name": "LKE",
					"color": "#E2E194",
					"job": "Boss"
				},
				{
					"name": "ZIB",
					"color": "#6ECC60",
					"job": "Product Designer"
				},
				{
					"name": "TQR",
					"color": "#A2F4A4",
					"job": "Product Designer"
				},
				{
					"name": "EMR",
					"color": "#64B5E2",
					"job": "Product Designer"
				},
				{
					"name": "BKC",
					"color": "#E5ACE5",
					"job": "Product Designer"
				},
				{
					"name": "JDO",
					"color": "#B5D152",
					"job": "Creative Director"
				},
				{
					"name": "SFN",
					"color": "#9492E0",
					"job": "Junior Product Designer"
				},
				{
					"name": "DZX",
					"color": "#EFCB8E",
					"job": "Intern"
				},
				{
					"name": "HRI",
					"color": "#C4B606",
					"job": "Product Designer"
				},
				{
					"name": "NMT",
					"color": "#D39C6F",
					"job": "Product Designer"
				},
				{
					"name": "PGR",
					"color": "#5787D2",
					"job": "Product Designer"
				},
				{
					"name": "OOL",
					"color": "#C268D6",
					"job": "Product Designer"
				},
				{
					"name": "AFY",
					"color": "#70E5BB",
					"job": "Junior Product Designer"
				},
				{
					"name": "KXP",
					"color": "#76CE99",
					"job": "Product Designer"
				},
				{
					"name": "YHJ",
					"color": "#E08DB8",
					"job": "Product Designer"
				},
				{
					"name": "WXT",
					"color": "#6F87D6",
					"job": "Product Designer"
				},
				{
					"name": "XSM",
					"color": "#85E5E5",
					"job": "Product Designer"
				}
			]
		},
		"apartment": {
			"startX": 500,
			"startY": 300,
			"rooms": [
				{
					"name": "Main Room",
					"coords": [
						"l", 0, ",", 60,
						"l", -12, ",", 25,
						"l", -100, ",", 0,
						"l", 0, ",", -5,
						"l", -3, ",", 0,
						"l", 0, ",", -7,
						"l", -4, ",", 0,
						"l", 0, ",", -4,
						"l", -35, ",", 0,
						"l", 0, ",", 4,
						"l", -4, ",", 0,
						"l", 0, ",", 13,
						"l", -50, ",", 0,
						"l", 0, ",", -13,
						"l", -50, ",", 0,
						"l", 0, ",", -77,
						"l", 22, ",", 0,
						"l", 20, ",", -15,
						"l", 175, ",", 0,
						"l", 0, ",", -2,
						"l", 20, ",", 0,
						"l", 3, ",", 3

						/*"M", 0, ",", 70,
						"l", 30, ",", -30,
						"l", 220, ",", 0,
						"l", 0, ",", -2,
						"l", 10, ",", 0,
						"l", 4, ",", 4*/
					],
					"maxWidth": 250
				},
				{
					"name": "Kitchen",
					"coords": [
						"l", 0, ",", -72,
						"l", -70, ",", 0,
						"l", 0, ",", 14,
						"l", -53, ",", 0,
						"l", 0, ",", 34,
						"l", 24, ",", 24,
						"l", 39, ",", 0,
						"l", 0, ",", -5,
						"l", 61, ",", 0
					],
					"maxWidth": 100
				},
				{
					"name": "Closet",
					"coords": [
						"l", 0, ",", 55,
						"l", -40, ",", 0
					],
					"maxWidth": -60
				},
				{
					"name": "Bathroom",
					"coords": [
						"l", 0, ",", 55,
						"l", -60, ",", 0
					],
					"maxWidth": 60

				}
			],
			"timeline": [
				{
					"date": "February 2013",
					"description": "Move into new apartment",
					"contents":	[
						
					]
				},
				{
					"date": "July 2015",
					"description": "Testing apartment",
					"contents":	[
						{
							"ref": "cb2d",
							"coord": [-128, 30]
						},
						{
							"ref": "cb2s",
							"coord": [-121, 3]
						},
						{
							"ref": "lb",
							"coord": [-205, 50]
						},
						{
							"ref": "cb2ct",
							"coord": [-200, 30]
						}
					]
				}
			],
			"furniture": [
				{
					// march 2014
					"name": "CB2 Desk",
					"ref": "cb2d",
					"dimensions": [17, 20]
				},
				{
					// march 2014
					"name": "CB2 Shelf",
					"ref": "cb2s",
					"dimensions": [10, 20]
				},
				{
					// june 2013
					"name": "Loft Bed",
					"ref": "lb",
					"dimensions": [70, 35]
				},
				{
					// jan 2015
					"name": "CB2 coffee table",
					"ref": "cb2ct",
					"dimensions": [40, 15]
				}
			]
		}
	}

	var floorplans = {
	"init": function() {
		floorplans.plan();
	},
	"plan": function() {
		var paper =  Raphael(0, 0, 4000, 650);


		$scope.selectedFloorplan = $scope.layouts.apartment;
		var selectedPlan = $scope.selectedFloorplan;

		var strokeColor = "#F0F0F0";
		var xOffset = 0;

		var xStart = selectedPlan.startX || 0;
		var yStart = selectedPlan.startY || 0;

		// pre-process room loop for the max width
		for (var j = 0; j < selectedPlan.rooms.length; j++) {
			xOffset += selectedPlan.rooms[j].maxWidth + 20;
		}

		function assignWidths(x, y, cache) {
			if (cache[0] == "M") {
				cache.splice(0, 4);	
			}
			cache.unshift(y);
			cache.unshift(",");
			cache.unshift(x);
			cache.unshift("M");
			return cache;
		}
		
		for (var m = 0; m < selectedPlan.timeline.length; m++) {
			var cumulativeOffset = 0;
			var currentTimeline = selectedPlan.timeline[m];
			var xProper = xStart + (m * xOffset);

			// {?} draw rooms
			for (var i = 0; i < selectedPlan.rooms.length; i++) {
				
				if (i !== 0) {
					cumulativeOffset += selectedPlan.rooms[i].maxWidth;
				}

				
				var currentRoom = selectedPlan.rooms[i];
				var coords = currentRoom.coords;
				

				//console.log(cumulativeOffset + xProper)

				var currentPath = assignWidths(i === 0 ? xProper : xProper + cumulativeOffset, yStart, coords).join("");
				paper.path(currentPath).attr({'stroke-width': 3});
				if (i === 0) {
					paper.text(xProper + 50, yStart - 155, currentTimeline.date).attr({"font-size": "16", "font-family": "Helvetica", "letter-spacing": "2px"});
					paper.text(xProper + 50, yStart - 180, currentTimeline.description +  (!!currentTimeline.personnel ? " (" + currentTimeline.personnel + " NYC personnel)" : ""));
				}
			}

			
			// {?} cache furniture references
			var furnitureRefs = [];
			for (var r = 0; r < selectedPlan.furniture.length; r++) {
				furnitureRefs.push(selectedPlan.furniture[r].ref)
			}

			// {?} cache people references
			var peopleRefs = [];
			
			if (!!selectedPlan.people) {
				for (var p = 0; p < selectedPlan.people.length; p++) {
					peopleRefs.push(selectedPlan.people[p].name)
				}
			}
			
			// {?} draw contents per timeline
			if (currentTimeline.contents !== undefined) {
				for (var f = 0; f < currentTimeline.contents.length; f++) {
					//console.log(currentTimeline.contents[f]);

					currentObject = currentTimeline.contents[f];

					//console.log(selectedPlan.furniture)

					var lookupIndex = furnitureRefs.indexOf(currentObject.ref);
					//console.log(selectedPlan.furniture[lookupIndex])

					var refObject = selectedPlan.furniture[lookupIndex];
					var objX = xProper + cumulativeOffset + 10 + currentObject.coord[0];
					var objY = yStart + currentObject.coord[1];
					var assembleFurniture;

					if (refObject.dimensions.length === 2) {
						assembleFurniture = paper.rect(objX, objY, refObject.dimensions[0], refObject.dimensions[1]).attr({"stroke": strokeColor});
						if (refObject.ref === "td") {
							assembleFurniture.attr({"stroke": "none", "fill": "#555"})
						}
					} else if (refObject.dimensions.length === 1) {
						assembleFurniture = paper.circle(objX, objY, refObject.dimensions[0]).attr({"stroke": strokeColor});
					} else {
						var assemble = "M" + objX + "," + objY + refObject.dimensions.join("");
						assembleFurniture = paper.path(assemble).attr({"stroke": "#008C9B", "stroke-width": 3});
					}

					// assign colors to people
					if (currentObject.person !== undefined) {
						var personIndex = peopleRefs.indexOf(currentObject.person);
						var person = selectedPlan.people[personIndex];
						var personColor = person.color;
						assembleFurniture.attr({"fill": personColor, "title": person.job});

						//$(assembleFurniture).attr("title", "test")
						//console.log($(assembleFurniture))
					}
					
				}
			}
		}
	}
}

	floorplans.init();

	console.log("YAY")
});