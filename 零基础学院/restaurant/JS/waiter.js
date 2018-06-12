var waiterWords = document.getElementById("waiter-words");
function Waiter(id,name,wage){
  var instance = null;
  this.waiterPos = null;//服务员位置:0在顾客旁边,1在厨师旁边
  Employee.call(this,id,name,wage);
  this.ask = function(){
    this.waiterPos = 0;
    updateWaiterPos(this.waiterPos);
    waiterWords.innerHTML = "请问您要吃些什么?";
    console.log("请问您要吃些什么?");
  }
   // 完成一次工作：如果参数是个数组，则记录客人点菜，如果参数不是数组则是上菜行为
  this.doAWork = function(foods){
    if(foods instanceof Array){
       this.waiterPos = 0;
       waiter.callCook(foods);
       updateWaiterPos(this.waiterPos);
     }
     else{
       waiter.pickUp(foods);
       customer.eat(foods);
       if(customer.dishNum > 0){
         setTimeout(function(){
           waiter.waitToTakeFood();
         },500);
       }
     }
   }
  this.callCook = function(foods){
    waiterWords.innerHTML = "这是客人点的菜";
    this.waiterPos = 1;
    updateWaiterPos(this.waiterPos);
    cook.doAWork(foods);
  }
  this.waitToTakeFood = function(){
    waiterWords.innerHTML = "";
    this.waiterPos = 1;
    updateWaiterPos(this.waiterPos);
  }
  this.pickUp = function(orderFood){
    this.waiterPos = 0;
    updateWaiterPos(this.waiterPos);
    waiterWords.innerHTML = "这是您的"+orderFood+",请慢用。";
    console.log("这是您的"+orderFood+",请慢用。");
  }
  instance = this;
  Waiter = function(){
    return instance;
  }
}
function updateWaiterPos(pos){
  var waiter = document.getElementById("waiter");
  if(pos === 1){//厨师
     waiter.style.marginLeft = "500px";
  }
  if(pos === 0){//顾客
     waiter.style.marginLeft = "20px"
  }
}
Waiter.prototype = new Employee();
