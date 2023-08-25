import './css/overlay.css'
const Overlay = (img)=>{
    console.log(img,'dafsdsd')
    return(
        <div className="overlay">
            <img src={img.img} alt="img" />            
        </div>
    )
}

export default Overlay