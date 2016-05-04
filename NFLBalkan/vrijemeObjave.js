	window.onload = function()
	{
		var vremena = document.getElementsByClassName("date_published");
		var ispis = document.getElementsByClassName("published");
		for(i = 0; i < vremena.length; i++)
		{
			ispis[i].innerHTML = kolikoJeProslo(vremena[i].innerHTML);
		}
	}

	function kolikoJeProslo(vrijemeObjave)
	{
		var trenutno = new Date();
		var vrijeme = new Date(vrijemeObjave);
		var razlika = trenutno.getTime() - vrijeme.getTime();
		var sekunde = razlika / 1000;

		if(sekunde < 60) return "Vijest je objavljena prije par sekundi.";
		else if(sekunde < 3600) return kolikoMinuta(sekunde);
		else if(sekunde < 3600 * 24) return kolikoSati(sekunde);
		else if(sekunde < 3600 * 24 * 7) return kolikoDana(sekunde);
		else if( ( vrijeme.getDate() + 7 <= trenutno.getDate() && vrijeme.getMonth() == trenutno.getMonth() && vrijeme.getFullYear() == trenutno.getFullYear() ) ||  
			     ( vrijeme.getDate() > trenutno.getDate() && vrijeme.getMonth() + 1 == trenutno.getMonth() && vrijeme.getFullYear() == trenutno.getFullYear() ) ) return kolikoSedmica(sekunde);
		else return datumObjave(vrijemeObjave);
	}

	function kolikoMinuta(sekunde)
	{
		var minute = Math.floor(sekunde / 60);

		var string = "Vijest je objavljena prije " + minute;

		if(minute % 10 == 1 && minute != 11) string += " minutu."
		else if(minute > 11 && minute < 15) string += " minuta."
		else if(minute % 10 < 5 && minute % 10 != 0) string += " minute";
		else string += " minuta";

		return string;
	}

	function kolikoSati(sekunde)
	{
		var sati = Math.floor(sekunde / 3600);

		var string = "Vijest je objavljena prije " + sati;

		if(sati % 10 == 1 && sati != 11) string += " sat."
		else if(sati > 11 && sati < 15) string += " sati."
		else if(sati % 10 < 5 && sati % 10 != 0) string += " sata";
		else string += " sati";

		return string;
	}

	function kolikoDana(sekunde)
	{
		var dani = Math.floor(sekunde / (3600 * 24))

		var string = "Vijest je objavljena prije " + dani;

		if(dani % 10 == 1 && dani != 11) string += " dan."
		else string += " dana."

		return string;
	}

	function kolikoSedmica(sekunde)
	{
		var sedmice = Math.floor(sekunde / (3600 * 24 * 7));

		var string = "Vijest je objavljena prije " + sedmice;

		if(sedmice == 1) string += " sedmicu."
		else string += " sedmice."

		return string;
	}

	function datumObjave(vrijemeObjave)
	{
		var vrijeme =  new Date(vrijemeObjave)
		return "Vijest je objavljena: " + vrijeme.getDate() + "." + vrijeme.getMonth() + "." + vrijeme.getFullYear()+ ".";
	}