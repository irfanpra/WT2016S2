function validirajPolje(polje) {
	if(polje.id == "ime")
        if(validirajIme(polje.value) == 0) 
			polje.style.backgroundColor = "#FF6347";
        else 
			polje.style.backgroundColor = "white";
	
	if(polje.id == "prezime")
        if(validirajIme(polje.value) == 0) 
			polje.style.backgroundColor = "#FF6347";
        else polje.style.backgroundColor = "white";
		
	if(polje.id == "email")
        if(validirajMail(polje.value) == 0) 
			polje.style.backgroundColor = "#FF6347";
        else 
			polje.style.backgroundColor = "white";
		
	if(polje.id == "broj")
        if(validirajBroj(polje.value) == 0) 
			polje.style.backgroundColor = "#FF6347";
        else 
			polje.style.backgroundColor = "white";
}

function validirajIme(value) {
	var regIme = /^[A-Z][a-z]*$/
	if(regIme.test(value) || value === "")
		return true;
	return false;
}

function validirajMail(value) {
	var regMail = /\S+@\S+\.\S+/;
    if(regMail.test(value) || value === "")
		return true;
}

function validirajBroj(value) {
	var regBroj = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	//Multiple ovisnost, mora se ostaviti email ako ce se ostaviti polje broj prazno
	if(regBroj.test(value) || (value === "" && validirajIme(document.forms["forma"].getElementById("email").value)))
		return true;
	return false;
}

function validirajSve(objekat) {
    var p = document.forms["forma"].getElementsByTagName("input");
    for (var i = p; i < p.length-1; i++) {
        validirajPolje(p[i]);
    }
}