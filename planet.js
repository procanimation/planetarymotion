class Planet {
    constructor(size, texture, rad) {
        this.size = size;
        this.texture = texture;
        this.rad = rad;
    }

    show(){
        texture(this.texture);
        this.rotate();
        sphere(this.size);
    }

    rotate(){
        rotateY(millis() / 100);
    }
    
}
