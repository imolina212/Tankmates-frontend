import React from 'react'

import Carousel from '../../components/carousel/Carousel'
import Categories from '../../components/carousel/Categories';

export default function Home() {
  return (
    <div className='home-page'>
      <Carousel />
      <Categories />
    </div>
  );
}