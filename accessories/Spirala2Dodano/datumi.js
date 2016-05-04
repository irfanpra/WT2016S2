window.onload = function(){

	var trenutnoVrijeme= new Date();
	var dan = trenutnoVrijeme.getDate();
	var mjesec = trenutnoVrijeme.getMonth() + 1; //mjeseci idu od 0
	var godina = trenutnoVrijeme.getFullYear();
	var sat = trenutnoVrijeme.getHours();
	var minute = trenutnoVrijeme.getMinutes();
	var sekunde = trenutnoVrijeme.getSeconds();
	
	   	
	var nizDana = ["dan", "dana"];
	var nizMinuta = ["minute", "minuta"];
	/*1 sat, 4 sata, 5 sati,*/
	var nizSati = ["sat", "sata", "sati"];
	
	var x ="vrijemeObjave";
	
	var zaIspisati= document.getElementsByClassName(x);

	for(var i=zaIspisati.length-1; i>=0; i--)	
	{
		var datum= zaIspisati[i].getAttribute("datetime");
		var datumNovosti= new Date(datum);

			//var brojDanaUMjesecu=IzracunajDaneUMjesecu(datumNovosti.getMonth()+1, datumNovosti.getFullYear());
			
			var datumNovostiUSekundama=datumNovosti.getSeconds()+ datumNovosti.getMinutes()*60 + datumNovosti.getHours()*60*60 + datumNovosti.getDate()*24*60*60 + (datumNovosti.getMonth()+1)*30*24*60*60+ datumNovosti.getFullYear()*365*24*60*60;

			//var brojDanaUMjesecuTrenutnogDatuma=IzracunajDaneUMjesecu(mjesec,godina);
			var trenutniDatumUSekundama=sekunde+minute*60 + sat*60*60 + dan*24*60*60 + mjesec*30*24*60*60+ godina*365*24*60*60;
			var razlika= trenutniDatumUSekundama-datumNovostiUSekundama;
			if(razlika<0) razlika=razlika*(-1);
		if(razlika<60)
		{
			document.getElementsByClassName("obavijest")[i].innerHTML="Objavljeno prije par sekundi";
		}
		else if( razlika>=60 && razlika< 3600)
		{
			razlika=parseInt(razlika/60);
			
			var index=IndexNizaMinute(razlika);
			document.getElementsByClassName("obavijest")[i].innerHTML=IspisiPrije(razlika,nizMinuta[index]);
		}
		else if(razlika>=3600 && razlika< 86400)
		{
			razlika= parseInt(razlika/3600);
			var index=IndexNizaSati(razlika);
			document.getElementsByClassName("obavijest")[i].innerHTML=IspisiPrije(razlika,nizSati[index]);
		}
		else if(razlika>=86400 && razlika< 604800)
		{
			razlika=parseInt(razlika/86400);
			var index= IndexNizaDani(razlika);
			document.getElementsByClassName("obavijest")[i].innerHTML=IspisiPrije(razlika, nizDana[index]);
		}
		else if(razlika>=604800 && razlika< 2419200)//4 sedmice 4*604800 sekundi
		{
			razlika=parseInt(razlika/604800);
			document.getElementsByClassName("obavijest")[i].innerHTML=IspisXSedmica(razlika);
		}
		//vise od 4 sedmice ispisi datum
		else
		{
			document.getElementsByClassName("obavijest")[i].innerHTML=Ispisi(datumNovosti.getDate(),(datumNovosti.getMonth()+1), datumNovosti.getFullYear());
		}
		
	}
	
   
}

function Ispisi(dan, mjesec, godina)
   {
	   return " Objavljeno "+ dan + "/" + mjesec + "/" + godina;
   }
   function IzracunajRazliku(x,y)
   {
	   return x - y; 
   }
   function IspisiPrije(broj, string)
   {
	   return "Objavljeno prije " + broj + " " + string;
   }
   function IspisiPrijeParSekundi()
   {
	   return "Objavljeno prije par sekundi !";
   }
   function IspisXSedmica(broj)
   {
	   return "Objavljeno prije " + broj+ " sedmice !";
   }
	function IndexNizaSati(broj)
	{
		var index;
		if(broj==1 || broj==21)
		{
			index=0; 
		}
		else if(broj>=2 && broj<=4)
		{
			index=1;
		}
		else if(broj>=5 || broj<=20)
		{
			index=2;
		}
		else if(broj>=22 && broj<=23)
		{
				index=1;
		}
		return index;
	}
	function IndexNizaDani(broj)
	{
		var index;
		if(broj==1)
		{
			index=0;
		}
		else
		{
			index=1;
		}
		return index;
	}
	function IndexNizaMinute(broj)
	{
		var index;
		if(broj>=1 && broj<=4 || broj>=21 && broj<=24 || broj>=31 && broj<=34 || broj>=41 && broj<=44 || broj>=51 && broj<=54)
		{
			index=0;
		}
		else 
		{
			index=1;
		}
		return index;
	}
	function PrestupnaGodina(godina)
	{
		
		if (godina%4 == 0)
			{
				if (godina%100 == 0)
					{
						if (godina%400 == 0)
							{
								return true;
							}
						else
							{
							return false;
							}
					}
				else 
					{
						return true;
					}
			}
		else 
			{
				return false;
			}
	}
	function IzracunajDaneUMjesecu(mjesec,godina)
	{
		if(mjesec==1 || mjesec==3 || mjesec==5 || mjesec==7 || mjesec==8 || mjesec==10 || mjesec==12)
			{
				return 31;
			}
			else if(mjesec==2)
			{
				var prestupna=PrestupnaGodina(godina);
				if(prestupna==true) return 29;
				else return 28;
			}
		else
			{
				return 30;
			}
	}
	
	//test
	// function IspisiFebruar(broj)
	// {
		// return "februae je" + broj +" ";
	// }