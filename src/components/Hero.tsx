import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
	return (
		<section
			id="home"
			className="relative h-screen bg-blue-500 flex items-center justify-center text-center text-white overflow-hidden px-5">
			{/* Floating Shapes */}
			<div className="absolute top-0 left-0 w-40 h-40 bg-blue-700 opacity-30 rounded-full mix-blend-multiply animate-bounce"></div>
			<div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-300 opacity-50 rounded-full mix-blend-multiply animate-ping"></div>
			<div className="absolute bottom-10 left-10 w-24 h-24 bg-slate-300 opacity-40 rounded-lg mix-blend-multiply animate-spin-slow"></div>

			{/* Main Hero Content */}
			<motion.div
				className="relative z-10 max-w-3xl mx-auto"
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeInOut" }}>
				<h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
					Empowering Your Team to Achieve Greatness
				</h1>
				<p className="text-xl md:text-2xl mb-8">
					Innovative HR solutions and personalized strategies to help your
					business grow.
				</p>
				<div className="flex justify-center space-x-4">
					<a
						href="#about"
						className="bg-white text-blue-500 px-6 py-3 font-bold rounded-md hover:bg-slate-300">
						Learn More
					</a>
					<a
						href="#contact"
						className="bg-white text-blue-500 px-6 py-3 font-bold rounded-md hover:bg-slate-300">
						Contact Us
					</a>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
