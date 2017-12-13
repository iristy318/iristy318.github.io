console.log('sketch2 is linked')

setTimeout(function(){

    var newcolor = [];
    var newhsvcolor = [];

    var s = function( p1 ) { 

        var hsvcolor = [];
        var v = 5;

        p1.setup = function() {

          p1.createCanvas(p1.windowWidth, p1.windowHeight);
          p1.background(0,0,0)
          p1.frameRate(20)

          for(var i = 0; i < 100; i = i + 5){
            newcolor.push(colors[i]);
          }
        }

        p1.draw = function() {

          //var x = likesArray[p1.floor(p1.random(0,20))] * 0.1;
        //var x = averageLikes * 0.2;
        var x = likesArray[9] * 0.1;

          while(x < 60){

            var currentcolor = p1.color(newcolor[p1.floor(p1.random(0,10))],30);
            p1.push;
            
            p1.noStroke();
            p1.translate(p1.width/2, p1.height/2.2);
            p1.rotate(p1.frameCount/5);
            p1.scale(x * 0.1);
        
            p1.fill(currentcolor);
            //p1.fill(255,0,0,50);
            p1.ellipse(p1.mouseX/20, x * 2, x * 0.3, x * 0.3); 
            //p1.rect(p1.mouseX/20, x * 2, x * 0.3, x * 0.3); 

            p1.stroke(currentcolor);
            p1.strokeWeight(x * 0.008);
            p1.line (x, x, 2, 2);
            p1.pop();
            x ++;

          }
        }

    }

    var myP5 = new p5 (s, 'p1');

}, 2000);
