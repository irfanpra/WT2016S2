function onBlurValid(element) {
	var em = document.getElementById(element);

	if(em.value == null || em.value == "") {
		em.style.backgroundColor = "red";
	}
}

function onKeyUpValid(element) {
	var em = document.getElementById(element);

	if(em.value != null && em.value != "") {
		em.style.backgroundColor = "white";
	}
}

function onBlurUnakrsno(element) {
	var adresa = document.getElementById("adresa");
	var mail = document.getElementById("email");

	// Ako nije unesena adresa, onda mora biti unesen mail 
	// po standardu RFC 5322
	if(testMail() || adresa.value != "") {
		mail.style.backgroundColor = "white";
		adresa.style.backgroundColor = "white";
	} else {
		if(element == "email") mail.style.backgroundColor = "red";
		else adresa.style.backgroundColor = "red";
	}
}

function onKeyUnakrsno() {
    var mail = document.getElementById('email');
    var adresa = document.getElementById('adresa');

	if (testMail() || adresa.value != "") {
		mail.style.backgroundColor = "white";
		adresa.style.backgroundColor = "white";
	} 
}

function testMail() {
	var mail = document.getElementById("email");
	var pattern = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
    return pattern.test(mail.value);
}

function onSubimtForm() {
    var mail = document.getElementById('email');
    var adresa = document.getElementById('adresa');
    var ime = document.getElementById('ime');
    var komentar = document.getElementById('text');

    var good = true;

    if(!testMail() && adresa.value == "") {
    	mail.style.backgroundColor = "red";
    	good = false;
    }

    if(ime.value == "") {
    	ime.style.backgroundColor = "red";
    	good = false;
    }

    if(komentar.value == "") {
    	komentar.style.backgroundColor = "red";
    	good = false;
    }

    return good;
}