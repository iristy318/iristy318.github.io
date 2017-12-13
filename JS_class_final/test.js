console.log('test is linked')

//get ins photos
//iris_ty318
var userFeed = new Instafeed({
    get: 'user',
    userId: '503798599',
    clientId: 'dc503a86890d40018a14baca353e9e82',
    accessToken: '503798599.dc503a8.82a11c66b1e6481fa97cbae5e40b12a4',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}"><img src="{{image}}" likes="{{likes}}" /></a>',
    //sortBy: 'most-recent',
    sortBy: 'random',
    limit:20,
    //links: false
  });
  userFeed.run();

//heyyybella.w
// var userFeed = new Instafeed({
//     get: 'user',
//     userId: '5409249885',
//     clientId: 'ce45e58f5cb145b5afa27b1f755cd526',
//     accessToken: '5409249885.1677ed0.a5e19aa524b347f392060d2167785eb9',
//     resolution: 'standard_resolution',
//     template: '<a href="{{link}}"><img src="{{image}}" likes="{{likes}}" /></a>',
//     sortBy: 'random',
//     //sortBy: 'most-recent',
//     limit:20 ,
//     //links: false
//   });
//   userFeed.run();

//visionvirus
// var userFeed = new Instafeed({
//     get: 'user',
//     userId: '2078661387',
//     clientId: 'd25d17c7616648cead0c6ccd8b4f3dd8',
//     accessToken: '2078661387.1677ed0.f23c08e199f3425a876f64d85f1e8034',
//     resolution: 'standard_resolution',
//     template: '<a href="{{link}}"><img src="{{image}}" likes="{{likes}}" /></a>',
//     sortBy: 'random',
//     limit:20 ,
//     //links: false
//   });
//   userFeed.run();

//yuemei
// var userFeed = new Instafeed({
//     get: 'user',
//     userId: '301758531',
//     clientId: '93dfeeddb5244d7e8e4555c107c97335',
//     accessToken: '301758531.1677ed0.f239353899724327b9463d5111117436',
//     resolution: 'standard_resolution',
//     template: '<a href="{{link}}"><img src="{{image}}" likes="{{likes}}" /></a>',
//     sortBy: 'random',
//     limit:20 ,
//     //links: false
//   });
//   userFeed.run();

//hu yin
// var userFeed = new Instafeed({
//     get: 'user',
//     userId: '2155007841',
//     clientId: '13ac8a2d703846bdb8c861527b151079',
//     accessToken: '2155007841.1677ed0.e9e45adf11134df5b0e713e73c20b73a',
//     resolution: 'standard_resolution',
//     template: '<a href="{{link}}"><img src="{{image}}" likes="{{likes}}" /></a>',
//     sortBy: 'random',
//     limit:20 ,
//     //links: false
//   });
//   userFeed.run();

//haemin
// var userFeed = new Instafeed({
//     get: 'user',
//     userId: '5533042098',
//     clientId: 'f0b526f4443a4f9f95bc58c4efadb30f',
//     accessToken: '5533042098.1677ed0.660bfadfd7b043d19924679b201ca1f9',
//     resolution: 'standard_resolution',
//     template: '<a href="{{link}}"><img src="{{image}}" likes="{{likes}}" /></a>',
//     sortBy: 'random',
//     limit:20 ,
//     //links: false
//   });
//   userFeed.run();

//syb_song
// var userFeed = new Instafeed({
//     get: 'user',
//     userId: '1684353956',
//     clientId: '4f88664f04ee4f75a131fa64c51fb3a9',
//     accessToken: '1684353956.1677ed0.9c5e30abbd834918999cb8d75b822f3e',
//     resolution: 'standard_resolution',
//     template: '<a href="{{link}}"><img src="{{image}}" likes="{{likes}}" /></a>',
//     sortBy: 'random',
//     limit:20 ,
//     //links: false
//   });
//   userFeed.run();

//jingquank
// var userFeed = new Instafeed({
//     get: 'user',
//     userId: '36983468',
//     clientId: 'b067b3dc256b4d8cb250a48df84d38de',
//     accessToken: '36983468.1677ed0.88184b0a2f994b32a31573db5e75142f',
//     resolution: 'standard_resolution',
//     template: '<a href="{{link}}"><img src="{{image}}" likes="{{likes}}" /></a>',
//     sortBy: 'random',
//     limit:20 ,
//     //links: false
//   });
//   userFeed.run();

//Chang liu
// var userFeed = new Instafeed({
//     get: 'user',
//     userId: '1204923020',
//     clientId: '56a62fdcfdf44754b5f694563fd44902',
//     accessToken: '1204923020.1677ed0.63da85456cba459bb8c5c2d2b8f5223b',
//     resolution: 'standard_resolution',
//     template: '<a href="{{link}}"><img src="{{image}}" likes="{{likes}}" /></a>',
//     sortBy: 'random',
//     limit:20 ,
//     //links: false
//   });
//   userFeed.run();


var result = []
//get URLs
var array = [];
var likesArray = [];
var averageLikes = 0;
var colors = []

setTimeout(function(){

    //get all the URLs
	$('#instafeed img').each(function(){
	array.push($(this).attr('src'));
	})
    console.log('URLs: ' + array.length);

    //get all the likes
    $('#instafeed img').each(function(){
    likesArray.push($(this).attr('likes'));
    })
    console.log('likes: ' + likesArray);
    console.log('likes 09: ' + likesArray[9]);

    //get average likes
    for(var i = 0; i < likesArray.length; i++){
        averageLikes += likesArray[i]/20;
    }

    averageLikes = Math.floor(averageLikes);

    console.log('average likes: ' + averageLikes);

var ImgArray = [];

for(var i = 0; i < 20; i++)
{
    var img = new Image;
    canvas = document.createElement("canvas");
    ctx = canvas.getContext("2d");
    src = array[i];
    console.log('src: '+i+' '+ src);
    img.crossOrigin = "Anonymous";
    img.src = src;
    ImgArray.push(img)
    console.log(ImgArray.length)
}

// for(var j = 1; j < 4; j++){
//     ImgArray[j].addEventListener('load', function() {
//             var colors = []
//             var vibrant = new Vibrant(ImgArray[j]);
//             var swatches = vibrant.swatches()
//             var color;
//             console.log('done '+ test);
//             for (var swatch in swatches){
//             //if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
//                 color = swatches[swatch].getRgb()
//                 colors.push(color);
//                 //result.push(colors);
//                 //console.log('color: '+ color);
//                 console.log('last step3 ')
//                 console.log('colors: ' + colors);
//             }
            
        
//         console.log('main: ' + maincolor);
//     });
// }

   // var colors = []

    ImgArray[0].addEventListener('load', function() {
    		
        	var vibrant = new Vibrant(ImgArray[0]);
        	var swatches = vibrant.swatches()
        	var color;
        	console.log('done 0');
        	for (var swatch in swatches){
            	color = swatches[swatch].getRgb();
            	colors.push(color);
            	//console.log('color: '+ color);
            	console.log('colors0: ' + colors);
        	}  	
    });

    ImgArray[1].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[1]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 1');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors1: ' + colors);
            }
    });

    ImgArray[2].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[2]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 2');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors2: ' + colors);
            }
    });

    ImgArray[3].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[3]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 3');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors3: ' + colors);
            }
    });

    ImgArray[4].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[4]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 4');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors4: ' + colors);
            }
    });

    ImgArray[5].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[5]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done ');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors5: ' + colors);
            }
    });

    ImgArray[6].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[6]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 6');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors6: ' + colors);
            }
    });

    ImgArray[7].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[7]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 7');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors7: ' + colors);
            }
    });

    ImgArray[8].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[8]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 8');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors8: ' + colors);
            }
    });

    ImgArray[9].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[9]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 9');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors9: ' + colors);
            }
    });

    ImgArray[10].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[10]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 10');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors 10: ' + colors);
            }
    });

    ImgArray[11].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[11]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 11');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors 11: ' + colors);
            }
    });

    ImgArray[12].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[12]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 12');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors 12: ' + colors);
            }
    });

    ImgArray[13].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[13]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 13');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors 13: ' + colors);
            }
    });

    ImgArray[14].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[14]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 14');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors 14: ' + colors);
            }
    });

    ImgArray[15].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[15]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 15');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors 15: ' + colors);
                //console.log('colors2: '+ colors[2]);
            }
    });

    ImgArray[16].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[16]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 16');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors 16: ' + colors);
            }
    });

    ImgArray[17].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[17]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 17');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors 17: ' + colors);
            }
    });

    ImgArray[18].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[18]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 18');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors 18: ' + colors);
            }
    });

    ImgArray[19].addEventListener('load', function() {
            
            var vibrant = new Vibrant(ImgArray[19]);
            var swatches = vibrant.swatches()
            var color;
            console.log('done 19');
            for (var swatch in swatches){
                color = swatches[swatch].getRgb()
                colors.push(color);
                //console.log('color: '+ color);
                console.log('colors 19: ' + colors);
            }
    });

    //localStorage["colors"] = JSON.stringify(colorslocal);
    //var stored_colors = JSON.parse(localStorage["datas"]);
    //console.log(colors[2]);

    
}, 1000);

function tologin(){
    window.location.href = "login.html";
}

function toindex(){
    window.location.href = "index.html";
}

function tocommunity(){
    window.location.href = "community.html";
    
}

function toanalysis(){
    window.location.href = "analysis.html";
}

function tohome(){
    window.location.href = "homepage.html";
}

function tointro(){
    window.location.href = "intro.html";
}

//var username = document.getElementById('username').value 





//https://api.instagram.com/oauth/authorize/?client_id=dc503a86890d40018a14baca353e9e82&redirect_uri=http://localhost:3000&response_type=code&scope=likes+public_content

//access token: 503798599.dc503a8.82a11c66b1e6481fa97cbae5e40b12a4
//user id: 503798599