class Texto {
  constructor(lineas, posX, posY, textSizetext) {
    this.lineas = lineas;
    this.posX = posX;
    this.posY = posY;
    this.textSizetext = textSizetext;
    textAlign(CENTER, CENTER);
  }

  dibujar() {
    fill(0, 0, 0);
    textSize(this.textSizetext);
    text(this.lineas, this.posX, this.posY);
  }
}
