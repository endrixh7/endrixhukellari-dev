/* eslint-disable react/prop-types */
const SkillsCard = ({icon, title, text}) => {
  return ( 
    <article>
      <span className=""> {icon} </span>
      <h2 className="mt-6 font-bold"> {title}</h2>
      <p className="mt-2 text-slate-500 "> {text}</p>
  </article>
  )
}
export default SkillsCard