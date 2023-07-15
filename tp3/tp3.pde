// https://www.youtube.com/watch?v=hMDDBBYa-_M

int pantalla=1;
int cant = 28;
PImage [] imagenCuento = new PImage [cant];
PFont mi_fuente;
String [] lineas;

void setup () {
  size(600, 600);

  fill(0, 0, 0);

  for (int i=0; i<cant; i++) {
    imagenCuento[i] = loadImage("imagen" + i + ".jpeg");
  }

  mi_fuente=loadFont("mi_fuente.vlw");
  textFont(mi_fuente, 30);

  lineas = loadStrings("textos.txt");
  for (int j = 0; j < lineas.length; j++) {
    lineas[j] = lineas[j].replaceAll("\\\\n", "\n");
  }
}

 
void draw () {
  historia(pantalla);
}
void mouseClicked() {
  interacciones();
}
