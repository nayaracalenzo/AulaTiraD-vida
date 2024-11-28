/* eslint-disable react/prop-types */



import fogo from '../../assets/fogo.png'
import './Gallery.css'

 
// eslint-disable-next-line react/prop-types
const Gallery = ({ClassName="gallery-promo", images}) => {
  return (
    <>
      <div id="carouselExampleControls" className={`carousel slide ${ClassName}`} data-ride="carousel">
        <div className="carousel-inner" >
        {images.map((img, index) => ( 
        <div className={index == 0? "carousel-item active":"carousel-item"} key={index}>
          <div className='d-flex'>
            <div>
              <p>melhores</p>
              <h1>Queima de stoque <img src={fogo} alt="fogo" /></h1>
              <button>Ver ofertas</button>
            </div>
            <img className="d-block w-50" src={img} alt="First slide"/>
          </div>
        </div>
        ))}
  <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>
</div>
    </>
  )
}

export default Gallery
