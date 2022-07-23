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
import ImageSlider from './imageswipe/imageSlider'
import images from './imageswipe/images'

const LightBoxGallery = (props) => {
   const [shoeClick, setShoeClick] = useState(1)


  return (
    <div className={styles.boxContainer}>
    <div className={styles.boxContent}>
    <img src={exitIcon} alt='close gallery' className={styles.close} onClick={props.closeGallery}/>

<ImageSlider/>

    </div>
    </div>
  )
}

export default LightBoxGallery