import {useEffect ,useRef} from 'react';
import Navbar from './sections/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Resume from './sections/Resume';
import Footer from './sections/Footer';

function App() {
  const goToTop = () => {        
    window.scrollTo(0, 0);        
  };
  useEffect(() => {
      goToTop()
  },[])

  const scrollpoint0 = useRef(null);
  const scrollpoint1 = useRef(null);
  const scrollpoint2 = useRef(null);
  const scrollpoint3 = useRef(null);

  const scrollpoints = [scrollpoint0, scrollpoint1, scrollpoint2, scrollpoint3]

  return (
    <>
    <Navbar scrollpoints={scrollpoints}/>
    <div className='mt-20'>
      
      <div ref={scrollpoint0}></div>
      <Home scrollpoints={scrollpoints}/>
      
      <div ref={scrollpoint1}></div>
      <About scrollpoints={scrollpoints}/>

      <Projects scrollpoints={scrollpoints}/>

      <div ref={scrollpoint3}></div>
      <Resume/>
      
    </div>
    <Footer/>
    </>
  )
}

export default App
