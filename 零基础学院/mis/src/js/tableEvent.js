export {tableEvent};
import {line} from "./line.js";
import {bar} from "./bar.js";
import {renderMultipleLines} from "./renderMultipleLines.js";

function tableEvent(table){
  var trs = table.getElementsByTagName("tr");
  for(let i=0,len=trs.length;i<len;i++){
    trs[i].addEventListener("mouseover",function(){
      var newData = [];
      var tds = trs[i].children;
      //获取当前行中所有单元格为数字的值
      for(let j=0;j<tds.length;j++){
        if(! isNaN(tds[j].innerHTML)){
          //将字符串转化为数字
          newData.push(parseInt(tds[j].innerHTML));
        }
      }
      // console.log(newData);
      //重新设置图标对象的data属性
      line.setData(newData);
      bar.setData(newData);
    })
    trs[i].addEventListener("mouseout",function(){
      //当鼠标离开后重新渲染多条折线图
      renderMultipleLines()
    })
  }
}
