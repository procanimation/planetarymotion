class Satelite {
    constructor(size, texture) {
        this.size = size;
        this.texture = texture;
        this.a = random(50, 70);
        this.b = random(30, 50);
    
        this.eccentricity = sqrt(1 - ((this.b*this.b) / (this.a*this.a)));
        this.theta = random(360);
        this.position = createVector(this.a*cos(this.theta), 0, this.b*sin(this.theta));
    }

    show(){
        texture(this.texture);
        this.rotate();
        sphere(this.size);
    }

    rotate(){
        rotateY(millis() / 100);
    }
    updatePosition(){
        this.position.x  = (this.a*cos(this.theta));
        this.position.y = 0;
        this.position.z =  (this.b*sin(this.theta));
        this.theta += 0.03;
        // print(this.position)
    }
    revolve(planet){
        this.updatePosition();
        translate(planet.position.x + this.position.x, planet.position.y  + this.position.y, planet.position.z  + this.position.z);
    }
}