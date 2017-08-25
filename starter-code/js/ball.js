function Ball(x,y, paddle1, paddle2) {
  this.posX = x;
  this.posY = y;
  this.dirTop = 'top';
  this.dirLeft = 'left';
  this.pad1 = paddle1;
  this.pad2 = paddle2;
}

Ball.prototype.randomDirection = function() {
};

Ball.prototype.move = function(){
};

Ball.prototype.pointScored = function(){
};

// returns winner paddle or false
Ball.prototype.winner = function(){
};

Ball.prototype.restart = function(){
};
