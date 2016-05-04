var validForm = false;

function validateEmail() {
    var email = document.querySelector("input[type=email]");
    var regex = /.+@.+\..+/;
    if (regex.test(email.value)) {
        validForm = true;
        email.style.backgroundColor = 'white';
    } else {
        email.style.backgroundColor = 'rgba(255,100,100,1)';
        validForm = false;
    }
}

function validateBirthday() {
    var lowestDate = new Date(1920, 0, 1);
    var highestDate = new Date();
    highestDate.setFullYear(highestDate.getFullYear() - 14); //moze imati najvise 14 godina
    var bday = document.querySelector("input[type=date]");
    if (new Date(bday.value) > highestDate || new Date(bday.value) < lowestDate) {
        bday.style.backgroundColor = 'rgba(255,100,100,1)';
        validForm = false;
    } else {
        bday.style.backgroundColor = 'white';
        validForm = true;
    }
}

function validateUrl() { //multiple field validacija: url mora biti istog domena kao i uneseni email, npr vhrustic@etf.unsa.ba , url mora biti http(s)://www.etf.unsa.ba
    var url = document.querySelector("input[type=url]");
    var regex = /^(http(s)?(:\/\/))?(www\.)?/;
    var email = document.querySelector("input[type=email]").value;
    if (!regex.test(url.value) || email.substring(email.indexOf("@") + 1, email.length) != url.value.substring(url.value.indexOf("www.") + 4, url.value.length)) {
        url.style.backgroundColor = 'rgba(255,100,100,1)';
        validForm = false;

    } else {
        url.style.backgroundColor = 'white';
        validForm = true;
    }
}

function validateMessage() {
    var msg = document.getElementsByTagName("textarea")[0];
    var minLength = 4;
    var maxLength = 200;
    if (msg.value.length < minLength || msg.value.length > maxLength) { //text poruke mora biti izmedju 4 i 200 karaktera
        msg.style.backgroundColor = 'rgba(255,100,100,1)';
        validForm = false;
    } else {
        msg.style.backgroundColor = 'white';
        validForm = true;
    }
}

function validateForm(){
    if(validForm == false) alert("Forma nije validna. Popunite podatke i ispravite greške.");
    return validForm;
}