import { SlArrowRightCircle } from "react-icons/sl";
import SectionTitle from './SectionTitle';
import endriAbout from '../assets/endriAbout.svg'

const About = () => {
  return <section className='py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={endriAbout} className='w-full h-128 border-2 rounded-3xl' />
            <article>
                <SectionTitle text='about me'/>
                <p className='text-slate-600 mt-8 leading-loose'> 👨‍💻 Code and Coffe ☕
                    <p className="my-story"> 👋 Hello everyone, this is me from the past.
                    <p>📷 This isn&#39;t the best image, but it has too much effort. </p>
                    🪙 It&#39;s old and gold for me. It is my first journey to technology. </p>
                    <p> 👁️ If you want to see me now, please click the button below. </p>
                    <p> 🫰 Promise I will not disappoint you.</p>
                </p>
                <div className='cta-icon'>
                    <a href="https://app.rezi.ai/s/4KYfTTQnTShKRXrxn50v" target='_blank' id='cta' rel="noreferrer"> get in touch  
                        <span> <SlArrowRightCircle className='arrow-icon'/> </span> 
                    </a>
                </div>
            </article>
        </div>
    </section>
}
export default About