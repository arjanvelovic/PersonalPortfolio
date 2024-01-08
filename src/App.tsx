import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {useEffect ,useRef, useState} from 'react';
import graybackground from './assets/images/graybackground.jpg'
import scrollgif from './assets/images/blackscrollgif.gif'
import headshot from './assets/images/headshotsmall.png'
import macbooktesla from './assets/images/macbookteslasmall.png'

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

  const scrollpoints = [scrollpoint1, scrollpoint2, scrollpoint3]

  const scrollTo1 = () => {
  scrollpoints[0].current?.scrollIntoView({behavior: 'smooth', block: "end"});
  };

  const scrollTo2 = () => {
  scrollpoint2.current?.scrollIntoView({behavior: 'smooth'});
  };

  const scrollTo3 = () => {
  scrollpoints[2].current?.scrollIntoView({behavior: 'smooth'});
  };

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
      setOpen(false)
      window.location.reload();
  };

  return (
    <>
    <Navbar scrollpoints={scrollpoints}/>
    <div className='mt-20'>
      <div ref={scrollpoint1}></div>
      <div className='relative w-full'>
        <img className='imagecover w-screen' src={graybackground}/>
        <div className='overlap1 grid text-center mx-20 justify-items-center h-fit' >
          <img className='w-52' src={headshot}/>
          <div id='TitleText' className='font-bold'>HEY, I'M ARJAN VELOVIC</div>
          <div id='SubtitleText' className='my-2 max-w-4xl'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</div>
          <button id='SubtitleText' className='bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-16 rounded-md my-5' onClick={scrollTo3}>
            PROJECTS
          </button>
        </div>

        <div className='overlap2 grid grid-rows-5 items-center h-full'>
          <div className='row-span-2 h-full'></div>
          <div className='bg-gray-50 h-full grid text-black'>
            <i className="fa-brands fa-linkedin"></i>
            <div>123</div>
            <div>123</div>
          </div>
          <div className='row-span-2 h-full'></div>
        </div>

        <div className='overlap3 grid justify-items-center'>
          <img src={scrollgif} className='h-16 mb-3'/>
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
            <div id='ParagraphText' className='mt-6'>
              <p>I'm a Frontend Web Developer building the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
              <p className='mt-3'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin where I post useful content related to Web Development and Programming</p>
              <p className='mt-3'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
              <button id='SubtitleText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
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
            I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend. 
            </div>
            <div className='flex gap-2 justify-center md:justify-start'>
              <button id='SubtitleText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                LIVE LINK
              </button>
              <button id='SubtitleText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
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
            I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend. 
            </div>
            <div className='flex gap-2 justify-center md:justify-start'>
              <button id='SubtitleText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                LIVE LINK
              </button>
              <button id='SubtitleText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
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
            I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend. 
            </div>
            <div className='flex gap-2 justify-center md:justify-start'>
              <button id='SubtitleText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                LIVE LINK
              </button>
              <button id='SubtitleText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
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
            I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend. 
            </div>
            <div className='flex gap-2 justify-center md:justify-start'>
              <button id='SubtitleText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                LIVE LINK
              </button>
              <button id='SubtitleText' className='mt-6 bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-3 px-10 rounded-md'>
                GITHUB
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
    <Footer/>
      
    </>
  )
}

export default App
