// video presentacion tp2
//https://www.youtube.com/watch?v=4chtcM74ZH4


PImage imagen;
int pantalla;
int espacio;  
void setup() {
  size(800, 400);
  imagen=loadImage("imagen.jpeg");
  noStroke();
  
  pantalla=1;
  
  espacio=20;
}

void draw() {

  background(0);

  dibujar();
}

void mousePressed(){
  println(mouseX,mouseY);
  pantalla++;
  if(termino(pantalla)){
    pantalla=1;
  }
}
