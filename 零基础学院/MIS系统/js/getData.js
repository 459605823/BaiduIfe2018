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

function getData(){
 let regionArr = selectedValue(regionCheckboxWrapper);
 let productArr = selectedValue(productCheckboxWrapper);
 let data = [];
 for(let i=0,len=sourceData.length;i<len;i++){
   if(regionArr.length==0){
          if(productArr.indexOf(sourceData[i].product)!=-1){
            data.push(sourceData[i]);
          }
        }else if(productArr.length==0){
          if(regionArr.indexOf(sourceData[i].region)!=-1){
            data.push(sourceData[i]);
          }
        }else{
          if(regionArr.indexOf(sourceData[i].region)!=-1&&productArr.indexOf(sourceData[i].product)!=-1){
            data.push(sourceData[i]);
        }
      }
}
return data;
}
