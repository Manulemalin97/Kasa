/**
 *  footer.jsx
 *  styles du composant footer
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import './footer.css' // importation du css de notre footer
import footerImage from '../../assets/footer.png' // importation de nos assets
import logoWhite from '../../assets/logoblanc.png' // importation de nos assets

//fonction footer qui va crée le composant voulu
function Footer() {
   //ce que on renvoie
   return (
      //conteneur du footer
      <div className="footer-container">
         {/* image du footer */}
         <img className="footer-image" src={footerImage} alt="Footer" />
         {/* conteneur du logo du footer */}
         <div className="logo-container">
            <img
               className="logo-image"
               src={logoWhite}
               alt="Logo blanc de Kasa"
            />
            <p className="text">© 2020 Kasa. All rights reserved</p>
         </div>
      </div>
   )
}
//on exporte notre footer pour l'utiliser ailleurs
export default Footer
