

function datum(){
	//Par datuma za testiranje

var datum1 = new Date();//Trenutni datum
var datum2 = new Date(datum1.getFullYear(), datum1.getMonth(), datum1.getDate(), datum1.getHours(), datum1.getMinutes(), datum1.getSeconds()-6);//Novost objavljena prije par sekundi
var datum3 = new Date(datum1.getFullYear(), datum1.getMonth(), datum1.getDate(), datum1.getHours(), datum1.getMinutes()-27, datum1.getSeconds());//Novost objavljena prije nekoliko minuta
var datum4 = new Date(datum1.getFullYear(), datum1.getMonth(), datum1.getDate(), datum1.getHours()-22, datum1.getMinutes(), datum1.getSeconds());//Novost objavljena prije nekoliko sati
var datum5 = new Date(datum1.getFullYear(), datum1.getMonth(), datum1.getDate()-5, datum1.getHours(), datum1.getMinutes(), datum1.getSeconds());//Novost objavljena prije par dana
var datum6 = new Date(datum1.getFullYear()-1, datum1.getMonth()-6, datum1.getDate()-5, datum1.getHours()-12, datum1.getMinutes()-5, datum1.getSeconds()-44);
var datum7 = new Date(datum1.getFullYear()-2, datum1.getMonth()-6, datum1.getDate()-5, datum1.getHours()-12, datum1.getMinutes()-5, datum1.getSeconds()-44);


var datumi=[datum1, datum2, datum3, datum4, datum5, datum6, datum7];//Niz datuma
//Provjera datuma
/*for(var i=0; i<datumi.length; i++)
{
	if(datumi[i].getSeconds() < 0)
	{
		datumi[i].setSeconds()
	}
}*/

	var datumiNaslovnica = document.getElementsByClassName("datum");
	
	var j = 0;
	for(var i=0; i<datumiNaslovnica.length; i++)
	{
		//alert(datumi[j]);
		datumiNaslovnica[i].innerHTML = ispisiDatum(datumi[j]);
		j++;
		if(j >= 7)
			j = 0;
	}
}


function ispisiDatum(datum)
{
	var trenutniDatum = new Date();
	var timeDiff = Math.abs(trenutniDatum.getTime() - datum.getTime());//Razlika izmedju dva datuma izražena u milisekundama
	//ms/1000 = s
	if(timeDiff/1000 < 60)
		return "Novost je objavljena prije par sekundi";
	else if(timeDiff/1000 > 60 && timeDiff/1000 < 3600)
	{
		var brMin = Math.floor((timeDiff/1000)/60);
		if(brMin==1 || brMin==21 || brMin==31 || brMin==41 || brMin==51)
			return "Novost je objavljena prije " + brMin + " minut";
		else if(brMin==2 || brMin==3 || brMin==4 || brMin==22 || brMin==23 || brMin==24 || brMin==32 || brMin==33 || brMin==34 ||
				brMin==42 || brMin==43 || brMin==44 || brMin==52 || brMin==53 || brMin==54)
			return "Novost je objavljena prije " + brMin + " minute";	
		else
			return "Novost je objavljena prije " + brMin + " minuta";
	}
	else if(timeDiff/1000 > 3600 && timeDiff/1000 < 86400)
	{
		var brSati = Math.floor((timeDiff/1000)/60/60);
		if(brSati==1 || brSati==21)
			return "Novost je objavljena prije " + brSat + " sat";
		else if(brSati==2 || brSati==3 || brSati==4 || brSati==22 || brSati==23)
			return "Novost je objavljena prije " + brSati + " sata";	
		else
			return "Novost je objavljena prije " + brSati + " sati";
	}
	else if(timeDiff/1000 > 86400 && timeDiff/1000 < 2592000)
	{
		var brDana = Math.floor((timeDiff/1000)/60/60/24);
		if(brDana==1 || brDana==21 || brDana==31)
			return "Novost je objavljena prije " + brDana + " dan";	
		else
			return "Novost je objavljena prije " + brDana + " dana";
	}
	else
	{
		return "Datum " + datum.getDate() + "." + datum.getMonth() + "." + datum.getFullYear() + ".";	
	}
}

// Get the element with id="myDIV" (a div), then get all elements inside div with class="example"
//var x = document.getElementById("myDIV").querySelectorAll(".example");
function prikaziDanasnjeVijesti(){
	sakrijSveNovosti();
	var listaVijestiNovost1 = document.getElementsByClassName("novost1");
	var listaVijestiNovost2 = document.getElementsByClassName("novost2");
	
	for(var i=0; i<listaVijestiNovost1.length; i++)
	{
		var obavijest = listaVijestiNovost1[i].querySelector(".datum").innerHTML;
		var broj = obavijest.match(/\d+/);
		if(obavijest.match(/min/) != null || obavijest.match(/sek/) != null || obavijest.match(/sat/) != null)
		{
			//listaVijestiNovost1[i].style.visibility='hidden';
			//Prikazati novost
			listaVijestiNovost1[i].style.display='block';
		}
	}
	
	for(var i=0; i<listaVijestiNovost2.length; i++)
	{
		var obavijest = listaVijestiNovost2[i].querySelector(".datum").innerHTML;
		var broj = obavijest.match(/\d+/);
		if(obavijest.match(/min/) != null || obavijest.match(/sek/) != null || obavijest.match(/sat/) != null)
		{
			//listaVijestiNovost1[i].style.visibility='hidden';
			//Prikazati novost
			listaVijestiNovost2[i].style.display='block';
		}
	}
}

function prikaziOvomjesecneVijesti(){
	sakrijSveNovosti();
	var listaVijestiNovost1 = document.getElementsByClassName("novost1");
	var listaVijestiNovost2 = document.getElementsByClassName("novost2");
	
	for(var i=0; i<listaVijestiNovost1.length; i++)
	{
		var obavijest = listaVijestiNovost1[i].querySelector(".datum").innerHTML;
		var broj = obavijest.match(/\d+/);
		if(obavijest.match(/dan/) != null)
		{
			//Prikazati novost
			listaVijestiNovost1[i].style.display='block';
		}
	}
	
	for(var i=0; i<listaVijestiNovost2.length; i++)
	{
		var obavijest = listaVijestiNovost2[i].querySelector(".datum").innerHTML;
		var broj = obavijest.match(/\d+/);
		if(obavijest.match(/dan/) != null)
		{
			//Prikazati novost
			listaVijestiNovost2[i].style.display='block';
		}
	}
}

function prikaziSveVijesti(){
	sakrijSveNovosti();
	var listaVijestiNovost1 = document.getElementsByClassName("novost1");
	var listaVijestiNovost2 = document.getElementsByClassName("novost2");
	
	for(var i=0; i<listaVijestiNovost1.length; i++)
	{
		//Prikazati novost
		listaVijestiNovost1[i].style.display='block';
	}
	
	for(var i=0; i<listaVijestiNovost2.length; i++)
	{
		//Prikazati novost
		listaVijestiNovost2[i].style.display='block';
	}
}

function sakrijSveNovosti(){
	var listaVijestiNovost1 = document.getElementsByClassName("novost1");
	var listaVijestiNovost2 = document.getElementsByClassName("novost2");
	for(var i=0; i<listaVijestiNovost1.length; i++)
	{
		//Sakriti novost
		listaVijestiNovost1[i].style.display='none';
	}
	
	for(var i=0; i<listaVijestiNovost2.length; i++)
	{
		//Sakriti novost
		listaVijestiNovost2[i].style.display='none';
	}
}

