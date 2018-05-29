export {line};
export {Line};

Array.prototype.max = function() {
   var max = this[0];
   var len = this.length;
   for (var i = 1; i < len; i++){
   if (this[i] > max) {
     max = this[i];
    }
  }
  return max;
}
var maxHeight = 400, maxWidth = 600;
var line = new Line([120,100,140,160,180,185,190,210,230,245,255,270]);

function Line(data,maxData,rate){
  this.data = data;
  this.maxData = maxData;
  this.rate = rate;
  this.colors = ["#673ab7","#2196f3","#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC00CC"];
  this.canvas = document.getElementById("canvas");
  this.cxt = canvas.getContext("2d");
  this.r = 3;
  this.lineWidth = 5;
  this.dotWidth = 45;
  this.canvas.width = maxWidth;
  this.canvas.height = maxHeight;
}
//设置新的data
Line.prototype.setData = function(newData){
  this.data = newData;
  this.maxData = newData.max();
  this.rate = maxHeight / this.maxData;
  this.render();
}

//渲染单个折线
Line.prototype.render = function(){
  this.cxt.clearRect(0,0,maxWidth,maxHeight);
  this.cxt.save();
  this.cxt.beginPath();
  this.cxt.moveTo(0,0);
  this.cxt.lineTo(0,maxHeight);
  this.cxt.lineTo(maxWidth,maxHeight);
  this.cxt.lineWidth = this.lineWidth;
  this.cxt.strokeStyle = "rgb(99,99,99)";
  this.cxt.stroke();
  this.cxt.restore();
  for(let i=0,len=this.data.length;i<len;i++){
    this.cxt.save();
    this.cxt.beginPath();
    this.cxt.arc(this.dotWidth*(i+1),maxHeight-this.rate*this.data[i]+3,this.r,0,2*Math.PI);
    this.cxt.fillStyle = this.colors[i];
    this.cxt.fill();
    if(i !== 0){
      this.cxt.beginPath();
      this.cxt.moveTo(this.dotWidth*i,maxHeight-this.rate*this.data[i-1]+3);
      this.cxt.lineTo(this.dotWidth*(i+1),maxHeight-this.rate*this.data[i]+3);
      this.cxt.strokeStyle = this.colors[i];
      this.cxt.stroke();
    }
    this.cxt.restore();
  }
}

//渲染多个折线
Line.prototype.renderMany = function(data,strokeColor,rate){
  this.cxt.save();
  this.cxt.beginPath();
  this.cxt.moveTo(0,0);
  this.cxt.lineTo(0,maxHeight);
  this.cxt.lineTo(maxWidth,maxHeight);
  this.cxt.lineWidth = this.lineWidth;
  this.cxt.strokeStyle = "rgb(99,99,99)";
  this.cxt.stroke();
  this.cxt.restore();
  for(let i=0,len=data.length;i<len;i++){
    this.cxt.save();
    this.cxt.beginPath();
    this.cxt.arc(this.dotWidth*(i+1),maxHeight-rate*data[i]+3,this.r,0,2*Math.PI);
    this.cxt.fillStyle = this.colors[i];
    this.cxt.fill();
    if(i !== 0){
      this.cxt.beginPath();
      this.cxt.moveTo(this.dotWidth*i,maxHeight-rate*data[i-1]+3);
      this.cxt.lineTo(this.dotWidth*(i+1),maxHeight-rate*data[i]+3);
      this.cxt.strokeStyle = strokeColor;
      this.cxt.stroke();
    }
    this.cxt.restore();
  }
}
