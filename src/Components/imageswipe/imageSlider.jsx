import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import images from "./images";
import React from 'react'
const ImageSlider = () => {
  const settings = {
    infinite: true,
    dots: true,
    dotsClass:'slick-dots custom-indicator',
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: false,
    autoplay: true,
  autoplaySpeed: 2000,
  // Extend function from ImageSlider for customPagination which is the thumbnail image
   customPaging : (i)=>{
    return(
      <div>
<img src={images[i].src} alt='thumbnail' style={{width:'60px', height:'60px',borderRadius:'5px'}}/>
      </div>
    )
   }
  };
  return (
   <>
     <div className="imgslider">
       <Slider {...settings}>
         {images.map((item) => (
           <div key={item.id}>
             <img src={item.src}  alt={item.alt}  className='imgDiv'/>
           </div>
         ))}
       </Slider>
       </div>
          </>
  )
}
export default ImageSlider;