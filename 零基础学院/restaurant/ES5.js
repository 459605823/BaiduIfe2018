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

var restaurant = new Restaurant(10,1,[]);

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
  this.doAWork = function(customer,food){
     console.log("请问您要吃些什么?");
     var orderFood = customer.order(food);
     console.log("您点的菜为"+orderFood.name);
     return orderFood;
   }
  this.pickUp = function(){
    console.log("这是您的菜,请慢用。");
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
 this.doAWork = function(orderFood){
    console.log("开始做"+orderFood.name);
    console.log(orderFood.name+"做好了");
    waiter.pickUp();
  }
  instance = this;
  Cook = function(){
    return instance;
  }
}

Cook.prototype = new Employee();

var cook = new Cook(2,"Oleg",2500);

function Customer(){
  Customer.prototype.order = function(food){
    console.log(food.name);
    return food;
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

function Food(name,price){
  this.name = name;
  this.price = price;
}

var foodList = (function(){
  var fList = [];
  var nameList = ['西红柿炒鸡蛋','宫保鸡丁','回锅肉','糖醋里脊','红烧肉'];
  var priceList = [8,15,23,20,28];
  for(let i=0;i<5;i++){
    var f = new Food(nameList[i],priceList[i]);
    fList.push(f);
  }
  return fList;
})()
restaurant.hire(waiter);
restaurant.hire(cook);
console.log(restaurant.staff);
for(var i=0,len=customerList.length;i<len;i++){
  let orderFood = waiter.doAWork(customerList[i],foodList[i]);
  cook.doAWork(orderFood);
  customerList[i].eat(orderFood);
}
