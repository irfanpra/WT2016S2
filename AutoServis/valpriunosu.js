
function bojaIme()
{
	var elemenat = document.getElementById('ImeiPrezime');
	var podatak = document.getElementById('ImeiPrezime').value;
	var reg = /[A-Z]\s[A-Z]/igm;
	if(!(reg.test(podatak))){
		elemenat.style.color = "red";
	}
	else elemenat.style.removeProperty('color');
}

function bojaEmail()
{
	var elemenat = document.getElementById('email');
	var podatak = document.getElementById('email').value;
	var reg = /^[A-Z0-9._%+-]+@[gmail|hotmail]+\.[com]{3}$/igm;
	if(!(reg.test(podatak))){
		elemenat.style.color = "red";
	}
	else elemenat.style.removeProperty('color');
}
function bojaTel()
{
	var izbor=document.getElementById('odabir').value;
	var elemenat = document.getElementById('tel');
	var podatak = document.getElementById('tel').value;
	var reg1= /^[+]*[00]*[3]{1}[8]{1}[7]{1}[0-9]{8}$/igm;
	var reg2= /^[+]*[00]*[3]{1}[8]{1}[1]{1}[0-9]{9}$/igm;
	var reg3= /^[+]*[00]*[3]{1}[8]{1}[5]{1}[0-9]{8}$/igm;
	var reg4= /^[+]*[00]*[3]{1}[8]{1}[2]{1}[0-9]{9}$/igm;
	if(izbor=="bih"){
	if(!(reg1.test(podatak))){
		elemenat.style.color = "red";
	}
	else elemenat.style.removeProperty('color');
	}else if(izbor=="srb")
	{
		if(!(reg2.test(podatak))){
		elemenat.style.color = "red";
	}
	else elemenat.style.removeProperty('color');
	}
	else if(izbor=="hrv")
	{
		if(!(reg3.test(podatak))){
		elemenat.style.color = "red";
	}
	else elemenat.style.removeProperty('color');
	}else if(izbor=="cg")
	{
		if(!(reg4.test(podatak))){
		elemenat.style.color = "red";
	}
	else elemenat.style.removeProperty('color');
	}
}



