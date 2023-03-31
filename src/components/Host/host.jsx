/**
 *  host.jsx
 *  Composant host
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import React from 'react'; // importation du module reavt
import './host.css'; // importe le fichier de styles "host.css"

// déclare un composant "Host" qui prend deux propriétés, name et picture

const Host = ({ name, picture }) => {
   // retourne le JSX du composant
   return (
      // div englobant tout le contenu du composant avec la classe "host-container"
      <div className="host-container">
         {/* div pour l'image de l'hote avec la classe "host-image-container" */}
         <div className="host-image-container">
            {/*  balise img pour afficher l'image de l'hote avec la classe "host-image" */}
            <img className="host-image" src={picture} alt={name} />
         </div>
         {/* div pour afficher le nom de l'hote avec la classe "host-name" */}
         <div className="host-name">{name}</div>
      </div>
   );
};

export default Host; // exporte le composant "Host" pour pouvoir l'utiliser ailleurs
