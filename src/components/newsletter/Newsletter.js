import React from 'react'

import './Newsletter.scss'

function Newsletter() {
    return (
        <div className="newsletterSubscription">
            <div className="newsletterSubscription__title">
              <p>Subscribe to all the fun</p>
              <p>Stay in touch with tankmates, see latest on updates, events and much more!</p>
            </div>
            <div>
              <form>
                <div className="newsletterSubscription__formInput">
                  <input type="text" placeholder="Enter your email address"></input>
                  <button>SIGN UP NOW</button>
                </div>
              </form>
            </div>
        </div>
    )
}

export default Newsletter;