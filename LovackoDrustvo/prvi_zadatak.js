onload = function vrijemeObjave ()
{
	
	
	var trenutnoVrijeme = new Date();
	var vrijemeObjava= document.getElementsByClassName("objavljeno");
	
	var trenMin = trenutnoVrijeme.getMinutes();
	var trenSat = trenutnoVrijeme.getHours();
	var trenDan = trenutnoVrijeme.getDate();
	var trenMjesec = trenutnoVrijeme.getMonth()+1;
	var trenGodina = trenutnoVrijeme.getFullYear();
	
	for(var i=0; i<vrijemeObjava.length; i++)
	{
		var objavaVrijeme = new Date(vrijemeObjava[i].getAttribute("datetime")); 
		var objavaMin = objavaVrijeme.getMinutes();
		var objavaSat = objavaVrijeme.getHours();
		var objavaDan = objavaVrijeme.getDate();
		var objavaMjesec = objavaVrijeme.getMonth()+1;
		var objavaGodina = objavaVrijeme.getFullYear();
		
		var minute_Trenutne = (((((trenGodina*365)+((trenMjesec-1)*30)+trenDan)*24)+trenSat)*60)+trenMin;
		var minute_Objave = (((((objavaGodina*365)+((objavaMjesec-1)*30)+objavaDan)*24)+objavaSat)*60)+objavaMin;
		
		// Objave vece od 4 sedmice
		if (minute_Trenutne - minute_Objave > 40290)
		{
			document.getElementsByClassName("objavljeno")[i].innerHTML="Objavljeno: "+objavaDan+"."+objavaMjesec+"."+objavaGodina+".";
		}
		
		
		// Objave prije nekoliko sedmica
		if (minute_Trenutne - minute_Objave < 40320 && minute_Trenutne - minute_Objave > 10079)
		{
			var sedmice= parseInt((minute_Trenutne - minute_Objave)/10080);
			
			if(sedmice == 1){
			document.getElementsByClassName("objavljeno")[i].innerHTML="prije: "+sedmice+" sedmica";
			}
		
			else{
			document.getElementsByClassName("objavljeno")[i].innerHTML="prije: "+sedmice+" sedmice";
			}
			
		}
		
		
		
		// Objave prije nekoliko dana 
		else if (minute_Trenutne - minute_Objave < 10080 && minute_Trenutne - minute_Objave > 1439) 
		{
			var dani = parseInt((minute_Trenutne - minute_Objave)/1440);
			
			if(dani == 1){
			document.getElementsByClassName("objavljeno")[i].innerHTML="prije: "+dani+" dan";
			}
		
			else{
			document.getElementsByClassName("objavljeno")[i].innerHTML="prije: "+dani+" dana";
			}
			
		}
	
		
		// Objave prije nekoliko sati
		
		else if (minute_Trenutne - minute_Objave < 1440 && minute_Trenutne - minute_Objave > 59 )
		{
			var sati = parseInt((minute_Trenutne/60) - (minute_Objave/60));
			
			if(sati == 1 || sati == 21 ){
			document.getElementsByClassName("objavljeno")[i].innerHTML="prije: "+sati+" sat";
			}
			
			else if(sati == 2 || sati == 3 || sati == 4 || sati == 22 || sati == 23){
				document.getElementsByClassName("objavljeno")[i].innerHTML="prije: "+sati+" sata";
			}
		
			else{
			document.getElementsByClassName("objavljeno")[i].innerHTML="prije: "+sati+" sati";
			}
			
		}
			
		
		// Objave prije nekoliko minuta
		
		else if(minute_Trenutne - minute_Objave < 60 && minute_Trenutne - minute_Objave > 0)
		{
			minute = minute_Trenutne - minute_Objave;
			
			if (minute == 2 || minute == 3 || minute == 4 || minute == 22  || minute == 23 || minute == 24 || minute == 32 || minute == 33 || minute == 34 || minute == 42 || minute == 43 || minute == 44 || minute == 52 || minute == 53 || minute == 54  ) {
				document.getElementsByClassName("objavljeno")[i].innerHTML="prije: "+minute+" minute";
			}
			
			else {
			document.getElementsByClassName("objavljeno")[i].innerHTML="prije: "+minute+" minuta";
			}
		
			
		}
		
		// Objave prije par sekundi
		else if(minute_Trenutne - minute_Objave <= 0)
		{
			document.getElementsByClassName("objavljeno")[i].innerHTML="prije: par sekundi..";
			
		}
		
			
	
	}
	
	
}