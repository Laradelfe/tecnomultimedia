class Juego {
  constructor(imgFondo, pantsig1, pantsig2) {
    this.paleta = new Paleta();
    this.ladrillos = [];
    this.pelota = new Pelota();
    this.crearladrillos();
    this.aventura = aventura;
    this.imgFondo = imgFondo;
    this.pantsig1 = pantsig1;
    this.pantsig2 = pantsig2;
  }

  dibujar() {
    image(this.imgFondo, 0, 0, 600, 600);
    this.paleta.dibujar();
    this.pelota.dibujar();
    this.dibujarladrillos();
    this.pelota.checkpaleta(this.paleta);

    if (this.ganarJuego()) {
      this.reiniciar();
      console.log(this.pantsig2);
      aventura.pantallaActual = this.pantsig1;
      //return this.pantsig1;
    } else if (this.perderJuego()) {
      this.reiniciar();
      console.log(this.pantsig2);
      //return this.pantsig2;
      aventura.pantallaActual = this.pantsig2;
    }
  }
  crearladrillos() {
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 8; j++) {
        this.ladrillos.push(new Ladrillo(j * 70 + 5, i * 30 + 5));
      }
    }
  }
  dibujarladrillos() {
    for (let i = 0; i < this.ladrillos.length; i++) {
      if (this.pelota.checkladrillos(this.ladrillos[i])) {
        // Realiza acciones adicionales cuando la pelota golpea un ladrillo si es necesario.
      }
      this.ladrillos[i].dibujar();
    }
  }
  ganarJuego() {
 for (let i = 0; i < this.ladrillos.length; i++) {
      if (this.ladrillos[i].visible) {
        // Si hay al menos un ladrillo visible, el juego no se ha ganado
        return false;
      }
    }
    // Si no hay ladrillos visibles, el juego se ha ganado
    return true;
  }

  perderJuego() {
    return this.pelota.pasadoBordeInferior();
  }
  reiniciar() {
    this.paleta = new Paleta();
    this.ladrillos = [];
    this.pelota.reiniciar();
    this.crearladrillos();
  }
}
