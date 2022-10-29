import React from 'react'

import { GrStatusGoodSmall } from 'react-icons/gr';
import './Tank.scss'

function Tank() {
  return (
    <div className="tank">
        <div className="tank__border"></div>    
        <div className="tank__mate">
            <div className="tank__mate_image">
                <img src="https://via.placeholder.com/50" alt="tankmate" />
            </div>
            <div className="tank__mate__info">
                <p>12 x Red Cherry Shrimp <span>Status:<GrStatusGoodSmall className='bad-status'/></span></p>
            </div>
        </div>
        <div className="tank__mate">
            <div className="tank__mate_image">
                <img src="https://via.placeholder.com/50" alt="tankmate" />
            </div>
            <div className="tank__mate__info">
                <p>2 x Bristlenose Plecos <span>Status:<GrStatusGoodSmall className='good-status'/></span></p>
            </div>
        </div>
        <div className="tank__mate">
            <div className="tank__mate_image">
                <img src="https://via.placeholder.com/50" alt="tankmate" />
            </div>
            <div className="tank__mate__info">
                <p>1 x FlowerHorn Cichlid <span>Status:<GrStatusGoodSmall className='good-status'/></span></p>
            </div>
        </div>
        <div className="tank__status">
            <p>Tank Status: Water Change Due <span><GrStatusGoodSmall className='bad-status'/></span></p>
        </div>
        <div className="tank__border"></div>  
    </div>
  )
}

export default Tank