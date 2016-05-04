window.onload = function init(){
	var vijesti = document.getElementById("vijesti");
	for(var i = 0; i < novosti_json.length; i++){
		var vrijemeRazlika = new Date();
		vrijemeRazlika = (vrijemeRazlika.getTime() - novosti_json[i].vrijemeObjave.getTime())/1000; // vrijemeRazlika je varijabla koja čuva razliku izmedju trenutnog i vremena objave
		kreirajNovost(novosti_json[i], vrijemeRazlika);	
	}
}
//==============================================================================================================================================================================
function kreirajNovost(novostObj, vrijemeRazlika){
	vrijemeRazlika = odrediVrijeme(vrijemeRazlika, novostObj.vrijemeObjave);
	var novost = document.createElement("div");
	novost.className = "novost";
	var img = document.createElement("img");
	img.src = novostObj.imagePath;
	img.alt = novostObj.altAttr;
	novost.appendChild(img);
	var h4 = document.createElement("h4");
	h4.innerHTML = novostObj.naslov;
	novost.appendChild(h4);
	var p = document.createElement("p");
	p.innerHTML = novostObj.opis;
	novost.appendChild(p);
	var vrijemeObjave = document.createElement("div");
	vrijemeObjave.className = "vrijeme";
	vrijemeObjave.innerHTML = "<i>" + vrijemeRazlika + "</i>";	
	novost.appendChild(vrijemeObjave);
	vijesti.appendChild(novost);
}
//==============================================================================================================================================================================
function odrediVrijeme(vrijemeRazlika, vrijemeObjave){
	if(vrijemeRazlika<60) vrijemeRazlika = "Novost objavljena prije par sekundi";
	//minute
	else if(vrijemeRazlika<3600){
		var tmp = Math.round(vrijemeRazlika/60);
		var tmpString = tmp.toString();
		vrijemeRazlika = "Novost je objavljena prije " + tmp;
		if(tmp == 1 || tmp == 21 || tmp == 31 || tmp == 41 || tmp ==51) vrijemeRazlika += " minutu";
		else if(tmp == 11 || tmp == 12 || tmp == 13 || tmp == 14) vrijemeRazlika += " minuta";
		else if( tmpString[tmpString.length - 1] > 1 && tmpString[tmpString.length - 1] < 5  ) vrijemeRazlika += " minute";
		else vrijemeRazlika += " minuta";
	}
	//sati
	else if(vrijemeRazlika<86400){
		var tmp = Math.round(vrijemeRazlika/3600);
		var tmpString = tmp.toString();
		vrijemeRazlika = "Novost je objavljena prije " + tmp;
		if(tmp == 1 || tmp == 21 || tmp == 31 || tmp == 41 || tmp ==51) vrijemeRazlika += " sat";
		else if(tmp == 11 || tmp == 12 || tmp == 13 || tmp == 14) vrijemeRazlika += " sati";
		else if(tmpString[tmpString.length - 1] > 1 && tmpString[tmpString.length - 1] < 5) vrijemeRazlika += " sata";
		else vrijemeRazlika += " sati";
	}
	//dani
	else if(vrijemeRazlika<604800){
		var tmp = Math.round(vrijemeRazlika/86400);
		var tmpString = tmp.toString();
		vrijemeRazlika = "Novost je objavljena prije " + tmp;
		if(tmp == 1 ) vrijemeRazlika += " dan";
		else vrijemeRazlika += " dana";
	} 
	//sedmice
	else if(vrijemeRazlika<2419200){
		var tmp = Math.round(vrijemeRazlika/604800);
		vrijemeRazlika = "Novost je objavljena prije " + tmp;
		if(tmp == 1) vrijemeRazlika += " sedmicu";
		else vrijemeRazlika += " sedmice";
	} 
	//ostalo
	else{
		vrijemeRazlika = vrijemeObjave;
		vrijemeRazlika = vrijemeRazlika.getDate() + "." + (vrijemeRazlika.getMonth()+1) + "." + vrijemeRazlika.getFullYear() + " ";
		if(vrijemeObjave.getHours() < 10)
			vrijemeRazlika += "0" + vrijemeObjave.getHours() + ":";
		else
			vrijemeRazlika += vrijemeObjave.getHours() + ":";
		if(vrijemeObjave.getMinutes() < 10)
			vrijemeRazlika += "0" + vrijemeObjave.getMinutes() + ":";
		else
			vrijemeRazlika += vrijemeObjave.getMinutes() + ":";
		if(vrijemeObjave.getSeconds() < 10)
			vrijemeRazlika += "0" + vrijemeObjave.getSeconds();
		else{
			vrijemeRazlika += vrijemeObjave.getSeconds();
		}
		vrijemeRazlika = "Novost je objavljena " + vrijemeRazlika;
			
	} 
	return vrijemeRazlika;
}
//==============================================================================================================================================================================
function dajDan(value){
	if(value.getDay() == 0) return 7;
	else return value.getDay();
}
//==============================================================================================================================================================================
function delete_news(){
	//brisanje DOM-a
	var vijesti = document.getElementById("vijesti");
	while (vijesti.firstChild) {
  		vijesti.removeChild(vijesti.firstChild);
	}
}
//==============================================================================================================================================================================
function daily(){
	delete_news();
	for(var i = 0; i < novosti_json.length; i++){
		var vrijemeRazlika = new Date();
		vrijemeRazlika = (vrijemeRazlika.getTime() - novosti_json[i].vrijemeObjave.getTime())/1000;
		if(vrijemeRazlika<86400){
			kreirajNovost(novosti_json[i], vrijemeRazlika);
		} 
	}
	return false;
}
//==============================================================================================================================================================================
function weekly(){
	delete_news();
	for(var i = 0; i < novosti_json.length; i++){
		var vrijemeRazlika = new Date();
		vrijemeRazlika = (vrijemeRazlika.getTime() - novosti_json[i].vrijemeObjave.getTime())/1000;
		if(vrijemeRazlika<604800 && (dajDan(novosti_json[i].vrijemeObjave) <= dajDan(new Date))){
			kreirajNovost(novosti_json[i], vrijemeRazlika);
		} 
	}
	return false;
}
//==============================================================================================================================================================================
function monthly(){
	delete_news();
	for(var i = 0; i < novosti_json.length; i++){
		var vrijemeRazlika = new Date();
		vrijemeRazlika = (vrijemeRazlika.getTime() - novosti_json[i].vrijemeObjave.getTime())/1000;
		if(vrijemeRazlika<2419200 && (novosti_json[i].vrijemeObjave.getMonth() == (new Date).getMonth())){
			kreirajNovost(novosti_json[i], vrijemeRazlika);
		} 
	}
	return false;
}
//==============================================================================================================================================================================
function everything(){
	delete_news();
	for(var i = 0; i < novosti_json.length; i++){
		var vrijemeRazlika = new Date();
		vrijemeRazlika = (vrijemeRazlika.getTime() - novosti_json[i].vrijemeObjave.getTime())/1000;
		kreirajNovost(novosti_json[i], vrijemeRazlika);
	}
	return false;
}
