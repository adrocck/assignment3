var rides;

function metroCalc(){

	rides = document.getElementById("rides").value;
	fare = 2.75;
	expense = rides * fare;
	alert("You are spending $" + expense + " for the subway each month!");

	metroTotal(); 
}

	function metroTotal(){
	if (expense > 116.50) {
		alert("You should buy un unlimited monthly MetroCard!");
	} else {
		alert("You should pay-per-ride!");
	}
}
