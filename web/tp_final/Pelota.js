class Pelota {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.radio = 30;
    this.xvelocidad = 3.5;
    this.yvelocidad = -3.5;
    this.imagen = imagenPelota;
  }

  dibujar() {
    fill(255);
    image(this.imagen, this.x, this.y, 50, 50);
    this.mueve();
    this.checkbordes();

  }

  mueve() {
    this.x += this.xvelocidad;
    this.y += this.yvelocidad;
  }

  checkbordes() {
    if (this.x < 0 || this.x > width) {
      this.xvelocidad *= -1;
    }
    if (this.y < 0) {
      this.yvelocidad *= -1;
    }
  }

  checkladrillos(ladrillo) {
    if(!ladrillo.visible){
      return false;
    }
    if (
      this.x - this.radio >= ladrillo.x + ladrillo.width ||
      this.x + this.radio <= ladrillo.x ||
      this.y - this.radio >= ladrillo.y + ladrillo.height ||
      this.y + this.radio <= ladrillo.y
      ) {
      return false;
    } else {
      ladrillo.visible = false;
      this.yvelocidad *= -1;
      return true;
    }
  }
  
  checkpaleta(paleta) {
    if (
      this.x + this.radio >= paleta.x &&
      this.x - this.radio <= paleta.x + paleta.width &&
      this.y + this.radio >= paleta.y &&
      this.y - this.radio <= paleta.y + paleta.height
    ) {
      // Rebote en la paleta
      this.y = paleta.y - this.radio; // Ajustar la posición de la pelota para que esté justo encima de la paleta
      this.yvelocidad *= -1; 
  
    }
  }
  
   pasadoBordeInferior() {
    return this.y - this.radio > height;
  }
  
  reiniciar() {
    this.x = width / 2;
    this.y = height / 2;
    this.xvelocidad = 3.5;
    this.yvelocidad = -3.5;
  }


}
