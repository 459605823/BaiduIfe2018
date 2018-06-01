export {tableEvent};
import {line} from "./line.js";
import {bar} from "./bar.js";
import {fetch,save} from "./localStorage.js";
import {renderMultipleLines} from "./renderMultipleLines.js";

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
      line.setData(newData);
      bar.setData(newData);
    })
    trs[i].addEventListener("mouseout",function(){
      //当鼠标离开后重新渲染多条折线图
      renderMultipleLines();
      bar.setData(fetch()[0].sale);
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
   //点击页面其他位置取消输入如状态
   document.onclick = function(e) {
		var td_input  = table.querySelector('input[value="取消"]');
		if(td_input!=null&&e.target&&e.target.nodeName.toLowerCase()!='input') {
			td_input.click();
		}
	}
   table.onkeydown = function(e) {
		switch(e.keyCode) {
      //ESC
			case 27:
				var input = table.querySelector('input[value="取消"]');
				input.click();
				break;
      //回车
			case 13:
				var input = table.querySelector('input[value="确认"]');
				input.click();
				break;
		}
	}
 }
