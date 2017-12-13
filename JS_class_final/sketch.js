console.log('sketch is linked')

//var scale = 0.01;

// var newsketch = function( p ) { // p could be any variable name
//   var x = 100; 
//   var y = 100;
//   var offset1 = p.createVector(p.random(10000), p.random(10000));
//   var offset2 = p.createVector(p.random(10000), p.random(10000));


//   p.setup = function() {
//     p.createCanvas(windowWidth, windowHeight);
//   };

//   p.draw = function() {
//   	p.background(60);

//     for(var i = 0; i < colors.length; i++){
// 		var currentcolor = p.color(colors[i])
// 		p.noStroke();
// 		p.fill(currentcolor);
// 		p.ellipse(20+150*i,50,80,80)
// 	}
// 	var c1 = p.color(colors[2])
// 	var c2 = p.color(colors[4])
	
//   	p.translate(400, 400);

//   	for(var radious = 250; radious > 0; radious -= 10){
//     	p.fill(p.map(radious, 0, 250, p.red(c1), p.red(c2)),
//         p.map(radious, 0, 250, p.green(c1), p.green(c2)),
//         p.map(radious, 0, 250, p.blue(c1), p.blue(c2)));
//     	p.beginShape();
//     	for(var angle = 0; angle < 360; angle += 0.5){
//       		var radian = p.radians(angle);  
//       		var x = radious * p.cos(radian);
//       		var y = radious * p.sin(radian);
//       		var nx = x + p.map(p.noise(x * scale + offset1.x, y * scale + offset1.y, p.frameCount * 0.015), 0, 1, -200, 200);
//       		var ny = y + p.map(p.noise(x * scale + offset2.x, y * scale + offset2.y, p.frameCount * 0.015), 0, 1, -200, 200);
//       		p.vertex(nx, ny);
//    		 }
//     	p.endShape(p.CLOSE);
//     }
//   };

// };

// //create the sketch in html div 'p1'
// var myp5 = new p5(newsketch, 'p1');


  //var x = 100; 
  //var y = 100;
  

var time = 0.01;
var offset1, offset2;

function setup() {
    createCanvas(windowWidth, windowHeight);
    
  	offset1 = createVector(random(10000), random(10000));
  	offset2 = createVector(random(10000), random(10000));

  	//frameRate(200);
}

function draw() {
  	
  	background(60);

  	//draw palate dots
 //    for(var i = 0; i < colors.length; i ++){
	// 	var currentcolor = color(colors[i])
	// 	noStroke();
	// 	fill(currentcolor);
	// 	ellipse(20 + 150 * i, 50, 80, 80)
	// } 

	var c1 = color(colors[2])
	var c2 = color(colors[4])
	var c3 = color(colors[0])
	var c4 = color(colors[1])
	
  	translate(400, 400);

  	for(var radious = 250; radious > 0; radious -= 10){
    	fill(map(radious, 0, 250, red(c1), red(c2)),
        map(radious, 0, 250, green(c1), green(c2)),
        map(radious, 0, 250, blue(c1), blue(c2)));

    	beginShape();
    	for(var angle = 0; angle < 360; angle += 0.5){
      		var radian = radians(angle);  
      		var x = radious * cos(radian);
      		var y = radious * sin(radian);
      		var nx = x + map(noise(x * time + offset1.x, y * time + offset1.y, frameCount * 0.015), 0, 1, -300, 300);
      		var ny = y + map(noise(x * time + offset2.x, y * time + offset2.y, frameCount * 0.015), 0, 1, -300, 300);
      		vertex(nx, ny);
   		 }
    	endShape(CLOSE);
    }

    for(var radious = 250; radious > 0; radious -= 10){
    	fill(map(radious, 0, 250, red(c3), red(c4)),
        map(radious, 0, 250, green(c3), green(c4)),
        map(radious, 0, 250, blue(c3), blue(c4)));

    	beginShape();
    	for(var angle = 0; angle < 360; angle += 0.7){
      		var radian = radians(angle);  
      		var x = radious * cos(radian);
      		var y = radious * sin(radian);
      		var nx = x + map(noise(x * time + offset1.x, y * time + offset1.y, frameCount * 0.015), 0, 1, -300, 300);
      		var ny = y + map(noise(x * time + offset2.x, y * time + offset2.y, frameCount * 0.015), 0, 1, -300, 300);
      		vertex(nx+600, ny);
   		 }
    	endShape(CLOSE);
    }

    noStroke();
    textAlign(CENTER);
    textSize(35);
    fill(255,255,255);
    text("YOUR PERSONALITY UNIVERSE", width/5, height/8);
    textSize(20);
    text("Openness to Experience: 30%", width/5, height/8+50);
    text("Conscientiousness: 75%", width/5, height/8+80);
    text("Extraversion: 23%", width/5, height/8+110);
    text("agreeableness: 42%", width/5, height/8+140);
    text("Neuroticism: 33%", width/5, height/8+170);

}



function title(){
    noStroke();
    textAlign(CENTER);
    textSize(35);
    fill(255,255,255);
    text("YOUR PERSONALITY UNIVERSE", windowWidth/2, windowHeight/2);
}

