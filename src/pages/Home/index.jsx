// Importation des composants nécessaires
import Banner from '../../components/Banner/banner.jsx'
import homeImage from '../../assets/banner-home.png'
import styled from 'styled-components'
// Définition du composant de fonction pour la page d'accueil

const Title = styled.h1`
   font-family: 'Montserrat', sans-serif;
   font-weight: 500;
   font-size: 2rem;
`
function Home() {
   return (
      <div>
         <Banner
            backgroundImage={homeImage}
            title={<Title>Chez vous, partout et ailleurs</Title>}
         />
      </div>
   )
}
// Exportation du composant de fonction de la page d'accueil par défaut
export default Home
