let cor;
let posicaohorizontal; // x
let posicaoVertical; // y

function setup() {
  createCanvas(900, 900);
  background(blue (100,0,0));
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicaoHorizontal = 200;
  posicaoVertical = 200;
}


function draw() {
   
   fill(cor);
   circle(posicaoHorizontal,posicaoVertical,150);




   if(mouseX < posicaoHorizontal){
     posicaoHorizontal = posicaoHorizontal-1;
   }
   
   if(mouseX > posicaoHorizontal) {
     posicaoHorizontal = posicaoHorizontal+1;
   }

  if (mouseY < posicaoVertical){
    posicaoVertical--;
  }
   
  if (mouseY > posicaoVertical){
    posicaoVertical++;
  }
 
  if (mouseIsPressed){
    cor = color(random(0,255), random(0,255), random(0,255), random(0,100));
  }
   
}