import React from 'react'

import Carousel from '../../components/carousel/Carousel'
import Categories from '../../components/carousel/Categories';
import './Home.scss'

export default function Home() {
  return (
    <div className='home-page'>
      <Carousel />
      <Categories />
    </div>
  );
}