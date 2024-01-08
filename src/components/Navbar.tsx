import { useState} from 'react'
//@ts-ignore
import AVlogo from '../assets/images/AVlogoBlack.png'

interface props {
    scrollpoints: any
}

function Navbar(props:props) {
    const [isVisible, setIsVisible] = useState(false)

    const dropDown = () => {
        setIsVisible(!isVisible)
    }

    const scrollpoints = props.scrollpoints

    const scrollTo1 = () => {
    scrollpoints[0].current?.scrollIntoView({behavior: 'smooth', block: "end"});
    setIsVisible(false)
    };

    const scrollTo2 = () => {
    scrollpoints[1].current?.scrollIntoView({behavior: 'smooth'});
    setIsVisible(false)
    };

    const scrollTo3 = () => {
    scrollpoints[2].current?.scrollIntoView({behavior: 'smooth'});
    setIsVisible(false)
    };

    const scrollTo4 = () => {
    scrollpoints[3].current?.scrollIntoView({behavior: 'smooth'});
    setIsVisible(false)
    };

    return (
    <nav className='fixed top-0 w-full left-0 shadow-gray-200 shadow-lg h-20 flex justify-center font-bold text-gray-800 z-50 bg-white'>
        <div className='grid grid-cols-2 container max-w-6xl'>
            <div className='flex justify-start items-center mx-6'>
                <img src={AVlogo} className='h-16'/>
                <div>ARJAN VEOVIC</div>
            </div>
            <div className='hidden sm:flex items-center justify-end text-end'>
                <button className='m-1 md:m-4 px-3 md:px-4 py-2 hover:text-green-700 underline-offset-4 hover:underline transition duration-300' onClick={scrollTo1}>
                HOME
                </button>
                <button className='m-1 md:m-4 px-3 md:px-4 py-2 hover:text-green-700 underline-offset-4 hover:underline transition duration-300' onClick={scrollTo2}>
                ABOUT
                </button>
                <button className='m-1 md:m-4 px-3 md:px-4 py-2 hover:text-green-700 underline-offset-4 hover:underline transition duration-300' onClick={scrollTo3}>
                PROJECTS
                </button>
                <button className='m-1 md:m-4 px-3 md:px-4 py-2 hover:text-green-700 underline-offset-4 hover:underline transition duration-300' onClick={scrollTo4}>
                RESUME
                </button>
                
            </div>
            <div className="sm:hidden grid justify-end me-10 items-center">
                <button onClick={dropDown} className= 'bg-green-700 text-white font-bold hover:text-green-700 hover:bg-gray-50 hover:border-green-800 hover:border transition duration-700 py-2 px-4 rounded'>
                <i className='fas fa-bars'></i>
                </button>
            </div>
        </div>

        { isVisible ? (
            <div className='sm:hidden grid grid-col-1 absolute bg-white mt-20 w-full shadow-gray-200 shadow-lg '>
                <div className='py-2 text-end pe-6 border-y border-gray-300' >
                    <button className='py-2 px-4 hover:text-green-700 underline-offset-4 hover:underline transition duration-300' onClick={scrollTo1}>HOME</button>
                </div>
                <div className='py-2 text-end pe-6 border-y border-gray-300' >
                    <button className='py-2 px-4 hover:text-green-700 underline-offset-4 hover:underline transition duration-300' onClick={scrollTo2}>ABOUT</button>
                </div>
                <div className='py-2 text-end pe-6 border-y border-gray-300' >
                    <button className='py-2 px-4 hover:text-green-700 underline-offset-4 hover:underline transition duration-300' onClick={scrollTo3}>PROJECTS</button>
                </div>
                <div className='py-2 text-end pe-6 border-y border-gray-300' >
                    <button className='py-2 px-4 hover:text-green-700 underline-offset-4 hover:underline transition duration-300' onClick={scrollTo4}>RESUME</button>
                </div>
                
            </div>
            ) : (
            <></>
            ) }
        
    </nav>
);}

export default Navbar