
// Da bi validacija bila prihvacena ime i prezime moraju zapoèeti velikim slovima
// Ne smije biti samo jedna rijeè, tj. korisnik mora unijeti ime i prezime
function validacijaImena(ime){
	
	var regexIme = /^[A-Z][a-z]+(?:\s[A-Z][a-z]+)+$/g ;
	
     if (!regexIme.test(ime.value)){
		 
		 document.getElementById("ime").style.backgroundColor = "red";
     } 

	 else {
		 document.getElementById("ime").style.backgroundColor = "white";
	 }

	 
}


// Validacija je da se smiju unositi samo brojevi

function validacijaTelefona(telefon){
	
	var regexTelefon = /^[0-9][0-9]+$/g;
	
     if (!regexTelefon.test(telefon.value)){
		 
		 document.getElementById("broj").style.backgroundColor = "red";
     } 

	 else {
		 document.getElementById("broj").style.backgroundColor = "white";
	 }

	 
}


  
function validacijaMail(mail){
	
	var regexMail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g ;
	
     if (!regexMail.test(mail.value)){
		 
		 document.getElementById("mail").style.backgroundColor = "red";
     } 

	 else {
		 document.getElementById("mail").style.backgroundColor = "white";
	 }

	 
}


function validacijaGradDrustvo(){
	
	var grad = document.getElementById("selectGrad").value;
	var drustvo = document.getElementById("selectDrustvo").value;
	
	
	if (grad == "nijedan" && drustvo == "nijedno" ||
		grad == "vitez" && drustvo == "lovac" ||
		grad == "travnik" && drustvo == "sokol" ||
		grad == "zenica" && drustvo == "zenica" ||
		grad == "kakanj" && drustvo == "srndac" )
		
		return true;
		
		else {
			alert ("Niste tacno odabrali grad ili drustvo kojem pripadate.");
		}
	
	
}