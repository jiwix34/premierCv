/*faire cuire des pates*/
function cuireDesPates(liquide,casserole,cuisiniere,pates,sel){
	cuisiniere.allumer();
	casserole.ajouter(liquide);
	cuisiniere.poser(casserole);
	casserole.ajouter(sel)
	tant que (liquide.ebulition != vrai{
	  attendre;
	}
	casserole.ajouter(pates);
	var dureeDeCuisson =10;
	tant que (dureeDeCuisson != 0){
		dureeDeCuisson = dureeDeCuisson - 1;
		
	}
	return pates;
}