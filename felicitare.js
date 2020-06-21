var colors = ["#F88431","#F6BA35","#EDD43A","#89DC28", "#FF3399", " 	#FF0066"]; // you can add your own colors
var col_length = colors.length;
var number_of_circles = 250; // you can change number of circles;
var i = 0;
function create_random_line() {
  $('.main').append('<div class = "circle"></div>');
  if(i<number_of_circles-1)
  {
    setTimeout(function(){ 
      var getRandomPosX = Math.random() * 1330;
      var getRandomPosY = Math.random() * (580 - 70) + 70;
      var getRandomColor = Math.floor(Math.random() * col_length);
      var getRandomScale = Math.random() * (1.8 - 0.5) + 0.5;
      var getRandomOpacity = Math.random() * (1 - 0.3) + 0.3;
      var getRandomZIndex = Math.floor(Math.random() * 10);
      console.log(getRandomZIndex)
      $('.circle').eq(i).css({'left': getRandomPosX,
                          'top': getRandomPosY,
                          'transform': 'scale('+getRandomScale+')',
                          'background': colors[getRandomColor],
                          'opacity': getRandomOpacity,
                          'z-index': getRandomZIndex
                         });
      create_random_line() }, 0.5);
      i++;
    }
  
}

create_random_line();



function text1() {
  let one = document.getElementById('one');
  one.innerHTML = '&#9734; С &#9734;';
}

function text2() {
  let two = document.getElementById('two');
  two.innerHTML = '&#10048; ДНЁМ &#10048;';
}

function text3() {
  let three = document.getElementById('three');
  three.innerHTML = '&#9728; РОЖДЕНИЯ!!! &#9728;';
}

function text4() {
  let four = document.getElementById('four');
  four.innerHTML = '&#10084; &#9786; &#10084; ';
}
setTimeout(text1, 900);

setTimeout(text2, 1100);

setTimeout(text3, 1300);

setTimeout(text4, 1500);


//function del() {
  //let five = document.getElementById('four');
  //five.innerHTML = '111';
//}

//setTimeout(del, 9000);