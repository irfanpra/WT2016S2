window.onload = function () {
	alert("Dok se ne unese ispravan email unos poruke je onemogucen.");
}

var regexName = /^[A-Za-z0-9 ]{3,20}$/;
var regexEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i; 

function validateName (){
   
   var form=document.getElementById('contact_form');

   if(!regexName.test(form['name'].value)){
   	form['name'].style.backgroundColor = "red";
   	
   }
   else{
     form['name'].style.backgroundColor = "white"; 
   }
 
}

function validateEmail (){
   
   var form=document.getElementById('contact_form');

   if(!regexEmail.test(form['email'].value)){
   	form['email'].style.backgroundColor = "red";
   	document.getElementById("message").disabled = true;
   	
   }
   else{
     form['email'].style.backgroundColor = "white"; 
     document.getElementById("message").disabled = false;
   }
 
}