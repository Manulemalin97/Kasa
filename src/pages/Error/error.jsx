/**
 *  error.jsx
 *  Composant Error
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import { Link } from 'react-router-dom'
import './error.css'

function Error() {
   return (
      <div className="error-wrapper">
         <h1 className="error-title">404</h1>
         <h2 className="error-subtitle">
            Oups! La page que vous demandez n'existe pas.
         </h2>
         <Link className="error-link" to="/">
            Retourner sur la page d’accueil
         </Link>
      </div>
   )
}

export default Error
