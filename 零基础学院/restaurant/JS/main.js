var cook = new Cook(2,"Oleg",2500);
var waiter = new Waiter(1,"Max",2000);
var restaurant = new Restaurant(100000,1,[]);
var money = document.getElementById('cash');

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
function updateMoney(deltamoney){
  restaurant.cash = Number(restaurant.cash) + deltamoney;
  money.innerHTML = restaurant.cash;
}
window.onload = function(){
  money.innerHTML = Number(restaurant.cash);
  document.getElementById("start").addEventListener("click",function(){
    comeACustomer();
  })
}
