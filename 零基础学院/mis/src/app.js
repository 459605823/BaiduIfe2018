import {renderNewTable} from "./js/render.js";
import {generateCheckbox} from "./js/checkbox.js";
import {selectedValue,getData} from "./js/getData.js";

var tableWrapper = document.getElementById("table-wrapper");
var regionCheckboxWrapper = document.getElementById("region-checkbox-wrapper");
var productCheckboxWrapper = document.getElementById("product-checkbox-wrapper");

window.onload = function(){
  var checkboxs = document.querySelectorAll("input[type=checkbox]");
  for(let i=0,len=checkboxs.length;i<len;i++){
    checkboxs[i].checked = true;
  }
  var regionArr = selectedValue(regionCheckboxWrapper);
  var productArr = selectedValue(productCheckboxWrapper);
  tableWrapper.innerHTML=renderNewTable(regionArr,productArr,getData(regionArr,productArr));
  // renderTable(regionArr,productArr,getData(regionArr,productArr));
  generateCheckbox(regionCheckboxWrapper);
  generateCheckbox(productCheckboxWrapper);
}

// function renderTable(regionArr,productArr,data){
//   let headerArray1 = ["商品","地区"];
//   let headerArray2 = ["地区","商品"];
//   let saleArray = ["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];
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
//       tbody.rows[i+1].cells[0].rowSpan = regionArr.length;
//       tbody.rows[i+1].cells[0].appendChild(document.createTextNode(data[i].product));
//       tbody.rows[i+1].insertCell(1);
//       tbody.rows[i+1].cells[1].appendChild(document.createTextNode(data[i].region));
//     }else if(productArr.length>regionArr.length&&regionArr.length==1){
//       tbody.rows[i+1].cells[0].rowSpan = productArr.length;
//       tbody.rows[i+1].cells[0].appendChild(document.createTextNode(data[i].region));
//       tbody.rows[i+1].insertCell(1);
//       tbody.rows[i+1].cells[1].appendChild(document.createTextNode(data[i].product));
//     }else if(productArr.length>1&&regionArr.length>1){
//       tbody.rows[i+1].cells[0].rowSpan = regionArr.length;
//       tbody.rows[i+1].cells[0].appendChild(document.createTextNode(data[i].product));
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
