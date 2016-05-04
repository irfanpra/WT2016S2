function DanasnjeNovosti(datum)
{
	
	var trenutnoVrijeme= new Date();
	if(trenutnoVrijeme.getDate()==datum.getDate() && trenutnoVrijeme.getMonth()+1==datum.getMonth()+1)
		return true;

	else return false;
}
function FiltrirajNovosti()
{
	var x = document.getElementById("listaNovosti").value;
	var nizObavijesti= document.getElementsByClassName("vrijemeObjave");
	
	if ( x == "danasnje")
	{

		for (var i = 0; i < nizObavijesti.length; i++) 
		{
			var d = new Date(nizObavijesti[i].innerHTML);
			if(DanasnjeNovosti(d)==true)
				{
					nizObavijesti[i].style.display= 'inline-block';
				}
			else
				{
					var x= nizObavijesti[i].parent().parent();
					document.getElementById("")
				}
		}
	}
}
