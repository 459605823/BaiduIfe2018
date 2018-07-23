function Player(){
  this.canvas = document.getElementsByTagName("canvas")[0];
  this.cxt = this.canvas.getContext("2d");
  this.r = 20;
  this.x = 50+this.r+Math.round(Math.random()*(1400-2*this.r));
  this.y = 50+this.r+Math.round(Math.random()*(500-2*this.r));
  this.vNum = Math.floor(Math.random()*100+1);
  this.vMax = 3 + (this.vNum - 1)*(9/98);
}
Player.prototype.render = function(){
  this.cxt.save();
  this.cxt.fillStyle = "black";
  this.cxt.beginPath();
  this.cxt.arc(this.x,this.y,this.r,0,2*Math.PI);
  this.cxt.fill();
  this.cxt.restore();
}
