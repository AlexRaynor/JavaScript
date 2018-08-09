var num = 33721;

var dt = Math.floor(num/10000);

var t = Math.floor((num - dt*10000)/1000);

var h = Math.floor((num - dt*10000 - t*1000)/100);

var d = Math.floor((num - dt*10000 - t*1000 - h*100)/10); 

var e = Math.floor((num - dt*10000 - t*1000 - h*100 - d*10)/1);

var result_1 = dt*t*h*d*e ;
alert(result_1);

var result_2 = Math.pow(result_1,3)
alert(result_2);

var result_3 = Math.floor (result_2/100000);
alert (result_3);