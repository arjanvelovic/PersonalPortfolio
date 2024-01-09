import PortfolioInfo from '../assets/PortfolioInfo.tsx'
import ColorButton from '../components/ColorButton.tsx';

interface props {
  scrollpoints: any
}

function Projects(props:props) {

  const PInfo:any = {PortfolioInfo}
  const projectsInfo = PInfo['PortfolioInfo']['projects']

  return (
    <div ref={props.scrollpoints[2]} className='bg-white grid justify-center justify-items-center w-full text-gray-700'>
      <div className='grid mt-20 justify-items-center mx-8 md:mx-14 text-center'>
        <div className='font-bold HeaderText uppercase'>{projectsInfo['title']}</div>
        <hr className="w-28 h-1.5 my-2 bg-green-700 rounded"/>
        <div className='lg:w-4/5 xl:w-3/5 SubtitleText'>{projectsInfo['subtitle']}</div>
      </div>

      {projectsInfo['projects'].map((project:any) => (
        <div key = {project['title']} className='grid my-16 lg:w-5/6 xl:w-4/5 mx-5 justify-items-center grid-cols-1 md:grid-cols-2 gap-4 items-center'>
          <div>
            <img className='w-full' src={project['image']}/>
          </div>
          
          <div className='text-center md:text-start'>
            <div className='font-bold SubtitleText'>{project['title']}</div>
            <div className='mt-4 max-w-lg ParagraphText'>{project['description']}</div>
            <div className='flex gap-2 justify-center md:justify-start'>
              <ColorButton children = {<a href={project['link']}>LIVE LINK</a>} className='py-3 px-10 mt-6'/>
              <ColorButton children = {<a href={project['github']}>GITHUB</a>} className='py-3 px-10 mt-6'/>
            </div>
          </div>
        </div>
      ))}

    </div>
  )
}

export default Projects