import PortfolioInfo from '../assets/PortfolioInfo.tsx'
import ColorButton from '../components/ColorButton.tsx';


function Resume() {

  const PInfo:any = {PortfolioInfo}
  const resumeInfo = PInfo['PortfolioInfo']['resume']

  return (
    <div className='relative'>
        <img className='imagecover2 w-full' src={resumeInfo['background']}/>
        <div className='overlap1 grid text-center py-20 justify-items-center h-fit md:h-full' >
          <div className='my-0'>
            <div className='font-bold HeaderText'>{resumeInfo['title']}</div>
            <hr className="w-full h-1.5 my-2 bg-green-700 rounded"/>
          </div>
          <div className='my-0'>
            <div className='mt-2 mx-2 h-fit'>
              <img src={resumeInfo['image']} className='md:h-screen border border-gray-300'/>
            </div>
            <ColorButton className='mt-4 h-12 w-40 md:w-52 xl:w-60' children={<a className="button" href={resumeInfo['pdf']} download = "Velovic_Resume.pdf">DOWNLOAD RESUME</a>} />
          </div>
        </div>
      </div>
  )
}

export default Resume