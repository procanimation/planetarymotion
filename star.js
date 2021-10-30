class Star {
    constructor(size, texture) {
        this.size = size;
        this.texture = texture;
    }

    show(){
        let light = new p5.Vector(0, 0, 0);
        light.normalize()
        pointLight(255, 255, 255, light)
        texture(this.texture);
        this.rotate();
        sphere(this.size);
    }

    rotate(){
        rotateY(millis() / 1000);
    }
    
}