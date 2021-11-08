let nodes = [];
let j;

function setup() {
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.id('sketch');

  for (j = 0; j < 22; j++) {
    nodes[j] = new objects(random(-50, 50), random(-50, 50));
  }
  let buttonOP = createButton("Optical Path");
  buttonOP.id("path");
  buttonOP.position(200,200);
  clear();
  buttonOP.onclick();

}

function draw() {
  background(20, 160);
  translate(windowWidth / 2, windowHeight / 2);



  for (node of nodes) {
    node.make();
    node.animate();
    node.suck();

    for (other of nodes) {
      strokeWeight(0.07);
      stroke("rgba(145, 183, 196,100)");
      line(node.pos.x, node.pos.y, other.pos.x, other.pos.y);
      let h = p5.Vector.sub(other.pos, node.pos);
      node.stick(h);
    }
  }

}
