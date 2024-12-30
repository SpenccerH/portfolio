import { useRef } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Hero from './sections/hero'
import Projects from './sections/projects'
import Footer from '../../components/Footer/Footer';
import Experience from './sections/experience';

function Landing() {

  const projectsRef = useRef(null);
  const experienceRef = useRef(null);

  const home = true;

  return (
    <>
      <NavBar projectsRef={projectsRef} experienceRef={experienceRef} home={home} />
      <Hero />
      <div ref={projectsRef}><Projects /></div>
      <div ref={experienceRef}><Experience /></div>
      <Footer />
    </>
  )
}

export default Landing;
