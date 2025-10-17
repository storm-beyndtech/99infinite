import React from "react";
import { Link } from "react-router-dom";
import report from "../../assets/Team-Discussion.png";

const ReportSection: React.FC = () => {
	return (
		<section className="py-16 bg-cyan-900 text-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid md:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-medium mb-6">
							Since 1992, 99Infinite on average, has closed $5 billion in capital placements annually.
						</h2>
						<Link
							to="/annual-report"
							className="inline-block bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 font-semibold tracking-wide transition-colors duration-200 rounded-lg"
						>
							View Reports
						</Link>
					</div>
					<div className="bg-cyan-800 rounded-xl p-8">
						<h3 className="text-xl font-bold text-orange-400 mb-4">Revew Analysis</h3>
						<div className="flex items-center space-x-4">
							<img src={report} alt="The Report" className="w-30 h-30 rounded-lg object-cover" />
							<div>
								<h4 className="font-bold text-white mb-1">The Grand Report</h4>
								<p className="text-cyan-200 text-sm mb-2">Create your knowledge with our insights...</p>
								<Link
									to="/annual-report"
									className="text-orange-400 hover:text-orange-300 text-sm font-semibold"
								>
									View Report
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ReportSection;
