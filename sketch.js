
function setup() {
  createCanvas(800, 600,P2D);
  colorMode(HSB,360,100,100,100);
  blendMode(BLEND);
  
  for (let i = 0;i<NUM; i++){
  movers[i] = new Mover();
    
  }
}
function draw() {
  background(100,200,100,100);
  
  for(let i = 0;i<NUM;i++){
  movers[i].drawellipse();
    
  }

}

class Mover{

  constructor(){
  noStroke();
    this.pos = createVector(random(width),random(height));
    this.vel = createVector(random(-4,4),random(-4,4));
    this.diameter = random(8,32);
    this.c = color(random(360),100,100,random(100));
    
  }
  
  drawellipse(){
  fill(this.c);
    circle(this.pos.x,this.pos.y,this.diameter);
    this.pos.add(this.vel);
    
    
    if(this.pos.x<0 || this.pos.x>width){
    this.vel.x = this.vel.x*-1  ;
    }
    
     if(this.pos.y<0 || this.pos.y>width){
    this.vel.y = this.vel.y*-1  ;
    }
    
  }
  
}
