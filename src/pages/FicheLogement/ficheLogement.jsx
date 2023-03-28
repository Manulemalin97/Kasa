/**
 *  ficheLogement.jsx
 *  composant ficheLogement
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import React from 'react'
import { useParams } from 'react-router-dom' // importation de useParams pour obtenir les paramètres de l'URL
import logementData from '../../logement.json' // importation des données de logement depuis un fichier JSON
import Carousel from '../../components/Slideshow/slideshow' // importation du composant Carousel
import Tag from '../../components/Tag/tag' // importation du composant Tag
import Host from '../../components/Host/host' // importation du composant Host
import Rating from '../../components/Rating/rating' // importation du composant Rating
import Collapse from '../../components/Collapse/collapse' // importation du component collapse
import './fichelogement.css' // importation du fichier CSS

function FicheLogement() {
   // Obtention des paramètres de l'URL
   const { logementId } = useParams()
   // Recherche du logement correspondant à l'ID fourni
   const logement = logementData.find((l) => l.id === logementId)

   return (
      <div>
         {/* Affichage du contenu uniquement si un logement correspondant a été trouvé */}
         {logement && (
            <div>
               {/* Affichage du composant Carousel pour les images */}
               <Carousel logement={logement} />
               {/* Affichage du titre et du nom de l'hôte */}
               <div className="title-container">
                  <h1 className="title">{logement.title}</h1>
                  <Host
                     name={logement.host.name}
                     picture={logement.host.picture}
                  />
               </div>
               {/* Affichage de la note et de la localisation */}
               <div className="rating-container">
                  <div className="location">{logement.location}</div>
                  <Rating rate={logement.rating} />
               </div>
               {/* Affichage des tags */}
               <div className="tag-container">
                  {logement.tags.map((tag, index) => (
                     <Tag key={index} text={tag} />
                  ))}
               </div>
               {/* Affichage des sections de la fiche logement avec Collapse */}
               <div className="collapse-container">
                  <div className="collapse-item">
                     <Collapse title="Description">
                        <p>{logement.description}</p>
                     </Collapse>
                  </div>

                  <div className="collapse-item">
                     <Collapse title="Équipements">
                        {logement.equipments.map((equipment, index) => (
                           <p key={index}>{equipment}</p>
                        ))}
                     </Collapse>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default FicheLogement
