class Planet {
    constructor(size, texture) {
        this.size = size;
        this.texture = texture;
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