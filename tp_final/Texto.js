class Texto {
  constructor(lineas, textSizetext) {
    this.lineas = lineas;
    this.textSizetext = textSizetext;
        textAlign(CENTER, CENTER);
  }


  dibujar() {
    fill(0, 0, 0);
    textSize(this.textSizetext);
    text(this.lineas, 300, 300);
  }
}
