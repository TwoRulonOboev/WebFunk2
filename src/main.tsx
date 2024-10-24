import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Header from './components/heder.tsx'
import FirstBlok from './components/first_blok.tsx'
import Sekond_blok from './components/sekond_blok.tsx'
import FerdBlok from './components/ferd_blok.tsx'
import SerdBlok from './components/serd_blok.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <FirstBlok />
    <Sekond_blok />
    <SerdBlok />    
    <FerdBlok />
  </StrictMode>,
)
