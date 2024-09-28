import { StrictMode } from 'react' // pacote responsável pelo core do React
import { createRoot } from 'react-dom/client'  // integração do react (Core do React) com a DOM (Document Objetc Model - Representação do HMTL através JavaScript)
import { App } from './App.jsx'


createRoot(document.getElementById('root')).render(  //Método createRoot recebe o elemento raiz da página html e cria o HTML/CSS/JS dentro desta DIV
  <StrictMode> 
    <App />    
  </StrictMode>,
)
