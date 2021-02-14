class Ball{
    constructor(x,y,width,height){
        var options = {
        friction:0.8,
        density: 2,
        restitution: 0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/bowlball.png");
        World.add(world, this.body);
    }
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width + 50, this.height + 50);
        pop();
    }
}