function date_time(id, date)
{
       
        var currentDate = new Date();
        var dateSeconds = parseInt(date.getTime() / 1000);
        var currentDateSeconds = parseInt(currentDate.getTime() / 1000);
        var differenceInSeconds = currentDateSeconds - dateSeconds;
        var weeks = parseInt(differenceInSeconds / 604800);
        var days = parseInt(differenceInSeconds / 86400);
        var hours = parseInt((differenceInSeconds % 86400) / 3600);
        var minutes = parseInt(((differenceInSeconds % 3600) / 60) + .5)
        if (differenceInSeconds > 0 && differenceInSeconds < 60){
                document.getElementById(id).innerHTML = "Novost objavljena prije par sekundi";
        }
        else if (days > 30) {
                document.getElementById(id).innerHTML = date.toDateString();
        } 
        else if (weeks > 1 && days < 30){
               document.getElementById(id).innerHTML = "Novost je objavljena prije " + weeks + " sedmica"; 
        }
        else if (days > 0 && days < 7){
                if (days == 1) {
                        document.getElementById(id).innerHTML = "Novost je objavljena prije " + days + " dan";   
                } else {
                        document.getElementById(id).innerHTML = "Novost je objavljena prije " + days + " dana";
                }
        }
        else if (hours > 0 && hours < 24){
                if (hours == 1){
                        document.getElementById(id).innerHTML = "Novost je objavljena prije " + hours + " sat";
                } else {
                         document.getElementById(id).innerHTML = "Novost je objavljena prije " + hours + " sati";
                } 
        }
        else if (minutes > 0 && minutes < 60){
                document.getElementById(id).innerHTML = "Novost je objavljena prije " + minutes + " minuta";
        }
              
}
function validirajIme(){
      var ime = document.getElementById("ime");

      document.getElementById("ime").classList.remove('error');
      
      if (ime.value === "" || !ime.value.match(/^[a-zA-Z]*$/)){
        document.getElementById("ime").classList.add("error");
      }     
}
function validirajPrezime(){
      var prezime = document.getElementById("prezime");

      document.getElementById("prezime").classList.remove('error');
      
      if (prezime.value === "" || !prezime.value.match(/^[a-zA-Z]*$/)){
        document.getElementById("prezime").classList.add("error");
      }   
}

function validirajEmail(){
      var email = document.getElementById("email");

      document.getElementById("email").classList.remove('error');
      
      if (email.value === "" || !email.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        document.getElementById("email").classList.add("error");
      }  
} 

function validirajTelefon(){
      var tel = document.getElementById("tel");

      document.getElementById("tel").classList.remove('error');
      
      if (tel.value === "" || !tel.value.match(/^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/)){
        document.getElementById("tel").classList.add("error");
      }  
} 
