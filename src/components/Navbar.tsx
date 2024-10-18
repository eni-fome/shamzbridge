import React, { useState } from "react";

const Navbar: React.FC = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<nav className="bg-blue-600 p-4 fixed w-full top-0 z-50 shadow-lg">
			<div className="container mx-auto flex justify-between items-center">
				<h1 className="text-white text-2xl font-bold">EHR</h1>

				{/* Hamburger Menu */}
				<div className="md:hidden">
					<button
						onClick={toggleMenu}
						className="text-white">
						☰
					</button>
				</div>

				{/* Links for larger screens */}
				<ul
					className={`md:flex md:space-x-6 text-white md:static absolute top-16 left-0 w-full md:w-auto bg-blue-600 p-4 md:p-0 transition-all duration-300 ${
						isMenuOpen ? "block" : "hidden"
					}`}>
					<li>
						<a
							href="#home"
							className="hover:text-slate-300">
							Home
						</a>
					</li>
					<li>
						<a
							href="#about"
							className="hover:text-slate-300">
							About Us
						</a>
					</li>
					<li>
						<a
							href="#services"
							className="hover:text-slate-300">
							Services
						</a>
					</li>
					<li>
						<a
							href="#contact"
							className="hover:text-slate-300">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
