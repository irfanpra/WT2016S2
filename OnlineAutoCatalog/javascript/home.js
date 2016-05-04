function init(filterCondition) {
    
    var highlights = getMockData();
    
    if(filterCondition)
    {
        highlights = filterNews(filterCondition);
    }
    
    var rightSection = document.getElementById("news");

    for(var i=0;i<highlights.length;i++) {
        AddHighlightToPage(rightSection, i, highlights[i]);
    }
}

function AddHighlightToPage(pageElementNews, index, highlight) {
    
    var newsHighlightElement = document.createElement("DIV");
    newsHighlightElement.className += "news";
    
    if(index%2==0){
        AddNewsPicture(newsHighlightElement, highlight);
        AddNewsText(newsHighlightElement, highlight);
    }
    else{
        AddNewsText(newsHighlightElement, highlight);
        AddNewsPicture(newsHighlightElement, highlight);
    }
    
    pageElementNews.appendChild(newsHighlightElement);
    
    AddTimeMark(pageElementNews, highlight);
}


function AddNewsPicture(newsHighlightElement, highlight) {
    
    var imageElement = document.createElement("img");
    imageElement.setAttribute("src", highlight.imageSrc);
    imageElement.className += "images";
    
    var imageWrapper = document.createElement("div");
    imageWrapper.appendChild(imageElement);
    imageWrapper.className += "part";
    
    newsHighlightElement.appendChild(imageWrapper);
    
}

function AddNewsText(newsHighlightElement, highlight) {
    
    var highlightTitle = document.createElement("h4");
    var titleText = document.createTextNode(highlight.title);
    highlightTitle.appendChild(titleText);
    
    var highlightDescription1 = document.createElement("p");
    var descriptionText = document.createTextNode(highlight.description1);                                              
    highlightDescription1.appendChild(descriptionText);
    
    var highlightDescription2 = document.createElement("p");
    var descriptionText = document.createTextNode(highlight.description2);
    
    highlightDescription2.appendChild(descriptionText);
    
    var article = document.createElement("div");
    article.appendChild(highlightTitle);
    article.appendChild(highlightDescription1);
    article.appendChild(highlightDescription2);
    article.className += "article";
    
    var newsPart = document.createElement("div");
    newsPart.appendChild(article);
    newsPart.className += "part";
    
    newsHighlightElement.appendChild(newsPart);
}

function AddTimeMark(pageElementNews, highlight) {
    
    var timeMark = document.createElement("div");
    timeMark.className += "time-mark";
    timeMark.innerText = FormatTimeMark(highlight.date);
    
    pageElementNews.appendChild(timeMark);
}

function FormatTimeMark(highlightDate) {
    
    var currentDate = new Date();
    
    var differenceInSeconds = (currentDate.getTime() - highlightDate.getTime())/1000;
    
    if(differenceInSeconds < 60)
    {
        return "Novost je objavljena prije par sekundi";
    }
    else if(differenceInSeconds < 3600) //less then hour
    {
        return "Novost je objavljena prije x minuta";
    }
    else if (differenceInSeconds < 86400) //less then day
    {
        return "Novost je objavljena prije x sati";
    }
    else if(differenceInSeconds < 604800) //less then week
    {
        return "Novost je objavljena prije x dana";
    }
    else if(differenceInSeconds < 2592000) //less then month
    {
        return "Novost je objavljena prije x sedmica";
    }
    else {
        return "Novost je objavljena "+ highlightDate.toLocaleDateString();
    }
}


function getMockData() {
    
    var highlight01 = {
        
        imageSrc: "http://static.klix.ba/media/images/vijesti/160311080.1_xl.jpg",
        title: "Osnovni Audi R8 trebao bi pokretati trolitarski biturbo V6 motor",
        description1: "Prema neimenovanim izvorima do kojih su došli novinari američkog automobilskog magazina Car & Driver osnovni Audi R8 pokretat će trolitarski biturbo V6 motor koji će svojim konceptom biti sličan trolitarskom TFSI V6 motoru koji pokreće Audijev model S4. Zvaničnih informacija nema, a u magazinu misle da će motor raspolagati sa oko 450 konjskih snaga.",
        description2: "Motor će se nuditi u kombinaciji sa 7-stepenim automatskim mjenjačem sa dva kvačila, a snaga će se distribuirati na sva četiri točka. Pretpostavlja se da će maksimalna brzina automobila iznositi nešto više od 305 km/h.",
        date: new Date(2012, 12, 31)
    }
    
    var highlight02 = {
        
        imageSrc: "http://static.klix.ba/media/images/vijesti/160307046.1_xl.jpg",
        title: "Sedmog marta 2016. godine BMW grupa slavi 100 godina postojanja kao kompanija",
        description1: "U ovih 100 godina mali proizvođač zrakoplovnih motora sa sjedištem na sjeveru Minhena transformirao se u vodećeg svjetskog proizvođača premium automobila i motocikala, a usto i pružatelja premium usluga u sektoru financija i mobilnosti.",
        description2: "BMW uz brojne posebne događaje slavi svoju 100. godišnjicu i predstavljanjem posebnog konceptnog modela Vision Next 100, a kako mu i samo ime kaže on donosi prvi uvid u ono što Bavarci pripremaju za naredno stoljeće.",
        date: new Date(2013, 12, 31)
    }
    
    var highlight03 = {
        
        imageSrc: "http://static.klix.ba/media/images/vijesti/160309118.1_xl.jpg",
        title: "Službeno je započela prodaja Renault Megana četvrte generacije na bosanskohercegovačkom tržištu",
        description1: "Novi Renault Mégane na bh. tržište stiže sa četiri tradicionalno bogata paketa opreme i to sa novom nomenkalturom naziva: Life, Zen, Intens i Bose. U ponudi ostaju dvije unikatne linije opreme, GT Line koja se naslanja na treću razinu Intens, kao i unikatni GT, posebno dorađenu izvedbu od strane odjela Renault Sport.",
        description2: "Niti jedan prethodni model Megana nije ovoliko podigao prašinu u matičnom kompaktnom segmentu kao četvrta generacija, čija prodaja je službeno krenula na bosanskohercegovačkom tržištu. Njegov izgled je jedinstven i provokativan, a unutrašnji ambijent svijet za sebe. No, vrhunac Meganovog dolaska na tržište prati nenadmašni arsenal napredne tehnologije s kojom ovaj zavodljivi Francuz unosi nemir u kompaktoj klasi",
        date: new Date(2014, 12, 31)
    }
    
    var highlight04 = {
        
        imageSrc: "http://static.klix.ba/media/images/vijesti/b_160311040.jpg?v=1",
        title: "Kompanija Lamborghini je provela godinu dana restaurirajući model Miura SV, koji je debitovao na Sajmu automobila u Ženevi prije 45 godina",
        description1: "Automobil je proizveden 1971. godine, a radi se o preprodukcijskom prototipu koji je unikat. Posjeduje mnoge komponente modela Miura S, ali i neke tada nove komponente koje su kasnije postale dio različitih verzija modela SV.",
        description2: "Mehaničari su se pobrinuli za motor, koji je ofarban u originalnu Verde Matallizata metalih zelenu boju. Lamborghini Miura SV će biti izložen na izložbi egzotičnih automobila Amelia Island Concours d'Elegance. Ovaj Lamborghini je pažljivo restauriran pomoću fotografija i starih dokumenata kako bi automobil bio što sličniji originalu, koji je predstavljen na Sajmu automobila u Ženevi prije 45 godina.",
        date: new Date(2015, 12, 31)
    }
    
    
    var highlits = [];
    
    highlits.push(highlight01);
    highlits.push(highlight02);
    highlits.push(highlight03);
    highlits.push(highlight04);
    
    return highlits;
}
