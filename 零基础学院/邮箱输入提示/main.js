const postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var emailSugWrapper = document.getElementById("email-sug-wrapper");
var emailInput = document.getElementById("email-input");
var selectedIndex = 0;//默认选中第一个提示的邮箱地址

emailInput.oninput = function(e){
  if(((e.which || e.keyCode) !== 13) && ((e.which || e.keyCode) !== 38) && ((e.which || e.keyCode) !== 40)) {
      resetSelectedIndex();
  }
  addInfo();
  displayControl();
}

emailInput.onkeydown = function(e){
  var lists = emailSugWrapper.getElementsByTagName("li");
  switch(e.which || e.keyCode){
    //上键
    case 38:{
      e.preventDefault();
      lists[selectedIndex].className = "";
      selectedIndex = selectedIndex === 0 ? lists.length-1 : selectedIndex-1;
      lists[selectedIndex].className = "selected";
      break;
    }
    //下键
    case 40:{
      e.preventDefault();
      lists[selectedIndex].className = "";
      selectedIndex = selectedIndex === lists.length-1 ? 0 : selectedIndex+1;
      lists[selectedIndex].className = "selected";
      break;
    }
    //回车
    case 13:{
      this.value = HtmlUtil.htmlDecode(lists[selectedIndex].innerText);
      hideInfo();
      break;
    }
    //ESC
    case 27: {
      emailInput.select();//对输入框中的内容全选
       break;
    }
  }
}

emailSugWrapper.onclick = function(e){
  if (e.target.tagName.toLowerCase() === 'li') {
       emailInput.value = HtmlUtil.htmlDecode(e.target.innerText);
       hideInfo();
       // 用户点击鼠标，进行提示选择后，焦点依然在输入框中
       emailInput.focus();
   }
}

//点击空白处，隐藏提示
document.addEventListener('click', function (e) {
    if (e.target.className !== 'email-sug') {
        hideInfo();
    }
})

function getValue(){
   return emailInput.value.trim();
}

function produceInfo(){
  let emailList = [];//筛选之后的提示信息
  let defaultEmailList = [];//所有的提示信息
  let inputValue = HtmlUtil.htmlEncode(getValue());
  let matchStr,preStr;
  if(inputValue.indexOf("@") !== -1){
     preStr = inputValue.split("@")[0];
     matchStr = inputValue.split("@")[1];
  }
  if(inputValue){
    for(let i=0,len=postfixList.length;i<len;i++){
      if(matchStr){
        if(postfixList[i].indexOf(matchStr) !== -1){
         emailList.push(preStr + "@" + postfixList[i]);
        }
      }else{
        emailList.push((preStr || inputValue) + "@" + postfixList[i]);
      }
      defaultEmailList.push((preStr || inputValue) + '@' + postfixList[i]);
    }
  }
    return emailList.length > 0 ? emailList : defaultEmailList;
}

function addInfo(){
  let list = produceInfo();
  if(list.length > 0){
    emailSugWrapper.innerHTML = '';//每次更新提示列表前清空之前的列表
    for(let i=0,len=list.length;i<len;i++){
      let li = document.createElement("li");
      li.innerHTML = list[i];
      emailSugWrapper.appendChild(li);
    }
    emailSugWrapper.getElementsByTagName('li')[selectedIndex].className = 'selected';
  }
}

function resetSelectedIndex(){
  selectedIndex = 0;
}

function displayControl(){
  let inputValue = getValue();
  if(inputValue === ''){
    hideInfo();
  }else{
    showInfo();
  }
}

function hideInfo(){
  emailSugWrapper.style.display = "none";
}

function showInfo(){
  emailSugWrapper.style.display = "block";
}
