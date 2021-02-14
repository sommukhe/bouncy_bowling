class Pin {
    constructor(x,y,width,height) {
        var options = {
            isStatic:false,
            density:2.5,
            friction:0.2,
            restitution: 1.1
        }
        this.Visiblity = 255;
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/bowlpin.png");
        World.add(world, this.body);
    }
    display(){
            
            push();
            translate(this.body.position.x, this.body.position.y);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width + 70, this.height + 70);
            pop();
           
            
    }
     
}
