class PantallaUnBoton {
  constructor(imgFondo, botX, botY, pantsig, textoBot, textSizebot, lineas, posX, posY,textSizetext, lineas1, posX1, posY1, lineas2, posX2, posY2 ) {
    this.imgFondo = imgFondo;
    this.lineas = lineas;
    this.lineas1 = lineas1;
    this.lineas2 = lineas2;
    this.ancho= 600;
    this.alto = 400;
    this.botX = botX;
    this.botY = botY;
    this.pantsig = pantsig;
    this.textSizebot=textSizebot;
    this.boton = new Boton(this.botX, this.botY, 180, 50, textoBot, textSizebot);
    this.textSizetext = textSizetext;
    //this.posX = posX;
    //this.posY = posY;
    //this.posX1 = posX1;
    //this.posY1 = posY1;
    //this.posX2 = posX2;
    //this.posY2 = posY2;
    this.texto = new Texto(this.lineas, posX, posY, textSizetext);
    this.texto1 = new Texto(this.lineas1, posX1, posY1, textSizetext);
    this.texto2 = new Texto(this.lineas2, posX2, posY2, textSizetext);
  }

  dibujar() {
    image(this.imgFondo, 0, 0, this.ancho, this.alto);
    this.boton.dibujar();
    this.texto.dibujar();
    this.texto1.dibujar();
    this.texto2.dibujar();
  }
  click() {
    if (this.boton.click()) {
      console.log(this.pantsig);
      return this.pantsig;
    }
  }
}
