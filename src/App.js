import Header from './components/Header'
import Main from './components/Main'
import Projects from './components/Projects'
import Music from './components/Music'
import Photography from './components/Photography'
import Footer from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
     <Header />
     <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/music' element={<Music />} />
      <Route path='/photo' element={<Photography />} />
     </Routes>
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
