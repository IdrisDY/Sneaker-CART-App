import React, { useState } from 'react'
import shoe1 from './images/image-product-1.jpg'
import shoe2 from './images/image-product-2.jpg'
import shoe3 from './images/image-product-3.jpg'
import shoe4 from './images/image-product-4.jpg'
import thumbShoe1 from './images/image-product-1-thumbnail.jpg'
import thumbShoe2 from './images/image-product-2-thumbnail.jpg'
import thumbShoe3 from './images/image-product-3-thumbnail.jpg'
import thumbShoe4 from './images/image-product-4-thumbnail.jpg'
import AddCart from './AddCart'
import LightBoxGallery from './LightBoxGallery'
import ImageSlider from './imageswipe/imageSlider'
import images from './imageswipe/images'
import { useEffect } from "react"

const ShoeGrid = ({addToCart}) => {
   const [shoeClick, setShoeClick] = useState(1)
   const [bigImgClick, setBigImgClick] = useState(false)
  

  
      const[width,setWidth]= useState(window.innerWidth)
      const checkWidth=()=>{
         setWidth(window.innerWidth)
      }
      useEffect(()=>{
         console.log("i dey see u ,y bro")
         window.addEventListener("resize",checkWidth)
      },[])
   
  console.log(width)

  
   return (
   <>
    <main>
    { width >= 768?
      <div className='shoeGrid' >
      
<div>
{ 
   shoeClick === 1 && (
      <img src={shoe1} alt= 'first  view of shoe' className='shoeImg'  onClick={()=>setBigImgClick(true)}/>
   )
}
{ 
   shoeClick === 2 && (
      <img src={shoe2} alt= 'first  view of shoe'  className='shoeImg' onClick={()=>setBigImgClick(true)} />
      )}
{ 
   shoeClick === 3 && (
      <img src={shoe3} alt= 'first  view of shoe'  className='shoeImg'  onClick={()=>setBigImgClick(true)}/>
   )
}
{ 
   shoeClick === 4 && (
      <img src={shoe4} alt= 'first  view of shoe'  className='shoeImg' onClick={()=>setBigImgClick(true)}/>
   )
}
 
</div>
<div className='thumbnailDiv'>
   <img src={thumbShoe1} alt='' className={shoeClick===1?'thumbnailImgFocus':'thumbnailImg'} onClick={()=>setShoeClick(1)}/>
   <img src={thumbShoe2} alt='' className={shoeClick===2?'thumbnailImgFocus':'thumbnailImg'} onClick={()=>setShoeClick(2)}/>
   <img src={thumbShoe3} alt='' className={shoeClick===3?'thumbnailImgFocus':'thumbnailImg'}  onClick={()=>setShoeClick(3)}/>
   <img src={thumbShoe4} alt='' className={shoeClick===4?'thumbnailImgFocus':'thumbnailImg'} onClick={()=>setShoeClick(4)}/>
</div>
      </div>
      :
      <ImageSlider/>
       }
      <div>

    {addToCart}
      
      </div>

     
     {bigImgClick?<LightBoxGallery closeGallery={()=>setBigImgClick(false)}/>:null} 
    </main>

    </>
  )
}

export default ShoeGrid