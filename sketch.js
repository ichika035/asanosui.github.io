let pos = [];
let vel = [];
let num = 100;


function setup(){
createCanvas(windowWidth,windowHeight);
  
  for (let i = 0;i<num;i++){
 this.pos =  createVector(random(width),random(height));  
    this.vel =  createVector(random(-7,8),random(-7,8));
  }
  
}

function draw(){
background(0);
  this.pos.add(this.vel);
    
  for (let i = 0;i<num;i++){

    noStroke();
    fill(random(255),random(100),100,100);
  ellipse(this.pos.x,this.pos.y,50,50);
    
   
  }
   if(this.pos.x<0||this.pos.x>width){
      this.vel.x = this.vel.x*-1;
     fill(250,12,45);
    }
     if(this.pos.y<0||this.pos.y>width){
      this.vel.y = this.vel.y*-1;
    }
}
