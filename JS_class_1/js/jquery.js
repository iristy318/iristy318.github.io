console.log('linked!');

function choice(arr){
  return arr[Math.floor(Math.random()*arr.length)]
}


var bg = ['images/dinosaur.gif','images/1-dinosaur.gif','images/2.gif','images/1.gif','images/3.gif'];
var currentbg = choice(bg);

//$('.images').attr('src',currentbg);


var containers = ['container1','container2','container3'];
var currentcontainer = choice(containers);

//randomly generate a div
var elems = $("div");
if (elems.length) {
  var keep = Math.floor(Math.random() * elems.length);
  for (var i = 0; i < elems.length; ++i) {
    if (i !== keep) {
      $(elems[i]).hide();
    }
  }
}