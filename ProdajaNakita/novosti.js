function sort(){
		var listaVijesti = document.getElementsByTagName("time");
		var listaV = document.getElementsByTagName("section");
		var sad = new Date();
		var indeks = 0;
		
		if(document.getElementById("odabir").value=="danas"){
		
		for (var i = 0; i < listaVijesti.length; i++) {
			var datumV = listaVijesti[i].getAttribute("datetime");
			var datum = new Date(datumV);
			if(sad.getDate()==datum.getDate() && sad.getMonth()==datum.getMonth() && sad.getFullYear()==datum.getFullYear()){
				listaV[i+indeks].style.removeProperty('display');
				}
			else {
			
				listaV[i+indeks].style.display = "none";
				}
		}
    }
	if(document.getElementById("odabir").value=="sve"){
		
		for (var i = 0; i < listaVijesti.length; i++) {
			var datumV = listaVijesti[i].getAttribute("datetime");
			var datum = new Date(datumV);
				listaV[i+indeks].style.removeProperty('display');
			
		}
    }
	if(document.getElementById("odabir").value=="ove-sedmice"){
		
		for (var i = 0; i < listaVijesti.length; i++) {
			var datumV = listaVijesti[i].getAttribute("datetime");
			var datum = new Date(datumV);
			if(sad.getDate()-datum.getDate()>=0)
			{
				if(((sad.getDate()-datum.getDate())<=sad.getDay()))
				{
					listaV[i+indeks].style.removeProperty('display');
				}else
					{
					listaV[i+indeks].style.display = "none";
					}
			}
			else if ((sad.getDate()-datum.getDate())<0){
			if(((sad.getDate()+30)-datum.getDate())<sad.getDay())
				{
					if((sad.getDate()-datum.getDate())<sad.getDay())
				{
					listaV[i+indeks].style.removeProperty('display');
				}else
					{
					listaV[i+indeks].style.display = "none";
					}
				}else listaV[i+indeks].style.display = "none";
		}		
		}
	}
	if(document.getElementById("odabir").value=="ovog-mjeseca"){
		
		for (var i = 0; i < listaVijesti.length; i++) {
			var datumV = listaVijesti[i].getAttribute("datetime");
			var datum = new Date(datumV);
			if(sad.getMonth()-datum.getMonth()==0)
			{
					listaV[i+indeks].style.removeProperty('display');
			}else
					{
					listaV[i+indeks].style.display = "none";
				
					}
		}		
	}
}