let btnOpenShop = document.getElementById("open-btn");

let blockOne = document.getElementsByClassName("name-value")[0],
		blockTwo = document.getElementsByClassName("budget-value")[0],
		blockThree = document.getElementsByClassName("goods-value")[0],
		blockFour = document.getElementsByClassName("items-value")[0],
		blockFive = document.getElementsByClassName("employers-value")[0],
		blockSix = document.getElementsByClassName("discount-value")[0],
		blockSeven = document.getElementsByClassName("isopen-value")[0];

let goods_item = document.getElementsByClassName('goods-item');


let btnAccept = document.getElementsByTagName("button")[1],
		 btnCount = document.getElementsByTagName("button")[2],
		 btnHire = document.getElementsByTagName("button")[3];

let fieldChooseItem = document.querySelector(".choose-item"),
		fieldTimeValue = document.querySelector(".time-value"),
		fieldCountBudgetValue = document.querySelector(".count-budget-value");

let fieldHireEmployers = document.querySelectorAll(".hire-employers-item");

fieldCountBudgetValue.disabled = true;	

let money, 
		
		shopGoods = [],
		
		price;

btnOpenShop.addEventListener('click', () => {
money = prompt("Ваш бюджет на месяц?", "");

		while (isNaN(money) || money == "" || money == null) {
			money = prompt("Ваш бюджет?", "");
}
	blockTwo.textContent = money;

	blockOne.textContent = prompt("Название вашего магазина?", "").toUpperCase();
		

});

btnAccept.addEventListener('click', () => {
		for (let i = 0; i < goods_item.length; i++) {

							let a = goods_item[i].value; 



							if ((typeof(a)) === "string" && (typeof(a)) != null && a.length < 50){
									console.log('все верно');
									mainList.shopGoods[i] = a;
									blockThree.textContent = mainList.shopGoods; 
						  } else {
					alert ("Введите корректные данные");
						i--;
						}

						}

});




fieldChooseItem.addEventListener("change", () =>{
 let items = fieldChooseItem.value;

				if (isNaN(items) && items != ''){
									
									mainList.shopItems = items.split(",");
  	 							mainList.shopItems.sort();

  	 							blockFour.textContent = mainList.shopItems;
						  } else {
					alert ("Введите корректные данные");
						i--;
						}
				

});

fieldTimeValue.addEventListener('change', () =>{
let time = fieldTimeValue.value;
	if (time < 0) {
					console.log("Такого просто не может быть");
					mainList.open = false;
				} else if(time > 8 && time < 20) {
				console.log("Время работать")
				mainList.open = true;
					btnAccept.disabled = false;
					btnCount.disabled = false;
					btnHire.disabled = false;
						} else if (time < 24) {
					console.log("Уже слишком поздно")
					mainList.open = false;
					btnAccept.disabled = true;
					btnCount.disabled = true;
					btnHire.disabled = true;
							} else {
								console.log("в сутках только 24 часа")
								mainList.open = false;
							};
	if(mainList.open == true)	{
		blockSeven.style.backgroundColor = 'green'

	}					
			else {
			blockSeven.style.backgroundColor = 'red'
			}
});

btnCount.addEventListener('click', () => {
fieldCountBudgetValue.value = money/30;
blockSix.style.backgroundColor = 'green';
blockSix.textContent = (fieldCountBudgetValue.value/100)*80;


});


btnHire.addEventListener = ('click', () => {
  for (let i = 0; i < fieldHireEmployers.length; i++) {

	       let name = fieldHireEmployers[i].value;
	 
	        mainList.employers[i] = name;

	        blockFive.textContent += mainList.employers[i] + ', ';
	     }

});

let mainList = {
		budget: money,
		shopName: name,
		shopGoods: [],  
		open: false, 
		employers : {}, 
		discount: false,
		shopItems: [],

	

		
			makeDiscount: function makeDiscount() {

				if (mainList.discount == true) {
				  price = (price/100)*80;
				}
		},

	

  

};
