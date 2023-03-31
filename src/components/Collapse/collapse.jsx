/**
 *  collapse.jsx
 *  Composant du collapse
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import React, { useState } from 'react'; // Cette ligne de code importe React et useState pour permettre la gestion de l'état local dans les composants React.
import './collapse.css'; // importer le fichier css pour le style
import flecheHaut from '../../assets/flechehaut.png'; //importer  l'image "flechehaut" de assets ou on stock les images
import flecheBas from '../../assets/flechebas.png'; //importer 'limage "flechehaut" de assets ou on stock les images

function Collapse(props) {
   // On initialise un state pour gérer l'état d'ouverture/fermeture du composant Collapse
   const [isOpen, setIsOpen] = useState(false);

   // On crée une fonction qui sera appelée lors du clic sur le bouton, et qui va inverser la valeur de l'état isOpen
   const handleToggle = () => {
      setIsOpen(!isOpen);
   };

   return (
      // Wrapper pour englober l'ensemble du composant Collapse
      <div className="collapse-wrapper">
         {/* Title pour le titre et le bouton d'ouverture/fermeture */}
         <div className="collapse-title">
            {/* title-text pour le texte du titre */}
            <span className="title-text">{props.title}</span>
            {/* collapse-button pour le bouton d'ouverture/fermeture */}
            <button className="collapse-button" onClick={handleToggle}>
               {/* collapse-arrow pour la flèche de direction du bouton */}
               <img
                  className="collapse-arrow"
                  src={isOpen ? flecheHaut : flecheBas}
                  alt={isOpen ? 'flèche haut' : 'flèche bas'}
               />
            </button>
         </div>
         {/*  On affiche le contenu du Collapse si isOpen est vrai */}
         {isOpen && <div className="collapse-content">{props.children}</div>}
      </div>
   );
}
// Exportation du composant Collapse
export default Collapse;
