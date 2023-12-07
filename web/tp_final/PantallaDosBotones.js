class PantallaDosBotones {
  //constructor(imgFondo, botX, botY, botX2, botY2, pantsig1, pantsig2, textoBot1, textoBot2,textSizebot, lineas, textSizetext)
  constructor(imgFondo, botX, botY, botX2, botY2, pantsig1, pantsig2, textoBot1, textoBot2, textSizebot, lineas, posX, posY, textSizetext, lineas1, posX1, posY1, lineas2, posX2, posY2) {
    this.imgFondo = imgFondo;
    this.ancho = 600;
    this.alto = 400;
    this.botX = botX;
    this.botY = botY;
    this.botX2 = botX2;
    this.botY2 = botY2;
    this.pantsig1 = pantsig1;
    this.pantsig2 = pantsig2;
    this.textSizebot=textSizebot;
    this.boton1 = new Boton(this.botX, this.botY, 180, 50, textoBot1, textSizebot);
    this.boton2 = new Boton(this.botX2, this.botY2, 180, 50, textoBot2, textSizebot);
    this.lineas = lineas;
    this.lineas1 = lineas1;
    this.lineas2 = lineas2;
    //this.posX = posX;
    //this.posY = posY;
    //this.posX1 = posX1;
    //this.posY1 = posY1;
    //this.posX2 = posX2;
    //this.posY2 = posY2;
    this.textSizetext = textSizetext;
    this.texto = new Texto(this.lineas, posX, posY, textSizetext);
    this.texto1 = new Texto(this.lineas1, posX1, posY1, textSizetext);
    this.texto2 = new Texto(this.lineas2, posX2, posY2, textSizetext);
  }

  dibujar() {
    image(this.imgFondo, 0, 0, this.ancho, this.alto);
    this.texto.dibujar();
    this.texto1.dibujar();
    this.texto2.dibujar();
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
