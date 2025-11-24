import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FirstStepsApp } from './FirstStepsApp.tsx'
import { ShoppingMain } from './shopping-cart/ShoppingMain.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    {/* <FirstStepsApp /> */}
    <ShoppingMain />
  </StrictMode>,
)
