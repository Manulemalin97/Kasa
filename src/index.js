import React from 'react' // Importation du module React
import ReactDOM from 'react-dom/client' // Importation de la méthode ReactDOM du module react-dom/client
import Home from './pages/Home' // Importation du composant Home depuis ./pages/Home
import Header from './components/Header' // Importation du composant Header depuis ./components/Heade
import Footer from './components/Footer'
import Error from './components/Error' // Importation du composant Error depuis ./components/Error
import About from './pages/About' // Importation du composant About depuis ./pages/About
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom' // Importation de Router, Routes et Route depuis le module react-router-dom
import { createGlobalStyle } from 'styled-components' // Importation de la méthode createGlobalStyle depuis le module styled-components

// Définition d'un style global à l'aide de styled-components
// eslint-disable-next-line no-unused-vars
const GlobalStyle = createGlobalStyle`
    * {
      font-family: 'Trebuchet MS', Helvetica, sans-serif;
    }
    body {
      margin: 0;
    }
`

// Rendu de l'application React
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
     <React.StrictMode>
          <Router>
               <Header />
               <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route path="*" element={<Error />} />
                    <Route path="/about" element={<About />} />
               </Routes>
               <Footer />
          </Router>
     </React.StrictMode>
)
