import React from "react";
import { Link } from "react-router-dom";
import bg from "../../assets/Gold-1.jpg";

const HeroSection: React.FC = () => {
	return (
		<section className="py-8">
			<div className="max-w-[1260px] w-[92%] sm:w-[98%] mx-auto">
				<div className="relative min-h-[600px] rounded-3xl overflow-hidden">
					{/* img Background */}
					<img className="absolute inset-0 w-full h-full object-cover" src={bg} alt="bg" />

					{/* Darker Overlay */}
					<div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black"></div>
					<div className="absolute inset-0 bg-gradient-to-b from-black/10 to-cyan-950/80"></div>

					{/* Centered Content Container */}
					<div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 text-center z-10">
						<div className="max-w-4xl">
							<div
								className="opacity-0 animate-fade-in-up"
								style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
							>
								<h1 className="text-5xl lg:text-9xl mb-6 text-white arial tracking-widest font-medium">
									99INFINITE
								</h1>
							</div>
							<div
								className="opacity-0 animate-fade-in-up"
								style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
							>
								<p className="max-w-lg mx-auto mb-10 tracking-wide text-white">
									Helping Gold asset owners, operators, and investors finance and capitalize on their next
									investment.
								</p>
							</div>
							<div
								className="opacity-0 animate-fade-in-up"
								style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
							>
								<Link
									to="/about"
									className="inline-block bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-4 font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-lg"
								>
									LEARN MORE ABOUT US
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
