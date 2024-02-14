import PortfolioInfo from '../assets/PortfolioInfo.tsx'

function Footer() {

    const PInfo:any = {PortfolioInfo}
    const footerInfo = PInfo['PortfolioInfo']['footer']

    return (
    <footer className="grid bg-gray-950 shadow-lg shadow-black text-slate-300 grid-cols-3 py-1 p-0">
        <div className='flex text-xs items-center justify-center'>
            <a href='/' className='opacity-70 hover:opacity-100 hover:underline duration-500'>{footerInfo['copyright']}</a>
        </div>
        <div className='flex text-xs items-center justify-center'>
        <a href='/'><img src={footerInfo['logo']} alt="FooterLogo" className='w-auto h-10 opacity-70 hover:opacity-100 transition duration-500'/></a>
        </div>

        <div className='flex items-center justify-center'>
            {footerInfo['links'].map((link:any) => (
                <a href={link['link']} className='mx-3 hover:text-white transition duration-700'><i className={link['logo']}/></a>
            ))}
        </div>
    </footer>
);}

export default Footer