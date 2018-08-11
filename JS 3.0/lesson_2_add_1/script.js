var week = [ "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];



for (let i = 0; i < week.length; i++)
{
 	
 switch (i) {
  case 5:
    document.write('<p><b><i>' +  week[i] + '</b></i></p>');
    break;
  case 6:
    document.write('<p><b>' +  week[i] + '</b></p>');
    break;
		default:
		document.write('<p>' +  week[i] + '</p>');
};



}




var arr = ["3745", "76765", "435534", "34534", "867867", "6767867", "678678678"];


for (var i = 0; i < arr.length; i++) {
	if (arr[i][0] == '3' || arr[i][0] == '7') {
		document.write(" " + arr[i]);
	}
}