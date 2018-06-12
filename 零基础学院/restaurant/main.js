var cook = new Cook(2,"Oleg",2500);
var waiter = new Waiter(1,"Max",2000);
var restaurant = new Restaurant(1000,1,[]);

document.getElementById('cash').innerHTML = restaurant.cash;
restaurant.hire(waiter);
restaurant.hire(cook);
console.log(restaurant.staff);

var customerList = (function(){
  var cList = [];
  for(let i=0;i<5;i++){
    var c = new Customer();
    cList.push(c);
  }
  return cList;
})();
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
})();

document.getElementById('start').addEventListener('click', ()=>opening(customerList));

async function opening(queue) {
    //保存队列
    let customerList = [...queue];
    while (restaurant.seats > 0
    && restaurant.cash > 0
    && restaurant.staff.length > 0
    && customerList.length > 0) {
        restaurant.seats -= 1;
        let currentCustomer = customerList.shift();      //删除第一个元素并返回
        waiter.ask();
        //点菜
        let orderFood = [];
        await delay(3000);
        orderFood = currentCustomer.order();
        waiter.doAWork(orderFood);
        //点菜完成，通知做菜

  }
}
function delay(time) {
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve();
        }, time);
    })
}
