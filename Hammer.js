class Hammer {
constructor(x,y){

var options ={
'restitution': 2,
'friction': 1,
'density': 0.5
}
this.body = Bodies.rectangle(x,y,100,30,options);
this.width = 100;
this.height = 30;
World.add(world,this.body);
}
display(){
var pos = this.body.position;
pos.x = mouseX;
pos.y = mouseY;
var angle = this.body.angle;
push();
translate(pos.x,pos.y);
rotate(angle);
strokeWeight(1);
stroke('orange');
fill('orange');
rectMode(CENTER);
rect(0,0,this.width,this.height);
pop();

}
}