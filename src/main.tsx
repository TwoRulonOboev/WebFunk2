import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/Header/heder.tsx'
import FirstBlok from './components/FirstBlock/FirstBlock.tsx'
import Sekond_blok from './components/SecondBlock/SecondBlock.tsx'
import FerdBlok from './components/ReviewSection/ReviewSection.tsx'
import SerdBlok from './components/ThirdBlock/ThirdBlock.tsx'
import Footer from './components/Footer/Footer.tsx'
import RegistrationBlock from './components/RegistrationBlock/RegistrationBlock.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <FirstBlok />
    <Sekond_blok />
    <SerdBlok />    
    <FerdBlok />
    <RegistrationBlock />
    <Footer />
  </StrictMode>,
)
