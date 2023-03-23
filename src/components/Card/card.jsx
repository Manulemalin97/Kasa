// Importation des modules nécessaires
import styled from 'styled-components'
import colors from '../../utils/style/colors'
import logementData from '../../logement.json'
import Footer from '../../components/Footer/'

// Style pour le conteneur principal
const Container = styled.div`
   font-size: 0;
   display: flex;
   flex-direction: column;
`

// Style pour chaque carte
const Card = styled.div`
   width: 340px;
   height: 340px;
   color: ${colors.red};
   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
   margin: 40px;
   position: relative;
   display: flex;
   flex-direction: column;
   justify-content: center;
   border-radius: 35px;
`

// Style pour la grille de cartes
const CardGrid = styled.div`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   margin: 35px;
   border-radius: 35px;
   background-color: ${colors.secondary};
`

// Style pour l'image de chaque carte
const CardImage = styled.img`
   width: 100%;
   height: 100%;
   object-fit: cover;
   border-radius: 15px;
   mix-blend-mode: darken;
   filter: brightness(0.7);
`
// Style pour le titre de l'image
const CardTitle = styled.h2`
   position: absolute;
   bottom: 0;
   left: 0;
   right: 0;
   margin: 20px;
   padding: 0px;
   color: white;
   border-radius: 0 0 15px 15px;
   font-size: 1.2rem;
   font-family: 'Montserrat', sans-serif;
   font-weight: 400;
   font-size: 1rem;
`
// Fonction pour la page de cartes
function CardPage() {
   // Création de la liste des cartes à partir des données du fichier JSON
   const cards = logementData.map((logement) => {
      return (
         // Chaque carte contient une image et un titre
         <Card key={logement.id}>
            <CardImage src={logement.cover} />
            <CardTitle>{logement.title}</CardTitle>
         </Card>
      )
   })
   // Affichage des cartes dans la grille
   return (
      <Container>
         <CardGrid>{cards}</CardGrid>
         <Footer />
      </Container>
   )
}

// Exportation de la fonction CardPage
export default CardPage
