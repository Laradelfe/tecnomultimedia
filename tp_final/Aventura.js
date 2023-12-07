class Aventura {
  constructor(pantallas) {
    this.juego = new Juego(imgFondo[28], 17, 25);
    this.pantallas = [];

    //valores que reciben las pantallas= imagen de fondo, posicion de los botones, pantalla/s siguiente/s,
    //texto de los botones, tamaño del texto de los botones, linea de text, tamaño del texto, linea de text

    this.pantallas[0] =  new PantallaDosBotones(imgFondo[23], 50, 550, 350, 550, 1, 24, "COMENZAR HISTORIA", "CREDITOS", 15, lineas[0], 300, 480, 30);
    this.pantallas[1] = new PantallaUnBoton(imgFondo[0], 220, 550, 2, "CONTINUAR", 15, lineas[1], 300, 440, 25, lineas[2], 300, 480);
    this.pantallas[2] = new PantallaUnBoton(imgFondo[1], 220, 550, 3, "CONTINUAR", 15, lineas[3], 300, 440, 25, lineas[4], 300, 480 );
    this.pantallas[3] = new PantallaUnBoton(imgFondo[2], 220, 550, 4, "CONTINUAR", 15, lineas[5], 300, 440, 25, lineas[6], 300, 480);
    this.pantallas[4] = new PantallaDosBotones(imgFondo[3], 50, 550, 350, 550, 5, 19, "ACEPTA", "NO ACEPTA", 15, lineas[7], 300, 440, 25, lineas [8], 300, 480, lineas [9], 300, 520);//si elijo B fin de segundo camino
    this.pantallas[5] = new PantallaDosBotones(imgFondo[5], 50, 550, 350, 550, 6, 20, "NO CUMPLE EL TRATO", "CUMPLE EL TRATO", 15, lineas[10], 300, 440, 25, lineas[11], 300, 480, lineas[52], 300, 520 );//si elijo B camino tres
    //sigo camino A
    this.pantallas[6] = new PantallaUnBoton(imgFondo[6], 220, 550, 7, "CONTINUAR", 15, lineas[12], 300, 440, 25, lineas[13], 300, 480);
    this.pantallas[7] = new PantallaUnBoton(imgFondo[7], 220, 550, 8, "CONTINUAR", 15, lineas[14], 300, 440, 25, lineas[15], 300, 480);
    this.pantallas[8] = new PantallaUnBoton(imgFondo[8], 220, 550, 9, "CONTINUAR", 15, lineas[16], 300, 440, 25, lineas[17], 300, 480);
    this.pantallas[9] = new PantallaDosBotones(imgFondo[9], 50, 550, 300, 550, 10, 23, "CUMPLIR SU PROMESA", "MATA A LA RANA", 15, lineas[18], 300, 480, 25);//si elijo B camino cuatro
    //sigo camino A
    this.pantallas[10] = new PantallaUnBoton(imgFondo[10], 220, 550, 11, "CONTINUAR", 15, lineas[19], 300, 440, 25, lineas[20], 300, 480);
    this.pantallas[11] = new PantallaUnBoton(imgFondo[11], 220, 550, 12, "CONTINUAR", 15, lineas[21], 300, 440, 25, lineas[22], 300, 480);
    this.pantallas[12] = new PantallaUnBoton(imgFondo[12], 220, 550, 13, "CONTINUAR", 15, lineas[23], 300, 440, 25, lineas[24], 300, 480);
    this.pantallas[13] = new PantallaUnBoton(imgFondo[14], 220, 550, 14, "CONTINUAR", 15, lineas[25], 300, 440, 25, lineas[26], 300, 480);
    this.pantallas[14] = new PantallaUnBoton(imgFondo[15], 220, 550, 27, "CONTINUAR", 15, lineas[27], 300, 440, 25, lineas[28], 300, 480);
    //array 15 instrucciones del juego
    this.pantallas[15] = new PantallaUnBoton(imgFondo[31], 220, 550, 16, "CONTINUAR", 15, lineas[29], 300, 440, 25, lineas[53], 300, 480, lineas[30], 300, 520);
    //array16 juego
    //si gano voy a arrary 17
    //si pierdo voy a array 25
    this.pantallas[17] = new PantallaUnBoton(imgFondo[17], 220, 550, 18, "CONTINUAR", 15, lineas[31], 300, 440, 25, lineas[32], 300, 480);
    this.pantallas[18] = new PantallaUnBoton(imgFondo[22], 220, 550, 0, "FIN", 15, lineas[33], 300, 440, 25, lineas[34], 300, 480);//reiniciar fin primer camino
    this.pantallas[19] = new PantallaUnBoton(imgFondo[18], 220, 550, 0, "FIN", 15, lineas[42], 300, 440, 25, lineas[43], 300, 650, lineas[44], 300, 480);//reiniciar fin segundo camino

    this.pantallas[20] = new PantallaUnBoton(imgFondo[25], 220, 550, 21, "CONTINUAR", 15, lineas[45], 300, 440, 25, lineas[46], 300, 480);//camino tres
    this.pantallas[21] = new PantallaUnBoton(imgFondo[26], 220, 550, 22, "CONTINUAR", 15, lineas[47], 300, 480, 25);
    this.pantallas[22] = new PantallaUnBoton(imgFondo[27], 220, 550, 0, "FIN", 15, lineas[48], 300, 440, 25, lineas[49], 300, 480);//fin camino tres

    this.pantallas[23] = new PantallaUnBoton(imgFondo[20], 220, 550, 0, "FIN", 15, lineas[50], 300, 440, 25, lineas[51], 300, 480);//fin camino cuatro

    this.pantallas[24] = new PantallaUnBoton(imgFondo[0], 220, 550, 0, "VOLVER AL INICIO", 15, lineas[39], 300, 440, 25, lineas[40], 300, 480, lineas[41], 300, 520);//creditos

    this.pantallas[25] = new PantallaUnBoton(imgFondo[29], 220, 550, 26, "CONTINUAR", 15, lineas[35], 300, 440, 25, lineas[36], 300, 480);//PERDIO
    this.pantallas[26] = new PantallaUnBoton(imgFondo[30], 220, 550, 0, "INICIAR DE NUEVO", 15, lineas[37], 300, 440, 25, lineas[38], 300, 480);//FIN CAMINO JUEGO

    this.pantallas[27] = new PantallaUnBoton(imgFondo[32], 220, 550, 15, "CONTINUAR", 15, lineas[54], 300, 440, 25, lineas[55], 300, 480, lineas[56], 300, 520);

      this.pantallaActual = 0;
  }

  dibujar() {
    if (this.pantallaActual >= 0 && this.pantallas[this.pantallaActual]) {
      this.pantallas[this.pantallaActual].dibujar();
    } else if (this.pantallaActual == 16) {
      this.juego.dibujar();
    }
  }

  click() {
    let siguientePantalla = this.pantallas[this.pantallaActual].click();
    if (siguientePantalla !== undefined) {
      this.pantallaActual = siguientePantalla;
    }
  }
}
