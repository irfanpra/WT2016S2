var allNews = document.getElementsByTagName('article');
var oldDisplayStyle = allNews[0].style.display;

window.onload = function () {
    Array.prototype.forEach.call(allNews, function (item) {
        if (item.id == "latest_news" || item.className == "other_news") {
            var newsDate = item.getElementsByTagName('span')[0];
            item.originalDateTime = newsDate.innerText;
            newsDate.innerText = dateTimeToString(newsDate.innerText);
        }
    });
}

function dateTimeToString(dateString) {
    var date = new Date(dateString.substring(6, 10), parseInt(dateString.substring(3, 5)) - 1, dateString.substring(0, 2), dateString.substring(11, 13), dateString.substring(14, 16));
    var diff = (new Date() - date) / 1000;
    if (diff < 60) return "Novost objavljena prije par sekundi";
    if (diff / 60 < 60) return "Novost je objavljena prije " + parseInt(diff / 60) + " minut" + pluralForMinutes(parseInt(diff / 60));
    if (diff / (60 * 60) < 24) return "Novost je objavljena prije " + parseInt(diff / (60 * 60)) + " sat" + pluralForHours(parseInt(diff / (60 * 60)));
    if (diff / (60 * 60 * 24) < 7) return "Novost je objavljena prije " + parseInt(diff / (60 * 60 * 24)) + " dan" + pluralForDays(parseInt(diff / (60 * 60 * 24)));
    if (diff / (60 * 60 * 24) < 30) return "Novost je objavljena prije " + parseInt(diff / (60 * 60 * 24 * 7)) + " sedmic" + PluralForWeeks(parseInt(diff / (60 * 60 * 24 * 7)));
    else return dateString;
}

function filterNews() {
    var selectTag = document.getElementsByTagName('select')[0];
    switch (selectTag[selectTag.selectedIndex].value) {
    case 'today':
        showOnlyTodayNews();
        break;
    case 'thisweek':
        showOnlyThisWeekNews();
        break;
    case 'thismonth':
        showThisMonthNews();
        break;
    default:
        showAllnews();
    }
}

function showThisMonthNews() {
    Array.prototype.forEach.call(allNews, function (item) {
        if (item.id == "latest_news" || item.className == "other_news") {
            if ((parseInt(item.originalDateTime.substring(3, 5)) - 1) == new Date().getMonth()) item.style.display = oldDisplayStyle;
            else item.style.display = 'none';
        }
    });
}

function showAllnews() {
    Array.prototype.forEach.call(allNews, function (item) {
        if (item.id == "latest_news" || item.className == "other_news") {
            item.style.display = oldDisplayStyle;
        }
    });
}

function showOnlyTodayNews() {
    Array.prototype.forEach.call(allNews, function (item) {
        if (item.id == "latest_news" || item.className == "other_news") {
            var todayDay = (new Date()).getDate();
            if (todayDay != item.originalDateTime.substring(0, 2)) item.style.display = 'none';
            else item.style.display = oldDisplayStyle;
        }
    });
}

function showOnlyThisWeekNews() {
    Array.prototype.forEach.call(allNews, function (item) {
        if (item.id == "latest_news" || item.className == "other_news") {
            var weekStart = (new Date()).getDate() - (new Date()).getDay() + 1;
            var monday = new Date((new Date()).setDate(weekStart)).getDate();
            if (item.originalDateTime.substring(0, 2) < monday) item.style.display = 'none'; //sakrij vrijesti prije ponedjeljka tekuce sedmice
            else item.style.display = oldDisplayStyle; //u suprotnom prikazi
        }
    });
}

function pluralForMinutes(minutes) {
    switch (minutes) {
    case 1:
    case 21:
    case 32:
    case 41:
    case 51:
        return "";
    case 2:
    case 22:
    case 32:
    case 42:
    case 52:
    case 3:
    case 23:
    case 33:
    case 43:
    case 53:
    case 4:
    case 24:
    case 34:
    case 44:
    case 54:
        return "e";
    default:
        return "a"
    }
}

function pluralForHours(hours) {
    switch (hours) {
    case 1:
    case 21:
        return "";
    case 2:
    case 22:
    case 3:
    case 23:
    case 4:
        return "a";
    default:
        return "i";
    }
}

function pluralForDays(days) {
    if (days == 1) return "";
    return "a";
}

function PluralForWeeks(weeks) {
    if (weeks == 1) return "u";
    return "e";
}