import React from "react";
import { MapPin, Mail, Clock } from "lucide-react";

const OfficeLocations: React.FC = () => {
	return (
		<section className="py-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center mb-16">
					<h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Office</h2>
					<p className="text-xl text-gray-600 max-w-2xl mx-auto">
						Located in Australia, we serve clients globally.
					</p>
				</div>

				<div className="flex justify-center">
					<div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-8 max-w-md w-full">
						<h3 className="text-xl font-bold text-gray-900 mb-6">Golden Beach</h3>
						<div className="space-y-4">
							<div className="flex items-start">
								<MapPin className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
								<div>
									<div className="text-gray-600">GOLDEN BEACH QLD 4551</div>
									<div className="text-gray-600">Australia</div>
								</div>
							</div>
							<div className="flex items-center">
								<Mail className="h-5 w-5 text-gray-400 mr-3" />
								<a href="mailto:support@99infinite.club" className="text-blue-600 hover:underline">
									support@99infinite.club
								</a>
							</div>
							<div className="flex items-start">
								<Clock className="h-5 w-5 text-gray-400 mt-0.5 mr-3 flex-shrink-0" />
								<div className="text-gray-600 text-sm">Monday - Friday: 9:00 AM - 5:00 PM AEST</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default OfficeLocations;
