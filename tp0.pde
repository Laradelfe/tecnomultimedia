void setup(){
size (800, 400);
PImage auto; 
auto= loadImage ("tp0.jpg");
image(auto,0,0,400,400);

}
void draw (){
fill(170);
rect(400,240,801,160);
stroke (255);
line(400,300,801,300);
line(400,335,801,335);
stroke(0);
fill(250,110,3);
rect(690,139,60,10);
fill(255,0,0);
rect(680,190,80,40);
fill(247,247,45);
rect(680,150,80,50);
fill(247,247,45);
rect(580,180,100,50);
fill(10,10,9);
ellipse(730,250,40,40);
ellipse(700,250,40,40);
ellipse (630,250,40,40);
ellipse(600,250,40,40);
fill(152,152,152);
ellipse(730,250,20,20);
ellipse(700,250,20,20);
ellipse(630,250,20,20);
ellipse(600,250,20,20);
textSize(18);
fill(255,0,0);
text("ACA",710,195);
}
