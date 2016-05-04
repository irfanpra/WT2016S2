window.onload = function (){
	postaviDummyPodatke();
	var vremena = document.getElementsByClassName("datumObjave");
	console.log(vremena);
	for (var i = vremena.length - 1; i >= 0; i--) {
		console.log(vremena[i]);
		vremena[i].innerHTML = "Proizvod objavljen " + postaviVrijemeObjave(new Date(vremena[i].innerHTML));
	};
	var vremenaVijesti = document.getElementsByClassName("datumObjaveVijest");
	for (var i = vremenaVijesti.length - 1; i >= 0; i--) {
		vremenaVijesti[i].innerHTML = "Vijest objavljena " + postaviVrijemeObjave(new Date(vremenaVijesti[i].innerHTML));
	};
}

Date.prototype.getMonthWeek = function(){
    var firstDay = new Date(this.getFullYear(), this.getMonth(), 1).getDay();
    return Math.ceil((this.getDate() + firstDay)/7);
}
Date.prototype.removeHours = function(h) {    
   this.setTime(this.getTime() - (h*60*60*1000)); 
   return this;   
}
Date.prototype.removeSeconds = function(seconds) {
	this.setSeconds(this.getSeconds() - seconds);
	return this;
};
Date.prototype.removeMinutes = function(minutes) {
	this.setMinutes(this.getMinutes() - minutes);
	return this;
};

function postaviVrijemeObjave(vrijeme){
	var trenutno = new Date();
	if(vrijeme.getFullYear() != trenutno.getFullYear()){
		return vrijeme.getDate()+ "." + (vrijeme.getMonth()+1) + "." + vrijeme.getFullYear();
	}
	else if(vrijeme.getFullYear() == trenutno.getFullYear() && vrijeme.getMonth() != trenutno.getMonth()){
		return vrijeme.getDate()+ "." + (vrijeme.getMonth()+1) + "." + vrijeme.getFullYear();
	}
	//Isti dan, sat, minuta
	else if(vrijeme.getDate() == trenutno.getDate() && vrijeme.getHours() == trenutno.getHours() && vrijeme.getMinutes() == trenutno.getMinutes() && vrijeme.getSeconds() <= trenutno.getSeconds()){
		return "prije par sekundi"
	}
	//Isti dan, sat
	else if(vrijeme.getDate() == trenutno.getDate() && vrijeme.getHours() == trenutno.getHours() && vrijeme.getMinutes() <= trenutno.getMinutes()){
		var minute = trenutno.getMinutes() - vrijeme.getMinutes();
		if(minute == 1 || minute % 10 == 1) return "prije " + minute + " minutu";
		if(minute == 2 || minute == 3 || minute == 4 || minute % 10 == 2 || minute % 10 == 3 || minute % 10 == 4) return "prije " + minute + " minute";
		return "prije " + minute + " minuta";
	}
	//Manje od 24h
	else if(Math.abs(trenutno.getHours() - vrijeme.getHours()) > 0 && Math.abs(trenutno.getHours() - vrijeme.getHours()) <= 24  && vrijeme.getDate() == trenutno.getDate()){
		var sati = trenutno.getHours() - vrijeme.getHours();
		if(sati >= 5 && sati <= 20) return "prije " + sati + " sati";
		if(sati == 1 || sati % 10 == 1) return "prije " + sati + " sat";
		if(sati == 2 || sati == 3 || sati == 4 || sati % 10 == 2 || sati % 10 == 3 || sati % 10 == 4) return "prije " + sati + " sata";
		return "prije " + sati + " sati";
	}
	//Manje od 7dana
	else if(Math.abs(trenutno.getDate() - vrijeme.getDate()) > 0 && Math.abs(trenutno.getDate() - vrijeme.getDate()) <= 7){
		var dana = trenutno.getDate() - vrijeme.getDate();
		if(dana == 1) return "prije " + dana + " dan";
		return "prije " + dana + " dana";
	}
	//U mjesecu ali vise od 7 dana
	else{
		var sedmica = trenutno.getMonthWeek() - vrijeme.getMonthWeek();
		if(sedmica == 1) return "prije " + sedmica + " sedmicu";
		if(sedmica == 2 || sedmica == 3 || sedmica == 4) return "prije " + sedmica + " sedmice";
		return "prije " + sedmica + " sedmica";
	}
}


function filtrirajProizvode(){
	var trenutno = new Date();
	var izbor = document.getElementById("filter").value;
	var proizvodi = document.getElementsByClassName("proizvod");
	if(izbor == "sve"){
		for (var i = proizvodi.length - 1; i >= 0; i--) {
			proizvodi[i].style.display = 'block';
		};
	}
	else if(izbor == "danas"){
		for (var i = proizvodi.length - 1; i >= 0; i--) {
			var dan = new Date(proizvodi[i].getElementsByClassName('datum')[0].innerHTML).getDate();
			if(dan != trenutno.getDate()) proizvodi[i].style.display = 'none';
			else proizvodi[i].style.display = 'block';
		};
	}
	else if(izbor == "sedmice"){
		for (var i = proizvodi.length - 1; i >= 0; i--) {
			var sedmica = new Date(proizvodi[i].getElementsByClassName('datum')[0].innerHTML).getMonthWeek();
			if(sedmica != trenutno.getMonthWeek()) proizvodi[i].style.display = 'none';
			else proizvodi[i].style.display = 'block';
		};
	}
	else if(izbor == "mjesec"){
		for (var i = proizvodi.length - 1; i >= 0; i--) {
			var mjesec = new Date(proizvodi[i].getElementsByClassName('datum')[0].innerHTML).getMonth();
			if(mjesec != trenutno.getMonth()) proizvodi[i].style.display = 'none';
			else proizvodi[i].style.display = 'block';
		};
	}
}

//PODACI ZA TESTIRANJE
function postaviDummyPodatke(){
	var danas = new Date();
	var proizvodi = document.getElementsByClassName('proizvod');
	proizvodi[0].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[0].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.removeSeconds(40);
	proizvodi[1].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[1].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.removeMinutes(4);
	proizvodi[2].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[2].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.removeHours(1);
	proizvodi[3].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[3].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.setDate(danas.getDate() - 1);
	proizvodi[4].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[4].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.setDate(danas.getDate() - 4);
	proizvodi[5].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[5].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.setDate(danas.getDate() - 4);
	proizvodi[6].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[6].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.setDate(danas.getDate() - 7);
	proizvodi[7].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[7].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.setDate(danas.getDate() - 7);
	proizvodi[8].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[8].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.setDate(danas.getDate() - 7);
	proizvodi[9].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[9].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.setDate(danas.getDate() - 7);
	proizvodi[10].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[10].getElementsByClassName('datum')[0].innerHTML = danas;
	danas.setDate(danas.getDate() - 7);
	proizvodi[11].getElementsByClassName('datumObjave')[0].innerHTML = danas;
	proizvodi[11].getElementsByClassName('datum')[0].innerHTML = danas;
}