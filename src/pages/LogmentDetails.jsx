// Importation des modules nécessaires
import React from 'react'
import logementData from '../logement.json'
import styled from 'styled-components'
import colors from '../../utils/style/colors'

// Style pour chaque carte
const Card = styled.div`
   width: 340px;
   height: 340px;
   color: ${colors.red};
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   margin: 20px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   position: relative;
`

// Style pour l'image de chaque carte
const CardImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
`

// Fonction pour la page de détails du logement
function LogementDetails(props) {
   // Récupération de l'ID du logement à partir des paramètres d'URL
   // Avec React Router, on récupere les paramètres d'URL à l'aide de la propriété match.params et on l'utilise pour mettre à jour l'état de votre composant.
   const logementId = props.match.params.id
   // Recherche du logement correspondant dans les données du fichier JSON
   const logement = logementData.find((l) => l.id === logementId)

   // Affichage des détails du logement
   return (
      <div>
         <Card>
            <CardImage src={logement.imageUrl} alt={logement.title} />
         </Card>
      </div>
   )
}

// Exportation de la fonction LogementDetails
export default LogementDetails
