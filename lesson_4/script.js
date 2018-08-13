let money, 
		name,
		shopGoods = [],
		time,
		price;

function budgetPerDay() {
	alert( "Ваш бюджет в день: "+ money/30);
}


function start () {
		money = prompt("Ваш бюджет на месяц?", "");

		while (isNaN(money) || money == "" || money == null) {
			money = prompt("Ваш бюджет на месяц?", "");
}

		name = prompt("Название вашего магазина?", "").toUpperCase();
		time = 19;
}

start();
budgetPerDay();

let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],  
		open: false, 
		employers : {}, 
		discount: false,
		shopItems: [],
		chooseGoods: function chooseGoods() {
		for (let i = 0; i < 5; i++) {

							let a = prompt("Какой тип товаров будем продавать?", ""); 



							if ((typeof(a)) === "string" && (typeof(a)) != null && a != "" && a.length < 50){
									console.log('все верно');
									mainList.shopGoods[i] = a; 
						  } else {
					alert ("Введите корректные данные");
						i--;
						}

						}
			},

			workTime: function workTime(time) {
				if (time < 0) {
					console.log("Такого просто не может быть");
				} else if(time > 8 && time < 20) {
				console.log("Время работать")
				mainList.open = true;
						} else if (time < 24) {
					console.log("Уже слишком поздно")
							} else {
								console.log("в сутках только 24 часа")
							}
		},

			budgetPerDay: function budgetPerDay() {
					alert( "Ваш бюджет в день: "+ money/30);
				},
			makeDiscount: function makeDiscount() {

				if (mainList.discount == true) {
				  price = (price/100)*80;
				}
		},

		hireEmployers: function hireEmployers() {

	    for (let i = 0; i < 4; i++) {

	       let name = prompt ('Введите имя сотрудника', '');
	 
	        mainList.employers[i] = name;
	     }
  },

  chooseShopItems: function chooseShopItems() {
  	 let items = prompt("Перечислите через запятую товары", "");
				if ((typeof(items)) === "string" && (typeof(items)) != null && items != ""){
									console.log('ввод верный');
									mainList.shopItems = items.split(",");
									mainList.shopItems.push(prompt("Подождите, еще ", ""));
  	 							mainList.shopItems.sort();
						  } else {
					alert ("Введите корректные данные");
						i--;
						}
					mainList.shopItems.forEach( function(item, i, shopItems)	{
					console.log(++i + ' :' + item)
					})	
  },

  

};




/*console.log("Наш магазин включает в себя: ")
for ( let key in mainList) {
	console.log('Свойство ' + key + ' имеет значение ' + mainList[key])
} */





