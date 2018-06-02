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
  renderByUrl();
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
  window.addEventListener("popstate", renderByUrl, false);
  generateCheckbox(regionCheckboxWrapper);
  generateCheckbox(productCheckboxWrapper);
}

function renderByUrl(){
  //页面第一次加载时显示全部信息
  if(typeof window.location.href.split("?")[1] == "undefined"){
    var checkboxs = document.querySelectorAll("input[type=checkbox]");
    //初始默认将表单全选
    for(let i=0,len=checkboxs.length;i<len;i++){
      checkboxs[i].checked = true;
    }
    //显示所有数据
    var regionArr = selectedValue(regionCheckboxWrapper);
    var productArr = selectedValue(productCheckboxWrapper);
    tableWrapper.innerHTML=renderNewTable(regionArr,productArr,getData(regionArr,productArr));
    tableEvent(tableWrapper);
    bar.render();
    renderMultipleLines();
  }else{
    var regionChecks = document.querySelectorAll("input[name=region]");
    var regionSelectAll = regionCheckboxWrapper.querySelector("#selectAll");
    var productChecks = document.querySelectorAll("input[name=product]");
    var productSelectAll = productCheckboxWrapper.querySelector("#selectAll");
    //获取此时url中解码后的信息
    var regionQuery = decodeURIComponent(window.location.href.split("?")[1].split("-")[0]).split(",");
    var productQuery = decodeURIComponent(window.location.href.split("?")[1].split("-")[1]).split(",");
    for(let i=0;i<regionChecks.length;i++){
      if(regionQuery.indexOf(regionChecks[i].value) != -1){
        regionChecks[i].checked = true;
      }else{
        regionChecks[i].checked = false;
      }
    }
    if(regionQuery.length === 3){
      regionSelectAll.checked = true;
    }else{
      regionSelectAll.checked = false;
    }
    for(let i=0;i<productChecks.length;i++){
      if(productQuery.indexOf(productChecks[i].value) != -1){
        productChecks[i].checked = true;
      }else{
        productChecks[i].checked = false;
      }
    }
    if(productQuery.length === 3){
      productSelectAll.checked = true;
    }else{
      productSelectAll.checked = false;
    }
    tableWrapper.innerHTML=renderNewTable(regionQuery,productQuery,getData(regionQuery,productQuery));
    tableEvent(tableWrapper);
    bar.render();
    renderMultipleLines();
  }
}
