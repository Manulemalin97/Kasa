//Ancienne page App.js qu'on a mis dans un fichier Home puis renommé index.jsx

import styled from 'styled-components' // Importation du module styled-components pour définir des composants stylisé
import homeImage from '../../assets/banner-home.png' // Importation de l'image banner de la page d'accueil

const HomeImage = styled.img`
     width: 100%;
     height: auto;
`

function Home() {
     return (
          <div>
               <HomeImage src={homeImage} alt="Image de la page A propos" />
          </div>
     )
}

export default Home
