import heroImg from '../assets/hero.svg';
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
// import { heroIcons } from '../data';

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24' id="home">
        <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8'>
            <article>
                <h1 className='text-6xl font-bold capitalize'>
                im endri Xhukellari
                </h1>
                <p className='mt-4 text-3xl capitalize tracking-wide'>
                    front-end developer
                </p>
                <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
                    turning ideas into interactive reality
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
            </article>
            <article className='hidden md:block'>
                <img src={heroImg} alt="" className='h-8 lg:h-96' />
            </article>
        </div>
    </div>
  )
}
export default Hero