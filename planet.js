class Planet {
    constructor(size, texture, rad) {
        this.size = size;
        this.texture = texture;

        this.a = random(200, 300);
        this.b = random(100, 200);
    
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
        this.theta -= 0.01;
        // print(this.position)
    }
    revolve(){
        this.updatePosition();
        translate(this.position.x, this.position.y, this.position.z);
    }
    
}
