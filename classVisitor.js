import {Snippet} from './classSnippet';

export class Visitor{
    listeCode;
    conteneur;

    constructor(conteneur){
    fetch('./data.json')
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.json();
    })
  .then(codeData => {
    this.listeCode = codeData.map(data => new Snippet(
      data.id,
      data.libelle,
      data.marque,
      data.categorie,
      data.description,
      data.etat,
      data.prix,
      data.img,
      data.disponibilite,
      data.dateTime
    ));

    var nbr = this.listeCode.length;

    var cols = conteneur.querySelectorAll(".col");

    var iteration = nbr/3;

    for(var i=1;i<=3;i++){

      for(var j = iteration * i;j<=iteration;j++){
        cols[i].appendChild(this.listeCode[j].getDiv());
      }

    }

   
    
  })
  .catch(error => console.error('Erreur lors du chargement des données:', error));
    }

}