let earth;
let suntexture;
let sun;
let xoff;
function preload(){
   earth = loadImage('./images/earth.jpg');
   suntexture = loadImage('./images/sun.jpg');  
}
function setup() {
   createCanvas(640,640, WEBGL);
   sun = new Star(100, suntexture);
   xoff = 0;
}
function draw(){
   background(51);
   //rotateY(xoff);
   sun.show();


   let rotX = map(sin(xoff), -1, 1, -360, 360);
   let rotY = map(sin(xoff), -1, 1, -60, 60);
   let rotZ = map(sin(xoff), -1, 1, -160, 160);
   rotateY(xoff);
   
   translate(200, -100, rotZ)
   texture(earth);
   sphere(60);
   xoff += 0.01;

}
