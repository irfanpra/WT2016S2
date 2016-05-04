function validateFirstName()
{
	var tb = document.getElementById("first-name");
	var reg = /^[a-zA-Z]+$/; 
	if(tb.value.length == 0 || !tb.value.match(reg))
		tb.style.background = "red";
	else
		tb.style.background = "white";

}

function validateLastName()
{
	var tb = document.getElementById("last-name");
	var reg = /^[a-zA-Z]+$/;
	if(tb.value.length == 0 || !tb.value.match(reg))
		tb.style.background = "red";
	else
		tb.style.background = "white";
}


function validateEmail()
{
	var email = document.getElementById("email");
	var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if(email.value.length == 0 || !email.value.match(reg))
		email.style.background = "red";
	else
		email.style.background = "white";
}

function crossValidEmail()
{
	var email = document.getElementById("email");
	var conf = document.getElementById("conf");
	if(conf.value.length == 0 || conf.value != email.value)
		conf.style.background = "red";
	else
		conf.style.background = "white";
}


function validateTel()
{
	var tel = document.getElementById("tel");
	var reg = /^[0-9]+$/;
	if(!tel.value.match(reg))
		tel.style.background = "red";
	else
		tel.style.background = "white";
}