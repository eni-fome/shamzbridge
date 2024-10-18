import React from "react";
import {
	SquareChartGantt,
	Landmark,
	Users,
	Calendar1,
	Rocket,
} from "lucide-react";

const servicesData = [
	{
		title: "Programs/Projects Management",
		description: "Partner with us for seamless project execution.",
		icon: <SquareChartGantt />,
	},
	{
		title: "Capacity Building",
		description:
			"Nurture talent and skills with our capacity building services.",
		icon: <Landmark />,
	},
	{
		title: "Consultancy Services",
		description: "Elevate your strategy with our consultancy services.",
		icon: <Users />,
	},
	{
		title: "Event Host/Management",
		description: "Let us handle the details while you enjoy the moment.",
		icon: <Calendar1 />,
	},
	{
		title: "Community Development",
		description: "Championing development where it matters most.",
		icon: <Rocket />,
	},
];

const Services: React.FC = () => {
	return (
		<section id="services" className="bg-white py-16 animate-fadeIn">
			<div className="container mx-auto px-6 lg:px-12">
				<h2 className="text-center text-4xl font-bold text-blue-900 mb-12 animate-slideIn">
					Our Services
				</h2>

				<p className="text-center text-slate-700 max-w-2xl mx-auto mb-12 animate-fadeIn delay-200">
					Explore our diverse offerings and experience unparalleled excellence
					from tailored solutions to personalized consultations.
				</p>

				{/* Services Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{servicesData.map((service, index) => (
						<div
							key={index}
							className="bg-slate-50 p-8 rounded-lg shadow-lg flex items-start space-x-4 animate-fadeInUp delay-300"
							style={{ animationDelay: `${index * 200}ms` }}>
							{/* Icon */}
							<div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center flex-shrink-0">
								{service.icon}
							</div>
							{/* Service Details */}
							<div>
								<h3 className="text-xl font-bold text-blue-900 mb-2">
									{service.title}
								</h3>
								<p className="text-slate-700">{service.description}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Services;
