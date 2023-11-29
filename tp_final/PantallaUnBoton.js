class PantallaUnBoton {
  constructor(imgFondo, botX, botY, pantsig, textoBot,textSizebot, lineas, textSizetext) {
    this.imgFondo = imgFondo;
    this.lineas = lineas;
    this.textSizetext = textSizetext;
    this.ancho= 600;
    this.alto = 600;
    this.botX = botX;
    this.botY = botY;
    this.pantsig = pantsig;
    this.textSizebot=textSizebot;
    this.boton = new Boton(this.botX, this.botY, 180, 50, textoBot, textSizebot);
    this.texto = new Texto(this.lineas, textSizetext);
  }

  dibujar() {
    image(this.imgFondo, 0, 0, this.ancho, this.alto);
    this.boton.dibujar();
    this.texto.dibujar();
    console.log(this.lineas);
  }
  click() {
    if (this.boton.click()) {
      console.log(this.pantsig);
      return this.pantsig;
    }
  }
}
