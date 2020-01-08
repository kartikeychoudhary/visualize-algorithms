var BARWIDTH = 35 // * Width of Bars also determines the number of bars to be displayed.
var BARSPACE=1;
var TEXTHEIGHT = 40; // * Height of the Text below the Bars.
var RANGEMODIFIER = 20; // * Helps creating a new Range for desired height.

var STEPS = [];

var BARS = [];

var SOLVEFLAG = false; // * True means animation of solving the BARS

var Array_Random = []; // * Random Arrays Generated By Engine.
var MIN;
var MAX;

var MAXHEIGHT; // * Maximum height Allowed.
var MAXBARS = 0; // *  Maximum bars Allowed.
var SPEED = 10; // *  Refresh after certain frames lower the faster.

var NMIN = 0;
var NMAX;

var flag_steps = false; // * true when the results are fetched from the server.
var flag_continue = false; // * true if the user wants continous simulation.
var flag_pause = false; // * true if the user wants step by step simulation.

var COUNT = 0; // * step counter

var RESULTJSON; // * contains the steps for the bubble sort. 

var KEYPRESSED = false;

function setup(){
    var canvas = createCanvas(window.innerWidth, window.innerHeight); // * smaller then the full window.
    var x = (windowWidth - width) / 2; // * finding the center coordinates
    var y = (windowHeight - height) / 2;
    console.log(y)
    MAXHEIGHT = window.innerHeight/2; // * maximum height allowed for the bars
    NMAX = MAXHEIGHT;
    MAXBARS = round((window.innerWidth / BARSPACE)/BARWIDTH)-2;
    console.log(MAXBARS)

    canvas.position(x,y); // * canvas centered    
    background(25); // * canvas color

    drawFrames(); // * Create the Frames

    randomArray();
    arrayToBar();
    
}

async function reset(){
    drawFrames(); // * Create the Frames

   
    SOLVEFLAG = false;
    // draw();

    STEPS = [];

    BARS = [];

    SOLVEFLAG = false; // * True means animation of solving the BARS

    Array_Random = []; 
    COUNT = 0;

    randomArray();
    arrayToBar();
}

async function draw(){
    background(25);
    drawBarFrame();
    createBars();

    if(keyIsDown(66) && !SOLVEFLAG){
        SOLVEFLAG =true;
        STEPS = await bubbleSortArray(BARS);
        // console.log(STEPS);
    }
    if(keyIsDown(73) && !SOLVEFLAG){
        SOLVEFLAG =true;    
        STEPS = await insertionSortArray(BARS);
        console.log(STEPS);
    }
    if(keyIsDown(83) && !SOLVEFLAG){
        SOLVEFLAG =true;    
        STEPS = await selectionSortArray(BARS);
        console.log(STEPS);
    }

    if(keyIsDown(49) && !KEYPRESSED){
        console.log(SPEED);
        if(SPEED-1 != 0){
            SPEED-=1;
        }
        KEYPRESSED = true;
    }
    if(keyIsDown(50) && !KEYPRESSED){
       SPEED+=1;
       KEYPRESSED = true;
    }
    if(keyIsDown(82) && !KEYPRESSED){
        reset();
        KEYPRESSED = true;
    }

    checkSort();
    KEYPRESSED = false;
}

function checkSort(){
    if(SOLVEFLAG && frameCount % SPEED == 0){
        // console.log(COUNT);
        try{

            if(STEPS[COUNT].length > 0 && COUNT != -1){

                BARS = STEPS[COUNT];
                // * createBarsStep(temp);
                // * drawBars(temp);
                COUNT++;
    
            }
            if(COUNT >= STEPS.length){
                COUNT = -1;
                SOLVEFLAG = false;
            }

        }finally{

        }
        
    }
}

function drawFrames(){

    drawBarFrame(); 

    push(); // Outline of Frame
    stroke(25, 25, 25);
    strokeWeight(1);
    noFill();
    rect(0, 0, window.innerWidth, window.innerHeight);
    pop();
}

function drawBarFrame(){

    var x = (window.innerWidth ) / 2;
    var y = (window.innerHeight ) / 2;

    MAXHEIGHT = y;
    NMAX = y;
    // ! console.log("Height : " +y);

    push(); // Bars Frame
    fill(250, 250, 250);
    stroke(250, 250, 250);  
    strokeWeight(2);
    rect(0, 0, window.innerWidth, y + TEXTHEIGHT);
    pop();
}

function randomArray(){
    Array_Random = [];

    for(var i = 0; i < MAXBARS; i++){
        Array_Random.push(round(random(10, 99)));
    }

    MIN = Math.min(...Array_Random);
    MAX = Math.max(...Array_Random);
}

function arrayToBar(){
    BARS = [];
    for(var index = 0; index<Array_Random.length;index++){
        var height = convertRange(Array_Random[index], MIN-RANGEMODIFIER, MAX+RANGEMODIFIER, NMIN, NMAX)
        //console.log(Array_Random[index], MIN-RANGEMODIFIER, MAX+RANGEMODIFIER, NMIN, NMAX);
        //console.log(height)
        bar = new Bar(height,-1,Array_Random[index]);
        BARS.push(bar);
    }
}

function convertRange(OldValue, OldMin, OldMax, NewMin, NewMax) {
    var NewValue =
        ((OldValue - OldMin) * (NewMax - NewMin)) / (OldMax - OldMin) + NewMin;
    //console.log(NewValue);
    return NewValue;
}

function createBars(){
    // console.log(BARS);  
    for(var index = 0;index < BARS.length; index++){
        var bar = BARS[index];
        bar.drawBar(index*BARSPACE*BARWIDTH+BARWIDTH);
    }
}

function createBarsStep(STEP){  
    console.log("STEP " + STEP);
    for(var index = 0;index < STEP.length; index++){
        var bar = STEP[index];
        bar.drawBar(index*BARSPACE*BARWIDTH+BARWIDTH);
    }
}

class Bar{
    constructor(height, color=-1, value){
        this.height = height;
        this.color = color;
        this.value = value;
    }

    drawBar(x){ // * ( x , MAXHEIGHT) coordinates
        push();

        if(this.color == 0){
            fill(255,0,0); // ! RED for 0
        }else if(this.color == 1){
            fill(0,255,0); // *  GREEN for 1
        }else if(this.color == 2){
            fill(255,130,0);
        }else{
            fill(200,200,200);
        }
        rect(x, MAXHEIGHT - this.height, BARWIDTH, this.height);
        // * console.log(this.height);
        pop();

        var space = BARWIDTH - textWidth(this.value);
        if(space>0){
            push();
            textSize(TEXTHEIGHT*0.5);
            fill(0,0,0);
            text(this.value, space/2 + x, MAXHEIGHT + TEXTHEIGHT / 2);
            pop();
        }
    }   
}

function drawBars(arrayBar){
    for(var index = 0; index < arrayBar.length; index++){
        var barObject = arrayBar[index];
        barObject.drawBar(index*BARSPACE*BARWIDTH+BARWIDTH);
    }
}