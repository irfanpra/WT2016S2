
function PostaviVrijemeObjave()
{

function vrijeme (nesto) 
{
	
	var sekunda = 1000;
	var minuta = 1000*60;
	var sat = 60*60*1000;
	var dan = 1000*60*60*24;
	var sedmica = 1000*60*60*24*7;

	var currentdate = new Date(); 
	var trenutno = currentdate.getFullYear()+ "-"
	+ (currentdate.getMonth()+1)  + "-" 
	+ currentdate.getDate()  + "T"  
	+ currentdate.getHours() + ":"  
	+ currentdate.getMinutes() + ":" 
	+ currentdate.getSeconds();
	var te =new String(trenutno);



	function DajDatum(tim)
	{
						//var d = new Date(2009,5,24,11,33,30,0);

						var t = String(tim);
						var z =  document.getElementById(t).innerHTML ;
						var x = new String (z);
						var d = new Date (x);
						//var newText = document.createTextNode (d.toUTCString()) ;
						//var para = document.getElementById('n1');
						//para.appendChild(newText);
					    //lert(d.toUTCString());
					    //document.getElementById("n1d").innerHTML=d.toUTCString();
					    return d ;
						// body...
					}
					var datumT = new Date ();     
					var datumN = new Date();
					datumN= DajDatum(nesto);




					function razlika(date1, date2)
					{
				       // Convert both dates to milliseconds
				       var date1_ms = date1.getTime();
				       var date2_ms = date2.getTime();
				       // Calculate the difference in milliseconds
				       var difference_ms =Math.abs(date2_ms - date1_ms) ;				  
				       

				       return difference_ms ;
				   }


				   var diff = 0;
				   diff= razlika(datumT,datumN);
				 
				   function tivra (h)
				   {
				   	if (h/sekunda <60 ) {return 1;} 
				   	if (h/minuta< 60) {return 2;} 
				   	if (h/sat< 24 ) {return 3;} 
				   	if (h/dan<7) {return 4;} 
				   	if (h/sedmica<4) {return 5;} 
				   }

				   function PisiSekunde (p){
				   	var u = 0 ;
				   	u = p/sekunda;

				   	var newText1 =  new String ("prije par sekundi") ;

				   	document.getElementById(nesto).innerHTML=newText1;


				   }  

				   function PisiMinute (p)
				   {
				   	var u = 0 ;
				   	u = Math.round( p/minuta );
				   	if (u<5) {

				   		var newText1 =  new String ("prije "+u+" minuta") ;
						//var para1 = document.getElementById('n1');
						//para1.appendChild(newText);

						document.getElementById(nesto).innerHTML=newText1;

					}
					
					else {
						var newText1 =  new String ("prije "+u+" minuta") ;

						document.getElementById(nesto).innerHTML=newText1;
					}

				}  

				function PisiSati (p){
					var u = 0 ;
					u = Math.round( p/sat)  ;
					if (u<2) {

						var newText1 =  new String("prije 1 sat") ;

						document.getElementById(nesto).innerHTML=newText1;

					}
					else 	if (u>2 && u<5) {

						var newText1 =  new String("prije "+u+" sata") ;

						document.getElementById(nesto).innerHTML=newText1;

					}
					else {
						var newText1 =  new String ("prije "+u+" sati") ;

						document.getElementById(nesto).innerHTML=newText1;
					}

				}
				function PisiDani(p){
					var u = 0 ;
					u = Math.round (p/dan) ;
					if (u<2) {

						var newText1 = new String ("prije 1 dan") ;
                       
						document.getElementById(nesto).innerHTML=newText1;

					}
					
					else {
						var newText1 =  new String ("prije "+u+" dana") ;

						document.getElementById(nesto).innerHTML=newText1;
					}

				}function PisiSedmice(p){
					var u = 0 ;
					u = Math.round (p/sedmica);
					if (u<5) {

						var newText1 =  new String ("prije "+u+" sedmice") ;


						document.getElementById(nesto).innerHTML=newText1;

					}
					
					else {
						var newText1 =  new String ("prije "+u+" sedmica") ;

						document.getElementById(nesto).innerHTML=newText1;
					}

				}



				if (tivra(diff) === 1 ) {
					PisiSekunde(diff);
				} else if (tivra(diff) === 2 ) {
					PisiMinute(diff);
				}   else if (tivra(diff) === 3 ) {
					PisiSati(diff);
				}  else if (tivra(diff) === 4 ) {
					PisiDani(diff);
				}  else if (tivra(diff) === 5 ) {
					PisiSedmice(diff);
				} else 
				{

					var newText1 =  new String (datumN.toUTCString()) ;

					document.getElementById(nesto).innerHTML=newText1;





				}

			}
		for (var i = 1; i < 13; i++) {
			var z = new String ("n"+i+"d");
			
			vrijeme(z);
		}
		
}