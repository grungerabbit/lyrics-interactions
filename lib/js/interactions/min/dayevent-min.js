$(document).ready(function(){var t={init:function(){t.viz()},data:{days:[{date:"August 1st",events:[{title:"Bamboo",type:["party","high tea"],attendees:25},{title:"Tree",type:["party","high tea"],attendees:36},{title:"Bee",type:["high tea"],attendees:12},{title:"Puppycat",type:["party","high tea"],attendees:34}]},{date:"August 2nd",events:[{title:"Snax",type:["party","high tea"],attendees:50}]},{date:"August 3rd",events:[{title:"Lollipop",type:["party","high tea"],attendees:20},{title:"Booboo",type:["party","high tea"],attendees:40},{title:"Cloud",type:["party","high tea"],attendees:45}]},{date:"August 4th",events:[{title:"Marshmallow",type:["party","high tea"],attendees:45},{title:"Pillow",type:["party","high tea"],attendees:44},{title:"Ice Cream",type:["party","high tea"],attendees:34}]},{date:"August 5th",events:[{title:"Happy",type:["party","high tea"],attendees:56}]},{date:"August 6th",events:[{title:"Pizza",type:["party","high tea"],attendees:12},{title:"Teeth",type:["party","high tea"],attendees:345}]},{date:"August 7th",events:[{title:"Face",type:["party","high tea"],attendees:23}]}]},viz:function(){for(var e=$(window).width(),a=$(window).height(),i=Raphael(0,0,e,a),h=t.data.days.length,n=0;h+1>n;n++){var d=n,s=e/h,p=a-40,y,r,l=i.path("M0,"+p+","+e+","+p),g=s*d;if(n!==h){var y=t.data.days[d],r=y.date;i.text(g+s/2,p+25,r)}i.circle(g,p,10);for(var o=0;o<y.events.length;o++){var u=o,v=y.events[u];console.log(v);for(var c=0;c<v.attendees;c++){var f=v.attendees>100?c%9:c%3;i.circle(g+10+u*(s/4)+10*f,p-10*Math.floor(c/(v.attendees>100?9:3)),5)}}}}};t.init()});