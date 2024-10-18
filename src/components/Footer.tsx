import React from "react";

const Footer: React.FC = () => {
	return (
		<footer id="contact" className="bg-slate-800 text-white p-8">
			<div className="container mx-auto text-center">
				<p>© 2024 EniHR. All Rights Reserved.</p>
				<p>
					Email:
					<a href="mailto:reachfomealalor@gmail.com">
						{" "}
						reachfomealalor@gmail.com
					</a>{" "}
					| Phone: <a href="tel:+2348109528129">+2348109528129</a>{" "}
				</p>
			</div>
		</footer>
	);
};

export default Footer;
