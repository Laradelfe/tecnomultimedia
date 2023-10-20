class Juego {
  constructor() {
    this.paleta = new Paleta();
    this.ladrillos = [];
    this.pelota = new Pelota();

    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 8; j++) {
        this.ladrillos.push(new Ladrillo(j * 70 + 5, i * 30 + 5));
      }
    }
  }

  dibujar() {
    this.paleta.dibujar();
    this.pelota.dibujar();
    this.pelota.mueve();
    this.pelota.checkbordes();

    for (let i = 0; i < this.ladrillos.length; i++) {
      if (this.pelota.checkladrillos(this.ladrillos[i])) {
        // Realiza acciones adicionales cuando la pelota golpea un ladrillo si es necesario.
      }
      this.ladrillos[i].dibujar();
    }
  }
  inicio() {
    fill(255);
    textSize(24);
    textAlign(CENTER, CENTER);
    text("Breakout Game/La princesa y el sapo", width / 2, 250);
    textSize(16);
    text("Besa los sapos, usa el mouse para moverte, presione S para comenzar", width / 2, 280);
  }
}
