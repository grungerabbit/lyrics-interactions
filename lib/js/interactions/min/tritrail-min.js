$(document).ready(function(){function t(t,i){return Math.floor(Math.random()*i+t)}function i(){var v=new r(t(0,h),t(0,s)),o=setInterval(function(){n.path(v.setVertices()).attr({stroke:e,"stroke-width":3}).animate({opacity:0},1200,function(){this.remove()}),v.dead===!0&&(clearInterval(o),i())},125)}var h=$(window).width(),s=$(window).height(),e="#fff",n=new Raphael(0,0,h,s),v=80,r=function(t,i){this.x=t,this.y=i,this.dead=!1};if(r.prototype.gc=function a(t,i){return t+","+i+","},r.prototype.setVertices=function(){function i(i){var h=t(0,100)>50?1:-1;return i+h*t(0,v)}"undefined"==typeof this.vx1?(this.vx1=i(this.x),this.vy1=i(this.y),this.vx2=i(this.x),this.vy2=i(this.y),this.vx3=i(this.x),this.vy3=i(this.y)):(this.vx1+=t(0,v),this.vy1+=t(0,v),this.vx2+=t(0,v),this.vy2+=t(0,v),this.vx3+=t(0,v),this.vy3+=t(0,v));var e=(this.vx1+this.vx2+this.vx3)/3,n=(this.vy1+this.vy2+this.vy3)/3;return(e>h||n>s)&&(this.dead=!0),"M"+this.vx1+","+this.vy1+","+this.vx2+","+this.vy2+","+this.vx3+","+this.vy3+",Z"},h>400)for(var o=0;2>o;o++)i()});