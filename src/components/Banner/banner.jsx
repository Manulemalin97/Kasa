import styled from 'styled-components'
import colors from '../../utils/style/colors'

// Définition d'un composant de style pour le titre de la bannière
const BannerTitle = styled.h1`
   font-weight: 600;
   font-size: 3.5em;
   color: ${colors.white};
   text-align: center;
`
// Définition d'un composant de style pour le conteneur de la bannière
const BannerContainer = styled.div`
   height: 223px;
   background-image: url(${(props) => props.backgroundImage});
   background-position: center;
   background-size: cover;
   display: flex;
   justify-content: center;
   align-items: center;
   border-radius: 35px;
   margin: 35px;
`

// Définition d'un composant de fonction pour la bannière
function Banner(props) {
   return (
      <BannerContainer backgroundImage={props.backgroundImage}>
         <BannerTitle>{props.title}</BannerTitle>
      </BannerContainer>
   )
}
// Exportation du composant de fonction de la bannière par défaut
export default Banner
