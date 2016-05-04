window.onload = function Datum(){

	var trenutno = new Date();
	var objavaKlasa = "objava";
	var dani = ["dan", "dana"];
	var minuta = ["minute", "minuta"];
	var sati = ["sat", "sata", "sati"];
	var ispis = document.getElementsByClassName(objavaKlasa);
	
	for(var i=0; i<ispis.length; i++){
		var datumObjave = new Date(ispis[i].getAttribute("datetime"));
		
		if(trenutno.getFullYear() == datumObjave.getFullYear()){
			if((trenutno.getMonth() + 1) == (datumObjave.getMonth()+1)){
				if(trenutno.getDate() == datumObjave.getDate())
				{
					if(trenutno.getHours() == datumObjave.getHours()){
					if(trenutno.getMinutes() == datumObjave.getMinutes())
					{
						document.getElementsByClassName(objavaKlasa)[i].innerHTML = " par sekundi";
					}
					else if(trenutno.getMinutes() > datumObjave.getMinutes() && (trenutno.getMinutes() - datumObjave.getMinutes())<5 ) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + (trenutno.getMinutes() - datumObjave.getMinutes()) + " " + minuta[0];
					else if(trenutno.getMinutes() > datumObjave.getMinutes()) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + (trenutno.getMinutes() - datumObjave.getMinutes()) + " " + minuta[1];
					}
					else{
						
						var trenutnoMinusObjava = (trenutno.getMinutes() + trenutno.getHours()*60) - (datumObjave.getMinutes() + datumObjave.getHours()*60);
						if(trenutnoMinusObjava < 5) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + trenutnoMinusObjava + " " + minuta[0];
						else if(trenutnoMinusObjava >5 && trenutnoMinusObjava<60) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + trenutnoMinusObjava + " " + minuta[1];
						else if(trenutnoMinusObjava>60 && trenutnoMinusObjava<120) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/60) + " " + sati[0];
						else if(trenutnoMinusObjava>120 && trenutnoMinusObjava<(60*5)) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/60) + " " + sati[1];
						else if(trenutnoMinusObjava>(60*21) && trenutnoMinusObjava<(60*22)) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/60) + " " + sati[0];
						else if(trenutnoMinusObjava>(60*22) && trenutnoMinusObjava<(60*25)) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/60) + " " + sati[1];
						else document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/60) + " " + sati[2];
					}
					
				
				}
				else{
					var trenutnoMinusObjava = (trenutno.getMinutes() + trenutno.getHours()*60 + trenutno.getDate()*60*24) - (datumObjave.getMinutes() + datumObjave.getHours()*60 + datumObjave.getDate()*60*24);
					if(trenutnoMinusObjava < 5) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + trenutnoMinusObjava + " " + minuta[0]; 
					else if(trenutnoMinusObjava >5 && trenutnoMinusObjava<60) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + trenutnoMinusObjava + " " + minuta[1];
					else if(trenutnoMinusObjava>60 && trenutnoMinusObjava<120) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/60) + " " + sati[0];
					else if(trenutnoMinusObjava>120 && trenutnoMinusObjava<240) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/60) + " " + sati[1];
					else{
						trenutnoMinusObjava = parseInt(trenutnoMinusObjava/60);
						if(trenutnoMinusObjava < 21) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + trenutnoMinusObjava + " " + sati[2];
						else if(trenutnoMinusObjava == 21) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + trenutnoMinusObjava + " " + sati[0];
						else if(trenutnoMinusObjava < 24) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + trenutnoMinusObjava + " " + sati[1]; 
						else if(parseInt(trenutnoMinusObjava/24)==1) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/24) + " " + dani[0];
						else if(parseInt(trenutnoMinusObjava/24)<7)document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/24) + " " + dani[1];
						else if(parseInt(trenutnoMinusObjava/24)>7)document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt((trenutnoMinusObjava/24)/7) + " sedmice";
					}
				}
			}
				else{
					var trenutnoMinusObjava = (trenutno.getMinutes() + trenutno.getHours()*60 + trenutno.getDate()*60*24 + (trenutno.getMonth()+1)*30*60*24) - (datumObjave.getMinutes() + datumObjave.getHours()*60 +datumObjave.getDate()*60*24 +(datumObjave.getMonth()+1)*60*24*30);
					if(trenutnoMinusObjava < 5) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + trenutnoMinusObjava + " " + minuta[0]; 
					else if(trenutnoMinusObjava >5 && trenutnoMinusObjava<60) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + trenutnoMinusObjava + " " + minuta[1];
					else if(trenutnoMinusObjava>60 && trenutnoMinusObjava<120) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/60) + " " + sati[0];
					else if(trenutnoMinusObjava>120 && trenutnoMinusObjava<240) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/60) + " " + sati[1];
					else{
						trenutnoMinusObjava = parseInt(trenutnoMinusObjava/60);
						if(trenutnoMinusObjava < 24) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + trenutnoMinusObjava + " " + sati[2];
						else if(parseInt(trenutnoMinusObjava/24)==1) document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/24) + " " + dani[0];
						else if(parseInt(trenutnoMinusObjava/24)<7)document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt(trenutnoMinusObjava/24) + " " + dani[1];
						else if(parseInt(trenutnoMinusObjava/24)>7 && parseInt(trenutnoMinusObjava/24)<28)document.getElementsByClassName(objavaKlasa)[i].innerHTML = " prije " + parseInt((trenutnoMinusObjava/24)/7) + " sedmice";
						else document.getElementsByClassName(objavaKlasa)[i].innerHTML=" " + datumObjave.getDate() + "-" + (datumObjave.getMonth()+1) + "-" + datumObjave.getFullYear() + " g";
					}
				}
			
		
		}
		else document.getElementsByClassName(objavaKlasa)[i].innerHTML=" " + datumObjave.getDate() + "-" + (datumObjave.getMonth()+1) + "-" + datumObjave.getFullYear() + " g";
	}
}


