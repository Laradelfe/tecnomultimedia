class PantallaDosBotones {
  constructor(imgFondo, botX, botY, botX2, botY2, pantsig1, pantsig2, textoBot1, textoBot2,textSizebot, lineas, textSizetext) {
    this.imgFondo = imgFondo;
    this.ancho = 600;
    this.alto = 600;
    this.botX = botX;
    this.botY = botY;
    this.botX2 = botX2;
    this.botY2 = botY2;
    this.pantsig1 = pantsig1;
    this.pantsig2 = pantsig2;
    this.textSizebot=textSizebot;
    this.boton1 = new Boton(this.botX, this.botY, 180, 50, textoBot1,textSizebot);
    this.boton2 = new Boton(this.botX2, this.botY2, 180, 50, textoBot2,textSizebot);
    this.lineas = lineas;
    this.textSizetext = textSizetext;
    this.texto = new Texto(this.lineas, textSizetext);
  }

  dibujar() {
    image(this.imgFondo, 0, 0, this.ancho, this.alto);
    this.texto.dibujar();
    console.log(this.lineas);
    this.boton1.dibujar();
    this.boton2.dibujar();
  }

  click() {
    if (this.boton1.click()) {
      console.log(this.pantsig1);
      return this.pantsig1;
    } else if (this.boton2.click()) {
      console.log(this.pantsig2);
      return this.pantsig2;
    }
  }
}
