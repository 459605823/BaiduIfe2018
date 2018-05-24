const postfixList = ['163.com', 'gmail.com', '126.com', 'qq.com', '263.net'];
var emailSugWrapper = document.getElementById("email-sug-wrapper");
var emailInput = document.getElementById("email-input");

emailInput.onkeyup = function(){
  var inputValue = getValue(emailInput.value);
  // console.log(inputValue);
  produceInfo(inputValue);
  // addInfo();
  displayControl(inputValue);
}

function getValue(value){
   return value.trim();
}

function produceInfo(inputValue){
  var lists = document.getElementsByTagName("li");
  var matchStr = "";
  if(inputValue.indexOf("@") !== -1){
     inputValue = inputValue.split("@")[0];
     matchStr = inputValue.split("@")[1];
  }
  for(var i=0,len=postfixList.length;i<len;i++){
    if(postfixList[i].indexOf(matchStr) === -1){
      lists[i].innerHTML = "";
    }else{
      lists[i].innerHTML = inputValue + "@" + postfixList[i];
    }
  }
}

// function addInfo(){
//   emailSugWrapper.appendChild(produceInfo());
// }

function displayControl(value){
  if(value === ''){
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
