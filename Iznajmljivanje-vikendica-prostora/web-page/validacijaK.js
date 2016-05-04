function pokreni(){

var inputBoxImePrezime = document.getElementById('imePrezimeTxt');
var inputBoxKEmail = document.getElementById('emailKTxt');
var inputBoxKPhone = document.getElementById('phoneKTxt');
var inputBoxKomentar = document.getElementById('komentarTxt');


inputBoxImePrezime.onkeyup = function(){
	provjeriImePrezime(inputBoxImePrezime);
}

inputBoxKEmail.onkeyup = function(){
	provjeriEmail(inputBoxKEmail);
}

inputBoxKPhone.onkeyup = function(){
	provjeriTelefon(inputBoxKPhone);
}
inputBoxKomentar.onkeyup = function(){
	provjeriKomentar(inputBoxKomentar);
}


}

function provjeriImePrezime(input)
{
	var regexNum = /^[a-zA-Z\-_’ '‘ÆÐƎƏƐƔĲŊŒẞÞǷȜæðǝəɛɣĳŋœĸſßþƿȝĄƁÇĐƊĘĦĮƘŁØƠŞȘŢȚŦŲƯY̨Ƴąɓçđɗęħįƙłøơşșţțŧųưy̨ƴÁÀÂÄǍĂĀÃÅǺĄÆǼǢƁĆĊĈČÇĎḌĐƊÐÉÈĖÊËĚĔĒĘẸƎƏƐĠĜǦĞĢƔáàâäǎăāãåǻąæǽǣɓćċĉčçďḍđɗðéèėêëěĕēęẹǝəɛġĝǧğģɣĤḤĦIÍÌİÎÏǏĬĪĨĮỊĲĴĶƘĹĻŁĽĿʼNŃN̈ŇÑŅŊÓÒÔÖǑŎŌÕŐỌØǾƠŒĥḥħıíìiîïǐĭīĩįịĳĵķƙĸĺļłľŀŉńn̈ňñņŋóòôöǒŏōõőọøǿơœŔŘŖŚŜŠŞȘṢẞŤŢṬŦÞÚÙÛÜǓŬŪŨŰŮŲỤƯẂẀŴẄǷÝỲŶŸȲỸƳŹŻŽẒŕřŗſśŝšşșṣßťţṭŧþúùûüǔŭūũűůųụưẃẁŵẅƿýỳŷÿȳỹƴźżžẓ]+$/;
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

function provjeriKomentar(input)
{
	if (input.value.length == 0)
	{
		input.style.backgroundColor = "#ff668c"; return false;
	}
	else {
		input.style.backgroundColor = "white"; return true;
	}
}
function submituj()
{
	var inputBoxImePrezime = document.getElementById('imePrezimeTxt');
	var inputBoxKEmail = document.getElementById('emailKTxt');
	var inputBoxKPhone = document.getElementById('phoneKTxt');
	var inputBoxKomentar = document.getElementById('komentarTxt');
	
	if (provjeriImePrezime(inputBoxImePrezime) && provjeriEmail(inputBoxKEmail) && provjeriTelefon(inputBoxKPhone) && provjeriKomentar(inputBoxKomentar))
	{ alert("Uspješno ste nas kontaktirali! :)"); document.getElementById("formaK").submit(); }
	else 
		{
			provjeriImePrezime(inputBoxImePrezime);
			provjeriEmail(inputBoxKEmail);
			provjeriTelefon(inputBoxKPhone);
			provjeriKomentar(inputBoxKomentar);
		}
}

