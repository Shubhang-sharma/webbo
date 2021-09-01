let k;
function setup() {
  createCanvas(windowWidth,windowHeight);
  k = createVector(windowWidth/2,0);
  l = createVector()
}

function draw() {
  background(220);
  translate(width/2,height/2)
  line(-width/2,height/2,k.x,k.y);
  line(-width/2,-height/2,k.x,k.y);

  wave();

}
function wave(){
  beginShape();
  vertex(0, height);
  for(var x = 0; x < width; x++){
    //var angle = map(x, 0, width, 0, TWO_PI);
    var angle = offset + x * 0.01; //lambda = 0.01
    // map x between 0 and width to 0 and Two Pi
    var y = map(sin(angle), -strum, strum, 100,200 );
    vertex(x, y);
  }
  vertex(width, height);
  endShape();
  rotate()
}
