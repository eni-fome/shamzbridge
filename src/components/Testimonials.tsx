import React from "react";
import { motion } from "framer-motion";

const testimonials = [
	{
		name: "John Doe",
		feedback:
			"EniHR helped us optimize our HR processes and provided excellent consultancy services!",
		position: "CEO, TechCorp",
	},
	{
		name: "Jane Smith",
		feedback:
			"Their expertise in capacity building transformed our workforce and enhanced productivity.",
		position: "HR Manager, GrowFast Inc.",
	},
	{
		name: "Michael Lee",
		feedback:
			"From project management to consultancy, EniHR exceeded all expectations. Highly recommend!",
		position: "COO, BuildTech",
	},
];

const Testimonials: React.FC = () => {
	return (
		<section
			id="testimonials"
			className="bg-blue-100 py-16">
			<div className="container mx-auto px-6 lg:px-12 text-center">
				<h2 className="text-4xl font-bold text-blue-900 mb-12">
					What Our Clients Say
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={index}
							className="bg-white p-8 rounded-lg shadow-lg"
							initial={{ opacity: 0, y: 50 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeInOut" }}>
							<p className="text-slate-700 mb-4">"{testimonial.feedback}"</p>
							<h3 className="text-lg font-bold text-blue-900">
								{testimonial.name}
							</h3>
							<p className="text-sm text-slate-500">{testimonial.position}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
