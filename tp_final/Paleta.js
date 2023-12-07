class Paleta {
  constructor() {
    this.width = 180;
    this.height = 100;
    this.x = width / 2 - this.width / 2;
    this.y = height - 100;
    //this.velocidad = 5;
    this.imagen = imagenTabla;
  }

  dibujar() {
    fill(255);
    image(this.imagen, this.x, this.y, this.width, this.height);
    this.x = mouseX;
    this.x = constrain(this.x, 0, width - this.width);
  }
}
