class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.slingshot = loadImage("sprites/sling1.png")
        this.slingshot2 = loadImage("sprites/sling2.png")
        this.slingshot3 = loadImage("sprites/sling3.png")
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
       image(this.slingshot,200,20)
       image(this.slingshot2,170,20)

       stroke(48,22,8)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            if(pointA.x>200){
                strokeWeight(4);
                line(pointA.x +20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x +20, pointA.y, pointB.x + 30, pointB.y);
                image(this.slingshot3,pointA.x +25,pointA.y - 10,15,30 )
            } else{
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x - 10, pointB.y);
                line(pointA.x -  20, pointA.y, pointB.x + 30, pointB.y);
                image(this.slingshot3,pointA.x - 30,pointA.y - 10,15,30 )
            }
           
        }
    }
    
}