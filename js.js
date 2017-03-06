var w = window.innerWidth *0.9;
var h = window.innerHeight * 0.9;
var svg = document.getElementsByTagName('svg')[0];
var rid;
svg.setAttribute("height",h);
svg.setAttribute("width",w);

var clearer = function(e){
    console.log('hi3');
    while(svg.hasChildNodes()){
	svg.removeChild(svg.lastChild);
    };
    rx = null;
    ry = null;
};

console.log('hi');
var rx = null;
var ry= null;
var createcirc = function(e){
    clearer();
    var c = document.createElementNS("http://www.w3.org/2000/svg","circle");
    c.setAttribute("cy", h/2);
    c.setAttribute("cx", w/2);
    c.setAttribute("fill","yellow");
    svg.appendChild(c);
    window.cancelAnimationFrame( rid );
    var direction = false;
    var r = 0;
    var drawdot = function(e){
	if(direction == false){
	    r = r + 1;
	    if (r > h/2 || r >  w/2){
		direction = true;
	    };
	}else{
	    r = r - 1
	    if (r < 1){
		direction = false;
	    };
	};
	     
	
	c.setAttribute("r",r);
	rid =window.requestAnimationFrame( drawdot );
    };
    drawdot();
  };
    
document.getElementById('circle').addEventListener('click', createcirc);
var but = document.getElementById("stop");

var stop = function(e){
    window.cancelAnimationFrame( rid );
};

but.addEventListener('click', stop);


//_____________________

var animatedot = function(e){
    window.cancelAnimationFrame( rid);
    var x = 0;
    var y = (Math.random() * h);
    var r = 20;
    var d = 1;
    var direction = false;
    var ydirection = false;
    clearer();
    var c = document.createElementNS("http://www.w3.org/2000/svg","rect");
    //c.setAttribute('xlink:href',"blueray.png");
    //c.setAttribute('xmlns:xlink',"http://www.w3.org/1999/xlink");
    c.setAttribute('height', '102px');
    c.setAttribute('width','200px');
    c.setAttribute("fill","yellow");
    svg.appendChild(c);

    var drawdot = function(e){
	c.setAttribute("y", y);
	c.setAttribute("x", x);
	//console.log(c);
	
	window.cancelAnimationFrame( rid );
	
	if (direction == false){
	    x++;
	}else{
	    x--;
	};

	if (ydirection == false){
	    y+=2;
	}else{
	    y-=2;
	};

	if (x >= w -200){
	    direction = true;
	};
	if (x <= 0){
	    direction = false;
	};
	if (y >= h-102){
	    ydirection = true;
	};
	if (y <=  0){
	    ydirection = false;
	};
	//console.log(y);
	rid =window.requestAnimationFrame( drawdot )
    };

    drawdot();
}
document.getElementById("dvd").addEventListener('click',animatedot);
