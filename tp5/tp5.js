let juego;
let estado = "start";
let imagenPelota;
let imagenLadrillo;
let imagenTabla;

function preload() {
  imagenPelota= loadImage ("./data/fotobeso.png");
  imagenTabla= loadImage ("./data/fotopaleta.png");
  imagenLadrillo= loadImage("./data/fotosapo.png");
}


function setup() {
  createCanvas(600, 400);
  juego = new Juego();
}

function draw() {
  background(237,188,108);

  if (estado === "start") {
    juego.inicio();
  } else if (estado === "play") {
    juego.dibujar();
  }
}
function keyPressed() {
  if (key === 's' ) {
    if (estado === "start" ) {
      estado = "play";
      juego.inicio();
    }
  }
}
