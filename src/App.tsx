import Header from './components/Header'
import { About } from './screens/About';
import { Home } from './screens/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Skills } from './screens/Skills';

function App() {

  return (
<>
      <BrowserRouter>

      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
        </Routes>

      </BrowserRouter>
      </>
  )
}

export default App
