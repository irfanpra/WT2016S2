function pocetna(){

var inputBoxIme = document.getElementById('imeTxt');
var inputBoxPrezime = document.getElementById('prezimeTxt');
var inputBoxEmail = document.getElementById('emailTxt');
var inputBoxPhone = document.getElementById('phoneTxt');
var inputBoxUsername = document.getElementById('usernameTxt');
var inputBoxPass1 = document.getElementById('pass1Txt');
var inputBoxPass2 = document.getElementById('pass2Txt');


inputBoxIme.onkeyup = function(){
	provjeriImePrezime(inputBoxIme);
}

inputBoxPrezime.onkeyup = function(){
	provjeriImePrezime(inputBoxPrezime);
}

inputBoxEmail.onkeyup = function(){
	provjeriEmail(inputBoxEmail);
}

inputBoxPhone.onkeyup = function(){
	provjeriTelefon(inputBoxPhone);
}

inputBoxUsername.onkeyup = function(){
	provjeriUsernamePass(inputBoxUsername);
}

inputBoxPass1.onkeyup = function(){
	provjeriUsernamePass(inputBoxPass1);
}

inputBoxPass2.onkeyup = function(){
	provjeriPass2(inputBoxPass1,inputBoxPass2);
}


}

function provjeriImePrezime(input)
{
	var regexNum = /^[a-zA-Z\-_’'‘ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ]+$/;
	if (!regexNum.test(input.value))
	 {input.style.backgroundColor = "#ff668c"; return false;}
	else if (input.value=="")
	  {input.style.backgroundColor = "#ff668c"; return false;}
	else {input.style.backgroundColor = "white"; return true;}
}

function provjeriEmail(input)
{
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(input.value))
	 {input.style.backgroundColor = "#ff668c"; return false;}
	else if (input.value=="")
	 {input.style.backgroundColor = "#ff668c"; return false;}
	else {input.style.backgroundColor = "white"; return true;}
}

function provjeriTelefon(input)
{
	var re = /\+[0-9]{5}-[0-9]{3}-[0-9]{3}/;
	if (!re.test(input.value))
	 {input.style.backgroundColor = "#ff668c"; return false;}
	else if (input.value=="")
	 {input.style.backgroundColor = "#ff668c"; return false;}
	else {input.style.backgroundColor = "white"; return true;}
}

function provjeriUsernamePass(input)
{
	if (input.value.length<6 || input.value.length>20)
	 {input.style.backgroundColor = "#ff668c"; return false; }
	else {input.style.backgroundColor = "white";return true;}
}

function provjeriPass2(input1, input2)
{
	if (input2.value.length<6 || input2.value.length>20)
	 {input2.style.backgroundColor = "#ff668c"; return false;}
	else if(input2.value!=input1.value)
		{input2.style.backgroundColor = "#ff668c"; return false;}
	else {input2.style.backgroundColor = "white"; return true;}
}
function submituj()
{
	var inputBoxIme = document.getElementById('imeTxt');
	var inputBoxPrezime = document.getElementById('prezimeTxt');
	var inputBoxEmail = document.getElementById('emailTxt');
	var inputBoxPhone = document.getElementById('phoneTxt');
	var inputBoxUsername = document.getElementById('usernameTxt');
	var inputBoxPass1 = document.getElementById('pass1Txt');
	var inputBoxPass2 = document.getElementById('pass2Txt');
	var check = document.getElementById('agreeCheck');
	
	if (provjeriImePrezime(inputBoxIme) && provjeriImePrezime(inputBoxPrezime) && provjeriEmail(inputBoxEmail) && 
		provjeriTelefon(inputBoxPhone) && provjeriUsernamePass(inputBoxUsername) && provjeriUsernamePass(inputBoxPass1) &&
		provjeriPass2(inputBoxPass1,inputBoxPass2) && check.checked)
	{ alert("Uspješno ste se registrovali! :)"); document.getElementById("formaReg").submit(); }
	else 
		{
			var flag = 0;
			if(!provjeriImePrezime(inputBoxIme)) flag=1;
			if(!provjeriImePrezime(inputBoxPrezime)) flag=1;
			if(!provjeriEmail(inputBoxEmail)) flag=1;
			if(!provjeriTelefon(inputBoxPhone)) flag=1;
			if(!provjeriUsernamePass(inputBoxUsername)) flag=1;
			if(!provjeriUsernamePass(inputBoxPass1)) flag=1;
			if(!provjeriPass2(inputBoxPass1,inputBoxPass2)) flag=1;
			if (flag==0) alert("Potrebno je da prihvatite uslove i pravila korištenja stranice.");
		}
}

