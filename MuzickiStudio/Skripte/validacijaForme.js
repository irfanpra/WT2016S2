function ValidirajIme(val)
{
  var naziv = document.getElementById("ime");
  var tekst = document.getElementById("ime").value;
  var reg = /^[A-Z][a-z]+$/gm;
  if(!(reg.test(tekst)))
  {
    naziv.style.backgroundColor="#FF9494";
  }
  else {
    naziv.style.backgroundColor="white";
  }
}

function ValidirajPrezime(val)
{
  var naziv = document.getElementById("prezime");
  var tekst = document.getElementById("prezime").value;
  var reg = /^[A-Z][a-z]+$/gm;
  if(!(reg.test(tekst)))
  {
    naziv.style.backgroundColor="#FF9494";
  }
  else {
    naziv.style.backgroundColor="white";
  }
}

function ValidirajMail(val)
{
  var naziv = document.getElementById("mail");
  var tekst = document.getElementById("mail").value;

  var reg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if(!(reg.test(tekst)))
  {
    naziv.style.backgroundColor="#FF9494";
  }
  else {
    naziv.style.backgroundColor="white";
  }
}

function ValidirajTelefon(val)
{
  var naziv = document.getElementById("telefon");
  var tekst = document.getElementById("telefon").value;
  var reg = /^[0][6][012][\/][0-9]{3}[-][0-9]{3}[0-9]?$/igm;
  if(!(reg.test(tekst)))
  {
    naziv.style.backgroundColor="#FF9494";
  }
  else {
    naziv.style.backgroundColor="white";
  }
}

function ProvjeriPolja(val)
{
  var tel = document.getElementById("telefon");
  var kom = document.getElementById("pitanje");

  var telefon = document.getElementById("telefon").value;
  var komentar = document.getElementById("pitanje").value;
  if (telefon != "") kom.required=false;
  else kom.required=true;
  if (komentar != "") tel.required=false;
  else tel.required=true;
}
