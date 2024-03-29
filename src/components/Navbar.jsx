/* eslint-disable no-unused-vars */
import { useState, useRef } from "react";
import { FaBars } from "react-icons/fa";
import { links, social } from "../data";
import logo from "../logo.svg"

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const toggleLinks = () => {
    // Log the ref value/current
    // This will be Dynamic
    // console.log(linksRef.current.getBoundingClientRect());
    setShowLinks(!showLinks);
  };

  const linksStyles = {
    height:showLinks? `${linksRef.current.getBoundingClientRect().height}px`:'0px',
  };

  return (<nav className="fixed top-0 left-0 right-0">
    <div className="nav-center ">
      <div className="nav-header">
        <a href="#home" aria-label="Endri Xhukellari brand logo">  <img src={logo} alt='Endri Xhukellari"s logo' className="logo"/> </a>
        <button className="nav-toggle" aria-label="Name" onClick={toggleLinks}> <FaBars/> </button>
      </div>

       <div className="links-container " ref={linksContainerRef} style={linksStyles}>
        <ul className="links" ref={linksRef}>
          {links.map((link)=>{
            const {id,href, text} = link;
            return <li key={id}>
              <a onClick={toggleLinks} href={href}>{text}</a>
            </li>
          })}
        </ul>
      </div> 

      {/* Social Links */}
      <ul className="social-icons">
        {social.map((socialIcon)=>{
          const {id, url, icon} = socialIcon
            return <li key={id}>
              <a target="_blank" href={url} rel="noreferrer" aria-label="social-icons">{icon}</a>
            </li>
        })}
      </ul>

    </div>
  </nav>)

}
export default Navbar