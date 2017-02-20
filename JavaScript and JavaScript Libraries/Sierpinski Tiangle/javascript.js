var canvas, ctx;

var interval = null,
    timesToRun = 9,
    x = 1;

var toSplitTemp = [],
    toDraw = [],
    toSplit = []; //Temp array holding arrows to be split

var topCol = '#ffffff',
    rightCol = '#ffffff',
    leftCol = '#ffffff';

var colFil = true;



function triangle() {
    this.a = [0, 0];
    this.b = [0, 0];
    this.c = [0, 0];
    
    this.color = '';
}



function firstTri(){
    var first_tri = new triangle();
    
    first_tri.a = [canvas.width/2, 0];
    first_tri.b = [canvas.width, canvas.height];
    first_tri.c = [0, canvas.height];
    first_tri.color = rightCol;
    
    toDraw.push(first_tri);
    toSplit.push(first_tri);
}


window.onload = function(){
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    canvas.width = 800;
    canvas.height = 700;
    
    start();
    
    loadGui();    
    /*firstTri();
    
    interval = setInterval(draw, 500);*/
    
}

/*function update(){
    draw();
}*/

function start(){    
    firstTri();    
    interval = setInterval(draw, 500);    
}

function draw(){
    //drawBlock(0,0, canvas.width,canvas.height,'#110141');
    drawBlock(0,0, canvas.width,canvas.height,'black'); 
    
    //Drawing
    for(var i = 0; i < toDraw.length; i++){  
        ctx.beginPath();
        ctx.moveTo(toDraw[i].a[0],toDraw[i].a[1]);
        ctx.lineTo(toDraw[i].b[0],toDraw[i].b[1]);
        ctx.lineTo(toDraw[i].c[0],toDraw[i].c[1]);
        ctx.closePath();
        
        if (colFil){//To Fill
            ctx.fillStyle = toDraw[i].color; 
            ctx.fill(); 
        }else{//The outline
            ctx.lineWidth = 1;
            ctx.strokeStyle = toDraw[i].color;
            ctx.stroke();
        }
        
        
    }    
    toDraw = [];//clear toDraw
    
    //Splitting
    for(var i = 0; i < toSplit.length; i++){
        split(toSplit[i]);
    }
    toSplit = [];
    toSplit = toSplitTemp;
    toSplitTemp = [];
    
    
    if(x === timesToRun)
        clearInterval(interval);
    x++;    
}

function split(tri){
    var a = tri.a;
    var b = tri.b;
    var c = tri.c;
    
    /*
        given (x1,y1) and (x2,y2)    
        (x,y) = (x1+x2/2 , y1+y2/2)    
    */
    var i = [(tri.a[0]+tri.c[0])/2, (tri.a[1]+tri.c[1])/2]; //a -> c
    var j = [(tri.a[0]+tri.b[0])/2, (tri.a[1]+tri.b[1])/2]; //a -> b
    var k = [(tri.c[0]+tri.b[0])/2, (tri.c[1]+tri.b[1])/2]; //c -> b

    
    var top = new triangle();
        top.a = a;
        top.b = j;
        top.c = i;
        top.color = topCol;    
    toDraw.push(top);
    toSplitTemp.push(top);    
    
    //right
    var right = new triangle();
        right.a = j;
        right.b = b;
        right.c = k;
        right.color = rightCol;    
    toDraw.push(right);
    toSplitTemp.push(right);
    
    //left
    var left = new triangle();
        left.a = i;
        left.b = k;
        left.c = c;
        left.color = leftCol;    
    toDraw.push(left);
    toSplitTemp.push(left);
   
}





function drawLine(fromX,fromY, toX,toY, colour){
    ctx.beginPath();
    
    ctx.moveTo(fromX,fromY);
    ctx.lineTo(toX,toY);    
    ctx.strokeStyle = colour;
    ctx.stroke();
}

function drawBlock(x,y, width,height, colour){
    ctx.fillStyle = colour;
    ctx.fillRect(x,y, width,height, colour);
}
/*function getRandomColour(){
    var letters = '0123456789ABCDEF'.split('');
    var colour = '#';
    for(var i = 0; i < 6; i++)
        colour += letters[Math.floor(Math.random()*16)];
    
    return colour;
}*/


// dat.gui
var GUIControls = function() {    
    this.iterations = 9;
    this.fill = true;
    
    this.top = '#ffffff';
    this.right = '#ffffff';
    this.left = '#ffffff';
    
    this.draw = function(){        
        clearInterval(interval);
        
        //clear screen
        drawBlock(0,0, canvas.width,canvas.height,'black'); 
        
        //reset arrays and vars
        interval = null;
        timesToRun = this.iterations;
        toDraw = [];
        toSplit = [];
        x = 0;
        toSplitTemp = [];
        
        //set colours
        topCol = this.top;
        rightCol = this.right;
        leftCol = this.left;

        //select fill or line
        colFil = this.fill;

        //start process.    
        start();

    };
    
    
};

function loadGui(){
    var item = new GUIControls();
    var gui = new dat.GUI();
    gui.add(item, 'iterations', 1, 10).step(1);
    gui.add(item, 'fill');
    
    gui.addColor(item, 'top');
    gui.addColor(item, 'right');
    gui.addColor(item, 'left');
    
    gui.add(item, 'draw')
    gui.close();
};

