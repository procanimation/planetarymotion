let earthtexture;
let suntexture;
let sun;
let earth;
let xoff;
function preload(){
   earthtexture = loadImage('./images/earth.jpg');
   suntexture = loadImage('./images/sun.jpg');  
}
function setup() {
   createCanvas(640,640, WEBGL);
   sun = new Star(100, suntexture);
   earth = new Planet(40, earthtexture, 100);
   xoff = 0;
}
function draw(){
   background(51);
   sun.show();
   
   let rotZ = map(sin(xoff), -1, 1, -160, 160);
   rotateY(xoff);
   rotateX(10);
   translate(200, 0, rotZ);
   earth.show();
   
   xoff += 0.01;

}
