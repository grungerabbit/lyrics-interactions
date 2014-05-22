$(document).ready(function () {
	var paper = Raphael(0,100,1000,1000);
        
	// 1 1 2 3 5 8 13 21 34
	function generateTree(originX, originY) {
	    paper.circle(originX, originY, 10);
    
	    function gC(x, y) {
	        return x + "," + y + ",";   
	    }
    
	    var treeX = [];
	    var treeY = [];
    
	    var bigBranches = [];
    
	    function randomNumber(min, max) {
	        return Math.floor(Math.random() * (max - min + 1) + min);
	    }
    
	    var start = gC(originX, originY);
    
	    function branchNodes(number) {
	        for (var j = 0; j<2; j++) {
	            var bottomX = randomNumber(1, 50);
	            var bottomY = randomNumber(1, 100);
            
	            if (j % 2 === 0) {
	                var newOriginX = originX - bottomX;
	                var newOriginY = originY - bottomY;
	                paper.circle(newOriginX, newOriginY, 5);
                
	                var branchOrigin = gC(newOriginX, newOriginY);
	                paper.path("M" + branchOrigin + start).attr({'stroke-width': '5'});
	                bigBranches.push(branchOrigin);
                
                
	            } else {
	                var newOriginX = originX + bottomX;
	                var newOriginY = originY - bottomY;
	                paper.circle(newOriginX, newOriginY, 5);
                
	                var branchOrigin = gC(newOriginX, newOriginY);
	                paper.path("M" + branchOrigin + start).attr({'stroke-width': '5'});
	                bigBranches.push(branchOrigin);
	            }
	        }
        
	        for (var i = 0; i<number; i++) {
	           var x = randomNumber(1, 100);
	           var y = randomNumber(1, 150);
            
	            if (i % 2 === 0) {
	                paper.circle(originX - x, originY - y, 3);
                
                
	                var end = gC(originX - x, originY - y);
	                paper.path("M" + bigBranches[0] + end);
                
                
	            } else {
	                paper.circle(originX + x, originY - y, 3);

	                var end = gC(originX + x, originY - y);
	                paper.path("M" + bigBranches[1] + end);
	            }
	            treeX.push(x);
	            treeY.push(y);
	        }
	    }   
	    branchNodes(20);
	}


	generateTree(600, 400);
	generateTree(300, 400);
});
