import {useEffect ,useRef} from 'react';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
//@ts-ignore
import resume from '../public/VelovicResume.pdf'
//@ts-ignore
import graybackground from './assets/images/graybackground.jpg'
//@ts-ignore
import scrollgif from './assets/images/blackscrollgif.gif'
//@ts-ignore
import headshot from './assets/images/headshotsmall.png'
//@ts-ignore
import macbooktesla from './assets/images/macbookteslasmall.png'
//@ts-ignore
import VelovicResume from './assets/images/VelovicResume.jpg'

function App() {
  const goToTop = () => {        
    window.scrollTo(0, 0);        
  };
  useEffect(() => {
      goToTop()
  },[])

  const scrollpoint1 = useRef(null);
  const scrollpoint2 = useRef(null);
  const scrollpoint3 = useRef(null);
  const scrollpoint4 = useRef(null);

  const scrollpoints = [scrollpoint1, scrollpoint2, scrollpoint3, scrollpoint4]

  const scrollTo3 = () => {
    //@ts-ignore
  scrollpoints[2].current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollTo4 = () => {
    //@ts-ignore
  scrollpoints[3].current?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <>
    <Navbar scrollpoints={scrollpoints}/>
    <div className='mt-20'>
      <div ref={scrollpoint1}></div>
      <div className='relative w-full'>
        <img className='imagecover w-screen' src={graybackground}/>
        <div className='overlap1 grid text-center mx-8 md:mx-20 mt-20 md:mt-36 justify-items-center h-fit' >
          <img className='w-52' src={headshot}/>
          <div id='TitleText' className='font-bold mt-2'>ARJAN VELOVIC</div>
          <div id='ParagraphText' className='my-2 max-w-4xl'>Full Stack Engineer crafting seamless digital experiences. Expert in JavaScript, Python, React, Flask. Explore my portfolio for innovative solutions.</div>
          <button id='ParagraphText' className='bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-16 rounded-md my-5' onClick={scrollTo3}>
            PROJECTS
          </button>
        </div>

        <div className='overlap2 hidden md:grid grid-rows-3 items-center h-full'>
          <div className='row-span-1'></div>
          <div className='bg-gray-50 h-48 grid text-black w-16 text-2xl items-center justify-center rounded border border-gray-300'>
            <a href='https://www.linkedin.com/in/arjan-velovic/' className='hover:text-gray-500 duration-300'><i className="fa-brands fa-linkedin"></i></a>
            <a href='https://github.com/arjanvelovic' className='hover:text-gray-500 duration-300'><i className="fa-brands fa-github"></i></a>
            <a href='mailto:arjanvelovic@gmail.com' className='email-button hover:text-gray-500 duration-300'><i className="fa-solid fa-envelope"></i></a>
          </div>
          <div className='row-span-1'></div>
        </div>

        <div className='overlap3 grid justify-items-center'>
          <img src={scrollgif} className='h-16 mb-16 md:mb-3'/>
        </div>
      </div>

      <div ref={scrollpoint2}></div>
      <div className='bg-gray-100 grid justify-center justify-items-center w-full text-gray-700'>
        <div className='grid mt-20 justify-items-center mx-8 md:mx-14 text-center'>
          <div id='HeaderText' className='font-bold'>ABOUT ME</div>
          <hr className="w-28 h-1.5 my-2 bg-green-700 rounded"/>
          <div id='SubtitleText' className='lg:w-4/5 xl:w-3/5'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</div>
        </div>
        <div className='grid mt-16 lg:w-4/5 xl:w-3/5 mx-8 md:mx-14 justify-items-start grid-cols-1 md:grid-cols-2 gap-8 mb-20'>
          <div className='text-start max-w-lg md:w-full'>
            <div id='SubtitleText' className='font-bold'>Get to know me!</div>
            <div id='ParagraphText' className='mt-2 md:mt-6'>
              <p>I'm a seasoned Full Stack Engineer, weaving my magic with Python, JavaScript, React, and Flask. By day, I'm deep in the aerospace industry as a Mechanical Engineer, but I've got my sights set on the thrilling world of software engineering. Always on the quest for growth, I recently wrapped up the Coding Temple Full Stack Bootcamp, diving into the latest development practices and frameworks.</p>
              <p className='mt-3'>My journey is a unique blend of technical expertise and hands-on engineering experience. Whether it's tackling complex problems or crafting elegant solutions, I thrive on the challenge. The boot camp was a game-changer, amplifying my skills and opening new doors in the tech landscape.</p>
              <p className='mt-3'>I'm all about embracing the dynamic nature of the software world and contributing meaningfully to transformative projects. If you're passionate about tech and innovation, let's connect and explore how my diverse background can bring a fresh perspective to your team!</p>
              <button id='ParagraphText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md' onClick={scrollTo4}>
              RESUME
              </button>

            </div>
          </div>
          <div className='text-start w-full'>
            <div id='SubtitleText' className='font-bold mx-2'>My Skills</div>
            <div id='ParagraphText' className='mt-4'>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>Python</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>C++</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>JavaScript</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>TypesScript</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>React</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>Flask</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>Django</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>SQL</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>MATLAB</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>HTML</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>CSS</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>Tailwind</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>BootStrap</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>GIT</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>Github</button>
              <button disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>Responsive Design</button>
            </div>
          </div>
        </div>
      </div>
      
      <div ref={scrollpoint3} className='bg-white grid justify-center justify-items-center w-full text-gray-700'>
        <div className='grid mt-20 justify-items-center mx-8 md:mx-14 text-center'>
          <div id='HeaderText' className='font-bold'>PROJECTS</div>
          <hr className="w-28 h-1.5 my-2 bg-green-700 rounded"/>
          <div id='SubtitleText' className='lg:w-4/5 xl:w-3/5'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</div>
        </div>
        <div className='grid my-16 lg:w-5/6 xl:w-4/5 mx-5 justify-items-center grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <div className=''>
            <img className='w-full' src={macbooktesla}/>
          </div>
          
          <div className='text-center md:text-start'>
            <div id='SubtitleText' className='font-bold'>Tesla Webpage Clone</div>
            <div id='ParagraphText' className='mt-4 max-w-lg'>
            I created a mock Tesla Webpage. I was inspired by the beautiful UI. It was a great experience for me to build the entire full stack application 
            </div>
            <div className='flex gap-2 justify-center md:justify-start'>
              <button id='ParagraphText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                <a href='https://teslavelovic.netlify.app/'>LIVE LINK</a>
              </button>
              <button id='ParagraphText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                <a href='https://github.com/arjanvelovic/ReactVehicle'>GITHUB</a>
              </button>
            </div>
          </div>
        </div>

        <div className='grid my-16 lg:w-5/6 xl:w-4/5 mx-5 justify-items-center grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <div className=''>
            <img className='w-full' src={macbooktesla}/>
          </div>
          
          <div className='text-center md:text-start'>
            <div id='SubtitleText' className='font-bold'>Tesla Webpage Clone</div>
            <div id='ParagraphText' className='mt-4 max-w-lg'>
            I created a mock Tesla Webpage. I was inspired by the beautiful UI. It was a great experience for me to build the entire full stack application  
            </div>
            <div className='flex gap-2 justify-center md:justify-start'>
              <button id='ParagraphText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                LIVE LINK
              </button>
              <button id='ParagraphText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                GITHUB
              </button>
            </div>
          </div>
        </div>

        <div className='grid my-16 lg:w-5/6 xl:w-4/5 mx-5 justify-items-center grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <div className=''>
            <img className='w-full' src={macbooktesla}/>
          </div>
          
          <div className='text-center md:text-start'>
            <div id='SubtitleText' className='font-bold'>Tesla Webpage Clone</div>
            <div id='ParagraphText' className='mt-4 max-w-lg'>
            I created a mock Tesla Webpage. I was inspired by the beautiful UI. It was a great experience for me to build the entire full stack application 
            </div>
            <div className='flex gap-2 justify-center md:justify-start'>
              <button id='ParagraphText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                LIVE LINK
              </button>
              <button id='ParagraphText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                GITHUB
              </button>
            </div>
          </div>
        </div>

        <div className='grid my-16 lg:w-5/6 xl:w-4/5 mx-5 justify-items-center grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <div className=''>
            <img className='w-full' src={macbooktesla}/>
          </div>
          <div className='text-center md:text-start'>
            <div id='SubtitleText' className='font-bold'>Tesla Webpage Clone</div>
            <div id='ParagraphText' className='mt-4 max-w-lg'>
            I created a mock Tesla Webpage. I was inspired by the beautiful UI. It was a great experience for me to build the entire full stack application
            </div>
            <div className='flex gap-2 justify-center md:justify-start'>
              <button id='ParagraphText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                LIVE LINK
              </button>
              <button id='ParagraphText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                GITHUB
              </button>
            </div>
          </div>
        </div>
      </div>

      <div ref={scrollpoint4}></div>
      <div className='relative'>
        <img id='imagecover2' className='w-full' src={graybackground}/>
        <div className='overlap1 grid text-center py-20 justify-items-center h-fit md:h-full' >
          <div className='my-0'>
            <div id='HeaderText' className='font-bold'>RESUME</div>
            <hr className="w-full h-1.5 my-2 bg-green-700 rounded"/>
          </div>
          <div className='my-0'>
            <div className='mt-2 mx-2 h-fit'>
              <img src={VelovicResume} className='md:h-screen border border-gray-300'/>
            </div>
            <button id='ParagraphText' className='mt-4 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 rounded-md h-12 w-40 md:w-52 xl:w-60'>
              <a className="button" href={resume} download = "Velovic_Resume.pdf">
                Download Resume
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
      
    </>
  )
}

export default App
