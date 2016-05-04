function ValidirajEmail(val)
{
  var polje = document.getElementById("idEmail");
  var tekst = document.getElementById("idEmail").value;

  var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(!(reg.test(tekst)))
  {
    polje.style.backgroundColor="red";
  }
  else {
    polje.style.backgroundColor="white";
  }
}
//RADI SAMO ZA JEDNOCIFRENE
function ValidiraBrojKreacija(val)
{
	var polje= document.getElementById("idKreacije");
	var tekst= document.getElementById("idKreacije").value;
	//parseInt(tekst);
	var maxKreacije= document.getElementById("idKreacije").max;
	var minKreacije= document.getElementById("idKreacije").min;
	if(tekst<minKreacije || tekst>maxKreacije)
	{
		polje.style.backgroundColor="red";
	}
	else{
		polje.style.backgroundColor="white";
	}
}
function Provjeri(val)
{
  var email = document.getElementById("idEmail");
  var kreacije = document.getElementById("idKreacije");
  
  var emailText = document.getElementById("idEmail").value;
  var kreacijeText = document.getElementById("idKreacije").value;
  //ako nije uneseno kreacije moraju biti
  if(emailText=="")
  {
	  kreacije.required=true;
  }
  else
  {
	  kreacije.required=false;

  }
  //ako su kreacije prazne email se mora unijeti
  if(kreacijeText=="")
  {
	  email.required=true;
  }
  else{
	  email.required=false;//ne moramo mail
	  
  }
}

