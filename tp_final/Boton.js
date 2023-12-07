class Boton {

  constructor(botX, botY, ancho, alto, texto, textSizebot) {
    this.botX = botX;
    this.botY = botY;
    this.ancho = 180;
    this.alto = 50;
    this.texto = texto;
    this.textSizebot = textSizebot;
  }
  dibujar() {
    textAlign(CENTER, CENTER);
    fill(98, 229, 63);
    noStroke();
    rect(this.botX, this.botY, this.ancho, this.alto);
    fill(0);
    textSize(this.textSizebot);
    text(this.texto, this.botX+this.ancho/2, this.botY+this.alto/2);
  }

  click() {
    return mouseX>this.botX && mouseX<this.botX+this.ancho && mouseY>this.botY && mouseY<this.botY+this.alto;
  }
}
