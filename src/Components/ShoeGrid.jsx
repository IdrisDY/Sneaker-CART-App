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



const ShoeGrid = () => {
   const [shoeClick, setShoeClick] = useState(1)
  return (
    <main>
      <div className='shoeGrid' >
<div>
{ 
   shoeClick === 1 && (
      <img src={shoe1} alt= 'first  view of shoe' className='shoeImg'/>
   )
}
{ 
   shoeClick === 2 && (
      <img src={shoe2} alt= 'first  view of shoe'  className='shoeImg'/>
   )
}
{ 
   shoeClick === 3 && (
      <img src={shoe3} alt= 'first  view of shoe'  className='shoeImg'/>
   )
}
{ 
   shoeClick === 4 && (
      <img src={shoe4} alt= 'first  view of shoe'  className='shoeImg'/>
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
      <div><AddCart/></div>
    </main>
  )
}

export default ShoeGrid