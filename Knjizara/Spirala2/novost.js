function Sve()
{
	window.open("file:///C:/Users/Ramiza/Desktop/ProjektniZadatak/SveNovosti.html");
}
function Dan()
{
	window.open("file:///C:/Users/Ramiza/Desktop/ProjektniZadatak/DanasnjeNovosti.html");
}
function Sedmica()
{
	window.open("file:///C:/Users/Ramiza/Desktop/ProjektniZadatak/SedmicneNovosti.html");
}
function Mjesec()
{
	window.open("file:///C:/Users/Ramiza/Desktop/ProjektniZadatak/MjesecneNovosti.html");
}
function Objava()
{
	var t1 = new Date(2016, 2, 23, 2, 2, 3);
    var t2 = new Date();
	var datum = t1.getDate() + "." + t1.getDay() + "." + t1.getFullYear() + ".";
    var razlika = t1.getTime() - t2.getTime();
    var Seconds_from_T1_to_T2 = razlika / 1000;
    var sekunde = Math.floor((Seconds_from_T1_to_T2)); //ukupan broj sekundi između dva datuma	
	var s = Math.floor(((((((sekunde%60)%3600)%86400)%604800)%241922)%29030400));
	var minute = Math.floor((sekunde/60));
	var sati = Math.floor(((sekunde%60)/3600));
	var dan = Math.floor((((sekunde%60)%3600)/86400));
	var sedmica = Math.floor(((((sekunde%60)%3600)%86400)/604800));
	var mjesec = Math.floor((((((sekunde%60)%3600)%86400)%604800)/241922));
	var godina = Math.floor(((((((sekunde%60)%3600)%86400)%604800)%241922)/29030400));
	
	if(s == 1 || s == 21 || s == 31 || s == 41 || s == 51)
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + s + "sekundu";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + s + "sekundu";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + s + "sekundu";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + s + "sekundu";
	}
	else if((s >=2 && s <= 4) || (s >=22 && s <= 24) || (s >=32 && s <= 34) || (s >=42 && s <= 44) || (s >=52 && s <= 54))
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + s + "sekunde";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + s + "sekunde";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + s + "sekunde";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + s + "sekunde";
	}
	else if(( s >= 5 && s <= 20)|| (s >= 25 && s <= 30)|| (s >= 35 && s <= 40)|| (s >= 45 && s <= 50)|| (s >= 55 && s < 60))
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + s + "sekundi";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + s + "sekundi";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + s + "sekundi";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + s + "sekundi";
	}
	else if( minute == 1 || minute == 21 || minute == 31 || minute == 41 || minute == 51)
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + minute + "minutu";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + minute + "minutu";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + minute + "minutu";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + minute + "minutu";
	}
	else if((minute >=2 && minute <= 4) || (minute >=22 && minute <= 24) || (minute >=32 && minute <= 34) || (minute >=42 && minute <= 44) || (minute >=52 && minute <= 54))
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + minute + "minute";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + minute + "minute";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + minute + "minute";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + minute + "minute";
	}
	else if(( minute >= 5 && minute <= 20)||(minute >= 25 && minute <= 30)|| (minute >= 35 && minute <= 40)|| (minute >= 45 && minute <= 50)|| (minute >= 55 && minute < 60))
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + minute + "minuta";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + minute + "minuta";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + minute + "minuta";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + minute + "minuta";
	}
	else if( sati == 1 || sati == 21)
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + sati + "sat";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + sati + "sat";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + sati + "sat";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + sati + "sat";
	}
	else if((sati >=2 && sati <= 4) || (sati >=22 && sati < 24))
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + sati + "sata";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + sati + "sata";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + sati + "sata";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + sati + "sata";
	}
	else if(( sati >= 5 && sati <= 20))
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + sati + "sati";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + sati + "sati";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + sati + "sati";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + sati + "sati";
	}
	else if(dan == 1)
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + dan + "dan";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + dan + "dan";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + dan + "dan";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + dan + "dan";
	}
	else if( dan >=2 && dan <=6)
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + dan + "dana";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + dan + "dana";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + dan + "dana";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + dan + "dana";
	}
	else if(sedmica == 1)
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + sedmica + "sedmicu";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + sedmica + "sedmicu";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + sedmica + "sedmicu";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + sedmica + "sedmicu";
	}
	else if(sedmica>=2 && sedmica <= 4)
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + sedmica + "sedmice";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + sedmica + "sedmice";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + sedmica + "sedmice";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + sedmica + "sedmice";
	}
	else if(mjesec == 1)
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjesec";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjesec";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjesec";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjesec";
	}
	else if(mjesec>= 2 && mjesec <= 4)
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjeseca";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjeseca";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjeseca";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjeseca";
	}
	else if (mjesec >= 5 && mjesec <= 12)
	{
		document.getElementById("redObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjeseci";
		document.getElementById("reddObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjeseci";
		document.getElementById("kolonaObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjeseci";
		document.getElementById("kolonaaObjava").innerHTML = "Novost objavljena prije" + mjesec + "mjeseci";
	}
	else
	{
	 document.getElementById("redObjava").innerHTML = "Novost je objavljena "+ datum;
     document.getElementById("reddObjava").innerHTML = "Novost je objavljena "+ datum;
     document.getElementById("kolonaObjava").innerHTML = "Novost je objavljena "+ datum;
     document.getElementById("kolonaaObjava").innerHTML = "Novost je objavljena "+ datum;	 
	}	
}

function DatumDan()
{
	var t1 = new Date(2016, 2, 30, 2, 2, 3);
    var t2 = new Date();
	var datum = t1.getDate() + "." + t1.getDay() + "." + t1.getFullYear() + ".";
    var razlika = t1.getTime() - t2.getTime();
    var Seconds_from_T1_to_T2 = razlika / 1000;
    var sekunde = Math.floor((Seconds_from_T1_to_T2)); //ukupan broj sekundi između dva datuma	
	var s = Math.floor(((((((sekunde%60)%3600)%86400)%604800)%241922)%29030400));
	var minute = Math.floor((sekunde/60));
	var sati = Math.floor(((sekunde%60)/3600));
	var dan = Math.floor((((sekunde%60)%3600)/86400));
	var sedmica = Math.floor(((((sekunde%60)%3600)%86400)/604800));
	var mjesec = Math.floor((((((sekunde%60)%3600)%86400)%604800)/241922));
	var godina = Math.floor(((((((sekunde%60)%3600)%86400)%604800)%241922)/29030400));
	
	if(s == 1 || s == 21 || s == 31 || s == 41 || s == 51)
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + s + "sekundu";
	}
	else if((s >=2 && s <= 4) || (s >=22 && s <= 24) || (s >=32 && s <= 34) || (s >=42 && s <= 44) || (s >=52 && s <= 54))
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + s + "sekunde";
	}
	else if(( s >= 5 && s <= 20)|| (s >= 25 && s <= 30)|| (s >= 35 && s <= 40)|| (s >= 45 && s <= 50)|| (s >= 55 && s < 60))
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + s + "sekundi";
	}
	else if( minute == 1 || minute == 21 || minute == 31 || minute == 41 || minute == 51)
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + minute + "minutu";
	}
	else if((minute >=2 && minute <= 4) || (minute >=22 && minute <= 24) || (minute >=32 && minute <= 34) || (minute >=42 && minute <= 44) || (minute >=52 && minute <= 54))
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + minute + "minute";
	}
	else if(( minute >= 5 && minute <= 20)||(minute >= 25 && minute <= 30)|| (minute >= 35 && minute <= 40)|| (minute >= 45 && minute <= 50)|| (minute >= 55 && minute < 60))
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + minute + "minuta";
	}
	else if( sati == 1 || sati == 21)
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + sati + "sat";
	}
	else if((sati >=2 && sati <= 4) || (sati >=22 && sati < 24))
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + sati + "sata";
	}
	else if(( sati >= 5 && sati <= 20))
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + sati + "sati";
	}
	else if(dan == 1)
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + dan + "dan";
	}
	else if( dan >=2 && dan <=6)
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + dan + "dana";
	}
	else if(sedmica == 1)
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + sedmica + "sedmicu";
	}
	else if(sedmica>=2 && sedmica <= 4)
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + sedmica + "sedmice";
	}
	else if(mjesec == 1)
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + mjesec + "mjesec";
	}
	else if(mjesec>= 2 && mjesec <= 4)
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + mjesec + "mjeseca";
	}
	else if (mjesec >= 5 && mjesec <= 12)
	{
		document.getElementById("dnevno").innerHTML = "Novost objavljena prije" + mjesec + "mjeseci";
	}
	else
	{
	 document.getElementById("dnevno").innerHTML = "Novost je objavljena "+ datum;	
	}	
}

function DatumSedmica()
{
	var t1 = new Date(2016, 2, 30, 2, 2, 3);
    var t2 = new Date();
	var datum = t1.getDate() + "." + t1.getDay() + "." + t1.getFullYear() + ".";
    var razlika = t1.getTime() - t2.getTime();
    var Seconds_from_T1_to_T2 = razlika / 1000;
    var sekunde = Math.floor((Seconds_from_T1_to_T2)); //ukupan broj sekundi između dva datuma	
	var s = Math.floor(((((((sekunde%60)%3600)%86400)%604800)%241922)%29030400));
	var minute = Math.floor((sekunde/60));
	var sati = Math.floor(((sekunde%60)/3600));
	var dan = Math.floor((((sekunde%60)%3600)/86400));
	var sedmica = Math.floor(((((sekunde%60)%3600)%86400)/604800));
	var mjesec = Math.floor((((((sekunde%60)%3600)%86400)%604800)/241922));
	var godina = Math.floor(((((((sekunde%60)%3600)%86400)%604800)%241922)/29030400));
	
	if(s == 1 || s == 21 || s == 31 || s == 41 || s == 51)
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + s + "sekundu";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + s + "sekundu";
	}
	else if((s >=2 && s <= 4) || (s >=22 && s <= 24) || (s >=32 && s <= 34) || (s >=42 && s <= 44) || (s >=52 && s <= 54))
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + s + "sekunde";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + s + "sekunde";
	}
	else if(( s >= 5 && s <= 20)|| (s >= 25 && s <= 30)|| (s >= 35 && s <= 40)|| (s >= 45 && s <= 50)|| (s >= 55 && s < 60))
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + s + "sekundi";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + s + "sekundi";
	}
	else if( minute == 1 || minute == 21 || minute == 31 || minute == 41 || minute == 51)
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + minute + "minutu";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + minute + "minutu";
	}
	else if((minute >=2 && minute <= 4) || (minute >=22 && minute <= 24) || (minute >=32 && minute <= 34) || (minute >=42 && minute <= 44) || (minute >=52 && minute <= 54))
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + minute + "minute";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + minute + "minute";
	}
	else if(( minute >= 5 && minute <= 20)||(minute >= 25 && minute <= 30)|| (minute >= 35 && minute <= 40)|| (minute >= 45 && minute <= 50)|| (minute >= 55 && minute < 60))
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + minute + "minuta";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + minute + "minuta";
	}
	else if( sati == 1 || sati == 21)
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + sati + "sat";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + sati + "sat";
	}
	else if((sati >=2 && sati <= 4) || (sati >=22 && sati < 24))
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + sati + "sata";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + sati + "sata";
	}
	else if(( sati >= 5 && sati <= 20))
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + sati + "sati";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + sati + "sati";
	}
	else if(dan == 1)
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + dan + "dan";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + dan + "dan";
	}
	else if( dan >=2 && dan <=6)
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + dan + "dana";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + dan + "dana";
	}
	else if(sedmica == 1)
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + sedmica + "sedmicu";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + sedmica + "sedmicu";
		
	}
	else if(sedmica>=2 && sedmica <= 4)
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + sedmica + "sedmice";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + sedmica + "sedmice";
	}
	else if(mjesec == 1)
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + mjesec + "mjesec";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + mjesec + "mjesec";
	}
	else if(mjesec>= 2 && mjesec <= 4)
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + mjesec + "mjeseca";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + mjesec + "mjeseca";
	}
	else if (mjesec >= 5 && mjesec <= 12)
	{
		document.getElementById("sedmica1").innerHTML = "Novost objavljena prije" + mjesec + "mjeseci";
		document.getElementById("sedmica2").innerHTML = "Novost objavljena prije" + mjesec + "mjeseci";
	}
	else
	{
	 document.getElementById("sedmica1").innerHTML = "Novost je objavljena "+  new Date(2016, 2, 22, 2, 2, 3).getDate() + "." + new Date(2016, 2, 22, 2, 2, 3).getDay()+"."+ new Date(2016, 2, 22, 2, 2, 3).getFullYear()+".";	
	 document.getElementById("sedmica2").innerHTML = "Novost je objavljena "+  new Date(2016, 2, 21, 2, 2, 3).getDate() + "." + new Date(2016, 2, 21, 2, 2, 3).getDay()+"."+ new Date(2016, 2, 21, 2, 2, 3).getFullYear()+".";
	}
}
//posto nece da radi za dan i sedmicu, ostavila sam samo ovako
function DatumMjesec()
{
	document.getElementById("mjesec1").innerHTML = "Novost je objavljena "+  new Date(2016, 1, 22, 2, 2, 3).getDate() + "." + new Date(2016, 1, 22, 2, 2, 3).getDay()+"."+ new Date(2016, 1, 22, 2, 2, 3).getFullYear()+".";	
	document.getElementById("mjesec2").innerHTML = "Novost je objavljena "+  new Date(2016, 1, 3, 2, 2, 3).getDate() + "." + new Date(2016, 1, 3, 2, 2, 3).getDay()+"."+ new Date(2016, 1, 3, 2, 2, 3).getFullYear()+".";
	document.getElementById("mjesec3").innerHTML = "Novost je objavljena "+  new Date(2016, 1, 1, 2, 2, 3).getDate() + "." + new Date(2016, 1, 1, 2, 2, 3).getDay()+"."+ new Date(2016, 1, 1, 2, 2, 3).getFullYear()+".";
}
function DatumSve()
{
	document.getElementById("sve1").innerHTML = "Novost je objavljena "+  new Date(2016, 2, 31, 2, 2, 3).getDate() + "." + new Date(2016, 2, 31, 2, 2, 3).getDay()+"."+ new Date(2016, 2, 31, 2, 2, 3).getFullYear()+".";
	document.getElementById("sve2").innerHTML = "Novost je objavljena "+  new Date(2016, 2, 23, 2, 2, 3).getDate() + "." + new Date(2016, 2, 23, 2, 2, 3).getDay()+"."+ new Date(2016, 2, 23, 2, 2, 3).getFullYear()+".";
	document.getElementById("sve3").innerHTML = "Novost je objavljena "+  new Date(2016, 1, 19, 2, 2, 3).getDate() + "." + new Date(2016, 1, 19, 2, 2, 3).getDay()+"."+ new Date(2016, 1, 19, 2, 2, 3).getFullYear()+".";
	document.getElementById("sve4").innerHTML = "Novost je objavljena "+  new Date(2016, 0, 12, 2, 2, 3).getDate() + "." + new Date(2016, 0, 12, 2, 2, 3).getDay()+"."+ new Date(2016, 0, 12, 2, 2, 3).getFullYear()+".";
	document.getElementById("sve5").innerHTML = "Novost je objavljena "+  new Date(2015, 11, 5, 2, 2, 3).getDate() + "." + new Date(2015, 11, 5, 2, 2, 3).getDay()+"."+ new Date(2015, 11, 5, 2, 2, 3).getFullYear()+".";
	document.getElementById("sve6").innerHTML = "Novost je objavljena "+  new Date(2015, 10, 4, 2, 2, 3).getDate() + "." + new Date(2015, 10, 4, 2, 2, 3).getDay()+"."+ new Date(2015, 10, 4, 2, 2, 3).getFullYear()+".";
}
function ValidirajFormu()
{
	//multiple field validacija
	var x = document.forms["Forms"]["email"].value;
	var y = document.forms["Forms"]["drzava"].value;
	var z = document.forms["Forms"]["tel"].value;
	var k = document.forms["Forms"]["mss"].value;
    if (x == null || x == "") 
	{
        alert("Ne možete unijeti vrijednost ukoliko prethodno polje nije ispunjeno!");
        return false;
    }
	//regex i promjena boje
	var email = document.getElementById("email");
        var emailRegEx = /[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}/;
        if (!emailRegEx.test(email.value))
			{
			email.style.backgroundColor ="red";       
          }
		  else
		  {
			  email.style.backgroundColor ="white";
		  }
		  
	var telefon = document.getElementById("tel");
	  var telefonRegEx = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{3}$/;
	   if(!telefonRegEx.test(telefon.value))
	   {
		   telefon.style.backgroundColor ="red";       
          }
		  else
		  {
			  telefon.style.backgroundColor ="white";
		  }
		
}