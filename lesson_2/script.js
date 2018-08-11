

var budgetPerMonth = prompt("Ваш бюджет на месяц?", ""),
shopTitle = prompt("Название вашего магазина?", ""),
shopGoods = [],
time = 19;
alert( "Ваш бюджет в день: "+ budgetPerMonth/30);

var mainList = {
	budget: budgetPerMonth,
	shopName: shopTitle,
	shopGoods: [],  
	open: false, 
	employers : {} 
};

for (let i = 0; i < 5; i++) {

		let a = prompt("Какой тип товаров будем продавать?"); 

/* 
let i = 0;
while (i < 5) {
prompt("Какой тип товаров будем продавать?");
i++;  */


/*
let i = 0;
do {
	prompt("Какой тип товаров будем продавать?");
	i++
}
while (i < 5);
    */

		if ((typeof(a)) === "string" && (typeof(a)) ==="null" && a != "" && a.length < 50){
				console.log('все верно');
				mainList.shopGoods[i] = a; 
	} else {
alert ("Введите корректные данные");

	}

}

if (time < 0) {
	console.log("Такого просто не может быть");
} else if(time > 8 && time < 20) {
console.log("Время работать")

		} else if (time < 24) {
	console.log("Уже слишком поздно")
			} else {
				console.log("в сутках только 24 часа")
			}



