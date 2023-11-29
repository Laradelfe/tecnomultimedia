class Aventura {
  constructor(pantallas) {
    this.juego = new Juego(imgFondo[10], 3,3);
    this.pantallas = [];

    this.pantallas[0] =  new PantallaDosBotones(imgFondo[23], 100, 100, 300, 360, 1, 23, "COMENZAR", "CREDITOS", 15, lineas[0], 30);
    
    //this.pantallas[1] = new PantallaUnBoton(imgFondo[0], 100, 100, 2, "SIGUIENTE", 15, lineas[1], 30);
    this.pantallas[2] = new PantallaUnBoton(imgFondo[1], 100, 100, 3, "SIGUIENTE", 15, lineas[2], 30);
    this.pantallas[3] = new PantallaUnBoton(imgFondo[2], 100, 100, 4, "SIGUIENTE", 15, lineas[3], 30);
    this.pantallas[4] = new PantallaDosBotones(imgFondo[3], 100, 100, 300, 360, 5, 18, "ACEPTA", "NO ACEPTA", 15, lineas[4], 30);//si elijo B fin de segundo camino
    this.pantallas[5] = new PantallaDosBotones(imgFondo[5], 300, 100, 300, 360, 6, 19, "NO CUMPLE EL TRATO", "CUMPLE EL TRATO", 15, lineas[6], 30);//si elijo B camino tres
    //sigo camino A
    this.pantallas[6] = new PantallaUnBoton(imgFondo[6], 100, 100, 7, "SIGUIENTE", 15, lineas[7], 30);
    this.pantallas[7] = new PantallaUnBoton(imgFondo[7], 100, 100, 8, "SIGUIENTE", 15, lineas[8], 30);
    this.pantallas[8] = new PantallaUnBoton(imgFondo[8], 100, 100, 9, "SIGUIENTE", 15, lineas[9], 30);
    this.pantallas[9] = new PantallaDosBotones(imgFondo[9], 100, 100, 300, 360, 10, 22, "CUMPLIR SU PROMESA", "MATA A LA RANA", 15, lineas[10], 30);//si elijo B camino cuatro
    //sigo camino A
    this.pantallas[10] = new PantallaUnBoton(imgFondo[10], 100, 200, 11, "SIGUIENTE", 15, lineas[11], 30);
    this.pantallas[11] = new PantallaUnBoton(imgFondo[11], 100, 100, 12, "SIGUIENTE", 15, lineas[12], 30);
    this.pantallas[12] = new PantallaUnBoton(imgFondo[12], 100, 100, 13, "SIGUIENTE", 15, lineas[13], 30);
    this.pantallas[24] = new PantallaUnBoton(imgFondo[13], 100, 100, 13, "SIGUIENTE", 15, lineas[14], 30);
    this.pantallas[13] = new PantallaUnBoton(imgFondo[14], 100, 100, 14, "SIGUIENTE", 15, lineas[15], 30);
    this.pantallas[14] = new PantallaUnBoton(imgFondo[15], 100, 100, 15, "SIGUIENTE", 15, lineas[16], 30);
    this.pantallas[15] = new PantallaUnBoton(imgFondo[16], 100, 100, 16, "SIGUIENTE", 15, lineas[17], 30);
    this.pantallas[16] = new PantallaUnBoton(imgFondo[17], 100, 100, 17, "SIGUIENTE", 15, lineas[18], 30);
    this.pantallas[17] = new PantallaUnBoton(imgFondo[22], 100, 100, 0, "REINICIAR", 15, lineas[19], 30);//reiniciar fin primer camino
    this.pantallas[18] = new PantallaUnBoton(imgFondo[18], 100, 100, 0, "REINICIAR", 15, lineas[23], 30);//reiniciar fin segundo camino

    this.pantallas[19] = new PantallaUnBoton(imgFondo[25], 100, 100, 20, "SIGUIENTE", 15, lineas[20], 30);//camino tres
    this.pantallas[20] = new PantallaUnBoton(imgFondo[26], 100, 100, 21, "SIGUIENTE", 15, lineas[25], 30);
    this.pantallas[21] = new PantallaUnBoton(imgFondo[27], 100, 100, 0, "REINICIAR", 15, lineas[26], 30);//fin camino tres

    this.pantallas[22] = new PantallaUnBoton(imgFondo[20], 100, 100, 0, "REINICIAR", 15, lineas[3], 30);//fin camino cuatro

    this.pantallas[23] = new PantallaUnBoton(imgFondo[24], 100, 100, 0, "INICIO", 15, lineas[27], 30);//creditos
    
      //this.pantallas[25] = new Juego();//creditos

    this.pantallaActual = 0;
  }
 
  dibujar() {
  if (this.pantallaActual >= 0 && this.pantallas[this.pantallaActual]) {
      this.pantallas[this.pantallaActual].dibujar();
    }else if (this.pantallaActual == 1){
    this.juego.dibujar();
    }
  }
  //  ganarJuego() {
  //  this.pantallaActual = 3;  // Cambia a la pantalla 3 si se gana
  //}
  //perderJuego() {
  //  this.pantallaActual = 4;  // Cambia a la pantalla 4 si se pierde
  //}

  click() {
   //this.pantallaActual = this.pantallas[this.pantallaActual].click() || this.pantallaActual;


       //this.pantallas[this.pantallaActual].click();
    //this.pantallaActual = this.pantallas[this.pantallaActual].click();

    let siguientePantalla = this.pantallas[this.pantallaActual].click();
    if (siguientePantalla !== undefined) {
      this.pantallaActual = siguientePantalla;
    }
  }
}
