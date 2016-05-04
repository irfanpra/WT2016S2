var imeRegex = /(^[A-Z])[a-z]{1,30}$/;
var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

window.onload = function() {
	document.getElementById("name").onblur = imeValidacija;
	document.getElementById("email").onblur = emailValidacija;
	document.getElementById("subject").onblur = subjectValidacija;
	document.getElementById("submit").onclick = slanjeForme;
}

function imeValidacija(){
	var ime = document.getElementById("name").value;
	if(!imeRegex.test(ime)){
		document.getElementById("name").setAttribute("style","border:1px solid red;");
		return false;
	}else{
		document.getElementById("name").setAttribute("style","");
		return true;
	}
}

function subjectValidacija(){
	var subject = document.getElementById("subject").value;
	if(!imeRegex.test(subject)){
		document.getElementById("subject").setAttribute("style","border:1px solid red;");
		return false;
	}else{
		document.getElementById("subject").setAttribute("style","");
		return true;
	}
}

function emailValidacija(){
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	if(email =="" && subject==""){
		document.getElementById("subject").setAttribute("style","border:1px solid red;");
	}
	else if(email == ""){
		document.getElementById("email").setAttribute("style","");
		return true;
	}else{
		if(!emailRegex.test(email)){
			document.getElementById("email").setAttribute("style","border:1px solid red;");
			return false;
		}else{
			document.getElementById("email").setAttribute("style","");
			document.getElementById("subject").setAttribute("style","");
			return true;
		}
	}
	
}

function subject_email_validacija(){
	//console.log("adresa_email validacija");
	var email = document.getElementById("email").value;
	var subject = document.getElementById("subject").value;
	if(email =="" && subject==""){
		document.getElementById("email").setAttribute("style","border:1px solid red;");
		document.getElementById("subject").setAttribute("style","border:1px solid red;");
		return false;
	}
	return subjectValidacija() && emailValidacija();
}
function submit(){
	///alert("pozivam!!");
	imeValidacija();
	adresa_email_validacija();
	subjectValidacija();
	if(imeValidacija() && subject_email_validacija() && subjectValidacija()){
		alert("Uspjesno!");
	}else{
		alert("Neuspjesno!");
	}
}