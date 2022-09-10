import React from 'react'

import pic1 from './../../images/2022_Fish-Shop-ePLP-Hero-Default-LARGE-1440.webp'
// import pic2 from '../images/2022-Halloween-GoodyBox-HP-Hero-LARGE-Multipet.webp'
// import pic3 from '../images/pharmacy-refresh-large.webp'
import './Home.scss'
// import Carousel from '../../components/carousel/Carousel'

export default function Home() {
  return (
      <div className='home-page'>
        <div className="ad">
          <div className="">Save 35% on your first Autoship</div>
          <br></br>
          <div className="">Learn more<span>Terms apply</span></div>
        </div>
        <div class="carousel">
          <h2 className="carousel-label">Fish &amp; Aquarium Supplies</h2>
          <img src={pic1}/>
        </div>
        <div class="categories">
          <h3 className="">Shop by Fish</h3>
          {/* categories map */}
        </div>
    </div>
  );
}