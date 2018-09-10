setInterval(function(){
	var date = new Date();

	var format = [
		(date.getHours()),
		(date.getMinutes()),
		(date.getSeconds())
	].join(":");

	document.getElementById("clock").innerHTML = format;
}, 900);