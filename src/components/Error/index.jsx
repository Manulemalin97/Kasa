import styled from 'styled-components' // Importation du module styled-components
import colors from '../../utils/style/colors' // Importation des couleurs depuis le module ../../utils/style/colors
import { StyledLinkError } from '../../utils/style/Atoms' // Importation d'un composant StyledLink personnalisé qui utilise des styles prédéfini

// Définition d'un composant ErrorWrapper à l'aide de styled-components
const ErrorWrapper = styled.div`
   margin: 30px;
   display: flex;
   flex-direction: column;
   background-color: ${colors.background};
   align-items: center;
   height: 100vh; /* ajout de la hauteur maximale à 100% */
`

// Définition d'un composant ErrorTitle à l'aide de styled-component
const ErrorTitle = styled.h1`
   font-weight: 600;
   font-size: 10em;
   color: ${colors.red};
`

// Définition d'un composant ErrorSubtitle à l'aide de styled-components
const ErrorSubtitle = styled.h2`
   font-weight: 300;
   color: ${colors.red};
`

// Définition du composant Error
function Error() {
   // Retourne le JSX représentant le composant Error
   return (
      <ErrorWrapper>
         <ErrorTitle>404</ErrorTitle>
         <ErrorSubtitle>
            Oups! La page que vous demandez n'existe pas.
         </ErrorSubtitle>
         <StyledLinkError to="/">
            Retourner sur la page d’accueil
         </StyledLinkError>
      </ErrorWrapper>
   )
}

// Exportation du composant Error pour pouvoir être utilisé ailleurs
export default Error
