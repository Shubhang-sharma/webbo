let k;
let l;
let omega = 3;
let t = 0;
let strum = 1;
let lambdaA;
let lambdaB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  k = createVector(windowWidth / 2, 0);
  l = createVector();
}

function draw() {
  background(150);
  strokeWeight(0.5);
  translate(width / 2, height / 2)
  line(-width / 2, height / 2, k.x, k.y);
  line(-width / 2, -height / 2, k.x, k.y);

  wave();
  // rotate(atan(height/(2*width)));


}

function wave() {
  lambdaA = 0.05;
  lambdaB = lambdaA / 0.2;
  beginShape();
  noFill()
  stroke(12, 18, 20);
  strokeWeight(1.5);
  vertex(-width * 3, -height / 2);
  vA = lambdaA / TWO_PI;
  vB = lambdaB / TWO_PI;
  aT = (2 * vB) / (vA + vB);
  aR = (vA - vB) / (vA + vB);
  for (var x = -width; x < width / 2; x++) {
    //var angle = map(x, 0, width, 0, TWO_PI);
    if (x >= width / 5 && x <= width / 3) {
      var angleA = (omega * t) + -x * (lambdaB); //lambda = 0.05
      var y = map(aT * sin(angleA), -aT, aT, 10, 60);
      noStroke();
      fill("rgba(131,147,150,0.1)");
      rect(width / 5, -180, (width / 3) - (width / 5), 80);
      noFill();
      stroke(12, 18, 20);
    } else {
      var angle = omega * t + -x * lambdaA; //lambda = 0.05
      var angleC = omega * t + x * lambdaA;
      var y = map(sin(angle) + aR * sin(angleC), -aT,aT , 10, 60);

    }
    vertex(x, y - 173);

    // map x between 0 and width to 0 and Two Pi
    vertex(x, y - 173);
  }
  vertex(width, height);
  rotate(atan(height / (2 * width)));

  endShape();
  t += 0.01;

}
