import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../../assets/Gold-1.jpg";

const HeroSection: React.FC = () => {
	return (
		<section className="py-8">
			<div className="max-w-[1260px] w-[92%] sm:w-[98%] mx-auto">
				<div className="relative min-h-[440px] sm:min-h-[600px] rounded-3xl overflow-hidden">
					<img className="absolute inset-0 w-full h-full object-cover" src={bg} alt="bg" />
					<div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black"></div>
					<div className="absolute inset-0 bg-gradient-to-b from-black/10 to-cyan-950/80"></div>

					<div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 text-center z-10">
						<div className="max-w-4xl">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.3 }}
							>
								<h1 className="text-5xl lg:text-9xl mb-6 text-white arial tracking-widest font-bold sm:font-medium">
									99INFINITE
								</h1>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.6 }}
							>
								<p className="max-w-lg mx-auto mb-10 tracking-wide text-white">
									Helping Gold asset owners, operators, and investors finance and capitalize on their next
									investment.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: 0.9 }}
							>
								<Link
									to="/about"
									className="inline-block bg-cyan-700/90 hover:bg-cyan-900 text-white px-8 py-2.5 font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg hover:scale-105 hover:shadow-lg"
								>
									LEARN MORE ABOUT US
								</Link>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HeroSection;
