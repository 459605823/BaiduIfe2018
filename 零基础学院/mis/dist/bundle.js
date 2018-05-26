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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
        temp+=`<tr>`
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
            temp+=`<td>${data[i].sale[j]}</td>`
        }

        temp+=`</tr>`
    }
    temp+=`</table>`;
    return temp;
}


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return selectedValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return getData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ife31data_js__ = __webpack_require__(4);



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
 let data = [];
 for(let i=0,len=__WEBPACK_IMPORTED_MODULE_0__ife31data_js__["a" /* sourceData */].length;i<len;i++){
   if(regionArr.length==0){
          if(productArr.indexOf(__WEBPACK_IMPORTED_MODULE_0__ife31data_js__["a" /* sourceData */][i].product)!=-1){
            data.push(__WEBPACK_IMPORTED_MODULE_0__ife31data_js__["a" /* sourceData */][i]);
          }
        }else if(productArr.length==0){
          if(regionArr.indexOf(__WEBPACK_IMPORTED_MODULE_0__ife31data_js__["a" /* sourceData */][i].region)!=-1){
            data.push(__WEBPACK_IMPORTED_MODULE_0__ife31data_js__["a" /* sourceData */][i]);
          }
        }else{
          if(regionArr.indexOf(__WEBPACK_IMPORTED_MODULE_0__ife31data_js__["a" /* sourceData */][i].region)!=-1&&productArr.indexOf(__WEBPACK_IMPORTED_MODULE_0__ife31data_js__["a" /* sourceData */][i].product)!=-1){
            data.push(__WEBPACK_IMPORTED_MODULE_0__ife31data_js__["a" /* sourceData */][i]);
        }
      }
}
return data;
}


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_render_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_checkbox_js__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__js_getData_js__ = __webpack_require__(1);




var tableWrapper = document.getElementById("table-wrapper");
var regionCheckboxWrapper = document.getElementById("region-checkbox-wrapper");
var productCheckboxWrapper = document.getElementById("product-checkbox-wrapper");

window.onload = function(){
  var checkboxs = document.querySelectorAll("input[type=checkbox]");
  for(let i=0,len=checkboxs.length;i<len;i++){
    checkboxs[i].checked = true;
  }
  var regionArr = __WEBPACK_IMPORTED_MODULE_2__js_getData_js__["b" /* selectedValue */](regionCheckboxWrapper);
  var productArr = __WEBPACK_IMPORTED_MODULE_2__js_getData_js__["b" /* selectedValue */](productCheckboxWrapper);
  tableWrapper.innerHTML=__WEBPACK_IMPORTED_MODULE_0__js_render_js__["a" /* renderNewTable */](regionArr,productArr,__WEBPACK_IMPORTED_MODULE_2__js_getData_js__["a" /* getData */](regionArr,productArr));
  // renderTable(regionArr,productArr,getData(regionArr,productArr));
  __WEBPACK_IMPORTED_MODULE_1__js_checkbox_js__["a" /* generateCheckbox */](regionCheckboxWrapper);
  __WEBPACK_IMPORTED_MODULE_1__js_checkbox_js__["a" /* generateCheckbox */](productCheckboxWrapper);
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


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return generateCheckbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__render_js__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getData_js__ = __webpack_require__(1);




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
     var regionArr = __WEBPACK_IMPORTED_MODULE_1__getData_js__["b" /* selectedValue */](regionCheckboxWrapper);
     var productArr = __WEBPACK_IMPORTED_MODULE_1__getData_js__["b" /* selectedValue */](productCheckboxWrapper);
     tableWrapper.innerHTML=__WEBPACK_IMPORTED_MODULE_0__render_js__["a" /* renderNewTable */](regionArr,productArr,__WEBPACK_IMPORTED_MODULE_1__getData_js__["a" /* getData */](regionArr,productArr));
   }
 }


/***/ }),
/* 4 */
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


/***/ })
/******/ ]);