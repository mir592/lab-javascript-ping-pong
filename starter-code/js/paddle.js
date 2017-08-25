function Paddle(identificator) {
  this.identificator = identificator;
  this._initPosition();
}

Paddle.prototype._initPosition = function(){
  this.posY = $(this.identificator).position().top;
  this.posX = $(this.identificator).position().left;
};

Paddle.prototype._render = function(){
  $(this.identificator).css('top', this.posY);
};

Paddle.prototype.up = function () {
  this.posY -= 10;
  this._render();
};

Paddle.prototype.down = function () {
  this.posY += 10;
  this._render();
};
