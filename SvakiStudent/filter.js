function filter(id){
		var obavijesti = document.getElementsByTagName("time");
		var listitems = document.getElementsByTagName("li");
		var trenutnoVrijeme = new Date();
		if(document.getElementById("prikazSve").value==id){
		for (var i = 0; i < listitems.length; i++) {
			listitems[i].style.removeProperty('display');
		}
		}
	
	else if(document.getElementById("prikazOveSedmice").value==id){
		for (var i = 0; i < listitems.length; i++) {
			listitems[i].style.removeProperty('display');
		}
		for (var i = 0; i < obavijesti.length; i++) {
			var zadanoVrijemeV = obavijesti[i].getAttribute("datetime");
			var zadanoVrijeme = new Date(zadanoVrijemeV);
			if(trenutnoVrijeme.getMonth()==zadanoVrijeme.getMonth() && trenutnoVrijeme.getFullYear()==zadanoVrijeme.getFullYear() && (trenutnoVrijeme.getDate()-zadanoVrijeme.getDate())<7)
				listitems[i+4].style.removeProperty('display');
			else {
				listitems[i+4].style.display = "none";
				}
		}
    }
	else if(document.getElementById("prikazOvogMjeseca").value==id){
		for (var i = 0; i < listitems.length; i++) {
			listitems[i].style.removeProperty('display');
		}
		for (var i = 0; i < obavijesti.length; i++) {
			var zadanoVrijemeV = obavijesti[i].getAttribute("datetime");
			var zadanoVrijeme = new Date(zadanoVrijemeV);
			if(trenutnoVrijeme.getMonth()==zadanoVrijeme.getMonth() && trenutnoVrijeme.getFullYear()==zadanoVrijeme.getFullYear() &&(trenutnoVrijeme.getDate()-zadanoVrijeme.getDate())<30)	listitems[i+5].style.display = "show";
			else {
				listitems[i+4].style.display = "none";
				}
			}

    }
	else if(document.getElementById("prikazOvogDana").value==id){
		for (var i = 0; i < listitems.length; i++) {
			listitems[i].style.removeProperty('display');
		}
		for (var i = 0; i < obavijesti.length; i++) {
			var zadanoVrijemeV = obavijesti[i].getAttribute("datetime");
			var zadanoVrijeme = new Date(zadanoVrijemeV);
			if(trenutnoVrijeme.getDate()==zadanoVrijeme.getDate() && trenutnoVrijeme.getMonth()==zadanoVrijeme.getMonth() && trenutnoVrijeme.getFullYear()==zadanoVrijeme.getFullYear()){
				listitems[i+4].style.removeProperty('display');
				}
			else {
				listitems[i+4].style.display = "none";
				}
		}
    }

}


