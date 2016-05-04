	function filtriraj(opcija)
	{
		if(opcija.value == "sve") prikaziSve();
		else if(opcija.value == "danasnje") prikaziDanasnje();
		else if(opcija.value == "ove_sedmice") prikaziOveSedmice();
		else prikaziOvogMjeseca();
	}

	function prikaziSve()
	{
		var vijesti = document.getElementsByClassName("other_news");
		for(i = 0; i < vijesti.length; i++)
		{
			if(vijesti[i].style.display == "none") vijesti[i].style.display = "inline-block";
		}
	}

	function prikaziDanasnje()
	{
		prikaziSve();
		var vijesti = document.getElementsByClassName("other_news");
		var vremena = document.getElementsByClassName("date_published");
		for(i = 0; i < vijesti.length; i++)
		{
			var trenutno = new Date();
			var vrijeme = new Date(vremena[i].innerHTML);
			if( !( vrijeme.getDate() == trenutno.getDate() && vrijeme.getMonth() == trenutno.getMonth() && vrijeme.getFullYear() == trenutno.getFullYear()  ) ) 
				vijesti[i].style.display = "none";
		}
	}

	function prikaziOveSedmice()
	{
		prikaziSve();
		var vijesti = document.getElementsByClassName("other_news");
		var vremena = document.getElementsByClassName("date_published");
		for(i = 0; i < vijesti.length; i++)
		{
			var trenutno = new Date();
			var vrijeme = new Date(vremena[i].innerHTML);
			var razlika = (trenutno.getTime() - vrijeme.getTime()) / 1000;
			if( ! ( dajDan(trenutno.getDay()) >= dajDan(vrijeme.getDay()) && 
				razlika < ((6 * 24 * 60 * 60) + (trenutno.getHours() * 60 * 60) + (trenutno.getMinutes() * 60) + trenutno.getSeconds() ) ) )vijesti[i].style.display = "none";
		}
	}

	function dajDan(d)
	{
		if(d == 0) return 7;
		else return d;
	}

	function prikaziOvogMjeseca()
	{
		prikaziSve();
		var vijesti = document.getElementsByClassName("other_news");
		var vremena = document.getElementsByClassName("date_published");
		for(i = 0; i < vijesti.length; i++)
		{
			var trenutno = new Date();
			var vrijeme = new Date(vremena[i].innerHTML);
			var razlika = (trenutno.getTime() - vrijeme.getTime()) / 1000;
			if( !( trenutno.getMonth() == vrijeme.getMonth() && trenutno.getFullYear() == vrijeme.getFullYear() ) ) vijesti[i].style.display = "none";
		}
	}