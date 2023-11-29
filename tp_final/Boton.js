class Boton {

  constructor(botX, botY, ancho, alto, texto, textSizebot) {
    this.botX = botX;
    this.botY = botY;
    this.ancho = 180;
    this.alto = 50;
    this.texto = texto;
    textAlign(CENTER, CENTER);
    this.textSizebot = textSizebot;
  }
  dibujar() { 
    
    fill(247, 205, 243);
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
