// Importation des modules nécessaires
import { Link } from 'react-router-dom'
import styled from 'styled-components' // Importation du module styled-components pour définir des composants stylisé
import colors from './colors' // Importation des couleurs depuis le module ../../utils/style/colors

// Définition de la constante `StyledLink` qui est une version stylisée de `Link`
export const StyledLink = styled(Link)`
     padding: 10px 15px;

     color: ${colors.red};
     text-decoration: none;
     font-size: 20px;
     text-align: center;
`
