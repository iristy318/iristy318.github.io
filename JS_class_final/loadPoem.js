console.log('loadPoem is linked')

var audio = new Audio('source/Venus.mp3');
audio.play();

setTimeout(function(){

    var newcolor = [];
    var newhsvcolor = [];

    for(var i = 0; i < 100; i = i + 5){
        newcolor.push(colors[i]);
    }

    console.log('newcolor: '+ newcolor)
    console.log('newcolor length' + newcolor.length);

    //get average HSV
    var averageH = 0;
    var averageS = 0;
    var averageV = 0;

    for(var i = 0; i < 17; i++){
        newhsvcolor.push(rgbToHsv(newcolor[i]));
        averageH += newhsvcolor[i][0];
        averageS += newhsvcolor[i][1];
        averageV += newhsvcolor[i][2]; 
    }

    averageH = (averageH / 19).toPrecision(4);
    averageS = (averageS / 19).toPrecision(4);
    averageV = (averageV / 19).toPrecision(4);

    console.log(newhsvcolor);
    console.log(averageH, averageS, averageV);

    //calculate personality by HSV
    var openness = 0;
    var extraversion = 0;
    var neuroticism = 0;

    openness = (averageS * 100).toPrecision(4);

    if(averageH >= 0.25 && averageH <= 0.5){
      extraversion = 1;
    }
    else if(averageH > 0.5){
      extraversion = averageH - 0.5;
    }
    else if (averageH < 0.25) {
      extraversion = 0.25 - averageH;
    }
    extraversion = (75 - extraversion*100).toPrecision(4);
    neuroticism = (averageV * 100).toPrecision(4);

    //load openness descriptions
    var currentopenness;
	var openness_pos = ['creative.','a puzzle-lover.','always curious.','passionate of challenging yourself.','good at temper control.','politically liberal.','tolerant of diversity.','open to different cultures and lifestyles.','suffering from unstable goals.','impulsive.','good at remembering dreams.','aedventurous.'];
	var openness_neg = ['impatient with puzzles.','afraid of challenging yourself.','not good at temper control.','intolerant of diversity.','cultural conservatism.','ambitious.','having trouble adapting to changes.','sometimes rigid.','cautious of everything.']

	if (openness > 50) {
		currentopenness = openness_pos[Math.floor(Math.random()*openness_pos.length)];
	}else{
		currentopenness = openness_neg[Math.floor(Math.random()*openness_neg.length)];
	}

	$('#line1').text('You are ' + currentopenness);
    
	//load extraversion descriptions
	var currentextraversion;
	var extraversion_pos = ['are energetic.','are full of life.','like seeking novelty and excitement.','are cheerful.','are talkative.','enjoy the center of attention.','are action-oriented.','like to be engaged in whatever you are doing.','are highly adaptable.']
	var extraversion_neg = ['are very self-aware.','are thoughtful.','enjoy understanding details.','are interested in self-knowledge and self-understanding.','tend to keep emotions private.','are quiet and reserved in large groups or around unfamiliar people.','are more sociable and gregarious around people they know well.','can learn well about others through observation.']

	if(extraversion >= 75){
		currentextraversion = extraversion_pos[Math.floor(Math.random()*extraversion_pos.length)];
	}else{
		currentextraversion = extraversion_neg[Math.floor(Math.random()*extraversion_neg.length)];
	}
	
	$('#line3').text('People think you ' + currentextraversion);

	//load neuroticism descriptions
	var currentneuro;
	var neuroticism_pos = ['know your boundaries well','keep good company with others','know how to listen and give advice','cultivate self-awareness','know what you need and what you do not need','do well in stressful situations','recover quickly from pains','prefer sitting in silence',"spend little time on finding all the answers",'have a menu of self-care habits','support your teammates','consider the possibilities','get out of your head'];
	var neuroticism_neg = ['do not know your boundaries well','lack self-awareness','do not do well in stressful situations','stuck in pains','like sitting in busy streets','want to have all the answers','work alone','ignore possibilities','concentrate in what you are doing'];

	if(neuroticism > 50){
		currentneuro = neuroticism_pos[Math.floor(Math.random()*neuroticism_pos.length)];
	}else{
		currentneuro = neuroticism_neg[Math.floor(Math.random()*neuroticism_neg.length)];
	}
	
	$('#line2').text('You always ' + currentneuro + '.');


    function rgbToHsv(rgbcolor) {
        r = rgbcolor[0];
        g = rgbcolor[1];
        b = rgbcolor[2];

      r /= 255, g /= 255, b /= 255;

      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var h, s, v = max;

      var d = max - min;
      s = max == 0 ? 0 : d / max;

      if (max == min) {
        h = 0; // achromatic
      } else {
        switch (max) {
          case r: h = (g - b) / d + (g < b ? 6 : 0); break;
          case g: h = (b - r) / d + 2; break;
          case b: h = (r - g) / d + 4; break;
        }

        h /= 6;
      }

      return [ h, s, v ];
    }


}, 2000);
