console.log('color dots is linked')

setTimeout(function(){
    var s = function( p1 ) { 
        
         p1.setup = function() {
          p1.createCanvas(p1.windowWidth, p1.windowHeight);
          p1.background(255)
          p1.frameRate(20)
        }


        p1.draw = function() {

          var i = 0;
          var xPos = 0;

          while(i < 100){

            var currentcolor = p1.color(colors[i]);

            p1.push;
            
            p1. noStroke();
            p1.fill(currentcolor);
            p1.ellipse (20+xPos, 100, 40, 40);
            xPos = xPos + 40; 
            i = i + 5;
          }

          // p1.fill(255,0,0);
          // p1.ellipse(200, 200, 40,40);

        }
    }

    var myP5 = new p5 (s, 'p1');

}, 2000);