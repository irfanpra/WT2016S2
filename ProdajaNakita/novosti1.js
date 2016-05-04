onload = function Datum(){
	var klasa = "vrijemeObjave";
	var Dan = ["dan", "dana"];
	var Minuta = ["minute", "minuta"];
	var Sat = ["sat", "sata", "sati"];
	var Sedmica = ["sedmicu", "sedmice"];

	var trenutnoVrijeme = new Date();
	var dd = trenutnoVrijeme.getDate();
	var mm = trenutnoVrijeme.getMonth()+1; 
	var yyyy = trenutnoVrijeme.getFullYear();
	var hh = trenutnoVrijeme.getHours();
	var min = trenutnoVrijeme.getMinutes();
	
	var ispis = document.getElementsByClassName(klasa);
	for(var i=0; i<ispis.length; i++){
		var s = ispis[i].getAttribute("datetime");
		var ispis_date = new Date(s);
		if(yyyy - ispis_date.getFullYear() == 0)
		{
			if(mm-(ispis_date.getMonth()+1)==0)
			{
				if(dd-ispis_date.getDate()==0)
				{
					if(hh-ispis_date.getHours()==0)
					{
						if(min-ispis_date.getMinutes()==0)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=" par sekundi";
						}
						else if(min-ispis_date.getMinutes()<5)
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(min-ispis_date.getMinutes(),Minuta[0]);
						else document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(min-ispis_date.getMinutes(),Minuta[1]);
					}else {
						if(min-ispis_date.getMinutes()<0)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(min+(60-ispis_date.getMinutes()),Minuta[1]);
					}else
						if(min-ispis_date.getMinutes()>0 && hh-ispis_date.getHours()==1)
						{
						document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(hh-ispis_date.getHours(),Sat[0]);
						}
					else if(hh-ispis_date.getHours()>1 && hh-ispis_date.getHours()<5)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(hh-ispis_date.getHours(),Sat[1]);
						}
					else if(hh-ispis_date.getHours()>=5 && hh-ispis_date.getHours()<21)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(hh-ispis_date.getHours(),Sat[2]);
						}
					else if(hh-ispis_date.getHours()==21)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(hh-ispis_date.getHours(),Sat[0]);
						}
					else if(hh-ispis_date.getHours()>21 && hh-ispis_date.getHours()<=24)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(hh-ispis_date.getHours(),Sat[1]);
						}
					}
				}
				else if(dd-ispis_date.getDate()>=1 && dd-ispis_date.getDate()<=2)
					{
					
						if(hh-ispis_date.getHours()<0)
						{
							if(hh+(24-ispis_date.getHours())==1 || hh+(24-ispis_date.getHours())==21) 
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(hh+(24-ispis_date.getHours()),Sat[0]);
							else if((hh+(24-ispis_date.getHours())>1 && hh+(24-ispis_date.getHours())<5) || (hh+(24-ispis_date.getHours())>21 && hh+(24-ispis_date.getHours())<24))
							{
								document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(hh+(24-ispis_date.getHours()),Sat[1]);
							}
							else if(hh+(24-ispis_date.getHours())>4 && hh+(24-ispis_date.getHours())<20)
								{
									document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(hh+(24-ispis_date.getHours()),Sat[2]);
								}
						}else if(dd-ispis_date.getDate()==2)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(dd-ispis_date.getDate(),Dan[1]);
						}else 
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(dd-ispis_date.getDate(),Dan[0]);
						}
					}
					}else if(mm-(ispis_date.getMonth()+1)==1)
					{
							if((30+dd)-ispis_date.getDate()>2 && (30+dd)-ispis_date.getDate()<7)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_((30+dd)-ispis_date.getDate(),Dan[1]);
						}
						else if((30+dd)-ispis_date.getDate()>=7 && (30+dd)-ispis_date.getDate()<14)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(1,Sedmica[0]);
						}
						else if((30+dd)-ispis_date.getDate()>=14 && (30+dd)-ispis_date.getDate()<21)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(2,Sedmica[1]);
						}
						else if((30+dd)-ispis_date.getDate()>=21 && (30+dd)-ispis_date.getDate()<28)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(3,Sedmica[1]);
						}
						else if(dd-ispis_date.getDate()==28)
						{
							document.getElementsByClassName(klasa)[i].innerHTML=ispisi_(4,Sedmica[1]);
						}
					else 
					{
						document.getElementsByClassName(klasa)[i].innerHTML=ispis_nakon4sedmice(ispis_date.getDate(), ispis_date.getMonth()+1, ispis_date.getFullYear());	
					}
			}else 
					{
						document.getElementsByClassName(klasa)[i].innerHTML=ispis_nakon4sedmice(ispis_date.getDate(), ispis_date.getMonth()+1, ispis_date.getFullYear());	
					}
		}else 
					{
						document.getElementsByClassName(klasa)[i].innerHTML=ispis_nakon4sedmice(ispis_date.getDate(), ispis_date.getMonth()+1, ispis_date.getFullYear());	
					}
	}
	
}

function ispis_nakon4sedmice(x,y,z)
{
	return x+"-"+y+"-"+z;
}
function ispisi_(broj, nesto)
{	
		return "prije "+broj+" "+nesto;
}
