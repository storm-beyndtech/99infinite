import React from "react";
import { Link } from "react-router-dom";
import { boardOfDirectors } from "../utils/team-members";

interface BoardOfDirectorsProps {
	showAll?: boolean;
	showCTA?: boolean;
}

const BoardOfDirectors: React.FC<BoardOfDirectorsProps> = ({ showAll = true, showCTA = false }) => {
	const displayMembers = showAll ? boardOfDirectors : boardOfDirectors.slice(0, 3);

	return (
		<section className="py-16 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-lg font-medium italic text-gray-800 sm:text-[1.8rem] mb-10">
					Our distinguished board brings together decades of expertise across gold assets, mining,
					agriculture, finance, and sustainable development to guide 99Infinite's strategic vision.
				</h2>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{displayMembers.map((member) => (
						<div
							key={member.id}
							className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
						>
							<img
								src={member.image}
								alt={member.title}
								className="w-full h-80 object-cover"
							/>
							<div className="p-6">
								<h3 className="text-xl font-semibold text-gray-900 mb-2">{member.title}</h3>
								<p className="text-blue-600 font-medium mb-3">{member.department}</p>
								<p className="text-gray-600 text-sm mb-4 line-clamp-3">{member.content.slice(0, 150)}...</p>
								<div className="flex items-center justify-between">
									<span className="text-sm text-gray-500">{member.location}</span>
									<Link
										to={`/team/${member.slug}`}
										className="text-blue-600 hover:text-blue-800 text-sm font-medium"
									>
										Read More →
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>

				{showCTA && (
					<div className="text-left lg:text-center mt-12">
						<Link
							to="/team"
							className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-colors duration-200"
						>
							View Full Team
							<svg
								className="ml-2 -mr-1 w-5 h-5"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									fillRule="evenodd"
									d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
									clipRule="evenodd"
								/>
							</svg>
						</Link>
					</div>
				)}
			</div>
		</section>
	);
};

export default BoardOfDirectors;
