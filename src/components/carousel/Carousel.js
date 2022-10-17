import React, { useState } from 'react';

import pic1 from '../../images/2022_Fish-Shop-ePLP-Hero-Default-LARGE-1440.webp'
import pic2 from '../../images/2022-Halloween-GoodyBox-HP-Hero-LARGE-Multipet.webp'
import pic3 from '../../images/pharmacy-refresh-large.webp'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { IconContext } from "react-icons";
import './Carousel.scss';


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
                <button type='button' className="carousel__control previous" onClick={(e) => changeIndex(e)}>
                    <IconContext.Provider value={{ size:"1.5em" }}>
                        <MdKeyboardArrowLeft />
                    </IconContext.Provider>
                </button>
                <div className="carousel__image">
                    <img src={imageArr[imageIndex].src} alt="" />
                </div>
                <button type="button" className="carousel__control next" onClick={(e) => changeIndex(e)} >
                    <IconContext.Provider value={{ size:"1.5em" }}>
                        <MdKeyboardArrowRight value={{ className: 'react-icons' }}/>
                    </IconContext.Provider>
                </button>
            </div>
        </>
    )
}


export default Carousel;