function createCarre(){
	var div = document.createElement("div");
	div.style.width ="200px";
	div.style.height ="200px";
	div.style.border="1px solid yellow";
	div.style.backgroundColor= "black";
	return div;
}
function createColorizedCarre(color){
	var div = document.createElement("div");
	div.style.width ="200px";
	div.style.height ="200px";
	div.style.border="1px solid "+color;
	div.style.backgroundColor= "white";
	return div;
}
function createColorized2Carre(color){
	var div = document.createElement("div");
	div.style.width ="200px";
	div.style.height ="200px";
	div.style.border="1px solid "+color;
	div.style.backgroundColor= "black";
	return div;
}
window.onload = function(){
	/*On affecte la valeur red a la propriete bgColor de la balise body*/
	document.body.style.backgroundColor = "red";
	/*on duplique la valeur de la propriete style de la balise body*/
	var styleBody = document.body.style;
	/*on utilise la variable comme reference vers document.body.style*/
	styleBody.backgroundColor ="blue";
	
	var carre = createCarre();
	
	document.body.appendChild(carre);
	
	document.body.appendChild(createColorizedCarre("red"));
	
	document.body.appendChild(createColorized2Carre("green"));
};