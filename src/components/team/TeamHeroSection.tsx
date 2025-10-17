import React from "react";

const TeamHeroSection: React.FC = () => {
	return (
		<section className="">
			{/* Header */}
			<div className="bg-cyan-950 max-w-[1260px] w-[92%] sm:w-[98%] mx-auto rounded-xl overflow-hidden relative">
				<div
					className=" text-white py-16 bg-cover bg-center"
					style={{
						background: "url(https://gspartstage.wpengine.com/wp-content/uploads/2025/04/teambanner.png)",
					}}
				>
					<div className="max-w-7xl mx-auto px-5 sm:px-10">
						<h1 className="text-6xl font-bold">Our Team</h1>
					</div>
				</div>
			</div>
		</section>
	);
};

export default TeamHeroSection;
