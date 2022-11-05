import React from 'react'

import './Footer.scss'
import './../newsletter/Newsletter.scss'
import Newsletter from '../newsletter/Newsletter';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__newsletter">
        <Newsletter />
      </div>
      <div className="footer__itemLinks">
        <div>
          <div>Learn</div>
          <ul>
            <li>Our EducationalBlog</li>
            <li>Water Change Guide</li>
            <li>Algae Identification Guide</li>
          </ul>
        </div>
        <div>
          <div>Resources</div>
          <ul>
            <li>FAQs</li>
            <li>Our Forum</li>
            <li>Track Orders</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <div>Policies</div>
          <ul>
            <li>Fast Shipping Policy</li>
            <li>Return Policy</li>
            <li>Privacy</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer;