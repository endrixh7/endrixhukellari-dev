import aboutSvg from '../assets/about.svg';
import SectionTitle from './SectionTitle';

const About = () => {
  return <section className='bg-white py-20' id='about'>
        <div className='align-element grid md:grid-cols-2 items-center gap-16'>
            <img src={aboutSvg} className='w-full h-64' />
            <article>
                <SectionTitle text='about me'/>
                <p className='text-slate-600 mt-8 leading-loose'>
                    👨‍💻 Code and Coffe ☕ <br></br>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium delectus, necessitatibus ducimus, voluptates dolores laboriosam eius placeat aperiam earum fugit repellat nobis facere atque vel asperiores nulla ab nesciunt? Id!
                </p>
            </article>
        </div>
    </section>
}
export default About