var ls = [];
var stars = [];
var speed;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 50; i++) {
    ls[i] = new Light();
  }
  for (var ii = 0; ii <50; ii++) {
  stars[ii] = new Star();
}
}

class Star {
  constructor() {
    this.x = random(width);
    this.y = random(0, height/3.2);
    this.size = random(0.25, 1);
    this.t = random(TAU);
  }
  
  draw() {
    this.t += 0.1;
    var scale = this.size + sin(this.t) * 2;
    noStroke();
    ellipse(this.x, this.y, scale, scale);
  }
}

function Light() {
  this.x = random(-width, width);
  this.y = random(height/100, height/8);
  this.z = random(width);
  this.pz = this.z;

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(height/100, height/8);
      this.pz = this.z;
    }
  }

  this.show = function() {
    noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, -10, height+200);
    var r = map(this.z, 0, width, 100, 0);
    
    var rand = random(0,1);
    if(rand < 0.5){
    fill(255, 230, 80, 150);
    }
    else{
      fill(255, 210, 70, 150);
    }
    
    ellipse(sx, sy, r, r);
    ellipse(sx + 80, sy, r, r);
  }
}

function draw() {
  background(0, 0, 0, 10);

  for (let i = 0; i < windowHeight/3-30; i++){
    stroke(150-i, 50, 88);
    line(0, i, width, i);
  }
  fill(255, 230, 150);  
  
  noStroke();

  fill(255);
  for (var ii = 0; ii < stars.length; ii++) {
  stars[ii].draw();
  }
  
  fill(10, 60, 100, 50);
  rect(0, 0, windowWidth, windowHeight/3);
  fill(200, 200, 200, 10);
  quad(windowWidth/2-40, windowHeight/3, windowWidth/2-40, windowHeight/3, windowWidth/2-350, windowHeight, windowWidth/2-400, windowHeight);
  quad(windowWidth/2+40, windowHeight/3, windowWidth/2+40, windowHeight/3, windowWidth/2+350, windowHeight, windowWidth/2+400, windowHeight);
  quad(windowWidth/2-200, windowHeight/3, windowWidth/2-200, windowHeight/3, windowWidth/2-1000, windowHeight, windowWidth/2-950, windowHeight);
  quad(windowWidth/2+200, windowHeight/3, windowWidth/2+200, windowHeight/3, windowWidth/2+1000, windowHeight, windowWidth/2+950, windowHeight);
  quad(windowWidth/2-350, windowHeight/3, windowWidth/2-350, windowHeight/3, windowWidth/2-1800, windowHeight, windowWidth/2-1750, windowHeight);
  quad(windowWidth/2+350, windowHeight/3, windowWidth/2+350, windowHeight/3, windowWidth/2+1800, windowHeight, windowWidth/2+1750, windowHeight);
  
  fill(0);
  rect(windowWidth, 10, -windowWidth/2-100, 10, 10);
  rect(windowWidth/2-50, 20, 4, 10);
  rect(windowWidth/2+100, 20, 4, 10);
  rect(windowWidth/2-90, 30, 235, 60, 10);
  
  
  fill(40);
  if(second()>=40 && second()<=60){
  speed = 0;
  fill(200, 0, 0);}
  ellipse(windowWidth/2-50, 60, 45, 45);
  
  fill(40);
  if(second()>=0 && second()<30){
  speed = random(10, 35);
  fill(0, 120, 30);}
  ellipse(windowWidth/2+100, 60, 45, 45);
  
  fill(40);
  if(second()>=30 && second()<40){
  speed = random(3, 7);
  fill(255, 170, 0);}
  ellipse(windowWidth/2+25, 60, 45, 45);
  
  if(mouseIsPressed){
    speed = 0;
    fill(50, 50, 100);
    rect(mouseX+5,mouseY-24, 37, windowHeight);
    fill(200, 0, 0);
    rect(mouseX, mouseY-10, 400, 20, 10);
    fill(200);
    rect(mouseX-10, mouseY-15, 100, 30, 10);
    fill(255, 230, 200);
    rect(mouseX+5,mouseY+24, 37, 20);
    fill(255);
    rect(mouseX, mouseY-25, 48, 55, 10);
    ellipse(mouseX+6, mouseY-20, 12, 15);
    ellipse(mouseX+18, mouseY-20, 12, 15);
    ellipse(mouseX+30, mouseY-20, 12, 15);
    ellipse(mouseX+42, mouseY-20, 12, 15);
    rect(mouseX+40, mouseY+10, 30, 12, 18);
  }
  
  translate(width / 2, height / 3);
  for (var i = 0; i < ls.length; i++) {
    ls[i].update();
    ls[i].show();
  }
}
