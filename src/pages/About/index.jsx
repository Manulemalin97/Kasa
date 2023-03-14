import styled from 'styled-components'
import aboutImage from '../../assets/banner-about.png' // Importation de l'image banner a propos

// Définition d'une fonction React qui renvoie un élément div contenant les deux composants créés précédemment
const AboutImage = styled.img`
     width: 100%;
     height: 30%;
`

function About() {
     return (
          <div>
               <AboutImage
                    src={aboutImage}
                    alt="Image d'une valée avec une foret et des montagnes"
               />
          </div>
     )
}

// Exportation de la fonction About en tant que composant React par défaut
export default About
