import React from "react";
import { Telescope, BriefcaseBusiness } from "lucide-react";

const AboutUs: React.FC = () => {
	return (
		<section
			id="about"
			className="bg-slate-50 py-16 relative overflow-hidden animate-fadeIn">
			{/* Background shapes */}
			<div className="absolute top-0 right-0 w-40 h-40 bg-blue-500 rounded-full opacity-20 animate-scaleIn"></div>
			<div className="absolute bottom-10 left-0 w-60 h-60 bg-blue-700 rounded-full opacity-20 animate-scaleIn delay-200"></div>

			{/* Content */}
			<div className="container mx-auto px-6 lg:px-12 relative z-10 flex flex-col gap-5 lg:gap-10">
				<h2 className="text-center text-4xl font-bold text-blue-900 animate-slideIn">
					Our Vision & Mission
				</h2>
				<div className="text-center animate-fadeIn">
					<p className="text-xl text-gray-600">
						Redefining industry standards through consultation, our innovative
						approach integrates cutting-edge technology with expert insights,
						driving transformative change and setting new benchmarks for
						excellence.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* Vision Card */}
					<div className="bg-white shadow-lg rounded-lg p-8 relative z-10 animate-fadeInUp">
						<div className="flex items-center mb-6">
							<div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center">
								<Telescope />
							</div>
							<h3 className="text-2xl font-bold text-blue-900 ml-4">Vision</h3>
						</div>
						<p className="text-slate-700">
							To become a premier organization dedicated to enhancing both
							personal and professional capacities of individuals and
							businesses, fostering efficiency, heightened productivity, and
							innovation.
						</p>
					</div>

					{/* Mission Card */}
					<div className="bg-white shadow-lg rounded-lg p-8 relative z-10 animate-fadeInUp delay-200">
						<div className="flex items-center mb-6">
							<div className="w-12 h-12 bg-blue-700 text-white rounded-full flex items-center justify-center">
								<BriefcaseBusiness />
							</div>
							<h3 className="text-2xl font-bold text-blue-900 ml-4">Mission</h3>
						</div>
						<p className="text-slate-700">
							Our mission is to cultivate an empowering atmosphere for skill
							acquisition and capacity enhancement that heralds a holistic
							growth and development for individuals and organizations.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
