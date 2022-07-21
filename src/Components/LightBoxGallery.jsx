import React,{useState} from 'react'
import shoe1 from './images/image-product-1.jpg'
import shoe2 from './images/image-product-2.jpg'
import shoe3 from './images/image-product-3.jpg'
import shoe4 from './images/image-product-4.jpg'
import thumbShoe1 from './images/image-product-1-thumbnail.jpg'
import thumbShoe2 from './images/image-product-2-thumbnail.jpg'
import thumbShoe3 from './images/image-product-3-thumbnail.jpg'
import thumbShoe4 from './images/image-product-4-thumbnail.jpg'
import styles from '../Lightbox.module.css'
import exitIcon from './images/icon-close.svg'
import prevBtn from './images/icon-previous.svg'
import nextBtn from './images/icon-next.svg'

const LightBoxGallery = (props) => {
   const [shoeClick, setShoeClick] = useState(1)

  return (
    <div className={styles.boxContainer}>
    <div className={styles.boxContent}>
    <div className={styles.bigbox}>
    <img src={exitIcon} alt='close gallery' className={styles.close} onClick={props.closeGallery}/>
<div>
{ 
   shoeClick === 1 && (
      <div  className= {styles.arrows}>
      <img src={prevBtn} alt='previous image'  className= { `${styles.arrowbtn}  ${styles.prebtn}`} onClick={()=>{if(shoeClick >1 && shoeClick <= 4 ){setShoeClick(shoeClick - 1)}}}/>
      <img src={shoe1} alt= 'first  view of shoe' className= {styles.shoegalImg}/>
      <img src={nextBtn} alt='next image'  className= { `${styles.arrowbtn}  ${styles.nextbtn}`}  onClick={()=>{if(shoeClick >0 && shoeClick < 4 ){setShoeClick(shoeClick + 1)}}}/>
   </div>
   )
}
{ 
   shoeClick === 2 && (
      <div className= {styles.arrows}>
      <img src={prevBtn} alt='previous image'  className= { `${styles.arrowbtn}  ${styles.prebtn}`} onClick={()=>{if(shoeClick >0 && shoeClick <= 4 ){setShoeClick(shoeClick - 1)}}}/>
      <img src={shoe2} alt= 'first  view of shoe' className= {styles.shoegalImg}/>
      <img src={nextBtn} alt='previous image' className= { `${styles.arrowbtn}  ${styles.nextbtn}`} onClick={()=>{if(shoeClick >0 && shoeClick < 4 ){setShoeClick(shoeClick + 1)}}}/>
   </div>
   )
}
{ 
   shoeClick === 3 && (
      <div className= {styles.arrows}>
      <img src={prevBtn} alt='previous image' className= { `${styles.arrowbtn}  ${styles.prebtn}`} onClick={()=>{if(shoeClick >0 && shoeClick <= 4 ){setShoeClick(shoeClick - 1)}}}/>
      <img src={shoe3} alt= 'first  view of shoe' className= {styles.shoegalImg}/>
      <img src={nextBtn} alt='previous image'  className= { `${styles.arrowbtn}  ${styles.nextbtn}`}  onClick={()=>{if(shoeClick >0 && shoeClick < 4 ){setShoeClick(shoeClick + 1)}}}/>
   </div>
   )
}
{ 
   shoeClick === 4 && (
      <div className= {styles.arrows}>
      <img src={prevBtn} alt='previous image'  className= { `${styles.arrowbtn}  ${styles.prebtn}`} onClick={()=>{if(shoeClick >0 && shoeClick <= 4 ){setShoeClick(shoeClick - 1)}}}/>
      <img src={shoe4} alt= 'first  view of shoe' className= {styles.shoegalImg}/>
      <img src={nextBtn} alt='previous image' className= { `${styles.arrowbtn}  ${styles.nextbtn}`} onClick={()=>{if(shoeClick >0 && shoeClick < 4 ){setShoeClick(shoeClick + 1)}}}/>
   </div>
   )
}
</div>
</div>

      <div className={styles.thumbImg}>
   <img src={thumbShoe1} alt='' className={shoeClick===1?'thumbnailImgFocus':'thumbnailImg'} onClick={()=>setShoeClick(1)}/>
   <img src={thumbShoe2} alt='' className={shoeClick===2?'thumbnailImgFocus':'thumbnailImg'} onClick={()=>setShoeClick(2)}/>
   <img src={thumbShoe3} alt='' className={shoeClick===3?'thumbnailImgFocus':'thumbnailImg'}  onClick={()=>setShoeClick(3)}/>
   <img src={thumbShoe4} alt='' className={shoeClick===4?'thumbnailImgFocus':'thumbnailImg'} onClick={()=>setShoeClick(4)}/>
</div>

    </div>
    </div>
  )
}

export default LightBoxGallery