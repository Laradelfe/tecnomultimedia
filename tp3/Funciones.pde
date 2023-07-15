void imagen(int imagenes) {
  image(imagenCuento[imagenes], 0, 0, 600, 600);
}

//boton cirucular
boolean botonsiguiente (int posx, int posy) {
  if ( dist(mouseX, mouseY, posx, posy) < 30) {
    return true;
  } else {
    return false;
  }
}


void circuloderecha() {
  fill(255, 255, 255, 100);
  ellipse (500, 500, 60, 60);
  fill(0, 0, 0);
}
void circuloizquierda() {
  fill(255, 255, 255, 100);
  ellipse (100, 500, 60, 60);
  fill(0, 0, 0);
}


void historia(int pantalla) {
  if (pantalla == 1) {
    imagen(23);
    circuloderecha();
    circuloizquierda();
    text(lineas[0], 0, 100);
    text(lineas[29], 50, 460);
    println( "menu po1" );
  } else if (pantalla == 2) {
    imagen(0);
    circuloderecha();
    text(lineas[1], 50, 100);
    text(lineas[32], 450, 460);
    println( "P02" );
  } else if (pantalla == 3) {
    imagen(1);
    circuloderecha();
    text(lineas[2], 30, 100);
    text(lineas[32], 450, 460);
    println( "P03" );
  } else if (pantalla == 4) {
    imagen (2);
    circuloderecha();
    text(lineas[3], 50, 100);
    text(lineas[32], 450, 460);
    println( "P04" );
  } else if (pantalla == 5) { 
    imagen(3);
    circuloderecha();
    circuloizquierda();
    text(lineas[4], 50, 100);
    text(lineas[30], 93, 510);
    println( "P05" );
    
  } else if (pantalla==6) {
    imagen(5);
    circuloderecha();
    circuloizquierda();
    text(lineas[6], 200, 110);
    text(lineas[30], 93, 510);
    println( "P06" );
  } else if (pantalla==7) {
    imagen(6);
    circuloderecha();
    text(lineas[7], 50, 410);
    text(lineas[32], 450, 460);
    println( "P07" );
  } else if (pantalla==8) {
    imagen(7);
    circuloderecha();
    text(lineas[8], 50, 100);
    text(lineas[32], 450, 460);
    println( "P08" );
  } else if (pantalla==9) {
    imagen(8);
    circuloderecha();
    text(lineas[9], 50, 30);
    text(lineas[32], 450, 460);
    println( "P9" );
  } else if (pantalla==10) {
    imagen(9);
    circuloderecha();
    circuloizquierda();
    text(lineas[10], 180, 400);
    text(lineas[30], 93, 510);
    println( "P10" );
  } else if (pantalla==11) {
    imagen(10);
    circuloderecha();
    text(lineas[11], 80, 450);
    text(lineas[32], 450, 460);
    println( "P11" );
  } else if (pantalla==12) {
    imagen(11);
    circuloderecha();
    text(lineas[12], 350, 100);
    text(lineas[32], 450, 460);
    println( "P12" );
  
  } else if (pantalla==13) {
    imagen(13);
    circuloderecha();
    text(lineas[14], 50, 100);
    text(lineas[32], 450, 460);
    println( "P13" );
  } else if (pantalla==14) {
    imagen(14);
    circuloderecha();
    text(lineas[15], 200, 100);
    text(lineas[32], 450, 460);
    println( "P14" );
  } else if (pantalla==15) {
    imagen(15);
    circuloderecha();
    text(lineas[16], 50, 100);
    text(lineas[32], 450, 460);
    println( "P15" );
  } else if (pantalla==16) {
    imagen(16);
    circuloderecha();
    text(lineas[17], 50, 80);
    text(lineas[32], 450, 460);
    println( "P16" );
  } else if (pantalla==17) {
    imagen(17);
    circuloderecha();
    text(lineas[18], 50, 30);
    text(lineas[32], 450, 460);
    println( "P17" );
  } else if (pantalla==18) {
    imagen(18);
    circuloderecha();
    text(lineas[23], 50, 100);
    text(lineas[31], 450, 460);
    println( "P18" );
  } else if (pantalla==20) {
    imagen(21);
    circuloderecha();
    text(lineas[20], 50, 50);
    text(lineas[32], 450, 460);
    println( "P20" );
  } else if (pantalla==21) {
    imagen(20);
    circuloderecha();
    text(lineas[22], 50, 30);
    text(lineas[31], 450, 460);
    println( "P21" );
  } else if (pantalla==22) {
    imagen(22);
    circuloderecha();
    text(lineas[19], 30, 400);
    text(lineas[31], 450, 460);
    println( "P22" );
  } else if (pantalla==23) {
    imagen(24);
    circuloderecha();
    text(lineas[27], 50, 100);
    text(lineas[31], 450, 460);
    println( "P23" );
  } else if (pantalla==24) {
    imagen(25);
    circuloderecha();
    text(lineas[24], 50, 90);
    text(lineas[32], 450, 460);
    println( "P24" );
  } else if (pantalla==25) {
    imagen(26);
    circuloderecha();
    text(lineas[25], 50, 100);
    text(lineas[32], 450, 460);
    println( "P25" );
  } else if (pantalla==26) {
    imagen(27);
    circuloderecha();
    text(lineas[26], 30, 100);
    text(lineas[31], 450, 460);
    println( "P26" );
  }
}
void interacciones() {

  if ( pantalla == 1 && botonsiguiente(500, 500)) {      //MENU
    pantalla = 2;
  } else if ( pantalla == 1 && botonsiguiente(100, 500)) {// te lleva a creditos
    pantalla = 23;
  } else if ( pantalla == 23 && botonsiguiente(500, 500)) {//de creditos a menu
    pantalla = 1;
  } else if ( pantalla == 2 && botonsiguiente(500, 500)) {//
    pantalla = 3;
  } else if ( pantalla == 3 && botonsiguiente(500, 500)) {//
    pantalla = 4;
  } else if ( pantalla == 4 && botonsiguiente(500, 500)) {//
    pantalla = 5;
  } else if ( pantalla == 5 && botonsiguiente(500, 500)) {//
    pantalla = 6;
  } else if (pantalla == 5 && botonsiguiente(100, 500)) { // final2
    pantalla = 18;
  } else if ( pantalla == 18 && botonsiguiente(500, 500)) {// final2
    pantalla = 1;
  } else if (pantalla == 20 && botonsiguiente(500, 500)) {// (final2) te lleva a menu
    pantalla = 1;
  } else if ( pantalla == 6 && botonsiguiente(500, 500)) {//
    pantalla = 7;
  } else if ( pantalla == 7 && botonsiguiente(500, 500)) {//
    pantalla = 8;
  } else if (pantalla == 6 && botonsiguiente(100, 500)) {// 
    pantalla = 24;
  } else if (pantalla == 24 && botonsiguiente(500, 500)) {// 
    pantalla = 25;
     } else if (pantalla == 25 && botonsiguiente(500, 500)) {// 
    pantalla = 26;
  } else if (pantalla == 26 && botonsiguiente(500, 500)) {//final3
    pantalla = 1;

  } else if ( pantalla == 8 && botonsiguiente(500, 500)) {////
    pantalla = 9;
  } else if ( pantalla == 9 && botonsiguiente(500, 500)) {//
    pantalla = 10;
  } else if ( pantalla == 10 && botonsiguiente(100, 500)) {//final4
    pantalla = 21;
     } else if ( pantalla == 21 && botonsiguiente(500, 500)) {//final4
    pantalla = 1;
  } else if ( pantalla == 10 && botonsiguiente(500, 500)) {//
    pantalla = 11;
  } else if ( pantalla == 11 && botonsiguiente(500, 500)) {//
    pantalla = 12;
  } else if ( pantalla == 22 && botonsiguiente(500, 500)) {// (final1)te lleva a menu
    pantalla = 1;
  } else if ( pantalla == 12 && botonsiguiente(500, 500)) {//
    pantalla = 13;
  } else if ( pantalla == 13 && botonsiguiente(500, 500)) {//
    pantalla = 14;
  } else if ( pantalla == 14 && botonsiguiente(500, 500)) {//
    pantalla = 15;
  } else if ( pantalla == 15 && botonsiguiente(500, 500)) {//
    pantalla = 16;
  } else if ( pantalla == 16 && botonsiguiente(500, 500)) {//
    pantalla = 17;
  } else if ( pantalla == 17 && botonsiguiente(500, 500)) {//
    pantalla = 22;
  } else if ( pantalla == 19 && botonsiguiente(500, 500)) { // 
    pantalla = 23 ;
  } else if ( pantalla == 23 && botonsiguiente(500, 500)) {//
  }
}
