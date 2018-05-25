let regionSelect = document.getElementById("region-select");
let productSelect = document.getElementById("product-select");
let tableWrapper = document.getElementById("table-wrapper");
let regionCheckboxWrapper = document.getElementById("region-checkbox-wrapper");
let productCheckboxWrapper = document.getElementById("product-checkbox-wrapper");
let headerArray = ["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];

// regionSelect.onchange = function(){
//   renderNewTable(getData())
// }
// productSelect.onchange = function(){
//   renderNewTable(getData())
// }

generateCheckbox(regionCheckboxWrapper);

function generateCheckbox(wrapper){
  wrapper.onclick = function(ev){
   var ev = ev || window.event;
   //target就可以表示为当前的事件操作的dom,
   //标准浏览器用ev.target，IE浏览器用event.srcElement
　 var target = ev.target || ev.srcElement;
   // 用tagName来获取具体是什么标签名，
   // 这个返回的是一个大写的，我们需要转成小写再做比较
   if(target.tagName.toLowerCase() === "input"){
     if(target.id === "selectAll"){
       if(!this.checked){
         this.checked = true;
         var checkboxs = wrapper.getElementsByTagName("input");
         for(let i=0,len=checkboxs.length;i<len;i++){
           checkboxs[i].checked = true;
         }
       }else{
         return false;
       }
     }else{
       if(this.checked && wrapper.querySelectorAll("input[type=checkbox]:checked").length === 1){
         return false;
       }
     }
   }
  }
}

function getData(){
  let region = regionSelect.value;
  let product = productSelect.value;
  let data = [];
  for(let i=0,len=sourceData.length;i<len;i++){
    if(sourceData[i].region === region && sourceData[i].product === product){
      data.push(sourceData[i]);
    }
 }
 return data;
}

function renderNewTable(data){
  tableWrapper.innerHTML = "";
  var table = document.createElement("table");
  table.border = 1;
  var tbody = document.createElement("tbody");
  table.appendChild(tbody);
  tbody.insertRow(0);
  //输出表头
  for(let i=0;i<14;i++){
    tbody.rows[0].insertCell(i);
    tbody.rows[0].cells[i].appendChild(document.createTextNode(headerArray[i]));
  }
  //遍历数据
  for(let i=0,len=data.length;i<len;i++){
    tbody.insertRow(i+1);
    tbody.rows[i+1].insertCell(0);
    tbody.rows[i+1].cells[0].appendChild(document.createTextNode(data[i].product));
    tbody.rows[i+1].insertCell(1);
    tbody.rows[i+1].cells[1].appendChild(document.createTextNode(data[i].region));
    for(let j=0;j<12;j++){
      tbody.rows[i+1].insertCell(j+2);
      tbody.rows[i+1].cells[j+2].appendChild(document.createTextNode(data[i].sale[j]));
    }
  }
  tableWrapper.appendChild(table);
 }
