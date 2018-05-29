export {bar};

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
var colors = ["#673ab7","#2196f3","#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33","#FF8800","#FF4444","#CC00CC"];
var bar = new Bar([120,100,140,160,180,185,190,210,230,245,255,270]);

function Bar(data){
  this.data = data;
  this.maxData = data.max();
  this.rate = maxHeight / this.maxData;
  this.columnWidth = 30;
  this.gapWidth = 30;
}
Bar.prototype.setData = function(newData){
  this.data = newData;
  this.maxData = newData.max();
  this.rate = maxHeight / this.maxData;
  this.render();
}
Bar.prototype.render = function(){
  let wrapper = document.getElementById("svg-wrapper");
  wrapper.innerHTML = "";
  //svg要使用document.createElementNS来创建命名空间
  let verticalAxis = document.createElementNS("http://www.w3.org/2000/svg","line");
  let transverseAxis = document.createElementNS("http://www.w3.org/2000/svg","line");
  if(verticalAxis){
    verticalAxis.setAttribute("x1",0);
    verticalAxis.setAttribute("y1",0);
    verticalAxis.setAttribute("x2",0);
    verticalAxis.setAttribute("y2",maxHeight);
    verticalAxis.setAttribute("style","stroke:rgb(99,99,99);stroke-width:5");
    wrapper.appendChild(verticalAxis);
  }
  if(transverseAxis){
    transverseAxis.setAttribute("x1",0);
    transverseAxis.setAttribute("y1",maxHeight);
    transverseAxis.setAttribute("x2",maxWidth);
    transverseAxis.setAttribute("y2",maxHeight);
    transverseAxis.setAttribute("style","stroke:rgb(99,99,99);stroke-width:5");
    wrapper.appendChild(transverseAxis);
  }
  for(let i=0;i<this.data.length;i++){
    let column = document.createElementNS("http://www.w3.org/2000/svg","rect");
    if(column){
      column.setAttribute("width",this.columnWidth);
      column.setAttribute("height",this.data[i]*this.rate);
      column.setAttribute("x",this.gapWidth*(i+1)+this.columnWidth*i);
      column.setAttribute("y",maxHeight-this.data[i]*this.rate);
      column.setAttribute("style","fill:"+colors[i]+";stroke-width:1;stroke:rgb(0,0,0)");
      wrapper.appendChild(column);
    }
  }
}
