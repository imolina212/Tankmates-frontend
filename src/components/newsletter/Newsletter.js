import React from "react";

import Button from "./../button//Button";
import "./Newsletter.scss";

function Newsletter() {
	return (
		<div className="newsletterSubscription">
			<div className="newsletterSubscription__title">
				<h4>Subscribe to all the fun</h4>
				<p>
					Stay in touch with tankmates, see latest on updates, events
					and much more!
				</p>
			</div>
			<div>
				<form onSubmit={(e) => e.preventDefault()}>
					<div className="newsletterSubscription__formInput">
						<input
							type="text"
							placeholder="Enter your email address"
						></input>
						<Button
							name="sign up now"
							variant="primary"
							size="sq large"
							arrow={true}
						></Button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Newsletter;
