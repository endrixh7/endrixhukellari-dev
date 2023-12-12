/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import {TbWorldWww} from 'react-icons/tb';

const ProjectsCard = ({url, img, github, title, text}) => {
  return ( 
  <article  className="bg-white rounded-large shadow-md hover:shadow-xl duration-300">
      <img src={img} alt={title} className="w-full object-cover h-64"/>
      <div className="capitalize p-8">
        <h2 className="text-xl tracking-wide font-medium">{title}</h2>
        <p className="mt-4 text-slate-700 leading-loose">{text}</p>
        <div className="mt-4 flex gap-x-6">
          <a href={url} target="_blank" rel="noreferrer"> 
            <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300"/> <span className="liveSite">Live</span>
          </a>
          <a href={github} target="_blank" rel="noreferrer"> 
            <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300"/> <span className="liveSite">Code</span> 
          </a>
        </div>
      </div>
    </article>
    )
}
export default ProjectsCard