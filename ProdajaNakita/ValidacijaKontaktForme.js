function validateName(){

    var name=document.getElementById('name');
if (name.value == null || name.value=="" || name.value!="/^[A-Za-z]*\s{1}[A-Za-z]*$/")
{
       name.style.backgroundColor="red";
		
       return false; } 
	   else 
	   {
	  name.style.backgroundColor="white";

       return true;
	   }
  

} 


function validateSurname(){

    var surname=document.getElementById('surname');

     if (surname.value == null || surname.value=="" || surname.value!="/^[A-Za-z]*\s{1}[A-Za-z]*$/")
{
       surname.style.backgroundColor="red";
	
      return false; } 
	   else 
	   {
	  surname.style.backgroundColor="white";
       return true;
	   }
  

} 





function validateEmail () {

  var email = document.getElementById('email');

  if(email.value==null || surname.value=="") {
  email.style.backgroundColor="red";
  
   return false; } 
	   else 
	   {
	 email.style.backgroundColor="white";
       return true;
	   }
  

} 

function validateMessage() {
  var message = document.getElementById('Message');
  var required = 10;
  var left = required - message.length;

  if (left > 0 || message.length==0) {
	message.style.backgroundColor="red";
   return false; } 
	   else 
	   {
	 message.style.backgroundColor="white";
       return true;
	   }
  

} 

function validateForm() {
 if ((!validateName() && !validateSurname() && !validateEmail() && !validateMessage())||(!validateName() || !validateSurname() || !validateEmail() || !validateMessage())) {
     producePrompt('Ispravite greške.', 'poruka_button', 'red');
        setTimeout(function(){jsHide('poruka_button');}, 2000);
		document.getElementById("button").disabled = true
        return false;
		
    }
	alert("Ispunili ste formu ispravno!");
	return true;
}



function producePrompt(message, promptLocation, color) {

  document.getElementById(promptLocation).innerHTML = message;
  document.getElementById(promptLocation).style.color = color;


}
  

function jsShow(id) {
  document.getElementById(id).style.display = 'block';
}

function jsHide(id) {
  document.getElementById(id).style.display = 'none';
}




function validiraj(){
	var forma = document.getElementById("myForm");
	var valid = true;

	if(valid)
	{
		validirajServis(forma.grad.value, forma.postanski.value);
	}
}

function validirajServis(grad, postanski){
	var xmlhttp = new XMLHttpRequest();



	xmlhttp.onreadystatechange = function () {
		if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			var response = JSON.parse(xmlhttp.responseText);
			if(response.hasOwnProperty("ok"))
			{
				document.getElementById("myForm").submit();
			}
			else
				document.getElementById("poruka_broj").style.visibility = "visible";
				window.location.reload();
		document.getElementById("postanski").style.backgroundColor = "red";
		}
	}

	xmlhttp.open("GET", "http://zamger.etf.unsa.ba/wt/postanskiBroj.php?mjesto=" + grad + "&postanskiBroj=" + postanski, true);
	xmlhttp.send();
}

