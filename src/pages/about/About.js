import React from "react";

import "./About.scss";

const About = () => {
	return (
		<div className="about">
			<div>About Isidro Molina</div>
			<div>
				<div>
					Q: Your Favorite thing about working on tankmates.com?
				</div>
				<div>
					A: Being able to continue learning while having the
					opportunity to apply those skills on a project related to a
					hobby that I am passionate about makes is by far my most
					favorite and rewarding part of working on tankmates.{" "}
				</div>
			</div>
			<div>
				<div>Q: Your Favorite thing about working at tankmates?</div>
				<div>A:</div>
			</div>
			<div>
				<div>Q: What is your favorite fish and why?</div>
				<div>A: My favorite fish is a </div>
			</div>
			<div>
				<div>Q: What would your dream aquarium be?</div>
				<div>
					A: My dream aquarium would be to have backyard pond with
					some waterfalls and koi fish so I can have a nice place to
					relax and drink my morning coffee.
				</div>
			</div>
			<div>
				Top 5 Tips for hobbyists
				<ul>
					<li> When in doubt, test your water.</li>
					<li>Build an ecosystem, not an aquarium.</li>
					<li>
						Watch your fish for 20 minutes at a time by sitting
						still you’ll see new behaviors.
					</li>
					<li>
						Experiment and learn what works for you instead of doing
						only what others say. Evolve from being the student to
						being the master of your hobby.
					</li>
					<li>
						Less is more. Fewer species allows you to learn about
						their needs.
					</li>
				</ul>
			</div>
		</div>
	);
};

export default About;
