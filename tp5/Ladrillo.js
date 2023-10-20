class Ladrillo {
  constructor(x, y) {
    this.width = 60;
    this.height = 20;
    this.x = x;
    this.y = y;
    this.visible = true;
     this.imagen= imagenLadrillo;
  }

  dibujar() {
    if (this.visible) {
      fill(255, 0, 0);
      image(this.imagen,this.x, this.y, this.width, this.height);
    }
  }
}
