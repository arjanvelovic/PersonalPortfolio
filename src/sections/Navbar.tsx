import PortfolioInfo from '../assets/PortfolioInfo.tsx'
import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import ColorButton from '../components/ColorButton.tsx';

interface props {
    scrollpoints: any
}

function Navbar(props:props) {

    const PInfo:any = {PortfolioInfo}
    const navInfo = PInfo['PortfolioInfo']['navbar']
    
    const [open, setState] = useState(false);
    const scrollpoints = props.scrollpoints

    const toggleDrawer = (open:any) => (event:any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setState(open);
    };

    const toggleDrawer0 = (open:any) => (event:any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setState(open);
        scrollpoints[0].current?.scrollIntoView({behavior: 'smooth', block: "end"});
    };

    const toggleDrawer1 = (open:any) => (event:any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setState(open);
        scrollpoints[1].current?.scrollIntoView({behavior: 'smooth'});
    };

    const toggleDrawer2 = (open:any) => (event:any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setState(open);
        scrollpoints[2].current?.scrollIntoView({behavior: 'smooth'});
    };

    const toggleDrawer3 = (open:any) => (event:any) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
        }
        setState(open);
        scrollpoints[3].current?.scrollIntoView({behavior: 'smooth'});
    };


    const scrollTo1 = () => {
    scrollpoints[0].current?.scrollIntoView({behavior: 'smooth', block: "end"});
    };

    const scrollTo2 = () => {
    scrollpoints[1].current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollTo3 = () => {
    scrollpoints[2].current?.scrollIntoView({behavior: 'smooth'});
    };

    const scrollTo4 = () => {
    scrollpoints[3].current?.scrollIntoView({behavior: 'smooth'});
    };

    return (
    <nav className='fixed top-0 w-full left-0 shadow-gray-200 shadow-lg h-20 flex justify-center font-bold text-gray-800 z-50 bg-white'>
        <div className='grid grid-cols-2 container max-w-6xl'>
            <div className='flex justify-start items-center mx-6'>
                <img src={navInfo['logo']} className='h-16'/>
                <div className='uppercase'>{navInfo['name']}</div>
            </div>
            <div className='hidden sm:flex items-center justify-end text-end'>
                <button className='m-1 md:m-4 px-3 md:px-4 py-2 hover:text-green-700 underline-offset-4 hover:underline transition duration-300 uppercase' onClick={scrollTo1}>
                {navInfo['sections'][0]}
                </button>
                <button className='m-1 md:m-4 px-3 md:px-4 py-2 hover:text-green-700 underline-offset-4 hover:underline transition duration-300 uppercase' onClick={scrollTo2}>
                {navInfo['sections'][1]}
                </button>
                <button className='m-1 md:m-4 px-3 md:px-4 py-2 hover:text-green-700 underline-offset-4 hover:underline transition duration-300 uppercase' onClick={scrollTo3}>
                {navInfo['sections'][2]}
                </button>
                <button className='m-1 md:m-4 px-3 md:px-4 py-2 hover:text-green-700 underline-offset-4 hover:underline transition duration-300 uppercase' onClick={scrollTo4}>
                {navInfo['sections'][3]}
                </button>
            </div>

            <div className="sm:hidden grid justify-end me-10 items-center">
                <ColorButton children = {<i className='fas fa-bars'></i>} className={'py-2 px-4'} onClick={toggleDrawer(true)}/>
            </div>

        </div>

        <Drawer
            anchor="top"
            open={open}
            onClose={toggleDrawer(false)}
            //@ts-ignore
            onOpen={toggleDrawer(true)}
            className='sm:hidden'
            transitionDuration= {500}
        >
            {/* The inside of the drawer */}
            <div className='bg-gray-50'>
                <div className='text-start my-3 mx-5'>
                    <ColorButton children = {<i className="fa-solid fa-x"></i>} className={'py-2 px-4'} onClick={toggleDrawer(false)}/>
                </div>
                
                <div>
                    <div className='py-2 text-end pe-6 border-b border-t-2 border-gray-300' >
                        <button className='py-2 px-4 hover:text-green-700 underline-offset-4 hover:underline transition duration-300 uppercase' onClick={toggleDrawer0(false)}>{navInfo['sections'][0]}</button>
                    </div>
                    <div className='py-2 text-end pe-6 border-y border-gray-300' >
                        <button className='py-2 px-4 hover:text-green-700 underline-offset-4 hover:underline transition duration-300 uppercase' onClick={toggleDrawer1(false)}>{navInfo['sections'][1]}</button>
                    </div>
                    <div className='py-2 text-end pe-6 border-y border-gray-300' >
                        <button className='py-2 px-4 hover:text-green-700 underline-offset-4 hover:underline transition duration-300 uppercase' onClick={toggleDrawer2(false)}>{navInfo['sections'][2]}</button>
                    </div>
                    <div className='py-2 text-end pe-6 border-y border-gray-300' >
                        <button className='py-2 px-4 hover:text-green-700 underline-offset-4 hover:underline transition duration-300 uppercase' onClick={toggleDrawer3(false)}>{navInfo['sections'][3]}</button>
                    </div>
                </div>
            </div>
        </Drawer>

    </nav>
);}

export default Navbar