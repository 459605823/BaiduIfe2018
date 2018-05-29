import {renderNewTable} from "./render.js";
import {selectedValue,getData} from "./getData.js";
import {tableEvent} from "./tableEvent.js";
import {renderMultipleLines} from "./renderMultipleLines.js";
export {generateCheckbox};

function generateCheckbox(wrapper){
  var regionCheckboxWrapper = document.getElementById("region-checkbox-wrapper");
  var productCheckboxWrapper = document.getElementById("product-checkbox-wrapper");
  var tableWrapper = document.getElementById("table-wrapper");
  var checkArr = wrapper.getElementsByTagName("input");
  var selectAll = checkArr[checkArr.length-1];
  wrapper.onclick = function(ev){
   var ev = ev || window.event;
   //target就可以表示为当前的事件操作的dom,
   //标准浏览器用ev.target，IE浏览器用event.srcElement
　 var target = ev.target || ev.srcElement;
   //表示当前被选中的checkbox的数量
   var len=0;
   // 用tagName来获取具体是什么标签名，
   // 这个返回的是一个大写的，我们需要转成小写再做比较
   if(target.tagName.toLowerCase() === "input"){
     if(target.id === "selectAll"){
       if(!this.checked){
         var checkboxs = wrapper.getElementsByTagName("input");
         for(let i=0,len=checkboxs.length;i<len;i++){
           checkboxs[i].checked = true;
         }
       }else{
         return false;
       }
     }else{
       for(var i=0;i<checkArr.length-1;i++){
               if(checkArr[i].checked==true){
                   len++;
               }
            }
            //为啥是0
            if(len==0){
                return false;
            }
            if(len==checkArr.length-1){
                selectAll.checked=true;
            }else{
                selectAll.checked=false;
            }
       }
     }
    //表单项点击后,要根据此时的选项重新绘制表格和折线图,并为重新绘制的表格绑定mouseover事件
     var regionArr = selectedValue(regionCheckboxWrapper);
     var productArr = selectedValue(productCheckboxWrapper);
     tableWrapper.innerHTML=renderNewTable(regionArr,productArr,getData(regionArr,productArr));
     renderMultipleLines();
     tableEvent(tableWrapper);
   }
 }
