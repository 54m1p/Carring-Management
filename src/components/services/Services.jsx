import PreHeader from "../site-header/PreHeader";
import SiteHeader from "../site-header/SiteHeader";
import bgImg3 from '../../../images/bg_3.jpg'
import Overlay from "../Overlay";
const Services =()=>{
  console.log(bgImg3,'---in services')
    return(
        <div>
            <div>
            <PreHeader/>
            <SiteHeader/>
            <Overlay 
                img={bgImg3}
            />
            </div>
        </div>
    )
}

export default Services;