export {selectedValue,getData};
import {fetch,save} from "./localStorage.js";
import {sourceData} from "./ife31data.js";

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
 let localData = fetch();
 let data = [];
 for(let i=0,len=sourceData.length;i<len;i++){
   //当localStorage中存有数据时使用localStorage中的数据
   if(localData != null) {
 			if(regionArr.indexOf(localData[i]['region'])!=-1&&productArr.indexOf(localData[i]['product'])!= -1&&localData[i]['sale'][0]!= null) {
 				data.push(localData[i]);
 			}else if(regionArr.indexOf(sourceData[i]['region'])!=-1&&productArr.indexOf(sourceData[i]['product'])!= -1&&localData[i]['sale'][0]== null) {
 				data.push(sourceData[i]);
 			}
 		}
    //否则使用原始数据
    else {
 			if(regionArr.indexOf(sourceData[i]['region'])!=-1&&productArr.indexOf(sourceData[i]['product'])!= -1) {
 				data.push(sourceData[i]);
 			}
 		}
}
return data;
}

