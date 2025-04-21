import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import Rtkstore from './Redux-Toolkit/Rtkstore.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={Rtkstore}>
      <App/>        
    </Provider>
  </StrictMode>,
)
