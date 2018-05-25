let tableWrapper = document.getElementById("table-wrapper");
let regionCheckboxWrapper = document.getElementById("region-checkbox-wrapper");
let productCheckboxWrapper = document.getElementById("product-checkbox-wrapper");
let headerArray = ["商品","地区","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"];




// function renderNewTable(data){
//   tableWrapper.innerHTML = "";
//   var table = document.createElement("table");
//   table.border = 1;
//   var tbody = document.createElement("tbody");
//   table.appendChild(tbody);
//   tbody.insertRow(0);
//   //输出表头
//   for(let i=0;i<14;i++){
//     tbody.rows[0].insertCell(i);
//     tbody.rows[0].cells[i].appendChild(document.createTextNode(headerArray[i]));
//   }
//   //遍历数据
//   for(let i=0,len=data.length;i<len;i++){
//     tbody.insertRow(i+1);
//     tbody.rows[i+1].insertCell(0);
//     tbody.rows[i+1].cells[0].appendChild(document.createTextNode(data[i].product));
//     tbody.rows[i+1].insertCell(1);
//     tbody.rows[i+1].cells[1].appendChild(document.createTextNode(data[i].region));
//     for(let j=0;j<12;j++){
//       tbody.rows[i+1].insertCell(j+2);
//       tbody.rows[i+1].cells[j+2].appendChild(document.createTextNode(data[i].sale[j]));
//     }
//   }
//   tableWrapper.appendChild(table);
//  }
