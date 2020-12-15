class Anisha{
    constructor(x,y,r){

     var options={
       isStatic:false,
       restitution:0.3,
       friction:0.5,
       density:1.2
     }

       
       this.body=Bodies.circle(x,y,r/2,options)
       this.radius=this.r/2
       World.add(world,this.body)
    }

    display(){

      push()
      translate(this.body.position.x,this.body.position.y)
      strokeWeight(3)
      fill("pink")
      ellipse(0,0,this.radius,this.radius)
      pop()
    }
}