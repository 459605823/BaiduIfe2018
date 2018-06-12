function Restaurant(cash,seats,staff){
  this.cash = cash;
  this.seats = seats;
  this.staff = staff;
}
Restaurant.prototype = {
  hire:function(employee){
    this.staff.push(employee);
    this.cash++;
  },
  fire:function(employee){
    this.staff.pop(employee);
    this.cash--;
  }
}

var getSingle = function(fn){
  var result;
  return function(){
    return result || (result = fn.apply(this,arguments));
  }
}

function Employee(id,name,wage){
  this.id = id || 1;
  this.name = name || "tony";
  this.wage = wage || 2000;
  this.doAWork = function(){
    console.log("完成一次工作");
  }
}

function Waiter(id,name,wage){
  var instance = null;
  Employee.call(this,id,name,wage);
  this.ask = function(){
    console.log("请问您要吃些什么?");
  }
  this.doAWork = function(foods){
    foods.then(function(foods){
      console.log("您点的菜为:");
      for(let i=0;i<foods.length;i++){
         console.log(foods[i].name);
       }
    })
   }
  this.pickUp = function(orderFood){
    console.log("这是您的"+orderFood.name+",请慢用。");
  }
  instance = this;
  Waiter = function(){
    return instance;
  }
}

Waiter.prototype = new Employee();

function Cook(id,name,wage){
 var instance = null;
 Employee.call(this,id,name,wage);
 this.startCook = function(food){
   food.then(function(food){
     console.log("开始做"+food.name);
   })
 }
 this.cookDone = function(food){
   food.then(function(food){
     console.log(food.name+"做好了");
   })
   return new Promise(resolve=>resolve(food))
 }
  instance = this;
  Cook = function(){
    return instance;
  }
}

Cook.prototype = new Employee();

function Customer(){
   Customer.prototype.order = function(){
    var fNumber = Math.ceil(Math.random()*5);
    var orderFood = [];
    for(let i=0;i<fNumber;i++){
      let j = Math.floor(Math.random()*5);
      let chooseFood = foodList[j];
      if(orderFood.indexOf(chooseFood) === -1){
        orderFood.push(chooseFood);
      }else{
        continue;
      }
    }
    for(let k=0;k<orderFood.length;k++){
      console.log(orderFood[k].name);
    }
    return new Promise((resolve)=>resolve(orderFood));
  }
   Customer.prototype.eat = function(food){
        console.log("吃"+food.name);
        return new Promis((resolve)=>resolve(true));
   }
}
function Food(name,price,time){
  this.name = name;
  this.price = price;
  this.time = time;
}
