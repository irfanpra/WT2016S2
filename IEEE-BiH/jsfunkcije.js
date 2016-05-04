function izracunajDatum() {
    
    var danasnji = new Date("2016-05-05T17:13:14"); 
    
    var listaDatuma = document.getElementsByClassName("datumObjave");


   for(i in listaDatuma){
       
       var objavljen = new Date(listaDatuma[i].innerHTML);
       
       var razDan = danasnji.getDate() - objavljen.getDate();
       var razMjesec = danasnji.getMonth() - objavljen.getMonth();
       var razGodina = danasnji.getFullYear() - objavljen.getFullYear();
       var razSati = danasnji.getHours() - objavljen.getHours();
       var razMinuta = danasnji.getMinutes() - objavljen.getMinutes();
       var razSekundi = danasnji.getSeconds() - objavljen.getSeconds();
            
if(razGodina === 0){
    if(razMjesec === 0){
        if(razDan === 0){
            if(razSati === 0){
                if(razMinuta === 0 || (razMinuta === 1 && razSekundi < 0)){
                    listaDatuma[i].innerHTML = "Novost objavljena prije par sekundi";
                }
                else if((razMinuta === 0 && razSekundi >= 0) || razMinuta > 1){
                    
                    if(razMinuta===1){
                    listaDatuma[i].innerHTML = "Novost objavljena prije " + razMinuta + " minut";
                    }
                    else if(razMinuta === 2 || razMinuta === 3 || razMinuta === 4 || razMinuta === 22 || razMinuta === 23){
                        listaDatuma[i].innerHTML = "Novost objavljena prije " + razMinuta + " minute";
                    }
                    else{
                        listaDatuma[i].innerHTML = "Novost objavljena prije " + razMinuta + " minuta";
                    }
                }
              
            }
            else{
                if(razSati === 1 && razMinuta < 0){
                    var a = (60 - objavljen.getMinutes()) + danasnji.getMinutes();
                    
                    if(a===1){
                    listaDatuma[i].innerHTML = "Novost objavljena prije " + a
                     + " minut";
                    }
                    else if(a === 2 || a === 3 || a === 4 || a === 22 || a === 23){
                       listaDatuma[i].innerHTML = "Novost objavljena prije " + 
                    a + " minute";
                    }
                    else{
                        listaDatuma[i].innerHTML = "Novost objavljena prije " + 
                    a + " minuta";
                    }
                    
                    
                    
                }
                else if((razSati === 1 && razMinuta >= 0) || (razSati > 1)){
                   
                    if(razSati===1 || razSati === 21){
                    listaDatuma[i].innerHTML = "Novost objavljena prije " + (razSati) + " sat";
                    }
                    else if(razSati === 2 || razSati === 3 || razSati === 4 ||
                    razSati === 22 || razSati === 23){
                         listaDatuma[i].innerHTML = "Novost objavljena prije " + (razSati) + " sata";
                    }
                    else{
                    listaDatuma[i].innerHTML = "Novost objavljena prije " + (razSati) + " sati";
                    }
                   
                }
            }
        }
        else{
            if(razDan === 1 && razSati < 0){
                
               var b = (24-objavljen.getHours()) + danasnji.getHours();
                
                 if(b===1 || b === 21){
                    listaDatuma[i].innerHTML = "Novost objavljena prije " + b
                 + " sat";
                    }
                    else if(b === 2 || b === 3 || b === 4 ||
                    b === 22 || b === 23){
                    listaDatuma[i].innerHTML = "Novost objavljena prije " + b
                 + " sata";
                    }
                    else{
                     listaDatuma[i].innerHTML = "Novost objavljena prije " + b
                 + " sati";
                    }
 
            }
            else if((razDan === 1 && razSati > 0) || (razDan > 1 && razDan < 7)){
                if(razDan === 1){
                      listaDatuma[i].innerHTML = "Novost objavljena prije " + razDan + " dan";
                    
                }
               else{
                    listaDatuma[i].innerHTML = "Novost objavljena prije " + razDan + " dana";
               } 
            }
            else if(razDan >= 7){
                var c = Math.floor(razDan/7);
                if(c === 1){
                listaDatuma[i].innerHTML = "Novost objavljena prije " 
                + c + " sedmicu";
                }
                else{
                    listaDatuma[i].innerHTML = "Novost objavljena prije " 
                + c + " sedmice";
                }
            }
        }
    }
    else if(razMjesec === 1 && razDan < 0){
            var brDana = new Date(objavljen.getFullYear(), objavljen.getMonth()-1, 0).getDate();
            
            var x = (brDana - objavljen.getDate()) + danasnji.getDate();
            
            if(x < 7){
                
              if(x === 1){
               listaDatuma[i].innerHTML = "Novost objavljena prije " +
             x + " dan";
                    
                }
               else{
                listaDatuma[i].innerHTML = "Novost objavljena prije " +
             x + " dana";
               } 
      
            }
            else{
                
                if(Math.floor(x/7) === 1){
                listaDatuma[i].innerHTML = "Novost objavljena prije " 
              + Math.floor(x/7) + " sedmicu";
                }
                else{
                    listaDatuma[i].innerHTML = "Novost objavljena prije " 
              + Math.floor(x/7) + " sedmice";
                }
            }
        }   
    else{
        listaDatuma[i].innerHTML = "Novost objavljena: " + objavljen.getDate() + "." + (objavljen.getMonth()+1) + "." + objavljen.getFullYear() + ".";
    }
}
else {
     listaDatuma[i].innerHTML = "Novost objavljena: " + objavljen.getDate() + "." + (objavljen.getMonth()+1) + "." + objavljen.getFullYear() + ".";
}
   }  
}



function filtrirajNovosti(){
    
    var novostiList = document.getElementsByClassName("novosti");
    
    var danasnji = new Date("2016-05-05T17:13:14"); 

    var i;
    for(i=0; i<novostiList.length; i++){
        novostiList[i].style.display = "none";
    }
    
    if(document.getElementById("sve").checked){
       for(i=0; i<novostiList.length; i++){
        novostiList[i].style.display = "initial";
    } 
    }
    else if(document.getElementById("dan").checked){
        
        for(i=0; i<novostiList.length; i++){            
            var dat = new Date(novostiList[i].lastChild.innerHTML);
            if(dat.getDate() === danasnji.getDate()){
            novostiList[i].style.display = "initial";
             }
        } 
    }
    else if(document.getElementById("sedmica").checked){
        
        for(i=0; i<novostiList.length; i++){            
            var dat = new Date(novostiList[i].lastChild.innerHTML);
            
            if((dat.getMonth() === danasnji.getMonth()) && (dat.getFullYear() === danasnji.getFullYear())){
            
            if((dat.getDate() >= (danasnji.getDate() - danasnji.getDay())) && (dat.getDate() <= (danasnji.getDate() + (6-danasnji.getDay())))){
                     novostiList[i].style.display = "initial";
                }
            }
        }
    }
    else if(document.getElementById("mjesec").checked){
        for(i=0; i<novostiList.length; i++){            
            var dat = new Date(novostiList[i].lastChild.innerHTML);
            if(dat.getMonth() === danasnji.getMonth()){
            novostiList[i].style.display = "initial";
             }
        } 
    }

    
}




function validirajUnos(uneseno){
    
  uneseno.style.borderColor = "#191970";
  var rege = new RegExp("^[a-zA-Z]+$");
  
    if(!rege.test(uneseno.value)){
        uneseno.style.borderColor = "red";
        document.getElementById("buttonSend").disabled = true;
    }
    else{
        document.getElementById("buttonSend").disabled = false;
    }

    
}

function validirajTelefon(uneseno){
    uneseno.style.borderColor = "#191970";
  var rege = new RegExp("^[0-9]+$");
  
    if(!rege.test(uneseno.value)){
        uneseno.style.borderColor = "red";
        document.getElementById("buttonSend").disabled = true;
    }
    else{
        document.getElementById("buttonSend").disabled = false;
    }
    

    
}

function validirajKontakt(){
    
    var mailPolje = document.getElementById("email");
    var telPolje = document.getElementById("telefon");
    
     if(mailPolje.value === "" && telPolje.value === ""){         
         alert("Niste unijeli kontakt telefon ili e-mail!");
     }

     else{
         alert("Uspjesno ste poslali poruku! Hvala!");
     }
    
    
}