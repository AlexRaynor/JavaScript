let btn = document.getElementsByClassName("menu")[0];
let btnTwo = document.getElementsByClassName("menu-item")[1];
let btnThree = document.getElementsByClassName("menu-item")[2];
console.log(btn);
console.log(btnTwo);

btn.insertBefore(btnThree, btnTwo);

 let menu = document.getElementsByClassName("menu");


		let body = document.querySelector('body');
body.style.background = 'url(img/apple_true.jpg)';

let li = document.createElement("li");
	li.classList.add("menu-item");
	li.textContent = "Пятый пункт";
	
	
let ul = document.getElementsByTagName('ul')[0];

ul.appendChild(li);
ul.insertBefore(li, ul[3]);



let adv = document.getElementsByClassName("adv")[0];
adv.parentNode.removeChild(adv);


let prompts = prompt("Как вы относитесь к технике Apple?");

let prom = document.getElementsByClassName("prompt")[0];
prom.textContent = prompts;


let title = document.getElementsByClassName("title")[0];
title.textContent = "Мы продаем только подлинную технику Apple";