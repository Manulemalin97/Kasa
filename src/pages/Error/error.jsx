/**
 *  error.jsx
 *  Composant Error
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import { StyledLinkError } from '../../utils/style/Atoms' // Importation d'un composant StyledLink personnalisé qui utilise des styles prédéfini
import './error.css' // importation de notre style css
// Définition d'un composant ErrorWrapper à l'aide de styled-components

// Définition du composant Error
function Error() {
   return (
      <div className="error-wrapper">
         <h1 className="error-title">404</h1>
         <h2 className="error-subtitle">
            Oups! La page que vous demandez n'existe pas.
         </h2>
         <StyledLinkError className="error-link" to="/">
            Retourner sur la page d’accueil
         </StyledLinkError>
      </div>
   )
}

export default Error
