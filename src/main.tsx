import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CarsPage from './pages/CarsPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CarsPage />
  </StrictMode>,
)
