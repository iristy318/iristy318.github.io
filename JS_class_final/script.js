console.log('js is linked')

//get ins photos
var userFeed = new Instafeed({
    get: 'user',
    userId: '3230427500',
    clientId: 'dc503a86890d40018a14baca353e9e82',
    accessToken: '503798599.dc503a8.82a11c66b1e6481fa97cbae5e40b12a4',
    resolution: 'standard_resolution',
    template: '<a href="{{link}}" target="_blank" id="{{id}}"><img src="{{image}}" /><tags="{{model.tags}}"></a>',
    sortBy: 'most-recent',
    limit:20 ,
    //links: false
  });
  userFeed.run();


var result = []
//get URLs
var array = [];
setTimeout(function(){
	$('#instafeed img').each(function(){
	array.push($(this).attr('src'));
	})

console.log('URLs: ' + array);



for (var i = 0; i < 5; i++){

var maincolor = [];
var img = new Image;

canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
src = array[i];
console.log('src: '+ src);
img.crossOrigin = "Anonymous";
var colors = [];
if(i = 1)
{
	var img2 = new Image;
	img2.crossOrigin = "Anonymous";
	img2.src = src;
	console.log('img2.src: '+img2.src);
}
img.src = src;
console.log('img.src: '+img.src);

var test = 1234
console.log('lalalal')

img.addEventListener('load', function() {

	// 	var vi = new Vibrant(img);
	// var swa = vi.swatches();
	// console.log(swa.getRgb())
		var colors = []
    	var vibrant = new Vibrant(img);
    	var swatches = vibrant.swatches()
    	var color;
    	console.log('done '+ test);
    	for (var swatch in swatches){
        //if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
        	color = swatches[swatch].getRgb()
        	colors.push(color);
        	result.push(colors);
        	//console.log('color: '+ color);
        	console.log('last step ' + i)
        	console.log('colors: ' + colors);
    	}
    	
    
	console.log('main: ' + maincolor);


});

}







}, 3000)









//https://api.instagram.com/oauth/authorize/?client_id=dc503a86890d40018a14baca353e9e82&redirect_uri=http://localhost:3000&response_type=code&scope=likes+public_content

//access token: 503798599.dc503a8.82a11c66b1e6481fa97cbae5e40b12a4
//user id: 503798599