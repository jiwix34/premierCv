/*fontion qui va donner la forme d'un rectangle au tag passé en parametre, en retournant ce tag. */

function getTag(tag="section"){
	var myTag = document.createElement(tag);
	
	if(myTag.tagName == "a" || myTag.tagName == "li" || myTag.tagName == "ul"){
		
	}else{
		myTag.style.border = "1px solid black";
		myTag.style.width = "100%";
		myTag.style.height = "200px";
		myTag.innerHTML = myTag.tagName;
		myTag.style.marginTop  = "5px";
		myTag.style.textAlign ="center";
	}
	return myTag
}

window.onload = function(){
	document.body.appendChild(getTag("header"));
	document.body.appendChild(getTag("nav"));	
	document.body.appendChild(getTag("article"));	
	document.body.appendChild(getTag("footer"));	
	document.body.appendChild(getTag());
	document.body.appendChild(getTag());
	document.body.appendChild(getTag());

}