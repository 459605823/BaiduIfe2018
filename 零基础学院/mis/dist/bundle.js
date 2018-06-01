/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__localStorage_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ife31data_js__ = __webpack_require__(9);




function selectedValue(wrapper){
      var arr=[];
      var checkArr=wrapper.getElementsByTagName("input");
      for(var i=0;i<checkArr.length-1;i++){
          if(checkArr[i].checked==true){
              arr.push(checkArr[i].value);
          }
      }
      return arr;
  }

function getData(regionArr,productArr){
 let localData = __WEBPACK_IMPORTED_MODULE_0__localStorage_js__["a" /* fetch */]();
 let data = [];
 for(let i=0,len=__WEBPACK_IMPORTED_MODULE_1__ife31data_js__["a" /* sourceData */].length;i<len;i++){
   //当localStorage中存有数据时使用localStorage中的数据
   if(localData != null) {
 			if(regionArr.indexOf(localData[i]['region'])!=-1&&productArr.indexOf(localData[i]['product'])!= -1&&localData[i]['sale'][0]!= null) {
 				data.push(localData[i]);
 			}else if(regionArr.indexOf(__WEBPACK_IMPORTED_MODULE_1__ife31data_js__["a" /* sourceData */][i]['region'])!=-1&&productArr.indexOf(__WEBPACK_IMPORTED_MODULE_1__ife31data_js__["a" /* sourceData */][i]['product'])!= -1&&localData[i]['sale'][0]== null) {
 				data.push(__WEBPACK_IMPORTED_MODULE_1__ife31data_js__["a" /* sourceData */][i]);
 			}
 		}
    //否则使用原始数据
    else {
 			if(regionArr.indexOf(__WEBPACK_IMPORTED_MODULE_1__ife31data_js__["a" /* sourceData */][i]['region'])!=-1&&productArr.indexOf(__WEBPACK_IMPORTED_MODULE_1__ife31data_js__["a" /* sourceData */][i]['product'])!= -1) {
 				data.push(__WEBPACK_IMPORTED_MODULE_1__ife31data_js__["a" /* sourceData */][i]);
 			}
 		}
}
return data;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return save; });


const STORAGE_KEY = "sourceData";

function fetch(){
  return JSON.parse(window.localStorage.getItem(STORAGE_KEY));
}

function save(items){
  window.localStorage.setItem(STORAGE_KEY,JSON.stringify(items));
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return line; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Line; });



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
  //保存基本信息
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderMultipleLines; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getData_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__line_js__ = __webpack_require__(2);




function renderMultipleLines(){
  var regionCheckboxWrapper = document.getElementById("region-checkbox-wrapper");
  var productCheckboxWrapper = document.getElementById("product-checkbox-wrapper");
  var regionArr = __WEBPACK_IMPORTED_MODULE_0__getData_js__["b" /* selectedValue */](regionCheckboxWrapper);
  var productArr = __WEBPACK_IMPORTED_MODULE_0__getData_js__["b" /* selectedValue */](productCheckboxWrapper);
  var data = __WEBPACK_IMPORTED_MODULE_0__getData_js__["a" /* getData */](regionArr,productArr);
  var strokeColors = ["#673ab7","#2196f3","#33B5E5","#0099CC","#AA66CC","#9933CC","#99CC00","#669900","#FFBB33"];
  var sumData = [];
  for(let i=0,len=data.length;i<len;i++){
    //将所有数据汇总到一个数组中
    sumData = sumData.concat(data[i].sale);
  }
  //获得所有数据的最大值
  var maxData = sumData.max();
  var rate = 400 / maxData;
  var lines = new __WEBPACK_IMPORTED_MODULE_1__line_js__["a" /* Line */]();
  // console.log(data);
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


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return renderNewTable; });


function renderNewTable(arr1,arr2,data) {
  var temp=``;
  if(data.length==0){
      return;
  }
  temp+=`<table border="1">`;
  temp+=`<tr>`
  if(arr2.length<arr1.length&&arr2.length==1){
      temp+=`<td>商品</td><td>地区</td>`
  }else if(arr2.length>arr1.length&&arr1.length==1){
    temp+=`<td>地区</td><td>商品</td>`
  }else if(arr2.length>1&&arr1.length>1){
    temp+=`<td>商品</td><td>地区</td>`
  }else {
    temp+=`<td>商品</td><td>地区</td>`
  }
    temp+=`
            <td>1月</td>
            <td>2月</td>
            <td>3月</td>
            <td>4月</td>
            <td>5月</td>
            <td>6月</td>
            <td>7月</td>
            <td>8月</td>
            <td>9月</td>
            <td>10月</td>
            <td>11月</td>
            <td>12月</td>
        </tr>
        `
    var rowspanOff=false;
    for(var i=0;i<data.length;i++){
      //为数据行设定保存当前行信息的属性
        temp+=`<tr info="${data[i].product},${data[i].region}">`
        if(arr2.length<arr1.length&&arr2.length==1){
            if(!rowspanOff){
                temp+=`<td rowspan="${arr1.length}">${data[i].product}</td>`
                rowspanOff=true;
            }
            temp+=`<td>${data[i].region}</td>`
        }else if(arr2.length>arr1.length&&arr1.length==1){
            if(!rowspanOff){
                temp+=`<td rowspan="${arr2.length}">${data[i].region}</td>`
                rowspanOff=true;
            }
            temp+=`<td>${data[i].product}</td>`
        }else if(arr2.length>1&&arr1.length>1){
           if(i%arr1.length==0){
            rowspanOff=false;
           }
            if(!rowspanOff){
                temp+=`<td rowspan="${arr1.length}">${data[i].product}</td>`
                rowspanOff=true;
            }
            temp+=`<td>${data[i].region}</td>`
        }else {
            temp+=`<td>${data[i].product}</td>`
            temp+=`<td>${data[i].region}</td>`
        }
        for(var j=0;j<data[i].sale.length;j++){
            temp+=`<td class="edit">${data[i].sale[j]}</td>`
        }
        temp+=`</tr>`
    }
    temp+=`</table>`;
    return temp;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return tableEvent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__line_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bar_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__localStorage_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__renderMultipleLines_js__ = __webpack_require__(3);






function tableEvent(table){
  var trs = table.getElementsByTagName("tr");
  var editTds = table.querySelectorAll(".edit");
  var editFlag = false;
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
      __WEBPACK_IMPORTED_MODULE_0__line_js__["b" /* line */].setData(newData);
      __WEBPACK_IMPORTED_MODULE_1__bar_js__["a" /* bar */].setData(newData);
    })
    trs[i].addEventListener("mouseout",function(){
      //当鼠标离开后重新渲染多条折线图
      __WEBPACK_IMPORTED_MODULE_3__renderMultipleLines_js__["a" /* renderMultipleLines */]();
      __WEBPACK_IMPORTED_MODULE_1__bar_js__["a" /* bar */].setData(__WEBPACK_IMPORTED_MODULE_2__localStorage_js__["a" /* fetch */]()[0].sale);
    })
  }
  for(let j=0,len=editTds.length;j<len;j++){
    editTds[j].onclick = function(e){
      if(!editFlag){
        var text = this.innerText;
        this.setAttribute("class","");
        this.innerHTML = "<input type = 'text' placeholder="+text+" class='editInput'></input><input type = 'button' value = '确认'></input><input type = 'button' value = '取消'></input>"
        var editInput = this.querySelector('input[type=text]');
        editInput.focus();
        editFlag = true;
        e.stopPropagation();
      }
    }
  }
   table.onclick = function(e){
     if(e.target&&e.target.nodeName.toLowerCase()=='input') {
     var td = e.target.parentNode;
     var text = td.querySelector('input[type="text"]');
     switch(e.target.value) {
       case '确认':
         if(text.value == text.placeholder || text.value == '') {
           td.innerText = text.placeholder;
         } else if(text.value != text.placeholder && text.value != '' && !isNaN(text.value)){
           td.innerText = text.value;
         } else {
           alert('不能含有非数字');
           break;
         }
         editFlag = false;
         td.setAttribute('class','edit');
         break;
       case '取消':
         td.innerText = text.placeholder;
         editFlag = false;
         td.setAttribute('class','edit');
         break;
     }
    }
   }
   document.onclick = function(e) {
		var td_input  = table.querySelector('input[value="取消"]');
		if(td_input!=null&&e.target&&e.target.nodeName.toLowerCase()!='input') {
			td_input.click();
		}
	}
   table.onkeydown = function(e) {
		switch(e.keyCode) {
			case 27:
				var input = table.querySelector('input[value="取消"]');
				input.click();
				break;
			case 13:
				var input = table.querySelector('input[value="确认"]');
				input.click();
				break;
		}
	}
 }


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return bar; });


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


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_render_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_checkbox_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_line_js__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__js_bar_js__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__js_tableEvent_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__js_renderMultipleLines_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__js_getData_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__js_localStorage_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_main_css__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__styles_main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__styles_main_css__);










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
  var regionArr = __WEBPACK_IMPORTED_MODULE_6__js_getData_js__["b" /* selectedValue */](regionCheckboxWrapper);
  var productArr = __WEBPACK_IMPORTED_MODULE_6__js_getData_js__["b" /* selectedValue */](productCheckboxWrapper);
  tableWrapper.innerHTML=__WEBPACK_IMPORTED_MODULE_0__js_render_js__["a" /* renderNewTable */](regionArr,productArr,__WEBPACK_IMPORTED_MODULE_6__js_getData_js__["a" /* getData */](regionArr,productArr));
  // renderTable(regionArr,productArr,getData(regionArr,productArr));
  var saveBtn = document.getElementById("saveData");
  saveBtn.addEventListener("click",function(){
    var checkboxlist = {
      region:["华东","华南","华北"],
      product:	["手机","笔记本","智能音箱"]
    };
   var trs = document.getElementsByTagName("tr");
   //获取localStorage中存储的数据
   var localData = __WEBPACK_IMPORTED_MODULE_7__js_localStorage_js__["a" /* fetch */]();
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
     __WEBPACK_IMPORTED_MODULE_7__js_localStorage_js__["b" /* save */](localData);
     tableWrapper.innerHTML=__WEBPACK_IMPORTED_MODULE_0__js_render_js__["a" /* renderNewTable */](regionArr,productArr,__WEBPACK_IMPORTED_MODULE_6__js_getData_js__["a" /* getData */](regionArr,productArr));
     __WEBPACK_IMPORTED_MODULE_4__js_tableEvent_js__["a" /* tableEvent */](tableWrapper);
     __WEBPACK_IMPORTED_MODULE_5__js_renderMultipleLines_js__["a" /* renderMultipleLines */]();
     __WEBPACK_IMPORTED_MODULE_3__js_bar_js__["a" /* bar */].setData(__WEBPACK_IMPORTED_MODULE_7__js_localStorage_js__["a" /* fetch */]()[0].sale);
  })

  __WEBPACK_IMPORTED_MODULE_4__js_tableEvent_js__["a" /* tableEvent */](tableWrapper);
  __WEBPACK_IMPORTED_MODULE_1__js_checkbox_js__["a" /* generateCheckbox */](regionCheckboxWrapper);
  __WEBPACK_IMPORTED_MODULE_1__js_checkbox_js__["a" /* generateCheckbox */](productCheckboxWrapper);
  __WEBPACK_IMPORTED_MODULE_3__js_bar_js__["a" /* bar */].render();
  __WEBPACK_IMPORTED_MODULE_5__js_renderMultipleLines_js__["a" /* renderMultipleLines */]();
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


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateCheckbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_js__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getData_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tableEvent_js__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__renderMultipleLines_js__ = __webpack_require__(3);






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
     var regionArr = __WEBPACK_IMPORTED_MODULE_1__getData_js__["b" /* selectedValue */](regionCheckboxWrapper);
     var productArr = __WEBPACK_IMPORTED_MODULE_1__getData_js__["b" /* selectedValue */](productCheckboxWrapper);
     tableWrapper.innerHTML=__WEBPACK_IMPORTED_MODULE_0__render_js__["a" /* renderNewTable */](regionArr,productArr,__WEBPACK_IMPORTED_MODULE_1__getData_js__["a" /* getData */](regionArr,productArr));
     __WEBPACK_IMPORTED_MODULE_3__renderMultipleLines_js__["a" /* renderMultipleLines */]();
     __WEBPACK_IMPORTED_MODULE_2__tableEvent_js__["a" /* tableEvent */](tableWrapper);
   }
 }


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sourceData; });


let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音箱",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音箱",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音箱",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(11);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(15)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/css-loader/index.js!./main.css", function() {
		var newContent = require("!!../../node_modules/css-loader/index.js!./main.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(12);
exports = module.exports = __webpack_require__(13)(false);
// imports


// module
exports.push([module.i, "#table-wrapper{\r\n  margin-top: 30px;\r\n  width: 1000px;\r\n  height: 600px;\r\n}\r\n#table-wrapper td{\r\n  padding: 10px;\r\n}\r\n#saveData{\r\n  position: absolute;\r\n  left: 1100px;\r\n  top: 500px;\r\n  padding: 10px;\r\n  font-size: 18px;\r\n  border-radius: 3px;\r\n}\r\n#saveData:hover{\r\n  background-color: red;\r\n  color: #fff;\r\n}\r\n.edit:hover {\r\nbackground:\turl(" + escape(__webpack_require__(14)) + ") no-repeat;\r\nbackground-position:\t\t100% 0%;\r\nbackground-size:\t\t\t20px;\r\n}\r\n.editInput{\r\n  width: 40px;\r\n}\r\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 13 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pencil.png";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(16);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);