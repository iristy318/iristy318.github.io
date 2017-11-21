console.log('js is linked.')

var weather;

var api = ('https://api.openweathermap.org/data/2.5/weather?q=');
//var city = 'London';
var apiKey = '&APPID=a05472529d5b52d1d20eca1c6cbf0f8b';
var units = '&units=metric';

function gotData(data){
	weather = data;
	console.log(weather);
}

//get information
//canvas1 for temperature
var s = function( p1 ) { 
	var input;
	var many = 400;
	var x = [];
	var y = [];
	var speed = [];

	p1.setup = function (){
		
		p1.createCanvas(p1.windowWidth*0.28,p1.windowHeight);
		p1.noStroke();

		var i = 0;

	  	while (i < many) {
	    	x[i] = p1.random(0, p1.width);
	   	 	y[i] = p1.random(0, p1.height);
	    	speed[i] = p1.random(2,5);
	    	i += 1;
	  	}
		
	}

	p1.draw = function (){

		p1.background(236);

		var button = p1.select('#submit');
		button.mousePressed(weatherAsk);

		input = p1.select('#city');

		function weatherAsk(){
			var url = api + input.value() + apiKey + units;
			p1.loadJSON(url, gotData);
		}

		if(weather) {
			var temp = weather.main.temp;

			p1.noStroke();
			p1.fill(236,236,236,3);
	  		p1.rect(0,0, p1.width, p1.height);

	  		var textcontent = temp + '°C';
			p1.textSize(30);
			p1.fill(32);
			p1.text('Temperature',p1.width/4,300)
			p1.text(textcontent,p1.width/4,350);

	 		
	 		//rain drops
	  		var i = 0;

	 		while (i < many) {
	 
	    		p1.fill(100+temp*10,150,255-temp*10,80*speed[i]);

	    		p1.ellipse(x[i], y[i],speed[i]*2,speed[i]*2);

	    		y[i] += speed[i]/2;

	    		if (y[i] > p1.height) {
	      			y[i] = 0;
	    		}
	    	
	    	i += 1;
	  		}
		}
	}
}
var myp5 = new p5(s,'p1')


//canvas2 for humidity
var canvas2 = function( p2 ) { 
	var input;
	var many = 400;
	var x = [];
	var y = [];
	var speed = [];

	var button = p2.select('#submit');
	button.mousePressed(weatherAsk);

		input = p2.select('#city');

		function weatherAsk(){
			var url = api + input.value() + apiKey + units;
			p2.loadJSON(url, gotData);
		}

	p2.setup = function (){
		
		p2.createCanvas(p2.windowWidth*0.28,p2.windowHeight);
		
		p2.noStroke();

		var i = 0;

	  	while (i < many) {
	    	x[i] = p2.random(0, p2.width);
	   	 	y[i] = p2.random(0, p2.height);
	    	speed[i] = p2.random(2,5);
	    	i += 1;
	  	}
		
	}

	p2.draw = function (){

		//p2.background(32);

		if(weather) {
			//var temp = weather.main.temp;
			var hum = weather.main.humidity;

			//gradient background layer
			p2.noStroke();
			p2.fill(236,236,236,3);
	  		p2.rect(0,0, p2.width, p2.height);

	  		var textcontent = hum +'%';
			p2.textSize(30);
			p2.fill(32);
			p2.text('Humidity',p2.width/3,300)
			p2.text(textcontent,p2.width/3,350);
	 		
	 		//rain drops
	  		var i = 0;

	 		while (i < many) {
	 
	    		p2.fill(100 + hum*10, 150, 255 - hum*10, 80*speed[i]);
	    		p2.ellipse(x[i], y[i],speed[i],speed[i]);

	    		y[i] += speed[i]/2;

	    		if (y[i] > p2.height) {
	      			y[i] = 0;
	    		}
	    	
	    	i += 1;
	  		}
		}
	}
}

var myp5 = new p5(canvas2, 'p2')

