/**
 *  banner.jsx
 *  composant banner
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import React from 'react' // Importation du module React
import './banner.css' // importation du fichier CSS

// Définition d'un composant de fonction pour la bannière
function Banner(props) {
   return (
      <div
         className="banner-container"
         style={{ backgroundImage: `url(${props.backgroundImage})` }}
      >
         <h1 className="banner-title">{props.title}</h1>
      </div>
   )
}
// Exportation du composant de fonction de la bannière par défaut
export default Banner
