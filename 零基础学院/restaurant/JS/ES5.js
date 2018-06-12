function Restaurant(cash,seats,staff){
  this.cash = cash;
  this.seats = seats;
  this.staff = staff;
}
Restaurant.prototype = {
  hire:function(employee){
    this.staff.push(employee);
  },
  fire:function(employee){
    this.staff.pop(employee);
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

function Food(name,price,time){
  this.name = name;
  this.price = price;
  this.time = time;
}
