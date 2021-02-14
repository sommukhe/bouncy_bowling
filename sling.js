class Sling{
    //creating constraint to object and point
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.08,
            length: 50
        }
        this.pointB=pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    
    attach(body){
        this.sling.bodyA = body;
    }
    //releasing the constraint
    fly (){
        this.sling.bodyA=null
    }
   
    display(){
        //constraint is shown when object is not null
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    }
}
