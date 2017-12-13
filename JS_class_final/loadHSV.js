console.log('load hsv is linked')

setTimeout(function(){

    var newcolor = [];
    var newhsvcolor = [];

    for(var i = 0; i < 100; i = i + 5){
        newcolor.push(colors[i]);
    }

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

    //type hsv in html analysis
    $('#resultHSV').text('The HSV color space of your Instagrm is ' + '('+averageH + ', '+averageS+', '+averageV+ ')');

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
    extraversion = (100 - extraversion*100).toPrecision(4);
    neuroticism = (averageV * 100).toPrecision(4);

    $('#resultP').text('Openness to experience:  ' + openness + '%'+ ' Extraversion: ' + extraversion + '%' + ' Neuroticism: '+ neuroticism + '%');

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
