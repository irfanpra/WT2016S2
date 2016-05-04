function regeks()
{
	/*varijable*/
	var mail = document.getElementById("email").value;
	var izbor = document.getElementById("odabir").value;
	var tel = document.getElementById("tel").value;
	/*regex-i*/
	var reg = /^[A-Z0-9._%+-]+@[gmail|hotmail]+\.[com]{3}$/igm;
	var reg1= /^[+]*[00]*[3]{1}[8]{1}[7]{1}[0-9]{8}$/igm;
	var reg2= /^[+]*[00]*[3]{1}[8]{1}[1]{1}[0-9]{9}$/igm;
	var reg3= /^[+]*[00]*[3]{1}[8]{1}[5]{1}[0-9]{8}$/igm;
	var reg4= /^[+]*[00]*[3]{1}[8]{1}[2]{1}[0-9]{9}$/igm;
	
	if(reg.test(mail)==false){
		alert("Pogrešan format E-Mail adrese!");
		return false;
	}else
		if(izbor=="bih")
		{
			if(reg1.test(tel)==false)
				{
				alert("Pogrešan pozivni broj za izabranu državu!");
				return false;
				}
		}else
		if(izbor=="srb")
		{
			if(reg2.test(tel)==false)
				{
				alert("Pogrešan pozivni broj za izabranu državu!");
				return false;
				}
		}else
		if(izbor=="hrv")
		{
			if(reg3.test(tel)==false)
				{
				alert("Pogrešan pozivni broj za izabranu državu!");
				return false;
				}
		}else
		if(izbor=="cg")
		{
			if(reg4.test(tel)==false)
				{
				alert("Pogrešan pozivni broj za izabranu državu!");
				return false;
				}
		}
		
		
}