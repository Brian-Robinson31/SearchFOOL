import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import { ListProvider } from './ListContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ListProvider>
    <App />
      </ListProvider>
    </BrowserRouter>
  </StrictMode>,
)
