int pantalla = 1;
int contador = 0;
int segundos = 0;

int posX; 
int posY; 
int velX;

boolean direccion = true;

PImage titanic1;
PImage titanic2;
PImage titanic3;
PImage boton2;
PFont mi_fuente;

void setup() {
  size(640, 480);
  
  titanic1=loadImage ("titanic1.jpg");
  titanic2=loadImage("titanic2.jpg");
  titanic3=loadImage("titanic3.jpg");
  boton2=loadImage("boton2.png");
  
  mi_fuente=loadFont("mi_fuente.vlw");
  textFont(mi_fuente, 40);
  
  posX=1;
  posY=150;
  velX=1;
}

void draw() {   
                            //("frameCount: " + frameCount);
   
      
  println("segundos: " + segundos);
  
  
  if (posX <= 0|| posX >= 100) { //direccion 
    direccion = !direccion;
  
  }

  if (direccion) {
    posX = posX + 1;
    velX=1;
  } else {
    posX = posX - 1;
    velX=1;
  }
   
   
   
  if(pantalla==1){
    image(titanic1, 0, 0, 640, 480);  
    fill(252,10,18);
    text("El RMS Titanic fue un transatlántico \nbritánico,el mayor barco de \npasajeros del mundo \nal finalizar su construcción.  ", posX, posY);
  }
    if (segundos>=3){
      pantalla=2;   
   
   }
      
  
if (posX <= 0 || posX >= 100) { //direccion 
    direccion = !direccion;
  } 
  if (direccion) {
    posX = posX + 1;
    velX=1;
  } else {
    posX = posX - 1;
    velX=1;
  }
    if(pantalla==2){
     image(titanic2,0,0,640,480); 
    fill(3,255,17);
    text("Naufragó en las aguas del océano \nAtlántico \ndurante la noche del 14 y  \nla madrugada del 15 de abril de \n1912.",posX,posY);
  
    } if (segundos >= 6) {
      pantalla=3;
    }
    
    
    if (posX <= 0 || posX >= 100) { //direccion 
    direccion = !direccion;
  } 

  if (direccion) {
    posX = posX + 1;
    velX=1;
  } else {
    posX = posX - 1;
    velX=1;
  }
   if (pantalla==3) {
 
    image(titanic3,0,0,640,480);  
    fill(240,46,227);
    text(" En el hundimiento murieron 1496 \npersonas de las 2208 que iban a bordo, \nlo que convierte a esta catástrofe en uno de \nlos mayores naufragios de la historia ocurridos \nen tiempos de paz.",posX,posY); 
   
      image(boton2,400,380,90,90);
    }
  
 
  if(frameCount % 60 == 0){
    segundos = segundos + 1;
  }
}

void mouseClicked() {
   if(dist(mouseX, mouseY, 400,380) < 90){
    pantalla=1;
    segundos=0;
}
}
