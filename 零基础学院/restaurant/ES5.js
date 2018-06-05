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

function Employee(id,name,wage){
  this.id = id;
  this.name = name;
  this.wage = wage;
  this.doAWork = function(){
    console.log("完成一次工作");
  }
}

Employee.prototype.work = function(arg){
  this.doAWork(arg);
}

function Waiter(id,name,wage){
  Employee.call(this,id,name,wage);
  this.doAWork = function(something){
      if(something instanceof Array){
        console.log(something);
        return something;
      }else{
        console.log("上菜");
      }
  }
}

Waiter.prototype = new Employee();

function Cook(id,name,wage){
 Employee.call(this,id,name,wage);
 this.doAWork = function(orderList){
   for(let i=0,len=orderList.length;i<len;i++){
     console.log("烹饪菜品"+orderList[i]);
   }
 }
}

Cook.prototype = new Employee();

function Customer(){
  Customer.prototype.order = function(orderList){
    console.log(orderList);
    return orderList;
  }
  Customer.prototype.eat = function(){
    console.log("吃饭");
  }
}

function Food(name,cost,price){
  this.name = name;
  this.cost = cost;
  this.price = price;
}
