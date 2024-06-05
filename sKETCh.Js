let cor;
let cor2;
let posicaoHorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(400, 400);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  cor2= color(random(0, 255), random(0, 255), random(0, 255));
  background(cor);
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}

function draw() {
  circle(posicaoHorizontal,posicaoVertical,50);
  fill(cor2);
  if(mouseX < posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal - 1;
}
    if(mouseX > posicaoHorizontal) {
    posicaoHorizontal = posicaoHorizontal + 1;
    }
 if(mouseY < posicaoVertical) {
    posicaoVertical--;
  }
  
  if(mouseY > posicaoVertical) {
    posicaoVertical++;
  }
 if(mouseIsPressed){
    cor = color(random(0, 255), random(0, 255), random(0, 255), random(0, 100));
}









