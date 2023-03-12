import Header from './components/Header'
import { About } from './screens/About';
import { Home } from './screens/Home'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Skills } from './screens/Skills';
import { Projects } from './screens/Projects';
import Contact from './screens/Contact';
import { ProjectsWeb } from './components/ProjectsWeb';
import { ProjectsMobile } from './components/ProjectsMobile';

import { ThemeProvider } from 'styled-components';
import Theme from './theme';
import { ProjectMobile } from './screens/ProjectMobile';
import { ProjectWeb } from './screens/ProjectWeb';

function App() {

  return (
<ThemeProvider
theme={Theme}
>
      <BrowserRouter>

      <Header/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects-web' element={<ProjectsWeb />} />
          <Route path='/projects-mobile' element={<ProjectsMobile />} />
          <Route path='/projectweb/:_id' element={<ProjectWeb />} />
          <Route path='/projectmobile/:_id' element={<ProjectMobile />} />
        </Routes>

      </BrowserRouter>
      </ThemeProvider>
  )
}

export default App
