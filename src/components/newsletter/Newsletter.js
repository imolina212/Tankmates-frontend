import React from 'react'

import './Newsletter.scss'

function Newsletter() {
    return (
        <div class="newsletterSubscription">
            <div class="newsletterSubscription__title">Join the newsletter!</div>
            <p>Subscribe to get the latest info on events & sales!!</p>
            <form>
                <div class="newsletterSubscription__formInput">
                    <input type="text" placeholder="Your first name"></input>
                </div>
                <div class="newsletterSubscription__formInput">
                    <input type="text" placeholder="Your email address"></input>
                </div>
                <button>Subscribe</button>
            </form>
        </div>
    )
}

export default Newsletter;