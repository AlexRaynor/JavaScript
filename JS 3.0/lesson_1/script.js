

var budgetPerMonth = prompt("Ваш бюджет на месяц?", "");
var shopTitle = prompt("Название вашего магазина?", "");
var shopGoods = [];
alert( "Ваш бюджет в день: "+ budgetPerMonth/30);

mainList = {
	shopGoods: [],  
	open: false, 
	employers : {} };

mainList.shopGoods[0] = prompt ("Какой тип товаров будем продавать?", ""); 
mainList.shopGoods[1] = prompt ("Какой тип товаров будем продавать?", ""); 
mainList.shopGoods[2] = prompt ("Какой тип товаров будем продавать?", ""); 

alert(mainList.shopGoods);

