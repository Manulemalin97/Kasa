/**
 *  rating.jsx
 *  Composant rating
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import React from 'react' // importation du module react
import orange from '../../assets/etoileOrange.png' // Importation de l'image pour les étoiles orange
import gris from '../../assets/etoileGrise.png' // Importation de l'image pour les étoiles grises
import './rating.css' // importation du style css
const Rating = ({ rate }) => {
   const stars = [1, 2, 3, 4, 5] // Création d'un tableau avec les 5 étoiles

   return (
      <div className="star-wrapper">
         {stars.map((star) =>
            // Si la note est supérieure ou égale à l'index de l'étoile, afficher une étoile orange
            rate >= star ? (
               <img className="star" src={orange} key={star} alt="" />
            ) : (
               // Sinon, afficher une étoile grise
               <img className="star" src={gris} key={star} alt="" />
            )
         )}
      </div>
   )
}

export default Rating
