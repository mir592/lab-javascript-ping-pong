var board = new Board();
var paddle = new Paddle('#paddle1');

$(document).keydown(function() {

  if (event.keyCode === 38) {
    paddle.up();


    
  } else if (event.keyCode === 40) {
    paddle.down();
  }
});
