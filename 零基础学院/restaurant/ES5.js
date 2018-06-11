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

var restaurant = new Restaurant(1000,1,[]);
document.getElementById('cash').innerHTML = restaurant.cash;

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
  this.doAWork = function(orderfood){
     console.log("您点的菜为:");
     for(let i=0;i<orderFood.length;i++){
        console.log(orderFood[i].name);
      }
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

var waiter = new Waiter(1,"Max",2000);

function Cook(id,name,wage){
 var instance = null;
 Employee.call(this,id,name,wage);
 this.startCook = function(food){
     console.log("开始做"+food.name);
 }
 this.cookDone = function(food){
   console.log(food.name+"做好了");
 }
  instance = this;
  Cook = function(){
    return instance;
  }
}

Cook.prototype = new Employee();

var cook = new Cook(2,"Oleg",2500);

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
    return orderFood;
  }
  Customer.prototype.eat = function(food){
        console.log("吃"+food.name);
   }
}

var customerList = (function(){
  var cList = [];
  for(let i=0;i<5;i++){
    var c = new Customer();
    cList.push(c);
  }
  return cList;
})();

function Food(name,price,time){
  this.name = name;
  this.price = price;
  this.time = time;
}

var foodList = (function(){
  var fList = [];
  var nameList = ['西红柿炒鸡蛋','宫保鸡丁','回锅肉','糖醋里脊','红烧肉'];
  var priceList = [8,15,23,20,28];
  var timeList = [5,8,9,9,10];
  for(let i=0;i<5;i++){
    var f = new Food(nameList[i],priceList[i],timeList[i]);
    fList.push(f);
  }
  return fList;
})()

restaurant.hire(waiter);
restaurant.hire(cook);
console.log(restaurant.staff);
// for(var i=0;i<customerList.length;i++){
//   waiter.ask();
//   var orderFood = customerList[i].order();
//   waiter.doAWork(orderFood);
//   for(var j=0;j<orderFood.length;j++){
//     cook.startCook(orderFood[j]);
//     cook.cookDone(orderFood[j]);
//     waiter.pickUp(orderFood[j]);
//     customerList[i].eat(orderFood[j]);
//   }
// }
function getOrderFood(customer){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      var orderFood = customer.order();
      resolve(orderFood);
    },3000);
  })
}
function cookFood(orderFood){
  return new Promise(function(resolve,reject){

  })
}
