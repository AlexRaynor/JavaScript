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
		discount: false
};


function chooseGoods() {
		for (let i = 0; i < 5; i++) {

				let a = prompt("Какой тип товаров будем продавать?"); 



				if ((typeof(a)) === "string" && (typeof(a)) != "null" && a != "" && a.length < 50){
						console.log('все верно');
						mainList.shopGoods[i] = a; 
			} else {
		alert ("Введите корректные данные");
			i--;
			}

			}
}

chooseGoods();

function workTime(time) {
	
		if (time < 0) {
			console.log("Такого просто не может быть");
		} else if(time > 8 && time < 20) {
		console.log("Время работать")

				} else if (time < 24) {
			console.log("Уже слишком поздно")
					} else {
						console.log("в сутках только 24 часа")
					}

}

workTime(19);

function discount() {

		if (discount) {
		  price = money * 0.8;
		  alert('Со скидкой ' + price);
		} else{
		  price = money;
		}


		}
discount();

function employers() {

    for (let i = 0; i < 4; i++) {

       let a = prompt ('Введите имя сотрудника', '');
 
        mainList.employers[i] = a;
     }
  }

 employers();