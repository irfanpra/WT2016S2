function izlistaj(objekat) {
	var datumi = document.getElementsByClassName("datum");
	if(objekat.className == "sve") {
		for (var i = 0; i < datumi.length; i++) {
			datumi[i].style.display = 'block';
		}
	}
	
	else if(objekat.className == "mjesecne") {
		for (var i = 0; i < datumi.length; i++) {
			if((new Date()).getMonth() == datumi[i].getMonth())
				datumi[i].style.display = 'block';
			else 
				datumi[i].style.display = 'none';
		}
	}
	
	else if(objekat.className == "danasnje") {
		for (var i = 0; i < datumi.length; i++) {
			if((new Date()).getDay() == datumi[i].getDay())
				datumi[i].style.display = 'block';
			else 
				datumi[i].style.display = 'none';
		}
	}
	
	else if(objekat.className == "sedmicne") {
		for (var i = 0; i < datumi.length; i++) {
			if((new Date()).getMonday() == datumi[i].getMonday())
				datumi[i].style.display = 'block';
			else 
				datumi[i].style.display = 'none';
		}
	}
}

function getMonday(d) {
  d = new Date(d);
  var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6:1);
  return new Date(d.setDate(diff));
}

window.onload = function () {
    var datumi = document.getElementsByClassName("datum");
	//Da se osiguram da ce biti po 1 u svakoj kategoriji
	//Prije par sekundi
	datumi[5].innerHTML = new Date();
	//prije sedmicu
	datumi[4].innerHTML = new Date(new Date() - 604800000);
	//mjesec dana prije
	datumi[3].innerHTML = new Date(new Date() - 2592000000);
	//6 minuta prije
	datumi[2].innerHTML = new Date(new Date() - 300000);
	//5 sati prije
	datumi[1].innerHTML = new Date(new Date() - 18000000);
	//20 dana prije
	datumi[0].innerHTML = new Date(new Date() - 1728000000);
    var prosloVremena = document.getElementsByClassName("prosloVremena");
    for (var i = 0; i < datumi.length; i++) {
        var datum = new Date(datumi[i].innerHTML);
        prosloVremena[i].innerHTML = prosloOdObjave(datum);
        datumi[i].style.display = 'none';
		prosloVremena[i].style.display = 'block'; 
		prosloVremena[i].style.borderStyle = 'solid';
    }
	var u = document.getElementsByClassName("novost1");	
}

function prosloOdObjave(date) {
	var tekst = "Novost objavljenja prije ";
    var milisekunde = new Date() - date;
	//2592000 broj sekundi u 30 dana (otprilike 1 mjesec)
    var vrijeme = Math.floor(milisekunde / (1000 * 2592000));
	//Ako je vrijeme >= 1 znaci da je prosao barem 1 puni mjesec
    if(vrijeme >= 1) {
        return date.toString().slice(4, 25); 
    }
	//604800 broj sekundi u 7 dana(1 sedmica)
	vrijeme = Math.floor(milisekunde / (1000 * 604800));
    //Ako je vrijeme >= 1 znaci da je prosla barem 1 puna sedmica
	if(vrijeme >= 1) {
		if(vrijeme == 1)
			return tekst + vrijeme + " sedmicu";
        return tekst + vrijeme + " sedmice";
    } 
	
	//86400 broj sekundi u 1 danu
	vrijeme = Math.floor(milisekunde / (1000 * 86400));
	//Ako je vrijeme >= 1 znaci da je prosao barem 1 puni dan
	if(vrijeme >= 1) {
		tekst = tekst + vrijeme + " dan";
		if((((vrijeme % 10) == 1) && ((vrijeme / 10) != 1)) != 1)
			return tekst + "a";
		return tekst;
	}
	//3600 broj sekundi u 1 satu
	vrijeme = Math.floor(milisekunde / (1000 * 3600));
	//Ako je vrijeme >= 1 znaci da je prosao barem 1 puni sat
	if(vrijeme >= 1) {
	  tekst = tekst + vrijeme + " sat";
	  if((vrijeme >= 5) && (vrijeme <= 20)) 
		  return tekst + "i";
	  else if((vrijeme % 10) == 1)
		  return tekst;
	  return tekst + "a";
	}	
	
	//60 broj sekundi u 1 minuti
    vrijeme = Math.floor(milisekunde / 1000 * 60);
	//Ako je vrijeme >= 1 znaci da je prosla barem 1 puna minuta
    if ((vrijeme % 10) == 1) {
		if((vrijeme/10) != 1)
			if((vrijeme % 10) == 1)  
				return tekst + vrijeme + " minutu";
			else if(((vrijeme % 10) >= 2) && ((vrijeme % 10) <= 4))
				return tekst + vrijeme + " minute";
		return tekst + vrijeme + " minuta";
	}
	
	//Proslo je manje od minute
	return tekst + "par sekundi";
}