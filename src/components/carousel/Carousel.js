import React, { useState } from 'react';

import pic1 from '../../images/2022_Fish-Shop-ePLP-Hero-Default-LARGE-1440.webp'
import pic2 from '../../images/2022-Halloween-GoodyBox-HP-Hero-LARGE-Multipet.webp'
import pic3 from '../../images/pharmacy-refresh-large.webp'
import './Carousel.scss'


function Carousel() {

    const [imageIndex, setImageIndex] = useState(0);

    const imageArr = [
        {
            src: pic1
        },
        {
            src: pic2
        },
        {
            src: pic3
        },
    ]
    
    const changeIndex = (e) => {
        if (e.target.id === 'right') {
            if (imageIndex + 1 < imageArr.length) {
                setImageIndex(imageIndex + 1);
            } else {
                setImageIndex(0);
            }
        } else {
            if (imageIndex - 1 < 0) {
            setImageIndex(imageArr.length - 1);
            } else {
            setImageIndex(imageIndex - 1);
            }
        }
    }

    return (
        <>
            <div className="carousel">
                <div id="left" onClick={(e) => changeIndex(e)} >&#60;</div>
                <img src={imageArr[imageIndex].src} alt="" />
                <div id="right" onClick={(e) => changeIndex(e)} >&#62;</div>
            </div>
        </>
    )
}


export default Carousel;