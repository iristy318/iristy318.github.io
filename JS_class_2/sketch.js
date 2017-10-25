// var beat;

// function preload(){
//   beat = loadSound('../assets/be.mp3');
//   airhorn = loadSound('../assets/airhorn.mp3');
// }

// function setup() {
//   createCanvas(windowWidth,windowHeight);
//   background(32,32,32);
// }

// function mousePressed() {
//   if ( beat.isPlaying() ) { 
//     beat.stop();
//     background(255,0,0);
//   } else {
//     beat.play();
//     background(0,255,0);
//   }
// }

var beat;
var col;
var b = [];
var fft0, fft1, fft2, fft3, fft4, fft5, fft6, fft7;
var sounds = [];


function preload(){
  sound0 = loadSound('assets/Juice.mp3')
  sound1 = loadSound('../assets/say yes.mp3');
  sound2 = loadSound('../assets/Mad World.mp3');
  sound3 = loadSound('../assets/Stars.mp3');
  sound4 = loadSound('../assets/Whats Up.mp3');
  sound5 = loadSound('../assets/Cherry Bomb.mp3');
  sound6 = loadSound('../assets/Wisdom.mp3');
  sound7 = loadSound('../assets/Sadness.mp3');
  //beat = loadSound('../assets/be.mp3')

}

function setup() {

  createCanvas(windowWidth,windowHeight);
  background(32,32,32);

  //draw 8 circles
  var x = [windowWidth/2 - 175, 
          windowWidth/2, 
          windowWidth/2 + 175, 
          windowWidth/2 + 175, 
          windowWidth/2, 
          windowWidth/2 - 175,
          windowWidth/2 - 250,
          windowWidth/2 + 250];

  var y = [windowHeight/2 + 175, 
          windowHeight/2 + 250, 
          windowHeight/2 + 175, 
          windowHeight/2 - 175, 
          windowHeight/2 - 250,  
          windowHeight/2 - 175, 
          windowHeight/2, 
          windowHeight/2];

  for(var i = 0; i < 8; i++){
    b[i] = new Bubble(x[i],y[i]);
  }

  //frequency
 
    fft0 = new p5.FFT();
    fft0.setInput(sound0);

    fft1 = new p5.FFT();
    fft1.setInput(sound1);

    fft2 = new p5.FFT();
    fft2.setInput(sound2);

    fft3 = new p5.FFT();
    fft3.setInput(sound3);

    fft4 = new p5.FFT();
    fft4.setInput(sound4);

    fft5 = new p5.FFT();
    fft5.setInput(sound5);

    fft6 = new p5.FFT();
    fft6.setInput(sound6);

    fft7 = new p5.FFT();
    fft7.setInput(sound7);

}


function draw() {

  background(32);

  textSize(40);
  fill(255);
  text("PLAY!",windowWidth/2-50,windowHeight/2);

//draw large circle
  stroke(255);
  noFill();
  ellipse(width/2, height/2, 500, 500);

  for(var i = 0; i < 8; i++){
    b[i].display(mouseX,mouseY);
  }

//draw frequency curve
  var spectrum0 = fft0.analyze();
   beginShape();
   fill(111,166,162)
   for (i = 0; i < spectrum0.length; i++) {
    vertex(i*7, map(spectrum0[i], 0, 255, height*2, 0) );
   }
   endShape();

   var spectrum1 = fft1.analyze();
   beginShape();
   fill(144,148,155)
   for (i = 0; i < spectrum1.length; i++) {
    vertex(i*7, map(spectrum1[i], 0, 255, height*2, 0) );
   }
   endShape();

   var spectrum2 = fft2.analyze();
   beginShape();
   fill(178,132,161)
   for (i = 0; i < spectrum2.length; i++) {
    vertex(i*7, map(spectrum2[i], 0, 255, height*2, 0) );
   }
   endShape();

   var spectrum3 = fft3.analyze();
   beginShape();
   fill(178,133,195)
   for (i = 0; i < spectrum3.length; i++) {
    vertex(i*7, map(spectrum3[i], 0, 255, height*2, 0) );
   }
   endShape();

   var spectrum4 = fft4.analyze();
   beginShape();
   fill(144,149,203)
   for (i = 0; i < spectrum4.length; i++) {
    vertex(i*7, map(spectrum4[i], 0, 255, height*2, 0) );
   }
   endShape();

   var spectrum5 = fft5.analyze();
   beginShape();
   fill(111,166,196)
   for (i = 0; i < spectrum5.length; i++) {
    vertex(i*7, map(spectrum5[i], 0, 255, height*2, 0) );
   }
   endShape();

   var spectrum6 = fft6.analyze();
   beginShape();
   fill(97,173,179);
   for (i = 0; i < spectrum6.length; i++) {
    vertex(i*7, map(spectrum6[i], 0, 255, height*2, 0) );
   }
   endShape();

   var spectrum7 = fft7.analyze();
   beginShape();
   fill(178,132,161)
   for (i = 0; i < spectrum7.length; i++) {
    vertex(i*7, map(spectrum7[i], 0, 255, height*2, 0) );
   }
   endShape();

}

function mousePressed() {

    if (b[0].contains(mouseX, mouseY)) {
      if(sound0.isPlaying()){
        sound0.stop();
      }
      else{
        sound0.play();
      }
    }

    if (b[1].contains(mouseX, mouseY)) {
      if(sound1.isPlaying()){
        sound1.stop();
      }
      else{
        sound1.play();
      }
    }

    if (b[2].contains(mouseX, mouseY)) {
      if(sound2.isPlaying()){
        sound2.stop();
      }
      else{
        sound2.play();
      }
    }

    if (b[3].contains(mouseX, mouseY)) {
      if(sound3.isPlaying()){
        sound3.stop();
      }
      else{
        sound3.play();
      }
    }

    if (b[4].contains(mouseX, mouseY)) {
      if(sound4.isPlaying()){
        sound4.stop();
      }
      else{
        sound4.play();
      }
    }

    if (b[5].contains(mouseX, mouseY)) {
      if(sound5.isPlaying()){
        sound5.stop();
      }
      else{
        sound5.play();
      }
    }
    
    if (b[6].contains(mouseX, mouseY)) {
      if(sound6.isPlaying()){
        sound6.stop();
      }
      else{
        sound6.play();
      }
    }

    if (b[7].contains(mouseX, mouseY)) {
      if(sound7.isPlaying()){
        sound7.stop();
      }
      else{
        sound7.play();
      }
    }


  // if (beat.isPlaying() ) { 
  //   beat.stop();
  //   background(32);
  // } 
  // else {
  //   beat.play();
  //   background(245,89,89);
  // }

}


//create the class called Bubble
function Bubble(x,y) {

  var col = color(255);

  this.x = x;
  this.y = y;
  var r = 70;

  this.display = function(mx,my){
    noStroke();
    if(this.contains(mx,my)){
      fill(color(this.x*0.2,220-this.x*0.1,220-this.y*0.1));
    }
    else{
      fill(255);
    }
    
    ellipse(this.x,this.y,r,r);
  }

  this.contains = function(mx,my){
    var d = dist(mouseX,mouseY,this.x,this.y);
    // var play = 0;
    if (d < 35){ 
      return true;
    }
    else{
      return false;
    }
  }

}





