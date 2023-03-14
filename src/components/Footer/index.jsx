import styled from 'styled-components'
import footerImage from '../../assets/footer.png' // Importation de l'image banner a propos

// Définition d'une fonction React qui renvoie un élément div contenant les deux composants créés précédemmen
const FooterImage = styled.img`
     position: fixed;
     bottom: 0;
     left: 0;
     right: 0;
     width: 100%;
     text-align: center;
`
//Notre fonction footer
function Footer() {
     return (
          <div>
               <FooterImage
                    src={footerImage}
                    alt="Image d'une valée avec une foret et des montagnes"
               />
          </div>
     )
}

// Exportation de la fonction About en tant que composant React par défaut
export default Footer
