import { SlArrowRightCircle } from "react-icons/sl";
import SectionTitle from './SectionTitle';
import endriAbout from '../assets/endriAbout.svg'

const About = () => {
  return <section className='py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={endriAbout} className='w-full h-128 border-2 rounded-3xl' />
            <article>
                <SectionTitle text='about me'/>
                <p className='text-slate-600 mt-8 leading-loose'>
                    👨‍💻 Code and Coffe ☕ <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus, necessitatibus ducimus, voluptates dolores laboriosam eius placeat aperiam earum fugit repellat nobis facere atque vel asperiores nulla ab nesciunt? Id!
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