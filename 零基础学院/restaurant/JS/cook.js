
function Cook(id,name,wage){
 var instance = null;
 //厨师状态:false空闲true正在做饭
 this.cookState = false;
 Employee.call(this,id,name,wage);
 this.doAWork = function(foods){
   this.cookState = true;
     // 做菜时间间隔
     var time1 = 0;
     var time2 = 0;
     for(var i=0;i<foods.length;i++){
       time1 += Number(foods[i].time);
       new Promise(function(resolve,reject){
         var j = i;
         var dish = foods[j];
         setTimeout(function(){
           resolve(dish);
         },time1*1000);
       }).then(function(dish){
         waiter.doAWork(dish.name);
       });

       new Promise(function(resolve,reject){
         var j = i;
         var dish = foods[j];
         setTimeout(function(){
           resolve(dish);
         },time2*1000);
       }).then(function(dish){
         updateCookState(dish.name);
         updateCookLeftTime(dish.time);
       });
       time2 += Number(foods[i].time);
     }
   }
  instance = this;
  Cook = function(){
    return instance;
  }
}

// 更新cook状态
function updateCookState(name){
  var cookState = document.getElementById('cook-status');
  if(name != "空闲")
    cookState.innerHTML = "正在做 " + name;
  else
    cookState.innerHTML = "空闲";
}
// 更新当前所做菜的剩余时间
function updateCookLeftTime(dishtime){
  var time = dishtime*1000;
  var cookLeftTime = document.getElementById('cook-LeftTime');
  cookLeftTime.innerHTML = "还有 " + time/1000 + " 秒钟做完";
  var inter = setInterval(function(){
    if(time > 0){
      time -= 1000;
      cookLeftTime.innerHTML = "还有 " + time/1000 + " 秒钟做完";
    }
    else{
      clearInterval(inter);
    }
  },1000);
}

Cook.prototype = new Employee();
