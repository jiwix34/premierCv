






/*function createNav(tag="nav"){
	var nav = document.createElement(tag); 
	nav.style ="width:100%;height:200px;"; 
	nav.style.border ="1px solid red";
	nav.innerHTML = nav.tagName; 
	nav.style.textAlign = "center";
	
*/

function create(tag){
	var balise = document.createElement(tag); /*cree l'element header avec une variable avec le tag quil y a au dessus quil va stocker on poura utiliser myTag comme nom*/
	balise.style ="width:100%;height:200px;"; /*cree avec le nom cree par variable */
	balise.style.border ="1px solid red"; /**/
	balise.innerHTML = balise.tagName; /*ecrire le texte myTag */
	balise.style.textAlign = "center";
	
	
	return balise;
}

window.onload = function(){
	var barre= document.body.appendChild(create("nav"));
	document.body.appendChild(create("header"));
	document.body.appendChild(create("section"));
	var liste =barre.appendChild(create("ul"));
	var item1 = liste.appendChild(create("li"));
	var ancre1 = item1.appendChild(create("a"));
	ancre1.innerHTML = "lien 1";
	ancre1.href = "http://google.fr";
	



	/*var manav = createNav();
	var section1 = createSection();
	section1.appendChild(createHeader());
	
	document.body.appendChild(section1);
	document.body.appendChild(createNav());
	document.body.appendChild(manav);
	manav.appendChild(createArticle());
	document.body.appendChild(createHeader());
	document.body.appendChild(createSection());
	document.body.appendChild(createArticle());
	document.body.appendChild(createFooter());*/
	
}