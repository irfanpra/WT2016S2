//Validacija forme za kontakt
var sveIspravno=true;
	
var provjeriGreske = function(sveGreske){
	for (var i = 0; i < sveGreske.length; i++){
		if(sveGreske[i].innerHTML != "  "){
			sveIspravno = false;
			return;
		}
	}
	sveIspravno = true;
};
	
function validacijaForme(){
	//Varijable za provjeru ispravnosti
	var ime=document.getElementById("name").value;
	var email=document.getElementById("email").value;
	var poruka=document.getElementById("message").value;
	var tekstKod = document.getElementById("tekstKod").textContent;
	var kod=document.getElementById("kod1").value;
	var kodPotvrda=document.getElementById("kod2").value;
	
			
	//varijable za ispis greske
	var imeLabel = document.getElementById("greskaIme");
	imeLabel.innerHTML="  "; //ciscenje ispisa greske zbog dupliciranja
	var emailLabel = document.getElementById("greskaEmail");
	emailLabel.innerHTML="  ";
	var porukaLabel = document.getElementById("greskaPoruka");
	porukaLabel.innerHTML="  ";
	var kod1Label = document.getElementById("greskaKod1");
	kod1Label.innerHTML="  ";
	var kod2Label = document.getElementById("greskaKod2");
	kod2Label.innerHTML="  ";
		
		
	//Provjera ispravnosti imena
	//Provjerava se da ime pocinje velikim slovom, ostala slova su mala, te da duzina rijeci nije manja od 3 slova
	//VAZNA NAPOMENA: regex ne prepoznaje afrikate (UTF-8)
	if (ime=="" || !ime.match(/^[a-zA-Z]+$/) ) {
		document.getElementById("name").style.backgroundImage="url(Slike/invalid_icon.jpg)";
		document.getElementById("name").style.backgroundPosition="right top";
		document.getElementById("name").style.backgroundRepeat="no-repeat";
		imeLabel.innerHTML +="Neispravan unos!";
		if (sveIspravno==true) document.getElementById("name").focus();
		sveIspravno=false;
		}
	else {
		document.getElementById("name").style.backgroundImage="url(Slike/valid_icon.gif)";
		document.getElementById("name").style.backgroundPosition="right top";
		document.getElementById("name").style.backgroundRepeat="no-repeat";
		}
	
	//Provjera ispravnosti unesene email adrese (mora da sadrzi @ i poslije toga ekstenziju sa najmanje 2 slova)
	if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || email=="") {
		document.getElementById("email").style.backgroundImage="url(Slike/invalid_icon.jpg)";
		document.getElementById("email").style.backgroundPosition="right top";
		document.getElementById("email").style.backgroundRepeat="no-repeat";
		emailLabel.innerHTML +="E-mail adresa nije validna!";
		if (sveIspravno==true) document.getElementById("email").focus();
		sveIspravno=false;
		}
	else {
		document.getElementById("email").style.backgroundImage="url(Slike/valid_icon.gif)";
		document.getElementById("email").style.backgroundPosition="right top";
		document.getElementById("email").style.backgroundRepeat="no-repeat";
		}
	
	//Provjera unesenog koda(da li odgovara kodu sa slike)
	if (!kod.match(tekstKod) || kod=="") {
		document.getElementById("kod1").style.backgroundImage="url(Slike/invalid_icon.jpg)";
		document.getElementById("kod1").style.backgroundPosition="right top";
		document.getElementById("kod1").style.backgroundRepeat="no-repeat";
		kod1Label.innerHTML +="Niste unijeli kod sa slike";
		if (sveIspravno==true) document.getElementById("kod1").focus();
		sveIspravno=false;
	}
	else {
		document.getElementById("kod1").style.backgroundImage="url(Slike/valid_icon.gif)";
		document.getElementById("kod1").style.backgroundPosition="right top";
		document.getElementById("kod1").style.backgroundRepeat="no-repeat";
	}
		
	//Multiple validacija (provjera podudaranja unesenih kodova)
	if (!kodPotvrda.match(tekstKod) || kodPotvrda!=kod || kodPotvrda=="") {
		document.getElementById("kod2").style.backgroundImage="url(Slike/invalid_icon.jpg)";
		document.getElementById("kod2").style.backgroundPosition="right top";
		document.getElementById("kod2").style.backgroundRepeat="no-repeat";
		kod2Label.innerHTML +="Niste ispravno potvrdili uneseni kod!";
		if (sveIspravno==true) document.getElementById("kod2").focus();
		sveIspravno=false;
	}
	else {
		document.getElementById("kod2").style.backgroundImage="url(Slike/valid_icon.gif)";
		document.getElementById("kod2").style.backgroundPosition="right top";
		document.getElementById("kod2").style.backgroundRepeat="no-repeat";
	}

	var sveGreske = [greskaIme, greskaEmail, greskaKod1, greskaKod2];
	provjeriGreske(sveGreske);
			
	if(sveIspravno==true)
		document.getElementById("kontaktForma").submit();
	else
		return false;
}

function validacijaTekstPolja(tekst, id)
{
	if(id=="name")
	{
		if (tekst=="" || !tekst.match(/^[a-zA-Z]+$/) ) {
			document.getElementById("name").style.backgroundColor="#FA5858";
			if (sveIspravno==true) document.getElementById("name").focus();
			sveIspravno=false;
		}
		else
			document.getElementById("name").style.backgroundColor="#81F781";
	}
	else if(id=="email")
	{
		if (!tekst.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || tekst=="") {
			document.getElementById("email").style.backgroundColor="#FA5858";
			if (sveIspravno==true) document.getElementById("email").focus();
			sveIspravno=false;
		}
		else 
			document.getElementById("email").style.backgroundColor="#81F781";
	}
	else if(id=="kod1")
	{
		var tekstKod = document.getElementById("tekstKod").textContent;
		if (!tekst.match(tekstKod) || tekst=="") {
			document.getElementById("kod1").style.backgroundColor="#FA5858";
		if (sveIspravno==true) document.getElementById("kod1").focus();
		sveIspravno=false;
		}
		else
			document.getElementById("kod1").style.backgroundColor="#81F781";
	}
	else if(id=="kod2")
	{
		var tekstKod = document.getElementById("tekstKod").textContent;
		var kod=document.getElementById("kod1").value;
		if (!tekst.match(tekstKod) || tekst!=kod || tekst=="") {
			document.getElementById("kod2").style.backgroundColor="#FA5858";
		if (sveIspravno==true) document.getElementById("kod2").focus();
		sveIspravno=false;
		}
		else 
			document.getElementById("kod2").style.backgroundColor="#81F781";
	}
}