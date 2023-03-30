/**
 *  slideshow.jsx
 *  composant du carroussel
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import React, { useState } from 'react'
import './slideshow.css'
import flecheGauche from '../../assets/flechegauche.png'
import flecheDroite from '../../assets/flechedroite.png'

function Carousel({ logement }) {
   // Initialisation du state index à 0
   const [index, setIndex] = useState(0)

   // Récupération du nombre d'images dans la liste des images du logement
   const length = logement.pictures.length

   // Fonction pour afficher la slide suivante
   const nextSlide = () => {
      // Si l'index est le dernier de la liste, on revient à la première image (index 0), sinon on incrémente l'index
      setIndex(index === length - 1 ? 0 : index + 1)
   }

   // Fonction pour afficher la slide précédente
   const prevSlide = () => {
      // Si l'index est le premier de la liste, on va à la dernière image (index length-1), sinon on décrémente l'index
      setIndex(index === 0 ? length - 1 : index - 1)
   }
   // Si le nombre d'images est égal à 1, on n'affiche pas les flèches et le numéro de la slide
   if (length === 1) {
      return (
         <div className="carousel">
            <img
               className="carousel__image"
               src={logement.pictures[0]}
               alt=""
            />
         </div>
      )
   }
   // Affichage du carousel avec l'image correspondant à l'index en cours
   return (
      <div className="carousel">
         <img
            className="carousel__image"
            src={logement.pictures[index]}
            alt=""
         />
         {/* Flèche de navigation vers la slide précédente */}
         <img
            className="carousel__prev"
            src={flecheGauche}
            alt="previous slide"
            onClick={prevSlide}
         />
         <div className="carousel__index">
            {index + 1}/{length}
         </div>
         {/* Flèche de navigation vers la slide suivante */}
         <img
            className="carousel__next"
            src={flecheDroite}
            alt="next slide"
            onClick={nextSlide}
         />
      </div>
   )
}

export default Carousel
