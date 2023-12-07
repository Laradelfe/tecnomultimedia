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
    image(this.imgFondo, 0, 0, 600, 800);
    this.paleta.dibujar();
    this.pelota.dibujar();
    this.dibujarladrillos();
    this.pelota.checkpaleta(this.paleta);
    this.condiciones();
  }
  crearladrillos() {
    for (let i = 0; i < 6; i++) {
      for (let j = 0; j < 8; j++) {
        this.ladrillos.push(new Ladrillo(j * 70 + 5, i * 30 + 5));
      }
    }
  }
  dibujarladrillos() {
    for (let i = 0; i < this.ladrillos.length; i++) {
      this.pelota.checkladrillos(this.ladrillos[i])
        this.ladrillos[i].dibujar();
    }
  }


  condiciones() {

    if (this.ganarJuego()) {
      this.reiniciar();
      aventura.pantallaActual = this.pantsig1;
    } else if (this.perderJuego()) {
      this.reiniciar();
      aventura.pantallaActual = this.pantsig2;
    }
  }
  ganarJuego() {
    for (let i = 0; i < this.ladrillos.length; i++) {
      if (this.ladrillos[i].visible) {
        // Si hay al menos un ladrillo visible, no termina
        return false;
      }
    }
    // Si no hay ladrillos visibles, se gana
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
