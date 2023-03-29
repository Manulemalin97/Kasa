/**
 *  header.jsx
 *  composant header
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import { Link } from 'react-router-dom' // Importation du composant de lien de React Router DOM
import './header.css' // importation de notre css
import Logo from '../../assets/logo.png' // Importation du logo de l'application

// Définition du composant Header
function Header() {
   // Rendu du composant
   return (
      // Utilisation du composant NavContainer pour la barre de navigation
      <nav className="nav-container">
         <Link to="/">
            <img className="home-logo" src={Logo} alt="Logo" />
         </Link>
         <div className="nav-links">
            <Link to="/">Accueil</Link>
            <Link to="/About">A Propos</Link>
         </div>
      </nav>
   )
}

export default Header // Exportation du composant Header pour une utilisation dans d'autres fichiers de l'app.
