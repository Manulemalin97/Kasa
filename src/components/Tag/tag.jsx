/**
 *  tag.jsx
 *  composant tag
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import React from 'react'
import './tag.css' // Import du fichier CSS pour le style du composant
import tagImg from '../../assets/tag.png' // Import de l'image du tag

// Définition du composant Tag sous forme de fonction avec le texte du tag comme paramètre
function Tag({ text }) {
   return (
      <div className="tag">
         {' '}
         {/* Conteneur du tag */}
         <img src={tagImg} alt="tag icon" /> {/* Image du tag */}
         <span className="tag__text">{text}</span> {/* Texte du tag */}
      </div>
   )
}

export default Tag // Export du composant Tag pour l'utiliser ailleurs dans l'application
