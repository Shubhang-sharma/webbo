let k;
let l;
let offset = 0;
let strum = 1;
let lambda;
function setup() {
  createCanvas(windowWidth,windowHeight);
  k = createVector(windowWidth/2,0);
  l = createVector();
}

function draw() {
  background(150);
  strokeWeight(0.5);
  translate(width/2,height/2)
  line(-width/2,height/2,k.x,k.y);
  line(-width/2,-height/2,k.x,k.y);

  wave();
  // rotate(atan(height/(2*width)));


}
function wave(){
  lambda = 0.05;
  beginShape();
  noFill()
  stroke(12,18,20);
  strokeWeight(1.5);
  vertex(-width*3,-height/2);
  for(var x = -width; x < width/2; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    if(x>width/5 && x<width/3){
      var angle = offset + -x * (lambda/0.2); //lambda = 0.05
      noStroke();
      fill("rgba(131,147,150,0.1)");
      rect(width/5,-180,(width/3)-(width/5),80);
      noFill();
      stroke(12,18,20);

    }
    else{
      var angle = offset + -x * lambda; //lambda = 0.05
    }
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, 10,60 );
    vertex(x, y-173);
  }
  vertex(width, height);
  rotate(atan(height/(2*width)));

  endShape();
  offset += 0.2;

}
