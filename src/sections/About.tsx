import PortfolioInfo from '../assets/PortfolioInfo.tsx'
import ColorButton from '../components/ColorButton.tsx';


interface props {
  scrollpoints: any
}

function About(props:props) {

  const PInfo:any = {PortfolioInfo}
  const aboutInfo = PInfo['PortfolioInfo']['about']

  const scrollTo4 = () => {
  props.scrollpoints[3].current?.scrollIntoView({behavior: 'smooth'});
  }

  return (
    <div className='bg-gray-100 grid justify-center justify-items-center w-full text-gray-700'>

      <div className='grid mt-20 justify-items-center mx-8 md:mx-14 text-center'>
        <div className='font-bold HeaderText uppercase'>{aboutInfo['title']}</div>
        <hr className="w-28 h-1.5 my-2 bg-green-700 rounded"/>
        <div className='lg:w-4/5 xl:w-3/5 SubtitleText'>{aboutInfo['subtitle']}</div>
      </div>

      <div className='grid mt-16 lg:w-4/5 xl:w-3/5 mx-8 md:mx-14 justify-items-start grid-cols-1 md:grid-cols-2 gap-8 mb-20'>

        <div className='text-start max-w-lg md:w-full'>
          <div className='font-bold SubtitleText'>{aboutInfo['abouttitle']}</div>
          <div className='ParagraphText md:mt-3'>

          {aboutInfo['abouttext'].map((abouttext:any) => (
            <p key={abouttext} className='mt-3'>{abouttext}</p>
            ))}

          <ColorButton onClick={scrollTo4} children={aboutInfo['section4']} className='mt-6 py-3 px-10 uppercase' />
          </div>
        </div>

        <div className='text-start w-full'>
          <div className='font-bold mx-2 SubtitleText'>{aboutInfo['skilltitle']}</div>
          <div className='mt-4 ParagraphText'>
          {aboutInfo['skills'].map((skill:any) => (
            <button key={skill} disabled className='bg-gray-200 p-3 rounded mx-2 mt-3'>{skill}</button>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About