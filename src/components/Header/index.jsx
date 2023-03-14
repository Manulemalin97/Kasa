import { Link } from 'react-router-dom' // Importation du composant de lien de React Router DOM
import styled from 'styled-components' // Importation du module styled-components pour définir des composants stylisés
import { StyledLink } from '../../utils/style/Atoms' // Importation d'un composant StyledLink personnalisé qui utilise des styles prédéfini
import Logo from '../../assets/logo.png' // Importation du logo de l'application

// Définition d'un composant stylisé pour le logo de la page d'accueil
const HomeLogo = styled.img`
     width: 100%;
     height: 30%;
     margin: 0;
     padding: 0;
`

// Définition d'un composant stylisé pour le conteneur de la barre de navigation
const NavContainer = styled.nav`
     padding: 30px;
     display: flex;
     justify-content: space-between;
     align-items: center;
`

// Définition du composant Header
function Header() {
     // Rendu du composant
     return (
          // Utilisation du composant NavContainer pour la barre de navigation
          <NavContainer>
               <Link to="/">
                    <HomeLogo src={Logo} />
               </Link>
               <div>
                    <StyledLink to="/">Accueil</StyledLink>
                    <StyledLink to="/About">A Propos</StyledLink>
               </div>
          </NavContainer>
     )
}

export default Header // Exportation du composant Header pour une utilisation dans d'autres fichiers de l'app.
