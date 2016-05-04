

function setDate()
{
	var current = new Date(); 
	var dates = document.getElementsByClassName("published");

	//danasnje:
	dates[0].innerHTML = formatDate(current);
	dates[1].innerHTML = formatDate(new Date(current.getFullYear(), current.getMonth(), current.getDate(), current.getHours(), current.getMinutes()-10));
	dates[2].innerHTML = formatDate(new Date(current.getFullYear(), current.getMonth(), current.getDate(), current.getHours()-2));
	//ove sedmice:
	dates[3].innerHTML = formatDate(new Date(current.getFullYear(), current.getMonth(), current.getDate()-2, current.getHours(), current.getMinutes()-10));
	dates[4].innerHTML = formatDate(new Date(current.getFullYear(), current.getMonth(), current.getDate()-6, current.getHours()-5));
	//ovog mjeseca:
	dates[5].innerHTML = formatDate(new Date(current.getFullYear(), current.getMonth(), current.getDate()-10, current.getHours()-15));
	dates[6].innerHTML = formatDate(new Date(current.getFullYear(), current.getMonth(), current.getDate()-11, current.getHours(), current.getMinutes()-10));
	dates[7].innerHTML = formatDate(new Date(current.getFullYear(), current.getMonth(), current.getDate()-12, current.getHours()-5));
	//ostalo:
	dates[8].innerHTML = formatDate(new Date(current.getFullYear(), current.getMonth()-6, current.getDate(), current.getHours()-15));
	dates[9].innerHTML = formatDate(new Date(current.getFullYear(), current.getMonth()-2, current.getDate(), current.getHours(), current.getMinutes()-10));
	dates[10].innerHTML = formatDate(new Date(current.getFullYear()-1, current.getMonth()-8, current.getDate(), current.getHours()-5));
	dates[11].innerHTML = formatDate(new Date(current.getFullYear()-2, current.getMonth()-2, current.getDate(), current.getHours()-15));
}

function formatDate(date)
{
	var s = 60*1000;
	var min = s *60;
	var hour = min * 24;
	var day = hour * 7;
	var week = hour * 30;
	var d = (new Date() ) - date;

	if(d < s)
	{
		return "Novost objavljena prije par sekundi.";
	}
	else if (d < min)
	{
		var a = [2, 3, 4, 22, 23, 24, 32, 33, 34, 42, 43, 44, 52, 53, 54];
		for (var i=0; i<a.length; i++)
		{
			if (Math.floor(d/s) == a[i]) 
				return "Novost je objavljena prije " + Math.floor(d/s) + " minute";
		}
		if (Math.floor(d/s)%10 == 1 && Math.floor(d/s) != 11) 
				return "Novost je objavljena prije " + Math.floor(d/s) + " minutu";
		return "Novost je objavljena prije " + Math.floor(d/s) + " " + " minuta";
	}
	else if (d < hour)
	{
		var h = Math.floor(d/min);
		if (h == 1 || h == 21)
			return "Novost je objavljena prije " + h + " sat";
		else if (h == 2 || h == 3 || h == 4 || h == 22 || h==23)
			return "Novost je objavljena prije " + h + " sata";
		return "Novost je objavljena prije " + h + " sati";
	}
	else if(d < day)
	{
		if (Math.floor(d/hour) == 1)
			return "Novost je objavljena prije " + Math.floor(d/hour) + " dan";
		else 
			return "Novost je objavljena prije " + Math.floor(d/hour) + " dana";

	}
	else if (d < week)
	{
		var weeks = Math.floor(d/day);
		if (weeks == 1)
			return "Novost je objavljena prije " + weeks + " sedmicu";
		return "Novost je objavljena prije " + weeks + " sedmice";
	}

	return "Datum objave: " + date.getDate() + "." + (date.getMonth() + 1 ) + "." + date.getFullYear() + "."; 
}


function setDate2()
{
	var current = new Date(); 
	var dates = document.getElementsByClassName("published");
	var articles = document.getElementsByClassName("news");
	for(var i = 0; i < 12; i++) articles[i].style.display = "none";	

	var dat1 = new Date(current.getFullYear(), current.getMonth(), current.getDate(), current.getHours(), current.getMinutes()-10);	
	var dat2 = new Date(current.getFullYear(), current.getMonth(), current.getDate(), current.getHours()-2);
	var dat3 = new Date(current.getFullYear(), current.getMonth(), current.getDate()-2, current.getHours(), current.getMinutes()-10);
	var dat4 = new Date(current.getFullYear(), current.getMonth(), current.getDate()-6, current.getHours()-5);
	var dat5 = new Date(current.getFullYear(), current.getMonth(), current.getDate()-10, current.getHours()-15);
	var dat6 = new Date(current.getFullYear(), current.getMonth(), current.getDate()-11, current.getHours(), current.getMinutes()-10);
	var dat7 = new Date(current.getFullYear(), current.getMonth(), current.getDate()-12, current.getHours()-5);
	var dat8 = new Date(current.getFullYear(), current.getMonth()-6, current.getDate(), current.getHours()-15);
	var dat9 = new Date(current.getFullYear(), current.getMonth()-2, current.getDate(), current.getHours(), current.getMinutes()-10);
	var dat10 = new Date(current.getFullYear()-1, current.getMonth()-8, current.getDate(), current.getHours()-5);
	var dat11 = new Date(current.getFullYear()-2, current.getMonth()-2, current.getDate(), current.getHours()-15);
	//danasnje:
	dates[0].innerHTML = formatDate(current);
	if (show(current)==true) articles[0].style.display="block"; else articles[0].style.display="none";
	dates[1].innerHTML = formatDate(dat1);
	if (show(dat1)) articles[1].style.display="block"; else articles[1].style.display="none";
	dates[2].innerHTML = formatDate(dat2);
	if (show(dat2)) articles[2].style.display="block"; else articles[2].style.display="none";
	//ove sedmice:
	dates[3].innerHTML = formatDate(dat3);
	if (show(dat3)) articles[3].style.display="block"; else articles[3].style.display="none";
	dates[4].innerHTML = formatDate(dat4);
	if (show(dat4)) articles[4].style.display="block"; else articles[4].style.display="none";
	//ovog mjeseca:
	dates[5].innerHTML = formatDate(dat5);
	if (show(dat5)) articles[5].style.display="block"; else articles[5].style.display="none";
	dates[6].innerHTML = formatDate(dat6);
	if (show(dat6)) articles[6].style.display="block"; else articles[6].style.display="none";
	dates[7].innerHTML = formatDate(dat7);
	if (show(dat7)) articles[7].style.display="block"; else articles[7].style.display="none";
	//ostalo:
	dates[8].innerHTML = formatDate(dat8);
	if (show(dat8)) articles[8].style.display="block"; else articles[8].style.display="none";
	dates[9].innerHTML = formatDate(dat9);
	if (show(dat9)) articles[9].style.display="block"; else articles[9].style.display="none";
	dates[10].innerHTML = formatDate(dat10);
	if (show(dat10)) articles[10].style.display="block"; else articles[10].style.display="none";
	dates[11].innerHTML = formatDate(dat11);
	if (show(dat11)) articles[11].style.display="block"; else articles[11].style.display="none";
}

function show(date)
{
	var current = new Date();
	var opt = document.getElementById("options").selectedIndex;
	if (opt == 0) return true;
	else if (opt == 3) { //ovaj mjesec
		if (date.getMonth()==current.getMonth() && date.getFullYear()==current.getFullYear()) return true; else return false;
	}
	else if (opt==2){ //ova sedmica
		var n = current.getDay();
		var n1 = current.getDate() - n - 1;
		var n2 = current.getDate() + (7 - n);  
		if (date.getDate()>n1 && date.getDate()<n2 && date.getDate() && date.getMonth()==current.getMonth() && date.getFullYear()==current.getFullYear()) return true; else return false;
	}
	else if (opt==1){ //danasnje
		if (date.getDate()==current.getDate() && date.getMonth()==current.getMonth() && date.getFullYear()==current.getFullYear()) return true; else return false;
	}
	
}


function filtrate()
{
	setDate2();
}