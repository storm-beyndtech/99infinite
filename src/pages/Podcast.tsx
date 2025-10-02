import React, { useState, useMemo, useCallback } from "react";
import { Play, User, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import { podcasts } from "../utils/podcasts";
import AudioPlayer from "../components/audioPlayer";

interface PodcastEpisode {
	id: number;
	title: string;
	slug: string;
	image: string;
	audioUrl: string;
	date: string;
}

const Podcast: React.FC = () => {
	const [currentPage, setCurrentPage] = useState(1);

	const ITEMS_PER_PAGE = 5;
	const episodes: PodcastEpisode[] = podcasts.reverse();

	const paginatedEpisodes = useMemo(() => {
		const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
		return episodes.slice(startIndex, startIndex + ITEMS_PER_PAGE);
	}, [episodes, currentPage]);

	const totalPages = Math.ceil(episodes.length / ITEMS_PER_PAGE);

	const handlePageChange = useCallback((page: number) => {
		setCurrentPage(page);
		const allEpisodesSection = document.querySelector(".all-episodes-section");
		if (allEpisodesSection) {
			allEpisodesSection.scrollIntoView({ behavior: "smooth" });
		}
	}, []);

	const formatDate = (dateString: string) => {
		return new Date(dateString).toLocaleDateString("en-US", {
			month: "long",
			day: "numeric",
			year: "numeric",
		});
	};

	return (
		<div className="bg-white">
			{/* Hero Section - The Landscape */}
			<section
				className="relative text-white py-10 min-h-[500px] overflow-hidden max-w-[1200px] w-[92%] sm:w-[98%]  mx-auto rounded-2xl"
				style={{
					background: `url('https://www.gspartners.com/wp-content/uploads/2025/01/Group-480.png')`,
					backgroundSize: "cover",
					backgroundPosition: "center",
					backgroundRepeat: "no-repeat",
				}}
			>
				{/* Background overlay for better text readability */}
				<div className="absolute inset-0 bg-gradient-to-r from-cyan-950/80 via-cyan-900/70 to-cyan-700/60"></div>

				{/* Right side decorative asset */}
				<div className="absolute right-0 bottom-0">
					<img
						src="https://www.gspartners.com/wp-content/uploads/2025/01/Mask-group-1-768x557.png"
						alt="Decorative asset"
						className="h-[300px] sm:h-[450px] w-auto"
					/>
				</div>

				<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
					<div className="grid lg:grid-cols-2 gap-12 items-center w-full">
						<div className="z-10">
							<div className="bg-black/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
								<p className="text-gray-300 mb-3 leading-relaxed">A FINtech Podcast</p>
								<h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white drop-shadow-lg">
									The Landscape
								</h1>
								<p className="text-lg text-gray-200 mb-8 leading-relaxed">
									Join 99infinite's Evan Kinne and David Pascale, Jr. as we talk with industry veterans and
									explore the latest capital market developments.
								</p>

								<div className="flex flex-col sm:flex-row gap-4">
									<button className="flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-8 py-2 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
										<Play className="w-6 h-6" />
										<span>Listen Now</span>
									</button>
									<button className="flex items-center justify-center space-x-2 border-2 border-white/60 hover:bg-black/10 px-8 py-2 rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm">
										<Share2 className="w-6 h-6" />
										<span>Follow</span>
									</button>
								</div>
							</div>
						</div>

						{/* Podcast hosts info - Right side */}
						<div className="hidden lg:block relative z-10 mt-auto">
							<div className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
								<div className="flex items-center space-x-4 mb-4">
									<div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-full flex items-center justify-center">
										<User className="w-8 h-8 text-white" />
									</div>
									<div>
										<h3 className="font-bold text-xl text-white">Your Hosts</h3>
										<p className="text-gray-200">Evan Kinne & David Pascale</p>
									</div>
								</div>
								<p className="text-gray-300 text-sm leading-relaxed">
									Industry experts bringing you insights from capital market leaders and real estate finance
									veterans.
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* All Episodes */}
			<section className="py-20">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					{/* Episodes List */}
					<div className="space-y-6 all-episodes-section">
						{paginatedEpisodes.map((episode) => (
							<div
								key={episode.id}
								className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
							>
								<div className="flex flex-col lg:flex-row gap-6">
									{/* Episode Image - Left Side */}
									<div className="flex-shrink-0">
										<div className="relative">
											<img
												src={episode.image}
												alt={`Episode ${episode.id}: ${episode.title}`}
												className="w-36 h-36 object-cover rounded-lg"
											/>
										</div>
									</div>

									{/* Episode Content - Right Side */}
									<div className="flex-grow">
										<div className="mb-2">
											<span className="text-sm text-gray-500">{formatDate(episode.date)}</span>
										</div>

										<h3 className="text-lg font-bold text-gray-900 mb-2">{episode.title}</h3>

										<div className="flex items-center space-x-4 text-sm text-gray-500">
											<AudioPlayer episode={episode} />
										</div>
									</div>
								</div>
							</div>
						))}

						{/* Pagination */}
						{totalPages > 1 && (
							<div className="mt-12 flex justify-center items-center space-x-2">
								<button
									onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
									disabled={currentPage === 1}
									className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
								>
									<ChevronLeft className="w-4 h-4 mr-1" />
									Previous
								</button>

								<div className="flex space-x-1">
									{Array.from({ length: Math.min(totalPages, 7) }, (_, index) => {
										let pageNumber;
										if (totalPages <= 7) {
											pageNumber = index + 1;
										} else {
											if (currentPage <= 4) {
												pageNumber = index + 1;
											} else if (currentPage >= totalPages - 3) {
												pageNumber = totalPages - 6 + index;
											} else {
												pageNumber = currentPage - 3 + index;
											}
										}

										return (
											<button
												key={pageNumber}
												onClick={() => handlePageChange(pageNumber)}
												className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
													pageNumber === currentPage
														? "bg-cyan-600 text-white"
														: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
												}`}
											>
												{pageNumber}
											</button>
										);
									})}
								</div>

								<button
									onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
									disabled={currentPage === totalPages}
									className="px-4 py-2 rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
								>
									Next
									<ChevronRight className="w-4 h-4 ml-1" />
								</button>
							</div>
						)}
					</div>
				</div>
			</section>
		</div>
	);
};

export default Podcast;
