class Chain{
    constructor(bodyA,bodyB)
    {
     var Chain_options = {
        bodyA : bird.body,
        bodyB : constrainedLog.body,
        stiffness : 0.04 ,
        length : 10
     } 
     this.chain=Constraint.create(Chain_options)
     World.add(world,this.chain)
    }

    display()
    {
     var PointA = this.chain.bodyA.position;
     var PointB = this.chain.bodyB.position;
     strokeWeight(5)
     line(PointA.x,PointA.y,PointB.x,PointB.y)
    }
}