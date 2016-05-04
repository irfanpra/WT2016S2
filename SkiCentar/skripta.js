/* ----------------VALIDACIJA----------- */

function crosValidacija(){
	var mail = document.getElementById("email").value;
	var adr = document.getElementById("adresa").value;
	
	if(valCrosEmail() && valCrosAdresa() ){ alert("oba valja"); return true; }
	else if(valCrosEmail() && adr == "" ) { alert("mail valja"); return true; }
	else if(valCrosAdresa() && mail == "") { alert("adresa valja"); return true; }
	else {alert("ne valja"); return false; }
	
}

function valCrosEmail(){     /* valCros  dvije funkcije koriste se da se ne mijenja stalno boja bordera*/
	var mail = document.getElementById("email").value;	
	var reg = /^[A-Za-z0-9._-]+[@]{1}[a-z]+\.[a-z]{2,4}$/;
	var t = reg.test(mail);
	return t;
}


function valCrosAdresa(){
	var adr = document.getElementById("adresa").value;
	var reg = /^[A-Z]{1}[a-zčćžđš]+\s[0-9]+$/;
	var a = reg.test(adr);
	return a;
}

function valEmail(){
	
	var mail = document.getElementById("email").value;	
	var reg = /^[A-Za-z0-9._-]+[@]{1}[a-z]+\.[a-z]{2,4}$/;
	var t = reg.test(mail);
	if (t == true){
		document.getElementById("email").style.border = "2px solid white";
	}
	else {
		document.getElementById("email").style.border = "2px solid red";
	}
	if(valCrosAdresa() && mail == "") {            /* ovaj dio se koristi za multiple field */
		document.getElementById("email").style.border = "2px solid white";
		t=true;
	}
	return t;
}

function valName(){
	var ime = document.getElementById("name").value;
	var reg = /^[A-Z]{1}[a-zčćžđš]+\s[A-ZČĆŽĐŠ]{1}[a-zčćžđš]+$/;
	var n = reg.test(ime);
	if(n == true){ 
		document.getElementById("name").style.border = "2px solid white";
	}
	else{
		document.getElementById("name").style.border = "2px solid red" ;
	}
	return n;
}

function valAdresa(){
	
	var adr = document.getElementById("adresa").value;
	var reg = /^[A-Z]{1}[a-zčćžđš]+\s[0-9]+$/;
	var a = reg.test(adr);
	if(a == true){ 
		document.getElementById("adresa").style.border = "2px solid white";
	}
	else{
		document.getElementById("adresa").style.border = "2px solid red" ;
	}
	if(valCrosEmail() && adr == "") {                   /* ovaj dio se koristi za multiple field */
		document.getElementById("adresa").style.border = "2px solid white";
		a=true;
	}
	return a;
}

function valGrade(){
	var t = document.getElementById("grade").value;
	if (t > 0 && t < 6) { document.getElementById("grade").style.border = "2px solid white" ;}
	else {document.getElementById("grade").style.border = "2px solid red";}
	
}

function valMes(){
	var m = document.getElementById("message").value;
	var reg = /^[A-ZČĆŽĐŠa-zčćžđš0-9]{2,}[A-ZČĆŽĐŠa-zčćžđš0-9\s\.\:\!\n\-\_\(\)\,\;]{2,}$/; /* Poruka mora poceti sa slovima ili brojem 
		inace se moze ukucati samo par space i ostaviti prazno */
	var r = reg.test(m);
	if( r == true){ 	
		document.getElementById("message").style.border = "2px solid white";
	}
	else{
		document.getElementById("message").style.border = "2px solid red" ;
	}
}

function resetValidacije(){
	document.getElementById("grade").style.border = "2px solid white" ;
	document.getElementById("adresa").style.border = "2px solid white";
	document.getElementById("name").style.border = "2px solid white";
	document.getElementById("email").style.border = "2px solid white";
	document.getElementById("message").style.border = "2px solid white";

}

/*  ################### kraj VALIDACIJA-----------##########################3   */

/*  POSTAVLJANJE NOVOSTI I ODABIR NOVOSTI ZA PRIKAZ  */

function setNews(){
	var nizVremena = document.getElementsByClassName("newsHideTime");
	nizVremena[0].value = new Date("2016-04-01 20:00:00");
	nizVremena[1].value = new Date("2016-04-02 18:43:00");
	nizVremena[2].value = new Date("2016-03-29 12:00:00");
	nizVremena[3].value = new Date("2016-03-27 12:00:00");
	nizVremena[4].value = new Date("2016-03-26 20:00:00");
	nizVremena[5].value = new Date("2016-03-25 23:00:00");
	nizVremena[6].value = new Date("2016-03-17 12:00:00");
	nizVremena[7].value = new Date("2016-03-07 12:00:00");
	nizVremena[8].value = new Date("2016-03-05 12:00:00");
	nizVremena[9].value = new Date("2016-03-03 12:00:00");
	nizVremena[10].value = new Date("2016-02-03 12:00:00");
	nizVremena[11].value = new Date("2016-01-02 12:00:00");

	postNews();
}
function postNews(){
	var sad = new Date().getTime()/1000;
	var nizVremena = document.getElementsByClassName("newsHideTime");
	var nizPrikaza = document.getElementsByClassName("newsTime");
	var i;
	for (i = 0; i < nizPrikaza.length; i++){
		var d = new Date (nizVremena[i].value);
		var tad = d.getTime()/1000;
		if((sad - tad) < 60)                               { nizPrikaza[i].value = "Novost je objavljena prije par sekundi"; }
		if((sad - tad) < 3600 && (sad - tad) > 60 )        { nizPrikaza[i].value = "Novost je objavljena prije "+Math.round((sad - tad )/60) +" minute"; }
		if((sad - tad) < 86400 && (sad - tad) > 3600)      { nizPrikaza[i].value = "Novost je objavljena prije "+Math.round((sad - tad )/3600) +" sata"; }
		if((sad - tad) < 604800 && (sad - tad) > 86400 )   { nizPrikaza[i].value = "Novost je objavljena prije "+Math.round((sad - tad )/86400) +" dana"; }
		if((sad - tad) < 2592000 && (sad - tad) > 604800 ) { nizPrikaza[i].value = "Novost je objavljena prije "+Math.round((sad - tad )/604800) +" sedmica"; }
		else if((sad - tad) > 2592000){
			nizPrikaza[i].value = "Novost je objavljena  "+(d.getDay()+1)+"-"+(d.getMonth()+1)+"-"+d.getFullYear();
		}
		
	}
	valPrikazNovosti();
}

function prikaziDanas(){
	var sad = new Date().getTime()/1000;
	var nizVremena = document.getElementsByClassName("newsHideTime");
	var nizNovosti = document.getElementsByClassName("news");
	var i;
	for (i = 0; i < nizNovosti.length; i++){
		var d = new Date (nizVremena[i].value);
		var tad = d.getTime()/1000;
			if((sad - tad) < 86400 ) { 
				nizNovosti[i].style.display = "block";
			}
			else {
				nizNovosti[i].style.display = "none";
			}
	}
	valPrikazNovosti();
}

function prikaziSedmica(){
	var s = new Date();
	var sad = new Date().getTime()/1000;
	var sDan = s.getDay();
		if(s.getDay() == 0) {sDan=7;}
	var nizVremena = document.getElementsByClassName("newsHideTime");
	var nizNovosti = document.getElementsByClassName("news");
	var i;
	for (i = 0; i < nizNovosti.length; i++){
		var d = new Date (nizVremena[i].value);
		var tad = d.getTime()/1000; 
			
			var dan = d.getDay();
			if(d.getDay() == 0) {dan=7;}
			
			if((sad - tad) < 604800 && sDan > dan  ) { 
				nizNovosti[i].style.display = "block";
			}
			else{
				nizNovosti[i].style.display = "none";
			}
		if((sad - tad) < 86400 ) { 
				nizNovosti[i].style.display = "block";
			}
	}
	valPrikazNovosti();
}

function prikaziMjesec(){
	var s = new Date();
	var sad = new Date().getTime()/1000;
	var nizVremena = document.getElementsByClassName("newsHideTime");
	var nizNovosti = document.getElementsByClassName("news");
	var i;
	for (i = 0; i < nizNovosti.length; i++){
		var d = new Date (nizVremena[i].value);
		var tad = d.getTime()/1000;
			if((sad - tad) < 2592000 && s.getDate() >= d.getDate()) { 
				nizNovosti[i].style.display = "block";
			}
			else {
				nizNovosti[i].style.display = "none";
			}
	}
	valPrikazNovosti();
}

function prikaziSve(){
	var nizNovosti = document.getElementsByClassName("news");
	for (i = 0; i < nizNovosti.length; i++){
		nizNovosti[i].style.display = "block";
	}
	valPrikazNovosti();
}

function valPrikazNovosti(){
	var sad = new Date().getTime()/1000;
	var nizVremena = document.getElementsByClassName("newsHideTime");
	var nizNovosti = document.getElementsByClassName("news");
	var i;
	for (i = 0; i < nizNovosti.length; i++){
		var d = new Date (nizVremena[i].value);
		var tad = d.getTime()/1000;
			if((sad - tad) < 0 ) { 
				nizNovosti[i].style.display = "none";
			}
			
	}
}

