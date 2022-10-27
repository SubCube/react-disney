import { Route, Routes } from 'react-router-dom'

import { AboutPage } from './pages/AboutPage/AboutPage'
import { CharactersPage } from './pages/CharactersPage/CharactersPage'
import { Navigation } from './components/Navigation/Navigation'
import { MainPage } from './pages/MainPage/MainPage'
import { CharacterPage } from './pages/CharacterPage/CharacterPage'

function App() {
  return (
    <>
      <Navigation />
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/character/:id" element={<CharacterPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </>
  )
}

export default App
