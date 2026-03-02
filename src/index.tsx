import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router'
import App from './App'
import './index.css'

const root = document.getElementById("root");

ReactDOM.createRoot(root!).render(
  <StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
)
