import { useRef } from 'react';
import NavBar from './components/NavBar/NavBar'
import Hero from './sections/hero'
import Projects from './sections/projects'
import Footer from './components/Footer/Footer';
import Experience from './sections/experience';

function App() {

  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  return (
    <>
      <NavBar projectsRef={projectsRef} experienceRef={experienceRef} />
      <Hero />
      <div ref={projectsRef}><Projects /></div>
      <div ref={experienceRef}><Experience /></div>
      <Footer />
    </>
  )
}

export default App
