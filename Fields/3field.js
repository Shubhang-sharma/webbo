let points = [];
let r,g,b,Angle;
function setup() {
  angleMode(DEGREES);
  createCanvas(windowWidth,windowHeight);
  density = 100;
  space = width / density;







  
  for (var x = -width / 2; x < width/2 ; x += space) {
    for (var y = -height / 2; y < height/2; y += space) {
      var p = createVector(x ,  y);
      points.push(p);
    }
  }
  background(40);
}

function draw() {
  // background(20);
  translate(width / 2, height / 2);
  p1 = createVector(-100, 0);
  p2 = createVector(0, 0);
  p3 = createVector(100, 0);
  fill(200)
  ellipse(-100,0,10)
  ellipse(100,0,10)
  ellipse(0,0,10)

  for (var i = 0; i < points.length; i++) {
    var r = map(points[i].x, -width/2, width/2, 50, 255);
    var g = map(points[i].y, -width/2,width/2, 50, 255);
    var b = map(points[i].x, -width/2, width/2, 255, 50);
    fill(r,g,b)
    noStroke()
    ellipse(points[i].x, points[i].y, 0.4);
    let f1 = p5.Vector.add(p1.mult(-1),points[i])
    let f2 = p5.Vector.add(p2.mult(-1),points[i])
    let f3 = p5.Vector.add(p3.mult(-1),points[i])
    let f = p5.Vector.add(f1.mult(1/f1.magSq()),f2.mult(1/f2.magSq()))
    let F = p5.Vector.add(f,f3.mult(1/f3.magSq()))
    F.mult(-1)


    points[i].add(F.normalize())
}
}
