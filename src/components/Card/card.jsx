/**
 *  card.jsx
 *  styles du composant card
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

// Importation des modules nécessaires
import React from 'react'; // Importation du module React
import logementData from '../../logement.json'; // Importation des données de logement depuis un fichier JSON
import Footer from '../Footer/footer'; // Importation du composant Footer depuis un fichier local
import { Link } from 'react-router-dom'; // Importation du hook Link depuis le module 'react-router-dom'
import './card.css'; // Importation du fichier CSS pour styliser la page de cartes de logement

function CardPage() {
  // Transformation des données de logement en une liste de cartes de logement
  const cards = logementData.map((logement) => {
    return (
      // Création d'une carte de logement
      <div className="card" key={logement.id} onClick={() => logement.id}>
        <Link to={`/FicheLogement/${logement.id}`}>
          {/* Utilisation de la propriété "to" du hook Link pour lier chaque carte à une page de détails de logement */}
          <img
            className="card-image"
            src={logement.cover} // On utilise la propriété "cover" de chaque objet de logement pour afficher l'image de couverture qui correspond
            alt={logement.title} // description de l'image
          />
          <h3 className="card-title">{logement.title}</h3>
          {/* Utilisation de la propriété "title" de chaque objet de logement pour afficher le titre correspondant */}
        </Link>
      </div>
    );
  });

  // Affichage de la liste de cartes de logement et du composant Footer
  return (
    <div className="cardContainer">
      <div className="card-grid">{cards}</div>
      <Footer />
    </div>
  );
}
// Exportation du composant CardPage
export default CardPage;
