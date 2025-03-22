import 'semantic-ui-css/semantic.min.css'
import './App.css';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Entry1 from './blogs/Entry1';
import Entry2 from './blogs/Entry2';

import { Route, Routes } from 'react-router-dom'
 
function App() {

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} /> 
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/readme' element={<Entry1 />} />
          <Route path='/so-youre-thinking-of-quitting' element={<Entry2 />} />
        </Routes>
      </div>

    </>
  );
}

export default App;
