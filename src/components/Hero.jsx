// import heroImg from '../assets/hero.svg';
// import heroImg from '../assets/hero1.svg';
import heroImg from '../assets/hero2.svg';
// import heroImg from '../assets/hero3.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import { SlArrowRightCircle } from "react-icons/sl";
// import { heroIcons } from '../data';
// import heroImg1 from '../assets/react-hero.svg';

const Hero = () => {
  return (
    <div className='py-24' id="home">
        <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 mt-16 items-center gap-8'>
            <article>
                <h1 className='text-6xl font-bold capitalize'>
                im endri Xhukellari
                </h1>
                <p className='mt-4 text-3xl capitalize tracking-wide'>
                    front-end developer
                </p>
                <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                i visualize difficult thoughts in the easiest ways
                </p>

                <div className='flex gap-x-4 mt-4'>
                    <a href="https://github.com/endrixh7" target='_blank' rel="noreferrer">
                        <FaGithubSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                    <a href="https://www.linkedin.com/in/endri-xhukellari-0592311a5/" target='_blank' rel="noreferrer">
                        <FaLinkedin className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                    <a href="https://twitter.com/XhukellariEndri" target='_blank' rel="noreferrer">
                        <FaTwitterSquare className='h-8 w-8 text-slate-500 hover:text-black duration-300' />
                    </a>
                </div>

                <div className='cta-icon'>
                    <a href="https://app.rezi.ai/s/4KYfTTQnTShKRXrxn50v" target='_blank' id='cta' rel="noreferrer"> get in touch  
                        <span> <SlArrowRightCircle className='arrow-icon'/> </span> 
                    </a>
                </div>
            </article>
            <article className='hidden md:block'>
                <img src={heroImg} alt="" className='h-72 lg:h-96' />
            </article>
        </div>
    </div>
  )
}
export default Hero