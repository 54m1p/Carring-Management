import SiteHeader from "../site-header/SiteHeader";
import PreHeader from './../site-header/PreHeader';
import bgImg2 from '../../../images/bg_2.jpg'
import Overlay from "../Overlay";
const AboutPage = ()=>{
    return(
        <div>
            <div>
                <PreHeader/>
                <SiteHeader/>
                <Overlay
                 img = {bgImg2}
                 />
            </div>
        </div>
    )
}

export default AboutPage;