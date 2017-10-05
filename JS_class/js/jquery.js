function choice(arr){
  return arr[Math.floor(Math.random()*4)]
}

var bg = ['images/1-dinosaur.gif','images/2.gif','images/1.gif','images/3.gif'];
var currentbg = choice(bg);

$('.images').attr('src',currentbg);

console.log('linked!');