let earth;
let sun;
let xoff;
function preload(){
   earth = loadImage('./images/earth.jpg');
   sun = loadImage('./images/sun.jpg');  
}
function setup() {
   createCanvas(640,640, WEBGL);
   xoff = 0;
}
function draw(){
   background(51);
   //rotateY(xoff);
   let light = new p5.Vector(0, 0, 0);
   light.normalize()
   pointLight(255, 255, 255, light)
   texture(sun);
   sphere(60);
   let rotX = map(sin(xoff), -1, 1, -360, 360);
   let rotY = map(sin(xoff), -1, 1, -60, 60);
   let rotZ = map(sin(xoff), -1, 1, -160, 160);
   rotateY(xoff);
   translate(200, 0, rotZ)
   texture(earth);
   sphere(60);
   xoff += 0.01;
}
