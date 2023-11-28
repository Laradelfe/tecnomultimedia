class Pelota {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
    this.radio = 40;
    this.xvelocidad = 3.5;
    this.yvelocidad = -3.5;
    this.imagen = imagenPelota;
  }

  dibujar() {
    fill(255);
    image(this.imagen,this.x, this.y, this.radio, this.radio);
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
    if (this.y > height -40) {
      this.yvelocidad*= -1;
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
}
