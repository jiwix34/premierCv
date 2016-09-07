

function createNav(tag="nav"){  /*cree une fonction header*/
	var nav = document.createElement(tag); /*cree l'element header avec une variable avec le tag quil y a au dessus quil va stocker on poura utiliser myTag comme nom*/
	nav.style ="width:100%;height:200px;"; /*cree avec le nom cree par variable */
	nav.style.border ="1px solid red"; /**/
	nav.innerHTML = nav.tagName; /*ecrire le texte myTag */
	nav.style.textAlign = "center";
	
	
	return nav /*retourner la variable qui va cree le bloc*/
}

function createHeader(tag="header"){  /*cxree une fonction header*/
	var header = document.createElement(tag); /*cree l'element header avec une variable avec le tag quil y a au dessus quil va stocker on poura utiliser myTag comme nom*/
	header.style ="width:100%;height:200px;"; /*cree avec le nom cree par variable */
	header.style.border ="1px solid black"; /**/
	header.innerHTML = header.tagName; /*ecrire le texte myTag */
	header.style.textAlign = "center";
	
	
	return header /*retourner la variable qui va cree le bloc*/
}

function createSection(tag="section"){  /*cxree une fonction header*/
	var section = document.createElement(tag); /*cree l'element header avec une variable avec le tag quil y a au dessus quil va stocker on poura utiliser myTag comme nom*/
	section.style ="width:100%;height:200px;"; /*cree avec le nom cree par variable */
	section.style.border ="1px solid black"; /**/
	section.innerHTML = section.tagName; /*ecrire le texte myTag */
	section.style.textAlign = "center";
	
	
	return section /*retourner la variable qui va cree le bloc*/
}

function createArticle(tag="article"){  /*cxree une fonction header*/
	var article = document.createElement(tag); /*cree l'element header avec une variable avec le tag quil y a au dessus quil va stocker on poura utiliser myTag comme nom*/
	article.style ="width:100%;height:200px;"; /*cree avec le nom cree par variable */
	article.style.border ="1px solid black"; /**/
	article.innerHTML = article.tagName; /*ecrire le texte myTag */
	article.style.textAlign = "center";
	
	
	return article /*retourner la variable qui va cree le bloc*/
}

function createFooter(tag="footer"){  /*cxree une fonction header*/
	var footer = document.createElement(tag); /*cree l'element header avec une variable avec le tag quil y a au dessus quil va stocker on poura utiliser myTag comme nom*/
	footer.style ="width:100%;height:200px;"; /*cree avec le nom cree par variable */
	footer.style.border ="1px solid black"; /**/
	footer.innerHTML = footer.tagName; /*ecrire le texte myTag */
	footer.style.textAlign = "center";
	
	
	return footer /*retourner la variable qui va cree le bloc*/
}

function create(tag){
	var balise = document.createElement(tag); /*cree l'element header avec une variable avec le tag quil y a au dessus quil va stocker on poura utiliser myTag comme nom*/
	balise.style ="width:100%;height:200px;"; /*cree avec le nom cree par variable */
	balise.style.border ="1px solid red"; /**/
	balise.innerHTML = balise.tagName; /*ecrire le texte myTag */
	balise.style.textAlign = "center";
	
	
	return balise;
}

function create(tag){
	var balise = document.createElement(tag); /*cree l'element header avec une variable avec le tag quil y a au dessus quil va stocker on poura utiliser myTag comme nom*/
	balise.style ="width:100%;height:200px;"; /*cree avec le nom cree par variable */
	balise.style.border ="1px solid red"; /**/
	balise.innerHTML = balise.tagName; /*ecrire le texte myTag */
	balise.style.textAlign = "center";
	
	
	return balise;
}

window.onload = function(){
	document.body.appendChild(create("nav"));
	document.body.appendChild(create("header"));
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