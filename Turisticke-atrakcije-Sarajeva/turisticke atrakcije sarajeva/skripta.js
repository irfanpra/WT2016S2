
window.onload = function () {

  var datumi=document.getElementsByClassName("datum");
  console.log("datum");
  
  for(var i=0; datumi.length;i++)
  {
	  var s = datumi[i].getAttribute("datetime");
	  var ispisi=objavljenoPrije(s);
	  document.getElementsByClassName("datum")[i].innerHTML = ispisi;
  }
}


function objavljenoPrije(datum)
{
	var pom="";
	var danas=new Date();
	var datumObjave=new Date(datum);
	var godina=datumObjave.getFullYear();

	var razlikaVrijeme =danas.getTime() - datumObjave.getTime();
	console.log(razlikaVrijeme);
	var razlikaMinute= Math.ceil(razlikaVrijeme/(1000*60));
	var razlikaSati= Math.ceil(razlikaMinute/60);
	var razlikaDani = Math.ceil(razlikaVrijeme / (1000 * 3600 * 24)); 
	
	if (razlikaMinute<=1) pom="prije par sekundi";
	else if (razlikaSati<=1)
	{
		if (razlikaMinute%10==1) pom="prije "+razlikaMinute.toString()+" minutu";
		else if (razlikaMinute%10>1 && razlikaMinute%10<5) pom="prije "+razlikaMinute.toString()+" minute";
		else pom=" prije "+razlikaMinute.toString()+" minuta";
	}
	else if (razlikaSati<24)
	{
		if (razlikaSati%10==1) pom="prije "+razlikaSati.toString()+" sat";
		else if (razlikaSati%10>1 && razlikaSati%10<5) pom=" prije "+razlikaSati.toString()+" sata";
		else pom=" prije "+razlikaSati.toString()+" sati";
	}
	else if (razlikaDani<=7)
	{
		if (razlikaDani%10==1) pom=" prije "+razlikaDani.toString()+" dan";
		else pom=" prije "+razlikaDani.toString()+" dana";
	}
	else if (razlikaDani>7 && razlikaDani<=14) pom=" prije 1 sedmicu";
	else if (razlikaDani>14 && razlikaDani<=21) pom=" prije 2 sedmice";
	else if (razlikaDani>21 && razlikaDani<=28) pom=" prije 3 sedmice";
	else if(razlikaDani>28 && razlikaDani<=31) pom=" prije 4 sedmice";
	else 
	return datumObjave.getDate()+"."+datumObjave.getMonth()+"."+godina+".";


	return pom;

}





