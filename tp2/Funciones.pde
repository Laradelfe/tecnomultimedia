void dibujar() {
  if (pantalla==1) {
    triangulo(736, height/2);
    circulo(736, height/2);
    fondo();
  }
  if (pantalla==2) {
    triangulo(mouseX, 200);
    circulo(mouseX, 200);
    fondo();
  }
  if (pantalla==3) {
    triangulo(mouseX, 200);
    circulo(mouseX, 200);
    fondo();
  }
}

void circulo(int posX, int posY) {
  if (posX>=400)
    ellipse(posX, posY, 35, 35);
}

void fondo() {
  image(imagen, 0, 0, 400, 400);
  float centerX = 600;
  float centerY = 200;
  float radius = min(600, 300) / 2;

  // Dibuja el círculo exterior
  for (int y = 0; y < 400; y++) {
    for (int x = 400; x < 800; x++) {
      float distance = dist(x, y, centerX, centerY);

      // Verifica si el punto está dentro del círculo
      if (distance < radius) {
        // Establece el color del punto dentro del círculo
        fill(255, 2555, 255, 0);
      } else {
        // Establece el color del punto fuera del círculo

       fill(255, 255, 255);
      }

      // Dibuja el punto
      rect(x, y, 1, 1);
    }
  }
}


void triangulo(int posX, int posY) {



  if (posX>=400) {

    float x1=posX;
    float y1=posY;
    float x2=400;
    float y2=1000;
    float x3=400;
    float y3=2000;

    for (int i=0; i<300; i++) {
      push();
      cambioDeColor(i);
      triangle(x1, y1, x2, y2-(i*espacio), x3, y3-(i*espacio)) ;
      pop();
    }
    if (posX>=400) {

      float X1=posX;
      float Y1=posY;
      float X2=800;
      float Y2=1000;
      float X3=800;
      float Y3=2000;
      for (int i=0; i<300; i++) {
        push();
        cambioDeColor(i);
        triangle(X1, Y1, X2, Y2-(i*espacio), X3, Y3-(i*espacio)) ;
        pop();
      }
    }
  }
}

void cambioDeColor (int num) {

  if ((pantalla==1)||(pantalla==2)) {
    if (num%2==0) {
      fill(0);
    } else {
      fill(255);
    }
  }
  if (pantalla==3) {
    if (num%2==0) {
      fill(255);
    } else {
      fill(0);
    }
  }
}
boolean termino(int pant) {
  boolean ok=false;
  if (pant<=3) {
    return ok;
  } else {
    ok=true;
    return ok;
  }
}
