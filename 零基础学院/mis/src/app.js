import {renderNewTable} from "./js/render.js";
import {generateCheckbox} from "./js/checkbox.js";
import {line} from "./js/line.js";
import {bar} from "./js/bar.js";
import {tableEvent} from "./js/tableEvent.js";
import {renderMultipleLines} from "./js/renderMultipleLines.js";
import {selectedValue,getData} from "./js/getData.js";
import {fetch,save} from "./js/localStorage.js";
import "./styles/main.css";

var tableWrapper = document.getElementById("table-wrapper");
var regionCheckboxWrapper = document.getElementById("region-checkbox-wrapper");
var productCheckboxWrapper = document.getElementById("product-checkbox-wrapper");

window.onload = function(){
  var checkboxs = document.querySelectorAll("input[type=checkbox]");
  //初始默认将表单全选
  for(let i=0,len=checkboxs.length;i<len;i++){
    checkboxs[i].checked = true;
  }
  //显示所有数据
  var regionArr = selectedValue(regionCheckboxWrapper);
  var productArr = selectedValue(productCheckboxWrapper);
  tableWrapper.innerHTML=renderNewTable(regionArr,productArr,getData(regionArr,productArr));
  // renderTable(regionArr,productArr,getData(regionArr,productArr));
  var saveBtn = document.getElementById("saveData");
  saveBtn.addEventListener("click",function(){
    var checkboxlist = {
      region:["华东","华南","华北"],
      product:	["手机","笔记本","智能音箱"]
    };
   var trs = document.getElementsByTagName("tr");
   //获取localStorage中存储的数据
   var localData = fetch();
   //当此时还没有数据时,初始化数据格式
   if(localData == null || localData[0]['product'] != "手机"){
     var localData = new Array();
     let k = 0;
     for(let i=0;i<checkboxlist.product.length;i++) {
       for(let j=0;j<checkboxlist.region.length;j++) {
         localData[k] = new Object();
         localData[k]['product'] = checkboxlist['product'][i];
         localData[k]['region'] = checkboxlist['region'][j];
         localData[k]['sale'] = new Array();
         k++;
       }
     }
   }
   //i从1开始，只遍历数据行
     for(let i = 1 ; i< trs.length ;i ++) {
     var tds = trs[i].getElementsByTagName('td');
     //获取每一行的自定义信息
     var infos = trs[i].getAttribute("info").split(",");
      for(let j=0,len=localData.length;j<len;j++){
        if(localData[j]["product"] == infos[0] && localData[j]["region"] == infos[1]){
          localData[j]['sale']=new Array();
          for(let k=0;k<tds.length;k++) {
            if(! isNaN(tds[k].innerHTML)){
              localData[j]["sale"].push(parseInt(tds[k].innerHTML));
            }
           }
         }
       }
     }
     save(localData);
     tableWrapper.innerHTML=renderNewTable(regionArr,productArr,getData(regionArr,productArr));
     tableEvent(tableWrapper);
     renderMultipleLines();
     bar.setData(fetch()[0].sale);
  })

  tableEvent(tableWrapper);
  generateCheckbox(regionCheckboxWrapper);
  generateCheckbox(productCheckboxWrapper);
  bar.render();
  renderMultipleLines();
}

// function renderTable(regionArr,productArr,data){
//   let headerArray1 = ["商品","地区"];
//   let headerArray2 = ["地区","商品"];
//   let saleArray = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
//   let rowspanOff = false;
//   tableWrapper.innerHTML = "";
//   var table = document.createElement("table");
//   table.border = 1;
//   var tbody = document.createElement("tbody");
//   table.appendChild(tbody);
//   tbody.insertRow(0);
//   //输出表头
//   for(let i=0;i<2;i++){
//     tbody.rows[0].insertCell(i);
//     if(productArr.length==1&&regionArr.length>productArr.length){
//       tbody.rows[0].cells[i].appendChild(document.createTextNode(headerArray1[i]));
//     }else if(regionArr.length==1&&productArr.length>regionArr.length){
//       tbody.rows[0].cells[i].appendChild(document.createTextNode(headerArray2[i]));
//     }else if(regionArr.length>1&&productArr.length>1){
//       tbody.rows[0].cells[i].appendChild(document.createTextNode(headerArray1[i]));
//     }else{
//       tbody.rows[0].cells[i].appendChild(document.createTextNode(headerArray1[i]));
//     }
//   }
//   for(let i=0,len=saleArray.length;i<len;i++){
//     tbody.rows[0].insertCell(i+2);
//     tbody.rows[0].cells[i+2].appendChild(document.createTextNode(saleArray[i]));
//   }
//   //遍历数据
//   for(let i=0,len=data.length;i<len;i++){
//     tbody.insertRow(i+1);
//     tbody.rows[i+1].insertCell(0);
//     if(productArr.length<regionArr.length&&productArr.length==1){
//       if(!rowspanOff){
//         tbody.rows[i+1].cells[0].rowSpan = regionArr.length;
//         tbody.rows[i+1].cells[0].appendChild(document.createTextNode(data[i].product));
//         rowspanOff = true;
//       }
//       tbody.rows[i+1].insertCell(1);
//       tbody.rows[i+1].cells[1].appendChild(document.createTextNode(data[i].region));
//     }else if(productArr.length>regionArr.length&&regionArr.length==1){
//       if(!rowspanOff){
//         tbody.rows[i+1].cells[0].rowSpan = productArr.length;
//         tbody.rows[i+1].cells[0].appendChild(document.createTextNode(data[i].region));
//         rowspanOff = true;
//       }
//       tbody.rows[i+1].insertCell(1);
//       tbody.rows[i+1].cells[1].appendChild(document.createTextNode(data[i].product));
//     }else if(productArr.length>1&&regionArr.length>1){
//       if(i%regionArr.length==0){
//         rowspanOff = false;
//       }
//       if(!rowspanOff){
//         tbody.rows[i+1].cells[0].rowSpan = regionArr.length;
//         tbody.rows[i+1].cells[0].appendChild(document.createTextNode(data[i].product));
//         rowspanOff = false;
//       }
//       tbody.rows[i+1].insertCell(1);
//       tbody.rows[i+1].cells[1].appendChild(document.createTextNode(data[i].region));
//     }else{
//       tbody.rows[i+1].cells[0].rowSpan = 1;
//       tbody.rows[i+1].cells[0].appendChild(document.createTextNode(data[i].product));
//       tbody.rows[i+1].insertCell(1);
//       tbody.rows[i+1].cells[1].appendChild(document.createTextNode(data[i].region));
//     }
//     for(let j=0;j<12;j++){
//       tbody.rows[i+1].insertCell(j+2);
//       tbody.rows[i+1].cells[j+2].appendChild(document.createTextNode(data[i].sale[j]));
//     }
//   }
//   tableWrapper.appendChild(table);
//  }
