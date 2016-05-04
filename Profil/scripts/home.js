
window.onload = function (){
	document.getElementById('bottomPanel').style.display="none";

  second=1000; 
  minute=60000;
  day=86400000;
  week=604800000;
  month=2592000000;

  one=10000;
  two=60000;
  three=1600000;
  four=3600000;
  five=86400000;
  six=404800000;
  seven=304800000;
  eight=204800000;
  nine=604800000;
  ten=1992000000;
  eleven=1592000000;
  twelve=2492000000;

  alert("Uputstvo:Prikaz vijesti na + u footeru. Na pocetku su fiksne vrijednosti svim vijestima, klikom na All news vrijeme se povecava za jednu sekundu,na this month za jedan dan, this week jedan sat, this day jedan minut, da bi se simuliralo prelazak vijesti iz jedne kategorije u drugu. Preporuka da se krene od this day kategorije");
  var x=document.getElementsByClassName('time');
  var q=document.getElementsByClassName('all-news');

  
  for(var i=0;i<x.length;i++){

   if(i==0)
   {
    y=timeAdedd(one);
    z=timeAddedText(one);
    x[i].innerHTML=" "+z;
    q[i].classList.add('day-news');
  }
  if(i==1)
  {
    y=timeAdedd(two);
    z=timeAddedText(two);
    x[i].innerHTML=" "+z;
    q[i].classList.add('day-news');
  }
  if(i==2)
  {
    y=timeAdedd(three);
    z=timeAddedText(three);
    x[i].innerHTML=y+" "+z;
    q[i].classList.add('day-news');
  }
  if(i==3)
  {
    y=timeAdedd(four);
    z=timeAddedText(four);
    x[i].innerHTML=" "+z;
    q[i].classList.add('day-news');
  }
  if(i==4)
  {
    y=timeAdedd(five);
    z=timeAddedText(five);
    x[i].innerHTML=" "+z;
    q[i].classList.add('week-news');
  }
  if(i==5)
  {
    y=timeAdedd(six);
    z=timeAddedText(six);
    x[i].innerHTML=y+" "+z;
    q[i].classList.add('week-news');
  }
  if(i==6)
  {
    y=timeAdedd(seven);
    z=timeAddedText(seven);
    x[i].innerHTML=y+" "+z;
    q[i].classList.add('week-news');
  }
  if(i==7)
  {
    y=timeAdedd(eight);
    z=timeAddedText(eight);
    x[i].innerHTML=y+" "+z;
    q[i].classList.add('week-news');
  }
  if(i==8)
  {
    y=timeAdedd(nine);
    z=timeAddedText(nine);

    if(y>6 && y<14)
      x[i].innerHTML="one"+" "+z;
    if(y>13 && y<21)
      x[i].innerHTML="two"+" "+z;
    if(y>20 && y<28)
      x[i].innerHTML="three"+" "+z;
    if(y>27 && y<31)
      x[i].innerHTML="four"+" "+z;

    q[i].classList.add('month-news');

  }
  if(i==9)
  {
    y=timeAdedd(ten);
    z=timeAddedText(ten);

    if(y>6 && y<14)
      x[i].innerHTML="one"+" "+z;
    if(y>13 && y<21)
      x[i].innerHTML="two"+" "+z;
    if(y>20 && y<28)
      x[i].innerHTML="three"+" "+z;
    if(y>27 && y<31)
      x[i].innerHTML="four"+" "+z;

    q[i].classList.add('month-news');


  }
  if(i==10)
  {
    y=timeAdedd(eleven);
    z=timeAddedText(eleven);


    if(y>6 && y<14)
      x[i].innerHTML="one"+" "+z;
    if(y>13 && y<21)
      x[i].innerHTML="two"+" "+z;
    if(y>20 && y<28)
      x[i].innerHTML="three"+" "+z;
    if(y>27 && y<31)
      x[i].innerHTML="four"+" "+z;

    q[i].classList.add('month-news');

  }
  if(i==11)
  {
    y=timeAdedd(twelve);
    z=timeAddedText(twelve);


    if(y>6 && y<14)
      x[i].innerHTML="one"+" "+z;
    if(y>13 && y<21)
      x[i].innerHTML="two"+" "+z;
    if(y>20 && y<28)
      x[i].innerHTML="three"+" "+z;
    if(y>27 && y<31)
      x[i].innerHTML="four"+" "+z;

    q[i].classList.add('month-news');

  }
}


}


function expandContent() {

  if(document.getElementById('bottomPanel').style.display=="none")
  {
    document.getElementById('expandLink').innerHTML="-";
    document.getElementById('bottomPanel').style.display="block";
  }
  else
  {
    document.getElementById('expandLink').innerHTML="+";
    document.getElementById('bottomPanel').style.display="none";
  }
}

function left(){
	
  document.getElementById('all').scrollLeft += -200;

}

function right(){
	
  document.getElementById('all').scrollLeft += 200;
}



function timeAddedText(miliseconds)
{
  if(miliseconds<60000)
    return "few seconds ago";
  if(miliseconds>=60000 && miliseconds<120000)
    return "minute ago";
  if(miliseconds>=120000 && miliseconds<3600000)
    return "minutes ago";
  if(miliseconds>=3600000 && miliseconds<7200000)
    return "hour ago";
  if(miliseconds>=7200000 && miliseconds<86400000 )
    return "hours ago";
  if(miliseconds>=86400000 && miliseconds<172800000)
    return "day ago";
  if(miliseconds>=172800000 && miliseconds<604800000)
    return "days ago";
  if(miliseconds>=604800000 && miliseconds<1209600000)
    return "week ago";
  if(miliseconds>=1209600000 && miliseconds<2592000000)
    return "weeks ago";
  if(miliseconds>=2592000000 && miliseconds<5184000000)
    return "month ago";
  if(miliseconds>=5184000000 && miliseconds< 31536000000)
    return "months ago";
}

/*Time added start*/
function timeAdedd(miliseconds) {
    // later record end time

    // time difference in ms
    var timeDiff = miliseconds;

    // strip the miliseconds
    timeDiff /= 1000;

    // get seconds
    var seconds = Math.round(timeDiff % 60);

    // remove seconds from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get minutes
    var minutes = Math.round(timeDiff % 60);

    // remove minutes from the date
    timeDiff = Math.floor(timeDiff / 60);

    // get hours
    var hours = Math.round(timeDiff % 24);

    // remove hours from the date
    timeDiff = Math.floor(timeDiff / 24);

    // the rest of timeDiff is number of days
    var days = timeDiff;

    if(miliseconds<60000)
      return seconds; 
    if(miliseconds<3600000)
      return minutes;
    if(miliseconds<86400000)
      return hours; 
    if(miliseconds<2592000000)
      return days;


  }
  
  function setDate(interval,i)
  {   
      var x=document.getElementsByClassName('time');
      var q=document.getElementsByClassName('all-news');

      y=timeAdedd(interval);
      z=timeAddedText(interval);
      
  
        x[i].innerHTML=y+" "+z;

        if(interval>=7*86400000 && interval<14*86400000)
          x[i].innerHTML=" "+z;
        if(interval>13*86400000 && interval<21*86400000)
          x[i].innerHTML="two"+" "+z;
        if(interval>20*86400000 && interval<28*86400000)
          x[i].innerHTML="three"+" "+z;
        if(interval>27*86400000 && interval<31*86400000)
          x[i].innerHTML="four"+" "+z;


      if(new Date(new Date()-interval).getMonth()==new Date().getMonth())
      {
        q[i].classList.add('month-news');
        q[i].classList.remove('day-news');
        q[i].classList.remove('week-news');

      }
      else{
        q[i].classList.remove('month-news');
        q[i].classList.remove('day-news');
        q[i].classList.remove('week-news');
      }

      if(new Date(new Date()-interval).getDay() ==new Date().getDay() && new Date(new Date()-interval).getMonth()==new Date().getMonth())
        q[i].classList.add('day-news');
      else
      { 
        
        q[i].classList.remove('day-news');
      }

      var curr = new Date(); // get current date
      var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
      var last = first + 6; // last day is the first day + 6

      var firstday = new Date(curr.setDate(first));
      var lastday = new Date(curr.setDate(last));

      if(new Date(new Date()-interval)>firstday && new Date(new Date()-interval)<lastday)
      {
        q[i].classList.add('week-news');

      }
      else
      { 
        
        q[i].classList.remove('week-news');
      }
      

      if(interval>2592000000){
        var d=new Date(new Date()-interval);
        x[i].innerHTML=d.toDateString();
      }

  }

  function timeInterval(interval){
    var x=document.getElementsByClassName('time');
    var q=document.getElementsByClassName('all-news');

    for(var i=0;i<x.length;i++){

     if(i==0)
     {

       one+=interval;
       setDate(one,0);
     }

      if(i==1)
     {

       two+=interval;
       setDate(two,1);
     } 
      if(i==2)
     {

       three+=interval;
       setDate(three,2);
     }
      if(i==3)
     {

       four+=interval;
       setDate(four,3);
     }
      if(i==4)
     {

       five+=interval;
       setDate(five,4);
     }
      if(i==5)
     {

       six+=interval;
       setDate(six,5);
     }
      if(i==6)
     {

       seven+=interval;
       setDate(seven,6);
     }
      if(i==7)
     {

       eight+=interval;
       setDate(eight,7);
     }
      if(i==8)
     {

       nine+=interval;
       setDate(nine,8);
     }
      if(i==9)
     {

       ten+=interval;
       setDate(ten,9);
     }
      if(i==10)
     {

       eleven+=interval;
       setDate(eleven,10);
     }
      if(i==11)
     {

       twelve+=interval;
       setDate(twelve,11);
     }

    


     }
  }


function showAll(){

	var elems = document.getElementsByClassName("all-news");
     //must iterate through all elements with cass all--news to set display=none
     for (i = 0; i < elems.length; i++) {
      elems[i].style.display = 'block';
    }

    document.getElementById("all").style.marginLeft  = "2.3%"; 

    timeInterval(1000);
  }

  function showMonths(){

   var elems = document.getElementsByClassName("all-news");
   for (i = 0; i < elems.length; i++) {
    elems[i].style.display = 'none';
  }

  var elemsMonth = document.getElementsByClassName("month-news");
  for (i = 0; i < elemsMonth.length; i++) {
    elemsMonth[i].style.display = 'block';
  }

  document.getElementById("all").style.marginLeft  = "2.3%";
  timeInterval(86400000);

}

function showWeeks(){
  var elems = document.getElementsByClassName("all-news");
  for (i = 0; i < elems.length; i++) {
    elems[i].style.display = 'none';
  }

  var elemsMonth = document.getElementsByClassName("week-news");
  for (i = 0; i < elemsMonth.length; i++) {
    elemsMonth[i].style.display = 'block';
  }

  document.getElementById("all").style.marginLeft  = "2.3%";
  timeInterval(3600000);
}

function showDays(){
  var elems = document.getElementsByClassName("all-news");
  for (i = 0; i < elems.length; i++) {
    elems[i].style.display = 'none';
  }

  var elemsMonth = document.getElementsByClassName("day-news");
  for (i = 0; i < elemsMonth.length; i++) {
    elemsMonth[i].style.display = 'block';
  }

  document.getElementById("all").style.marginLeft  = "2.3%";
  timeInterval(60000);
}

/*TIme added finish*/