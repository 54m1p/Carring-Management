import './header.css'
import { Link, useNavigate } from 'react-router-dom';
import './header.css'
import {MdArrowDropDown} from 'react-icons/Md';
import navMenu from '../../../json/navMenu.json';
import { useCallback, useEffect, useState } from 'react';
import img from '../../../images/logo_2.svg'

const SiteHeader = () =>{
    const[isShown, setIsShown] = useState(false);
    const mouseEnter = useCallback(()=> setIsShown(true), [])
    const mouseLeave = useCallback(()=> setIsShown(false),[])
    return(
         <div className="head-section">
             <div className='container header'>
                 <span className="logo"><img src={img} alt="" /></span>
                 <ul className='nav-bar'>
                 {navMenu.menu.map((menu) => (
 
                     <>
                     {menu.isLink === true ? 
                     (<li className='main-menu'><Link to={menu.link} className='head-link'><span>{menu.name}</span></Link></li>) : 
                     (<li className='main-menu hoverMenu' 
                         onMouseEnter={mouseEnter}
                         onMouseLeave={mouseLeave}>
                         <span>{menu.name} <MdArrowDropDown/></span>
                         
                         <ul className='sub-nav '>
                         {menu?.submenu.map((item) =>(
                            <li>{item.sub}</li> 
                         ))}
                         </ul>
                        </li>)}
                     </>
                     
                 ))}
             </ul>
             </div>
         </div>
     )
 }

export default SiteHeader;   