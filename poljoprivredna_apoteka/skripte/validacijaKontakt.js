var lettersPatt = new RegExp('^[a-zA-Z]+$');
var emailPatt = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
var urlPatt = new RegExp("^http\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$");

window.onload = function(){
	var inputs = document.getElementById("kontakt");
	for (var i = 0; i < inputs.length-2; i++) {
		if(inputs[i].type == "text") {
			inputs[i].addEventListener("blur", blurText, true);
			inputs[i].addEventListener("keypress", blurText, true);
		}
		if(inputs[i].type == "email") {
			inputs[i].addEventListener("blur", blurEmail, true);
			inputs[i].addEventListener("keypress", blurEmail, true);
		}
		if(inputs[i].type == "url") {
			inputs[i].addEventListener("blur", blurUrl, true);
			inputs[i].addEventListener("keypress", blurUrl, true);
		}
		if(inputs[i].type == "textarea") {
			inputs[i].addEventListener("blur", blurTextArea, true);
			inputs[i].addEventListener("keypress", blurTextArea, true);
		}
	}
}

function test(){
	alert("Hello!");
}

function validateForm(){
	var inputs = document.getElementById("kontakt");
	validno = true;
	for (var i = 0; i < inputs.length-2; i++) {
		if(inputs[i].type == "text") {
			if(!validirajText(inputs[i])) validno = false;
		}
		if(inputs[i].type == "email") {
			if(!validirajEmail(inputs[i])) validno = false;
		}
		if(inputs[i].type == "url") {
			if(!validirajUrl(inputs[i])) validno = false;
		}
		if(inputs[i].type == "textarea") {
			if(!validirajTextArea(inputs[i])) validno = false;
		}
	};

	return validno;
}

function postaviGresku(parent, msg){
	obrisiGresku(parent);
	var div = document.createElement('div');
	div.className += 'col-5 error-div';
	var em = document.createElement('em');
	em.className += 'error-input-msg';
	em.innerHTML = msg;
	div.appendChild(em);
	parent.parentElement.appendChild(div);
}
function obrisiGresku(parent){
	var glavni = parent.parentElement;
	for (var i = glavni.childNodes.length - 1; i >= 0; i--) {
		if(glavni.childNodes[i].className != null && glavni.childNodes[i].className.indexOf("error-div") > -1){
			glavni.removeChild(glavni.childNodes[i]);
		}
	};
}

function validirajText(input){
	if(input.value == "") {
		postaviGresku(input.parentElement, "Popunite ovo polje !");
		input.className = 'error-input';
		return false;
	}
	else if(!lettersPatt.test(input.value)){
		postaviGresku(input.parentElement, "Ime mora sadrzavati samo slova !");
		input.className = 'error-input';
		return false;		
	}
	obrisiGresku(input.parentElement);
	input.className = '';
	return true;
}
function validirajUrlZaEmail(){
	var input = document.getElementById("url");
	if(input.value == "" || !urlPatt.test(input.value)) return false;
	return true;
}
function validirajEmail(input){
	var cont = validirajUrlZaEmail();
	if(input.value == "" && !cont) {
		postaviGresku(input.parentElement, "Popunite ovo polje ili url !");
		input.className = 'error-input';
		return false;
	}
	else if(!cont && !emailPatt.test(input.value)){
		postaviGresku(input.parentElement, "Pogresan format email-a !");
		input.className = 'error-input';
		return false;		
	}
	obrisiGresku(input.parentElement);
	input.className = '';
	return true;
}
function validirajEmailZaUrl(){
	var input = document.getElementById("email");
	if(input.value == "" || !emailPatt.test(input.value)) return false;
	return true;
}
function validirajUrl(input){
	var cont = validirajEmailZaUrl();
	if(input.value == "" && !cont) {
		postaviGresku(input.parentElement, "Popunite ovo polje ili email !");
		input.className = 'error-input';
		return false;
	}
	else if(!cont && !urlPatt.test(input.value)){
		postaviGresku(input.parentElement, "Pogresan format url-a !");
		input.className = 'error-input';
		return false;		
	}
	obrisiGresku(input.parentElement);
	input.className = '';
	return true;
}
function validirajTextArea(input){
	if(input.value == "") {
		postaviGresku(input.parentElement, "Popunite ovo polje !");
		input.className = 'error-input';
		return false;
	}
	obrisiGresku(input.parentElement);
	input.className = '';
	return true;
}
function blurText(){
	validirajText(this);
}
function blurEmail(){
	validirajEmail(this);
}
function blurUrl(){
	validirajUrl(this);
}
function blurTextArea(){
	validirajTextArea(this);
}