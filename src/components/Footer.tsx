import AVlogo from '../assets/images/AVlogo.png'

function Footer() {

    return (
        <footer className="footer grid bg-gray-950 shadow-lg shadow-black text-slate-300 grid-cols-3 py-1 p-0">
            <div className='flex text-xs items-center justify-center'> Arjan Velovic © 2024

            </div>
            <div className='flex text-xs items-center justify-center'>
            <a href='/'><img src={AVlogo} alt="FooterLogo" className='w-auto h-10 opacity-70 hover:opacity-100 transition duration-500'/></a>

            </div>
            <div className='flex items-center justify-center'>
                <a href='/'><i className="fa-brands fa-x-twitter mx-2 hover:text-white transition duration-700"></i></a>
                <a href='/'><i className="fa-brands fa-instagram mx-2 hover:text-white transition duration-700"></i></a>
                <a href='/'><i className="fa-brands fa-facebook mx-2 hover:text-white transition duration-700"></i></a>
                <a href='/'><i className="fa-brands fa-youtube mx-2 hover:text-white transition duration-700"></i></a>

            </div>
      </footer>
);}

export default Footer