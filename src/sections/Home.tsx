import PortfolioInfo from '../assets/PortfolioInfo.tsx'
import ColorButton from '../components/ColorButton.tsx';

interface props {
  scrollpoints: any
}

function Home(props:props) {

  const PInfo:any = {PortfolioInfo}
  const homeInfo = PInfo['PortfolioInfo']['home']

  const scrollTo3 = () => {
  props.scrollpoints[2].current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className='relative w-full'>

      <img className='imagecover w-screen' src={homeInfo['background']}/>

      <div className='overlap1 grid text-center mx-8 md:mx-20 mt-20 md:mt-36 justify-items-center h-fit' >
        <img className='w-52' src={homeInfo['image']}/>
        <div className='TitleText font-bold mt-2 uppercase'>{homeInfo['title']}</div>
        <div className='ParagraphText my-2 max-w-4xl'>{homeInfo['blurb']}</div>
        <ColorButton onClick={scrollTo3} children={homeInfo['section3']} className='py-3 px-16 my-5 uppercase'/>
      </div>

      <div className='overlap2 hidden md:grid grid-rows-3 items-center h-full'>
        <div className='row-span-1'/>
        <div className='bg-gray-50 h-48 grid text-black w-16 text-2xl items-center justify-center rounded border border-gray-300'>
          {homeInfo['links'].map((link:any) => (
            <a href={link['link']} className='hover:text-gray-500 duration-300'><i className={link['logo']}/></a>
          ))}
        </div>
        <div className='row-span-1'/>
      </div>

      <div className='overlap3 grid justify-items-center'>
        <img src={homeInfo['scrollgif']} className='h-16 mb-16 md:mb-3'/>
      </div>

    </div>
  )
}

export default Home