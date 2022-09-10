import React from 'react'

import './Carousel.scss'
import pic1 from '../../images/2022_Fish-Shop-ePLP-Hero-Default-LARGE-1440.webp'
// import pic2 from '../../images/2022-Halloween-GoodyBox-HP-Hero-LARGE-Multipet.webp'
// import pic3 from '../../images/pharmacy-refresh-large.webp'

function Carousel() {
    return (
        <div className='carousel'>
            <div className='slider'>
                <div className='slides'>
                    <input type='radio' name='radio-btn' id='radio1'/>
                    <input type='radio' name='radio-btn' id='radio2'/>
                    <input type='radio' name='radio-btn' id='radio3'/>

                    <div className='slide first'>
                        <img src={pic1} alt='' />
                    </div>
                    {/* <div className='slide'>
                        <img src={pic2} alt='' />
                    </div>
                    <div className='slide'>
                        <img src={pic3} alt='' />
                    </div> */}
                    <div className='navigation-auto'>
                        <div className='auto-btn1'></div>
                        <div className='auto-btn2'></div>
                        <div className='auto-btn3'></div>
                    </div>
                </div>
                <div className='navigation-manual'>
                    <label for='radio1' className='manual-btn'></label>
                    <label for='radio2' className='manual-btn'></label>
                    <label for='radio3' className='manual-btn'></label>
                </div>
            </div>
        </div>
    )
}

export default Carousel;