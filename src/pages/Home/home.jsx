/**
 *  home.jsx
 *  styles de la page about
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

// Importation des composants nécessaires
import Banner from '../../components/Banner/banner.jsx';
import homeImage from '../../assets/banner-home.png';

// Définition du composant de fonction pour la page d'accueil
function Home() {
   return (
      <div>
         <Banner
            backgroundImage={homeImage}
            title={<h1 className="title">Chez vous, partout et ailleurs</h1>}
         />
      </div>
   );
}

// On exporte notre composant
export default Home;
