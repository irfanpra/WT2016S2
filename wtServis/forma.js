function validiraj_ime(obj){
	var flag = false;
	for(var i = 0; i < obj.value.length; i++){
		if(obj.value[i] === " " && i != (obj.value.length - 1) ){
			flag = true;
			break;
		}
	}
	if(flag)
		obj.style.backgroundColor = "#e6ffe6";
	else
		obj.style.backgroundColor = "#ffe5e5";
}

function validiraj_mail(obj){
	var res = obj.value.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
	if(res == null)
		obj.style.backgroundColor = "#ffe5e5";
	else
		obj.style.backgroundColor = "#e6ffe6";
}

function validiraj_telefon(obj){
	var tmp1 = document.getElementById("o1").checked;
	var tmp2 = document.getElementById("o2").checked;
	var tmp3 = document.getElementById("o3").checked;
	if(tmp1){
		var re = new RegExp("^(061|062)[0-9][0-9][0-9][0-9][0-9][0-9]$");
		var res = re.test(obj.value);
		if(res)
			obj.style.backgroundColor = "#e6ffe6";
		else
			obj.style.backgroundColor = "#ffe5e5";
	}
	else if(tmp2){
		var re = new RegExp("^(065)[0-9][0-9][0-9][0-9][0-9][0-9]$");
		var res = re.test(obj.value);
		if(res)
			obj.style.backgroundColor = "#e6ffe6";
		else
			obj.style.backgroundColor = "#ffe5e5";
	}
	else if(tmp3){
		var re = new RegExp("^(063)[0-9][0-9][0-9][0-9][0-9][0-9]$");
		var res = re.test(obj.value);
		if(res)
			obj.style.backgroundColor = "#e6ffe6";
		else
			obj.style.backgroundColor = "#ffe5e5";
	}
	else{
		obj.style.backgroundColor = "#ffe5e5";
	}
}

function val_radio(){
	var obj = document.getElementById("broj_id");
	var tmp1 = document.getElementById("o1").checked;
	var tmp2 = document.getElementById("o2").checked;
	var tmp3 = document.getElementById("o3").checked;
	if(tmp1){
		var re = new RegExp("^(061|062)[0-9][0-9][0-9][0-9][0-9][0-9]$");
		var res = re.test(obj.value);
		if(res)
			obj.style.backgroundColor = "#e6ffe6";
		else
			obj.style.backgroundColor = "#ffe5e5";
	}
	else if(tmp2){
		var re = new RegExp("^(065)[0-9][0-9][0-9][0-9][0-9][0-9]$");
		var res = re.test(obj.value);
		if(res)
			obj.style.backgroundColor = "#e6ffe6";
		else
			obj.style.backgroundColor = "#ffe5e5";
	}
	else if(tmp3){
		var re = new RegExp("^(063)[0-9][0-9][0-9][0-9][0-9][0-9]$");
		var res = re.test(obj.value);
		if(res)
			obj.style.backgroundColor = "#e6ffe6";
		else
			obj.style.backgroundColor = "#ffe5e5";
	}
	else{
		obj.style.backgroundColor = "#ffe5e5";
	}
}

function val_poruka(obj){
	if(obj.value.length == 0) obj.style.backgroundColor = "#ffe5e5";
	else obj.style.backgroundColor = "#e6ffe6";
}

