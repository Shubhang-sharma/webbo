let kA,kB,i;
let offset = 0;
function setup(){
  let canvas = createCanvas(windowWidth,windowHeight);
  canvas.id('opbg');
}
function draw(){
  background(0,0,0,0);
  translate(width/2,height/2);
  youngs();

}
function youngs(){
  kA = 0.01;
  kB = 1;
  beginShape();
  vertex(-width/2,height/2);
  for(var x = -width; x < width / 2; x++){
    var angleA = kA*offset - x*0.05;
    var angleB = kB*offset - x*0.05;
    i = pow(sin(angleA)/angleA,2)*4*pow(cos(angleB),2);
    var y = map(i,0,4*i,0,300);
    vertex(x,y);
  }
  endShape();
  offset += 0.1;
}
