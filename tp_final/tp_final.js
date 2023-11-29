let aventura;
let imgFondo = [];
let lineas = [];
let imagenPelota;
let imagenLadrillo;
let imagenTabla;

function preload () {
  for (let i = 0; i < 28; i++) {
    imgFondo[i] = loadImage("data/imagen"+i+".jpeg");
  }

  lineas = loadStrings("data/textos.txt");
  for (let i = 0; i <lineas.length; i++) {
    lineas[i] = lineas[i].replaceAll("\n");
  }
  imagenPelota= loadImage ("./data/fotobeso.png");
  imagenTabla= loadImage ("./data/fototabla.png");
  imagenLadrillo= loadImage("./data/fotosapo.png");
}

function setup() {

  createCanvas(600, 600);
  aventura = new Aventura();
}

function draw() {
  //background(100);
  aventura.dibujar();
}

function mousePressed() {
  aventura.click();
}
