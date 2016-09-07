/*
creer une fonction qui va creer une balise
affecter des valeurs a des propriétés et la fourrer dans un parent
*/

/*** METHODE PLUS SIMPLE ****/

function doTag (tag,paren) {

// creer une balise

var balise= document.createElement(tag);

// affecter des valeurs a des propriétés
	balise.style.width = "1250px";
	balise.style.height ="200px";
	balise.style.border ="1px solid";
	balise.style.backgroundColor = "yellow";
// insérer la balise crée dans un parent
paren.appendChild(balise);
return balise;
}


window.onload = function(){

doTag("header",document.body);
var maNav = doTag("nav",document.body);
doTag("section",document.body);
doTag("section",document.body);
doTag("section",document.body);
var liste = doTag("ul",maNav);
doTag("li",liste);

/******* PREMIER METHODE QUON A VU************************************************/
/*******************************HEADER*************************************************/
var Header = document.createElement("Header");
   Header.style.width = "1250px";
   Header.style.height ="200px";
   Header.style.border ="1px solid";
   Header.style.backgroundColor = "red";
   document.body.appendChild(Header).innerHTML="Header";
/***********************************NAV****************************************************/
   var barreDeNav = document.createElement("nav");
   barreDeNav.style.width = "1250px";
   barreDeNav.style.height ="200px";
   barreDeNav.style.border ="1px solid";
   barreDeNav.style.backgroundColor = "pink";
   document.body.appendChild(barreDeNav).innerHTML="Nav";
   var liste = document.createElement("ul");
   barreDeNav.appendChild(liste);
// je cree un premier item 
   var item1 = document.createElement ("li");
   liste.appendChild(item1);
   // je cree une ancre
   var ancre1 = document.createElement("a");
   // on lui met du texte
   ancre1.innerHTML = "lien 1";
   ancre1.href = "#section1";
   item1.appendChild(ancre1);

   var item2 = document.createElement ("li");
   liste.appendChild(item2);
   var ancre2 = document.createElement("a");
   ancre2.innerHTML = "lien 2";
   ancre2.href = "#section2";
   item2.appendChild(ancre2);

   /**************************************FIN NAV******************************************************/


// je crée une balise section

   var section1 = document.createElement ("section");
   section1.style.width = "1250px";
   section1.style.height ="200px";
   section1.style.border ="1px solid";
   section1.style.backgroundColor = "green";
   section1.id ="section1";
   section1.innerHTML= "section1";
   // je la fourre dans le body
   document.body.appendChild(section1);

   var section2 = document.createElement ("section");
   section2.style.width = "1250px";
   section2.style.height ="200px";
   section2.style.border ="1px solid";
   section2.style.backgroundColor = "blue";
   section2.id ="section2";
   section2.innerHTML= "section2";
   // je la fourre dans le body
   document.body.appendChild(section2);

   var footer = document.createElement ("footer");
   footer.style.width = "1250px";
   footer.style.height ="200px";
   footer.style.border ="1px solid";
   footer.style.backgroundColor = "red";
   footer.id ="footer";
   footer.innerHTML= "footer";
   // je la fourre dans le body
   document.body.appendChild(footer);


}