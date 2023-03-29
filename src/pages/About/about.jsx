/**
 *  about.jsx
 *  Composant about
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import React from 'react' // Importation du module React
import Banner from '../../components/Banner/banner.jsx' // Importation du composant Banner
import bannerImage from '../../assets/banner-about.png' // Importation de l'image du banner de la page a propos
import Footer from '../../components/Footer/footer' // Importation du composant Footer
import Collapse from '../../components/Collapse/collapse' // Importation du composant collapse
import './about.css' // Importation du style css de notre page a propos

// Fonction About qui contient la description de nos collapse
function About() {
   // on retounre ce contenu ci dessous
   return (
      <>
         {/* On affiche notre image qu'on importe */}
         <Banner backgroundImage={bannerImage} />
         {/* Le conteneur de nos collapse*/}
         <div className="contentwrapper">
            {/* Titre du collapse */}
            <Collapse title="Fiabilité">
               Les annonces postées sur Kasa garantissent une fiabilité totale.
               Les photos sont conformes aux logements, et toutes les
               informations sont régulièrement vérifiées par nos équipes.
            </Collapse>
            <Collapse title="Respect">
               La bienveillance fait partie des valeurs fondatrices de Kasa.
               Tout comportement discriminatoire ou de perturbation du voisinage
               entraînera une exclusion de notre plateforme.
            </Collapse>
            <Collapse title="Service">
               Nos équipes se tiennent à votre disposition pour vous fournir une
               expérience parfaite. N'hésitez pas à nous contacter si vous avez
               la moindre question.
            </Collapse>
            <Collapse title="Sécurité">
               La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes
               que pour les voyageurs, chaque logement correspond aux critères
               de sécurité établis par nos services. En laissant une note aussi
               bien à l'hôte qu'au locataire, cela permet à nos équipes de
               vérifier que les standards sont bien respectés. Nous organisons
               également des ateliers sur la sécurité domestique pour nos hôtes.
            </Collapse>
         </div>
         <Footer />
      </>
   )
}

// On exporte le composant pour pour le réutiliser, notamment dans app.js (qui s'appelle index.js maintenant)
export default About
