import React from 'react'
import styled from 'styled-components'
import orange from '../../assets/etoileOrange.png' // Importation de l'image pour les étoiles orange
import gris from '../../assets/etoileGrise.png' // Importation de l'image pour les étoiles grises

const StarWrapper = styled.div`
   display: flex;
   align-items: center;
   margin-right: 1.5rem;
`

const Star = styled.img`
   width: 2rem;
   height: 2rem;
   margin-right: 0.5rem;
`

const Rating = ({ rate }) => {
   const stars = [1, 2, 3, 4, 5] // Création d'un tableau avec les 5 étoiles

   return (
      <StarWrapper>
         {stars.map((star) =>
            // Si la note est supérieure ou égale à l'index de l'étoile, afficher une étoile orange
            rate >= star ? (
               <Star src={orange} key={star} />
            ) : (
               // Sinon, afficher une étoile grise
               <Star src={gris} key={star} />
            )
         )}
      </StarWrapper>
   )
}

export default Rating
