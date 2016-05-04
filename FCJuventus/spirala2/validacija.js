function provjeriGodine( i)
{


if(i<15 || i>60){
     document.getElementById("pogresneGodine").innerHTML="*Godine moraju biti izmedju 15 i 60*";

document.getElementById("godine").style.backgroundColor="#FC7B7B";
 return false;}
else {
document.getElementById("godine").style.backgroundColor="lightgreen";
     document.getElementById("pogresneGodine").innerHTML="";
return true;
}

}

function provjeriIme(ime)
{
var reg = /[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+$/g;
if(!reg.test(ime))
{
document.getElementById("imeIPrezime").style.backgroundColor="#FC7B7B";
 document.getElementById("pogresnoImeIPrezime").innerHTML=
"*Velika pocetna slova i engleski alfabet*";

return false;}
else{

document.getElementById("imeIPrezime").style.backgroundColor="lightgreen";
     document.getElementById("pogresnoImeIPrezime").innerHTML="";
return true;}

}

function provjeriTelefon(tel)
{
var r=/387[0-9]{11}$/g;

if(drzava.value=="bosna")
{
if(!r.test(tel))
{
document.getElementById("brojTelefona").style.backgroundColor="#FC7B7B";
 document.getElementById("pogresanBrojTelefona").innerHTML=
"* 387 i jos jedanaest cifara *";
return false;}
else {document.getElementById("brojTelefona").style.backgroundColor="lightgreen";
 document.getElementById("pogresanBrojTelefona").innerHTML="";}
}
else{document.getElementById("brojTelefona").style.backgroundColor="white";
 document.getElementById("pogresanBrojTelefona").innerHTML="";}

}