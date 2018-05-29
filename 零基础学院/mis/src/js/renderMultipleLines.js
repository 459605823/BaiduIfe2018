export {renderMultipleLines};
import {selectedValue,getData} from "./getData.js";
import {Line} from "./line.js";

function renderMultipleLines(){
  var regionCheckboxWrapper = document.getElementById("region-checkbox-wrapper");
  var productCheckboxWrapper = document.getElementById("product-checkbox-wrapper");
  var regionArr = selectedValue(regionCheckboxWrapper);
  var productArr = selectedValue(productCheckboxWrapper);
  var data = getData(regionArr,productArr);
  var strokeColors = ["#673ab7","#2196f3","#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33"];
  var sumData = [];
  for(let i=0,len=data.length;i<len;i++){
    //将所有数据汇总到一个数组中
    sumData = sumData.concat(data[i].sale);
  }
  //获得所有数据的最大值
  var maxData = sumData.max();
  var rate = 400 / maxData;
  var lines = new Line();
  //console.log(data);
  //遍历当前表单选中的数据,绘出多条折线
  for(let j=0,len=data.length;j<len;j++){
    lines.renderMany(data[j].sale,strokeColors[j],rate);
  }
}

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
