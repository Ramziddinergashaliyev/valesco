import { lazy, StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.scss'
// import App from './App.jsx'
import "./lang/i18n.js"
const App = lazy(() => import("./App.jsx"))
import { BrowserRouter } from 'react-router-dom'
import Leazy from './components/leazy/Leazy.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Leazy/>}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </StrictMode>,
)
