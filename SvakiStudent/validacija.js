function funkcijaMultipleValidacije ()
{
	
	
	if (document.getElementById('bih').checked)
	{
		
		document.getElementById("BrojTel").value="+387 ";	
	
		
	}
	else if (document.getElementById('sad').checked)
	{
		document.getElementById("BrojTel").value="+1 ";
		
	}
	
	
}

function BrojTelefona(BrojTel){
	var broj = document.getElementById(BrojTel).value;
	if(document.getElementById('bih').checked)
	{
		var reg = /^[+]{1}[3]{1}[8]{1}[7]{1}[ ]{1}[6]{1}[0-6]{1}[0-9]{3}[0-9]{3}$/igm;
	if(!(reg.test(broj))){
		alert("broj treba biti mobilni telefon iz Bosne i Hercegovine");
		return false;
	}
	}
	else if(document.getElementById('sad').checked)
	{
		var reg = /^[+]{1}[ ]{1}[1]{1}[2]{1}[0]{1}[5]{1}[0-9]{3}[0-9]{4}$/igm;
	if(!(reg.test(broj))){
		alert("broj treba biti broj fiksnog telefona u Alabami odnosno Birmingham-u");
		return false;
	}
	}
	
	return true;
}

function validirajIme_Prezime ()
{
	
	var ime = document.getElementById('ImeiPrezime').value;
	var reg = /^[a-z]{2,30}[ ]{1}[a-z]{2,30}/igm;
	if(!(reg.test(ime))){
		document.getElementById('ImeiPrezime').style.color="red";
	}
	else document.getElementById('ImeiPrezime').style.removeProperty('color');
}
function validirajEmail(){
	var email = document.getElementById('E-Mail').value;
	
	var reg = /^[a-z]{2,30}@[a-z]{2,12}[.]{1}[a-z]{1,6}/igm;
	if(!(reg.test(email))){
		document.getElementById('E-Mail').style.color = "red";
	}
	else document.getElementById('E-Mail').style.removeProperty('color');
}
	
	