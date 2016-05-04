function filtriraj () 
{
	
	var trenutnoVrijeme = new Date();
	var vrijemeObjava= document.getElementsByClassName("objavljeno");
	
	var sveNovosti = document.getElementById("novostiSection").children;
	
	
	var trenMin = trenutnoVrijeme.getMinutes();
	var trenSat = trenutnoVrijeme.getHours();
	var trenDan = trenutnoVrijeme.getDate();
	var trenMjesec = trenutnoVrijeme.getMonth()+1;
	var trenGodina = trenutnoVrijeme.getFullYear();

	
    var filter = document.getElementById("novosti");
    var vrijednost = filter.options[filter.selectedIndex].value;
	
	for(var i=0; i<sveNovosti.length; i++) 
	{
		sveNovosti[i].classList.remove("hidden");
	}
	
    if (vrijednost == "D")
    {
		for(var i=0; i<sveNovosti.length; i++)
		{
			var objavaVrijeme = new Date(sveNovosti[i].getElementsByTagName("time")[0].getAttribute("datetime")); 
				
			var objavaSat = objavaVrijeme.getHours();
			var objavaDan = objavaVrijeme.getDate();
			var objavaMjesec = objavaVrijeme.getMonth()+1;
			var objavaGodina = objavaVrijeme.getFullYear();
			var objavaMin = objavaVrijeme.getMinutes();
			var minute_Trenutne = (((((trenGodina*365)+((trenMjesec-1)*30)+trenDan)*24)+trenSat)*60)+trenMin;
			var minute_Objave = (((((objavaGodina*365)+((objavaMjesec-1)*30)+objavaDan)*24)+objavaSat)*60)+objavaMin;
			
			if (minute_Trenutne - minute_Objave > 1439 )
			{
				sveNovosti[i].className += " hidden";
			}

		}
	
        
    }  

	if (vrijednost == "S")
    {
		for(var i=0; i<sveNovosti.length; i++)
		{
			var objavaVrijeme = new Date(sveNovosti[i].getElementsByTagName("time")[0].getAttribute("datetime")); 
				
			var objavaSat = objavaVrijeme.getHours();
			var objavaDan = objavaVrijeme.getDate();
			var objavaMjesec = objavaVrijeme.getMonth()+1;
			var objavaGodina = objavaVrijeme.getFullYear();
			var objavaMin = objavaVrijeme.getMinutes();
			var minute_Trenutne = (((((trenGodina*365)+((trenMjesec-1)*30)+trenDan)*24)+trenSat)*60)+trenMin;
			var minute_Objave = (((((objavaGodina*365)+((objavaMjesec-1)*30)+objavaDan)*24)+objavaSat)*60)+objavaMin;
			
			if (minute_Trenutne - minute_Objave > 10079 )
			{
				sveNovosti[i].classList.add("hidden");
			}

		}
	
        
    }
	
	if (vrijednost == "M")
    {
		for(var i=0; i<sveNovosti.length; i++)
		{
			var objavaVrijeme = new Date(sveNovosti[i].getElementsByTagName("time")[0].getAttribute("datetime")); 
				
			var objavaSat = objavaVrijeme.getHours();
			var objavaDan = objavaVrijeme.getDate();
			var objavaMjesec = objavaVrijeme.getMonth()+1;
			var objavaGodina = objavaVrijeme.getFullYear();
			var objavaMin = objavaVrijeme.getMinutes();
			var minute_Trenutne = (((((trenGodina*365)+((trenMjesec-1)*30)+trenDan)*24)+trenSat)*60)+trenMin;
			var minute_Objave = (((((objavaGodina*365)+((objavaMjesec-1)*30)+objavaDan)*24)+objavaSat)*60)+objavaMin;
			
			if (minute_Trenutne - minute_Objave > 40290 )
			{
				sveNovosti[i].classList.add("hidden");
			}

		}
	
        
    }



	
		
}