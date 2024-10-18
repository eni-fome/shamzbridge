import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App: React.FC = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<AboutUs />
			<Services />
      <Testimonials />
			<Footer />
		</div>
	);
};

export default App;
