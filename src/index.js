/**
 *  index.js
 *  Voici notre App.js qu'on a renommé index.js qui lie tout nos composants dans les routes prévues a cet effet.
 *
 *  @author : Manuel JANSEN
 *  @version : 1.0
 *  @ date : 2023-03
 *
 **/

import React from 'react'; // Importation du module React
import ReactDOM from 'react-dom/client'; // Importation de la méthode ReactDOM du module react-dom/client
import Home from './pages/Home/home.jsx'; // Importation du composant Home depuis ./pages/Home
import Header from './components/Header/header'; // Importation du composant Header depuis ./components/Heade
import Error from './pages/Error/error'; // Importation du composant Error depuis ./components/Error
import CardPage from './components/Card/card';
import FicheLogement from './pages/FicheLogement/ficheLogement'; // Importation du composant FicheLogement depuis ./pages/FicheLogement
import About from './pages/About/about'; // Importation du composant About depuis ./pages/About
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importation de Router, Routes et Route depuis le module react-router-dom

// Rendu de l'application React
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Home />
              <CardPage />
            </>
          }
        />
        <Route path="*" element={<Error />} />
        <Route path="/about" element={<About />} />
        <Route path="/FicheLogement/:logementId" element={<FicheLogement />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
