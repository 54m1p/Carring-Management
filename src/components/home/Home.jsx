
import './home.css'
import PreHeader from './../site-header/PreHeader';
import SiteHeader from './../site-header/SiteHeader';

const HomePage = ()=>{
    return(
        <div className="homepage">
            <div className="overlay">
                <PreHeader/>
                <SiteHeader/>
                <div className="container">
                    <h2 className='subheading'>Leave the house cleaning chores to us</h2>
                    <h1>Let us do the dirty work, so you don't have to.</h1>
                </div>
            </div>

        </div>
        )
}

export default HomePage;