import React from 'react';
import  ReactDOM from 'react-dom/client';
import { Checkbox } from "antd";



//----------------------------------------------------------------------------|
// Gestion de du front end , de l'afficahge et du lancement de l'application  |
//----------------------------------------------------------------------------|

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            tasks: JSON.parse(localStorage.getItem('tasks'))
        };
    }


    render(){
        return(
            <div>
                <body><center>
                    <header>
                        <div class="headerTache">
                        <p>Taches : </p>
                        <p id="TacheRestante">0 </p>
                        <p>/ </p>
                        <p id="TacheTotale">0</p>
                        </div>
                    </header>
                    <div id="tacheEncour"class="tacheEncour">

                    </div>
                    <footer>
                        <div class="footerTache">
                            <input id="nomtache"type="text" placeolder="ecrire ici" ></input>
                            <input type="button" onClick={ajouterParagraphe} value="AJOUTER"></input>
                        </div>
                    </footer>
                </center>
                </body> 
            </div>
            
                
        )
    }
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------|
// Gestion de l'ajout de tache dans la ToDo List , l'incrementation du , creéation des tache , suppression des taches et changement de l'ordre de la liste |
//---------------------------------------------------------------------------------------------------------------------------------------------------------|


function ajouterParagraphe() {
    const container = document.getElementById('tacheEncour');
    const nouveauParagraphe = document.createElement('p');
    const texte = document.createTextNode(document.getElementById('nomtache').value);
    nouveauParagraphe.appendChild(texte);
    container.appendChild(nouveauParagraphe);

    const paragrapheIncr = document.getElementById('TacheTotale');
    const paragrapheIncr2 = document.getElementById('TacheRestante');
    paragrapheIncr.textContent = parseInt(paragrapheIncr.textContent) + 1;
    paragrapheIncr2.textContent = parseInt(paragrapheIncr2.textContent) + 1;

    const nouveauBouton = document.createElement('button');
    const texteBouton = document.createTextNode(' ←  Tache fini');
    nouveauBouton.appendChild(texteBouton);
    nouveauParagraphe.appendChild(nouveauBouton);

    const nouveauBouton2 = document.createElement('button');
    const texteBouton2 = document.createTextNode('Changer l ordre');
    nouveauBouton2.appendChild(texteBouton2);
    nouveauParagraphe.appendChild(nouveauBouton2);


    nouveauBouton2.addEventListener('click', function() {
        const container = document.getElementById('tacheEncour');
        const paragraphes = container.getElementsByTagName('p');
      
        for (let i = 0; i < paragraphes.length; i++) {
          const paragraphe = paragraphes[i];
          const precedent = paragraphe.previousElementSibling;
          if (precedent && precedent.tagName === 'P') {
            container.insertBefore(paragraphe, precedent);
          }
        }
        
    });
}

//==================================================================================================
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

/*var tasks = [{"title":"1.Idée","isChecked":true},{"title":"2.Marché","isChecked":true},{"title":"3.Wireframe","isChecked":true},{"title":"4.Design","isChecked":true},{"title":"5.Landingpage","isChecked":true},{"title":"6.Développement","isChecked":false},{"title":"7.Publish","isChecked":false},{"title":"8.Pub","isChecked":false},{"title":"9.Feedback","isChecked":false}]
localStorage.setItem('tasks',JSON.stringify(tasks))*/