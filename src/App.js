import 'semantic-ui-css/semantic.min.css'
import './App.css';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Entry1 from './blogs/Entry1';
import Entry2 from './blogs/Entry2';
import Entry3 from './blogs/Entry3';

import { Route, Routes } from 'react-router-dom'
import { Container } from 'semantic-ui-react';
 
function App() {

  return (
    <>
      <NavBar />
      <Container>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} /> 
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/readme' element={<Entry1 />} />
          <Route path='/so-youre-thinking-of-quitting' element={<Entry2 />} />
          <Route path='/figuring-out-adulthood-as-a-first-gen-hispanic-american-girl' element={<Entry3 />} />

          {/* 
          - femininity
          - therapy
          - career path
          - how AI has affect authenticity
          - building up self-respect
          - expression and difficulty of articulating your emotions in an accurate manner
          - anxiety
           */}

        </Routes>
      </Container>

    </>
  );
}

export default App;
