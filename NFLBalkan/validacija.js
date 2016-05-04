	function validiraj(varijabla)
	{
		if(varijabla == "ime") var pom = setInterval(function() { validirajImePrezime("ime") }, 100);
		else if(varijabla == "prezime") var pom = setInterval(function() { validirajImePrezime("prezime") }, 100);
		else if(varijabla == "email") var pom = setInterval(function() { validirajEmail() }, 100);
		else var pom = setInterval(function() { validirajClanak() }, 100);
	}


	function validirajImePrezime(varijabla) 
	{
		var validno = false;
		var imePrezime = document.getElementById(varijabla);
		var re = /^[A-Z][a-z]{1,15}$/gm;
		if(!re.test(imePrezime.value)) imePrezime.style.backgroundColor = "red";
		else
		{
		 	imePrezime.style.backgroundColor = "white";
		 	validno = true;
		}
		return validno;
	}

	function validirajEmail()
	{
		var validno = false;
		var email = document.getElementById("email");
		var re = /\S+@\S+\.\S+/gm;
		var emailString = email.value;
		var ime = document.getElementById("ime").value;
		var prezime = document.getElementById("prezime").value;
		if( !(re.test(email.value) && ( emailString.indexOf(ime.toLowerCase()) > -1  || emailString.indexOf(prezime.toLowerCase()) > -1) )  ) email.style.backgroundColor = "red";
		else
		{
			email.style.backgroundColor = "white";
			validno = true;
		}
		return validno;
	}

	function validirajClanak()
	{
		var validno = false;
		var clanak = document.getElementById("clanak")
		var clanakString = clanak.value;
		if( clanakString.length == 0 ) clanak.style.backgroundColor = "red";
		else 
		{
			clanak.style.backgroundColor = "white";
			validno = true;
		}
		return validno;
	}

	function posalji()
	{
		if(validirajImePrezime("ime") && validirajImePrezime("prezime") && validirajEmail() && validirajClanak() )
			alert("Uspješno ste poslali članak.")
		else alert("Neka od vrijednosti nije ispravno unesena!");
		return true;
	}