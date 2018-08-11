

var budgetPerMonth = prompt("Ваш бюджет на месяц?", "");
var shopTitle = prompt("Название вашего магазина?", "");
var shopGoods = [];
alert( "Ваш бюджет в день: "+ budgetPerMonth/30);

var mainList = {
	budget: budgetPerMonth,
	shopName = shopTitle,
	shopGoods: [],  
	open: false, 
	employers : {} 
};

for (let i = 0; i < 5; i++) {

	let a = prompt("Какой тип товаров будем продавать?");
mainList.shopGoods[i] = a; 

}


alert(mainList.shopGoods);

