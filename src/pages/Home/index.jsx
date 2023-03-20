// Importation des composants nécessaires
import Banner from '../../components/Banner/banner.jsx'
import homeImage from '../../assets/banner-home.png'

// Définition du composant de fonction pour la page d'accueil
function Home() {
   return (
      <div>
         <Banner
            backgroundImage={homeImage}
            title="Chez vous, partout et ailleurs"
         />
      </div>
   )
}
// Exportation du composant de fonction de la page d'accueil par défaut
export default Home
