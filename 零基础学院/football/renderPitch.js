function Pitch(){
  this.container = document.getElementById("container");
  this.canvas = document.createElement("canvas");
  this.canvas.width = this.container.offsetWidth;
  this.canvas.height = this.container.offsetHeight;
  this.container.appendChild(this.canvas);
  this.cxt = this.canvas.getContext("2d");
}
Pitch.prototype.render = function(){
  this.cxt.clearRect(0,0,this.canvas.width,this.canvas.height);
  this.cxt.beginPath();
  this.cxt.rect(0,0,this.canvas.width,this.canvas.height);
  this.cxt.fillStyle = "green";
  this.cxt.fill();
  this.cxt.beginPath();
  this.cxt.strokeStyle = "white";
  this.cxt.lineWidth = 2;
  this.cxt.moveTo(50,50);
  this.cxt.lineTo(50,this.canvas.height-50);
  this.cxt.lineTo(this.canvas.width-50,this.canvas.height-50);
  this.cxt.lineTo(this.canvas.width-50,50);
  this.cxt.closePath();
  this.cxt.stroke();
  this.cxt.beginPath();
  this.cxt.moveTo((this.canvas.width-100)/2+50,50);
  this.cxt.lineTo((this.canvas.width-100)/2+50,this.canvas.height-50);
  this.cxt.stroke();
  this.cxt.beginPath();
  this.cxt.arc(this.canvas.width/2,this.canvas.height/2,80,0,2*Math.PI);
  this.cxt.stroke();
  this.cxt.beginPath();
  this.cxt.moveTo(50,150);
  this.cxt.lineTo(200,150);
  this.cxt.lineTo(200,450);
  this.cxt.lineTo(50,450);
  this.cxt.stroke();
  this.cxt.beginPath();
  this.cxt.moveTo(1450,150);
  this.cxt.lineTo(1300,150);
  this.cxt.lineTo(1300,450);
  this.cxt.lineTo(1450,450);
  this.cxt.stroke();
  this.cxt.beginPath();
  this.cxt.moveTo(50,220);
  this.cxt.lineTo(100,220);
  this.cxt.lineTo(100,380);
  this.cxt.lineTo(50,380);
  this.cxt.stroke();
  this.cxt.beginPath();
  this.cxt.moveTo(1450,220);
  this.cxt.lineTo(1400,220);
  this.cxt.lineTo(1400,380);
  this.cxt.lineTo(1450,380);
  this.cxt.stroke();
  this.cxt.beginPath();
  this.cxt.moveTo(50,280);
  this.cxt.lineTo(30,280);
  this.cxt.lineTo(30,320);
  this.cxt.lineTo(50,320);
  this.cxt.stroke();
  this.cxt.beginPath();
  this.cxt.moveTo(1450,280);
  this.cxt.lineTo(1470,280);
  this.cxt.lineTo(1470,320);
  this.cxt.lineTo(1450,320);
  this.cxt.stroke();
}
