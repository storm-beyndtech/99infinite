import React from "react";
import { Link } from "react-router-dom";
import elevator from "../../assets/Luxurious-Elevator.png";

const GoldSection: React.FC = () => {
	return (
		<section className="py-16 bg-gsp-navy text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-wrap justify-between gap-12">
					<div>
						<h2 className="max-w-[860px] text-2xl mb-9 text-gray-300 leading-relaxed">
							99Infinite is a prestigious player in the country's gold sector, incorporated in 2019. Fueled by
							the unwavering dedication it persues a noble mission to bolster the economic and communal
							prosperity of the region.
						</h2>
						<Link
							to="/annual-report"
							className="inline-block bg-cyan-950 border border-cyan-200 hover:bg-stone-600 text-white px-8 py-3 font-semibold tracking-wide transition-colors duration-200 rounded-lg"
						>
							View Gold Info
						</Link>
					</div>
					<div className="bg-cyan-900 rounded-xl p-6 w-80 h-80">
						<img src={elevator} alt="The Report" className="w-full h-full rounded-lg object-cover" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default GoldSection;
