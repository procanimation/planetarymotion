let earthtexture;
let suntexture;
let moontexture;
let sun;
let earth;
let moon;
let xoff;
let center;
function preload(){
   earthtexture = loadImage('./images/earth.jpg');
   suntexture = loadImage('./images/sun.jpg'); 
   moontexture = loadImage('./images/moon.jpg');   
}
function setup() {
   createCanvas(640,640, WEBGL);

   center = new p5.Vector(0, 0 ,0);
   sun = new Star(60, suntexture);
   earth = new Planet(30, earthtexture);
   moon = new Satelite(15, moontexture);

   xoff = 0;
}
function draw(){
   background(51);
   push();
   sun.rotate();
   sun.show();
   pop();


   push();
   earth.revolve();
   earth.show();
   pop();
   
   push();
   moon.revolve(earth);
   moon.show();
   pop();
}
