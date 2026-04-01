import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import MainPage from './pages/Main/MainPage.jsx'

createRoot(document.getElementById('root')).render(
    // <StrictMode>
        <MainPage />
    // </StrictMode>,
)