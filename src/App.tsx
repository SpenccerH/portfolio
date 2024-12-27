import { useRef } from 'react';
import NavBar from './components/NavBar/NavBar'
import Hero from './sections/hero'
import Projects from './sections/projects'
import Footer from './components/Footer/Footer';
import Experience from './sections/experience';
import Contact from './sections/contact';

function App() {

  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <>
      <NavBar projectsRef={projectsRef} experienceRef={experienceRef} contactRef={contactRef} />
      <Hero />
      <div ref={projectsRef}><Projects /></div>
      <div ref={experienceRef}><Experience /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </>
  )
}

export default App
