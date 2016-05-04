window.onload=function() {


var nekiDatum = new Date();
var numberOfDaysToAdd = -1;
nekiDatum.setDate(nekiDatum.getDate() + numberOfDaysToAdd); 
var nekiDatum1 = new Date();
var numberOfDaysToAdd1 = -5;
nekiDatum1.setDate(nekiDatum1.getDate() + numberOfDaysToAdd1); 
var nekiDatum2 = new Date();
var numberOfDaysToAdd2 = -20;
nekiDatum2.setDate(nekiDatum2.getDate() + numberOfDaysToAdd2); 

document.getElementById("vrijeme1").innerHTML=new Date();
document.getElementById("vrijeme2").innerHTML=nekiDatum1;
document.getElementById("vrijeme5").innerHTML=nekiDatum1;
document.getElementById("vrijeme8").innerHTML=nekiDatum2;

  
document.getElementById("vrijemeObjave1").innerHTML = upTime(document.getElementById("vrijeme1").innerHTML );
document.getElementById("vrijemeObjave2").innerHTML = upTime(document.getElementById("vrijeme2").innerHTML );
document.getElementById("vrijemeObjave3").innerHTML = upTime(document.getElementById("vrijeme3").innerHTML );
document.getElementById("vrijemeObjave4").innerHTML = upTime(document.getElementById("vrijeme4").innerHTML );
document.getElementById("vrijemeObjave5").innerHTML = upTime(document.getElementById("vrijeme5").innerHTML );
document.getElementById("vrijemeObjave6").innerHTML = upTime(document.getElementById("vrijeme6").innerHTML );

document.getElementById("vrijemeObjave7").innerHTML = upTime(document.getElementById("vrijeme7").innerHTML );
document.getElementById("vrijemeObjave8").innerHTML = upTime(document.getElementById("vrijeme8").innerHTML );
document.getElementById("vrijemeObjave9").innerHTML = upTime(document.getElementById("vrijeme9").innerHTML );
document.getElementById("vrijemeObjave10").innerHTML = upTime(document.getElementById("vrijeme10").innerHTML );
document.getElementById("vrijemeObjave11").innerHTML = upTime(document.getElementById("vrijeme11").innerHTML );
document.getElementById("vrijemeObjave12").innerHTML = upTime(document.getElementById("vrijeme12").innerHTML );

  }																		

function upTime(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);
  
			
  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

var str="";
if(days==0 && hours==0 && mins==0)
{
	str="Novost objavljena prije par sekundi";
}
else if(days==0 && hours==0)
{
	if(mins!=11 && mins%10==1)
	{
	str="Novost je objavljena prije "+ mins+" minute";		
	}
	else 
	{
	str="Novost je objavljena prije "+ mins+" minuta";		
	}

}
else if(days==0 && hours!=0)
{
	if(hours==1 || (hours!=11 && hours%10==1))
	{
	str="Novost je objavljena prije "+ hours +" sat";
		
	}
	else if(hours%10==5 || hours%10==0)
	{
	str="Novost je objavljena prije "+ hours +" sati";
	}
	else
	str="Novost je objavljena prije "+ hours +" sata";
		
	}
else if(days==1 || days<7)
{
	if(days==1)
	{
	
	str="Novost objavljena prije "+days+" dan";
			
	}
	else
	{
		
	str="Novost objavljena prije "+days+" dana";
		
	}
}
else if(days>1 && days<31)
{
	str="Novost je objavljena prije "+ Math.round(days/7)+ " sedmice";
}
	else str="Novost objavljena: "+countTo.toString().slice(4, 15);
  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
  return str;
  
}






function myFunction()
	{
	var x = document.getElementById("mySelect").value;
	  
	  if(x=="Danasnje")
	{
		var j;
		for(j=1;j<=12;j++)
		{
				if(upTime1(document.getElementById("vrijeme"+j).innerHTML)=="Danasnje")
			{
				document.getElementById(j).style.display = 'inline-block';
			}
			
			else 
			{
				document.getElementById(j).style.display = 'none';
			
			}
		}
	}
	 else if(x=="oveSedmice")
	{
		var j;
		for(j=1;j<=12;j++)
		{
	if(upTime1(document.getElementById("vrijeme"+j).innerHTML)=="ovogMjeseca" || upTime1(document.getElementById("vrijeme"+j).innerHTML)=="oveSedmice" || upTime1(document.getElementById("vrijeme"+j).innerHTML)=="Danasnje"   )
			{
				document.getElementById(j).style.display = 'inline-block';
			}
			
			else 
			{
				document.getElementById(j).style.display = 'none';
			
			}
		}
	}
	else if(x=="oveSedmice")
	{
			var j;
		for(j=1;j<=12;j++)
		{
	if(upTime1(document.getElementById("vrijeme"+j).innerHTML)=="oveSedmice" || upTime1(document.getElementById("vrijeme"+j).innerHTML)=="Danasnje")
			{
				document.getElementById(j).style.display = 'inline-block';
			}
			
			else 
			{
				document.getElementById(j).style.display = 'none';
			
			}
		}
	}
	else if(x=="Sve")
	{
		var j;
		for(j=1;j<=12;j++)
		{
				document.getElementById(j).style.display = 'inline-block';
			
				}
	}
		
	}
	
	
function upTime1(countTo) {
  now = new Date();
  countTo = new Date(countTo);
  difference = (now-countTo);
  
			
  days=Math.floor(difference/(60*60*1000*24)*1);
  hours=Math.floor((difference%(60*60*1000*24))/(60*60*1000)*1);
  mins=Math.floor(((difference%(60*60*1000*24))%(60*60*1000))/(60*1000)*1);
  secs=Math.floor((((difference%(60*60*1000*24))%(60*60*1000))%(60*1000))/1000*1);

var str="";
if(days==0 && hours==0 && mins==0)
{
	str="Danasnje";
}
else if(days==0 && hours==0)
{
	str="Danasnje";
}
else if(days==0 && hours!=0)
{
	str="Danasnje";
}
else if(days==1 || days<7)
{
	str="oveSedmice";
		
}
else if(days>1 && days<31)
{
	str="ovogMjeseca";
}
	else str="Novost objavljena"+countTo;
  clearTimeout(upTime.to);
  upTime.to=setTimeout(function(){ upTime(countTo); },1000);
  return str;
  
}




var Drzave = new Array();

Drzave['BiH'] = new Array('Sarajevo','Mostar','Zenica','Travnik', 'Prijedor', 'Bihać ');
Drzave['Kosovo'] = new Array('Pristina','Prizren','Kosovska Mitrovica', 'Kosovo Polje', 'Peć');
Drzave['Srbija'] = new Array('Beograd','Nis','Novi Sad','Novi Pazar', 'Kraljevo', 'Kragujevac');


// City lists


function setStates() {
  cntrySel = document.getElementById('country');
  stateList = Drzave[cntrySel.value];
  changeSelect('state', stateList, stateList);
  
}

function changeSelect(fieldID, newOptions, newValues) {
  selectField = document.getElementById(fieldID);
  selectField.options.length = 0;
  for (i=0; i<newOptions.length; i++) {
    selectField.options[selectField.length] = new Option(newOptions[i], newValues[i]);
}
}

addLoadEvent(function() {
  setStates();
});



               
                
	function my1()	
	{
		var letters = /^[A-Za-z]+$/; 
			var forma=document.getElementById('forma');	
		
if(forma.ime.value.match(letters))  
{  

document.getElementById('errfn').innerHTML="";

 forma.ime.style.background="white";

return true;  
}  
else  
{  
forma.ime.style.background="red";
               forma.ime.focus();
			   document.getElementById('errfn').innerHTML="Name must have alphabet characters only";

return false;  
}  
	}
	
		function my2()	
	{
		var letters = /^[A-Za-z]+$/; 
			var forma=document.getElementById('forma');	
		
if(forma.prezime.value.match(letters))  
{  

document.getElementById('errfn1').innerHTML="";

 forma.prezime.style.background="white";

return true;  
}  
else  
{  
forma.prezime.style.background="red";
               forma.prezime.focus();
			   document.getElementById('errfn1').innerHTML="Surename must have alphabet characters only";

return false;  
}  
	}
	function my3() {
			var forma=document.getElementById('forma');	
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
	if(!re.test(forma.telefon.value)) {
		 forma.telefon.style.background="red";
		
		 document.getElementById('errfn3').innerHTML="Ubacite odgovarajuci pozivni i validni broj";


	  forma.telefon.focus();
      return false;
    }
	else 
	{
			 forma.telefon.style.background="white";
			  document.getElementById('errfn3').innerHTML="";

	  return true;
    
		
	}
	}
	
	function validateEmail() {
			var forma=document.getElementById('forma');	
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(!re.test(forma.email.value)) {
		 forma.email.style.background="red";
		 
		 document.getElementById('errfn4').innerHTML="Email mora biti oblika nesto@nesto.nesto";


	  forma.email.focus();
      return false;
    }
	else 
	{
			 forma.email.style.background="white";
			 
		 document.getElementById('errfn4').innerHTML="";


	  return true;
    
		
	}
    return re.test(email);
}


function Klik()
{
if(!my1() ||  !my2() || !my3() || !my4() )
{
	alert("Molim vas provjerite da su sva polja tacno popunjena, i da nema nepopunjenih polja!")
	return false;
}

else {
	x.submit(); 
	return true;
	}
}
function my4()
{
	var x=document.getElementById('myDate').value;
if(x==""  ){
return false;
}
else return true;
}
