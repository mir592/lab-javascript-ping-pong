function Board() {
  this._initBoard();
}

Board.prototype._initBoard = function(){
  this.left = $('#board').position().left;
  this.top = $('#board').position().top;
  this.rigth = this.left + $('#board').width();
  this.bottom =  this.top + $('#board').height();
};
