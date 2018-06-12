var customerState = document.getElementById("customer-status");
var customerWords = document.getElementById('customer-words');

function Customer(){
   Customer.prototype.order = function(){
     //随机点多种食物
    var fNumber = Math.ceil(Math.random()*5);
    var orderFood = [];
    for(let i=0;i<fNumber;i++){
      let j = Math.floor(Math.random()*5);
      let chooseFood = foodList[j];
      //保证不能重复
      if(orderFood.indexOf(chooseFood) === -1){
        orderFood.push(chooseFood);
      }else{
        continue;
      }
    }
    customer.dishes = orderFood;
    customer.dishNum = orderFood.length;
    var cusWords = "";
    for(let k=0;k<orderFood.length;k++){
      cusWords += orderFood[k].name;
    }
    customerWords.innerHTML = cusWords;
    //点菜完成后告诉服务员
    waiter.doAWork(orderFood);
  }
   Customer.prototype.eat = function(food){
     customer.isFinishEat();
     customerState.innerHTML = "正在吃" + food;
      console.log("吃"+food);
   }
   Customer.prototype.callWaiter = function(){
     waiter.ask();
   }
   //判断是否全部吃完
   Customer.prototype.isFinishEat = function(){
     customer.dishNum--;
     if(customer.dishNum === 0){
       customerState.innerHTML = "顾客全部吃完了";
       customer.pay();
     }
   }
   Customer.prototype.pay = function(){
    var payMoney = 0;
    for(var i=0;i<customer.dishes.length;i++){
     payMoney += customer.dishes[i].price;
   }
    updateMoney(Number(payMoney));
    updateWaiterPos(0);
    setTimeout(function(){
     customerState.innerHTML = "顾客支付了" + payMoney + "元后走人";
     customerWords.innerHTML = "";
  },1000);
  //如果顾客队列中还有顾客,则让下一位顾客入座
  if(customerList.length > 0){
    setTimeout(function(){
      comeACustomer();
    },2000);
  }
 }
}
function comeACustomer(){
  //从顾客列表中获取一个顾客
  customer = customerList[0];
  customerList.shift();
  updateCookState("空闲");
  customer.callWaiter();
  updateCusState();
  //思考3秒后点菜
  new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve();
    },3000);
  }).then(function(){
    customer.order();
    customerState.innerHTML = "等待上菜";
  });
}
function updateCusState(){
  var time = 3000;
  customerState.innerHTML = "点菜中,还有 " + time/1000 + " 秒钟点完";
  var inter = setInterval(function(){
    if(time > 1000){
      time -= 1000;
      customerState.innerHTML = "点菜中,还有 " + time/1000 + " 秒钟点完";
    }
    else{
      clearInterval(inter);
    }
  },1000);
}
