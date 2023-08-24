import './header.css'
import { NavLink } from 'react-router-dom';
import './header.css'
const SiteHeader = () =>{
    
    return(
        <div className="head-section">
            <div className='container header'>
                <span className="logo"><img src="https://www.carringmanagement.com.au/media/logo/logo_2.svg" alt="" /></span>
                <ul className="site-head">
                    <li><NavLink to={`/Home`}><span>Home</span></NavLink></li>
                    <li><NavLink to={`/About`}><span>About</span> </NavLink></li>
                    <li><NavLink to={`/Services`}><span>Services</span></NavLink></li>
                    <li><NavLink to={`#`}><span>Career</span></NavLink></li>
                    <li><NavLink to={`/Blog`}><span>Blog</span></NavLink></li>
                    <li><NavLink to={`/Contact`}><span>Contact</span></NavLink></li>
                    {/* <span>Home</span>
                    <span>About</span>
                    <span>Services</span>
                    <span>Career</span>
                    <span>Blog</span>
                    <span>Contacts</span> */}
                </ul>
            </div>
        </div>
    )
}

export default SiteHeader;   