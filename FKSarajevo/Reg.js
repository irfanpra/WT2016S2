
function ispravnostEmail() {
	var pattern= /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	
	if (pattern.test(document.getElementById("em").value)) {

		document.getElementById("em").style.backgroundColor="white";

	}	
	else {

		document.getElementById("em").style.backgroundColor="red";

	}
}
function ispravnostUser()
{
	if(/^[A-Za-z0-9]{1,20}$/g.test(document.getElementById("kor").value)) 

	{

		document.getElementById("kor").style.backgroundColor="white";

	}	
	else {

		document.getElementById("kor").style.backgroundColor="red";

	}
}

/*	function ispravnostTelefona() {

		if (/(\+[0-9]{11})$/.test(document.getElementById("bt").value)) {
			
			var req = new XMLHttpRequest();

			req.onreadystatechange = function() {

				if (req.readyState === 4 && req.status === 200) {

					if (req.responseText === "OK") {


						document.getElementById("bt").style.backgroundColor="white";
					}
					
					else {

						ispravno = false;
						document.getElementById("bt").style.backgroundColor="red";
						alert("Neispravan kod države !");
					}
				}

				if(req.readyState === 4 && req.status === 404) {

					alert( "Web servis je nedostupan !");

				}
			}

			var parametar = document.getElementById("bt").value.substring(1, 4);
			req.open("GET", "http://zamger.etf.unsa.ba/telKod.php?telKod=" + parametar, true);
			req.send();


		}

		else {

			document.getElementById("bt").style.backgroundColor="red";

		}
	}*/
	function ispravnostTelefona() {

		if (/(\+[0-9]{11})$/.test(document.getElementById("bt").value)) {
			
			

			document.getElementById("bt").style.backgroundColor="white";


			var parametar = document.getElementById("bt").value.substring(1, 4);
			if (document.getElementById("dr").selectedIndex==1)
			{
				if (parametar=="385") 
				{
					document.getElementById("bt").style.backgroundColor="white"
				}
				else 
				{
					document.getElementById("bt").style.backgroundColor="red"
				}
			}
			if (document.getElementById("dr").selectedIndex==2)
			{
				if (parametar=="381") 
				{
					document.getElementById("bt").style.backgroundColor="white"
				}
				else 
				{
					document.getElementById("bt").style.backgroundColor="red"
				}
			}
			if (document.getElementById("dr").selectedIndex==0)
			{
				if (parametar=="387") 
				{
					document.getElementById("bt").style.backgroundColor="white"
				}
				else 
				{
					document.getElementById("bt").style.backgroundColor="red"
				}
			}


		}

		else {

			document.getElementById("bt").style.backgroundColor="red";

		}
	}
