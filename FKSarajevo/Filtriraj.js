
function filter()
{

function fil (nesto,obj) 
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
				  
			  	       

			       if (document.getElementById("sel").selectedIndex===1)
			       { 
			          if (diff/sat < 24 ) {document.getElementById(obj).style.visibility="visible";}
			          else {document.getElementById(obj).style.visibility="hidden";}

			       }

			        if (document.getElementById("sel").selectedIndex===2)
			       {
                       if (diff/dan < 7 ) {document.getElementById(obj).style.visibility= "visible";}
			          else {document.getElementById(obj).style.visibility="hidden";}
			       }

			       if (document.getElementById("sel").selectedIndex===3)
			       {  
			       	
                      if (diff/sedmica < 4 ) {document.getElementById(obj).style.visibility= "visible";}
			          else {document.getElementById(obj).style.visibility= "hidden";}
			       }

			       if (document.getElementById("sel").selectedIndex===0)
			       {  
			       
                     document.getElementById(obj).style.visibility= "visible";
			       
			       }

			       



                  

				

			}
		
			 for (var i = 1; i < 13; i++) {
			       var z = new String ("n"+i);
			       var y = new String ("n"+i+"da");
               fil(y,z);
			   }

		
		

}