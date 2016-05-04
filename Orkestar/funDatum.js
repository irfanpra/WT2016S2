
function dateTimeToString(datum) {
	var mjeseci=datum.substring(3,5);
	var dana=datum.substring(0,2);
	var godina=datum.substring(6,10);
   
	var sati=datum.substring(11,13);
	var minuta=datum.substring(14,16);
	
	var date = new Date(godina, mjeseci - 1,dana, sati, minuta);
	var sekundi_u_minuti=60;
	var sekundi_u_satu=3600;
	var sekundi_u_danu=86400;
	var sekundi_u_sedmici=604800;
	
    var sekundi = Math.floor((new Date() - date) / 1000);
	var minuta=sekundi/60;
	var sati=minuta/60;
	var dana=sati/24;
	var sedmica=dana/7;
    
	
	
	if (sekundi < 60) return "Novost objavljena prije par sekundi";
    if (minuta < 60) return "Novost je objavljena prije " + parseInt(minuta) + " minut" + pluralForMinutes(parseInt(minuta));
    if (sati < 24) return "Novost je objavljena prije " + parseInt(sati) + " sat" + pluralForHours(parseInt(sati));
    if (dana < 7) return "Novost je objavljena prije " + parseInt(dana) + " dan" + pluralForDays(parseInt(dana));
    if (dana < 30) return "Novost je objavljena prije " + parseInt(sedmica) + " sedmic" + PluralForWeeks(parseInt(sedmica));
    else return dateString;
}

   




    

