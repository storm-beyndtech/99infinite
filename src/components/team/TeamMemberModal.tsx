import React from "react";
import { X, MapPin, Users } from "lucide-react";

interface TeamMember {
	id: number;
	title: string;
	content: string;
	slug: string;
	image: string;
	location: string;
	department: string;
}

interface TeamMemberModalProps {
	member: TeamMember | null;
	isOpen: boolean;
	onClose: () => void;
}

const TeamMemberModal: React.FC<TeamMemberModalProps> = ({ member, isOpen, onClose }) => {
	if (!isOpen || !member) return null;

	// Function to format content into paragraphs
	const formatContent = (content: string) => {
		// Split content by periods followed by space and capital letter, or by double spaces
		const sentences = content.split(/(?<=\.)\s+(?=[A-Z])|(?<=\.)\s{2,}/);
		const paragraphs: string[] = [];
		let currentParagraph = "";
		
		sentences.forEach((sentence, index) => {
			sentence = sentence.trim();
			if (!sentence) return;
			
			// Add sentence to current paragraph
			currentParagraph += (currentParagraph ? " " : "") + sentence;
			
			// Create a new paragraph after certain keywords or every 2-3 sentences
			const shouldBreak = 
				sentence.includes("University") ||
				sentence.includes("Harvard") ||
				sentence.includes("Stanford") ||
				sentence.includes("Yale") ||
				sentence.includes("He holds") ||
				sentence.includes("She holds") ||
				sentence.includes("Mr.") ||
				sentence.includes("Ms.") ||
				sentence.includes("Dr.") ||
				(index > 0 && (index + 1) % 2 === 0 && sentence.endsWith("."));
				
			if (shouldBreak || index === sentences.length - 1) {
				if (currentParagraph.trim()) {
					paragraphs.push(currentParagraph.trim());
					currentParagraph = "";
				}
			}
		});
		
		// If no natural breaks found, split by length
		if (paragraphs.length === 1 && paragraphs[0].length > 300) {
			const longText = paragraphs[0];
			const words = longText.split(" ");
			const midPoint = Math.floor(words.length / 2);
			
			paragraphs[0] = words.slice(0, midPoint).join(" ");
			paragraphs[1] = words.slice(midPoint).join(" ");
		}
		
		return paragraphs.filter(p => p.trim().length > 0);
	};

	const paragraphs = formatContent(member.content);

	return (
		<div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
			<div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-xl border border-white/30 dark:border-slate-700/30 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl mx-4 sm:mx-6">
				<div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent dark:from-slate-700/10 rounded-3xl"></div>
				
				<div className="relative z-10 p-4 sm:p-6 lg:p-8">
					{/* Header */}
					<div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-6 mb-6 sm:mb-8">
						{/* Mobile: Stack vertically, Desktop: Side by side */}
						<div className="flex items-start gap-3 sm:gap-4 lg:gap-6 flex-1">
							<img
								src={member.image}
								alt={member.title}
								className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl object-cover shadow-lg flex-shrink-0"
							/>
							<div className="flex-1 min-w-0">
								<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-2 break-words">
									{member.title}
								</h2>
								<div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
									<div className="flex items-center gap-1 flex-shrink-0">
										<Users className="w-4 h-4" />
										<span className="truncate">{member.department}</span>
									</div>
									<div className="flex items-center gap-1 flex-shrink-0">
										<MapPin className="w-4 h-4" />
										<span className="truncate">{member.location}</span>
									</div>
								</div>
								<div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-blue-100 to-cyan-100 dark:from-blue-900/30 dark:to-cyan-900/30 rounded-full w-fit">
									<span className="text-sm font-medium text-blue-800 dark:text-blue-300 whitespace-nowrap">
										Board of Directors
									</span>
								</div>
							</div>
						</div>
						{/* Close button: Top right on mobile and desktop */}
						<button
							onClick={onClose}
							className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-slate-700 hover:bg-gray-200 dark:hover:bg-slate-600 flex items-center justify-center transition-colors flex-shrink-0 self-start"
						>
							<X className="w-5 h-5 text-gray-600 dark:text-gray-400" />
						</button>
					</div>

					{/* Content */}
					<div className="space-y-6">
						<div className="bg-white/50 dark:bg-slate-700/30 rounded-2xl p-6 border border-gray-200/50 dark:border-slate-600/50">
							<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
								<div className="w-2 h-2 bg-blue-600 rounded-full"></div>
								Professional Background
							</h3>
							<div className="space-y-4">
								{paragraphs.map((paragraph, index) => (
									<p
										key={index}
										className="text-gray-700 dark:text-gray-300 leading-relaxed text-base"
									>
										{paragraph}
									</p>
								))}
							</div>
						</div>

						{/* Key Information Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
							<div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30 rounded-2xl p-6 border border-blue-200/50 dark:border-blue-800/50">
								<h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">Position</h4>
								<p className="text-blue-800 dark:text-blue-400">{member.department}</p>
							</div>
							<div className="bg-gradient-to-br from-emerald-50 to-green-50 dark:from-emerald-950/30 dark:to-green-950/30 rounded-2xl p-6 border border-emerald-200/50 dark:border-emerald-800/50">
								<h4 className="font-semibold text-emerald-900 dark:text-emerald-300 mb-2">Location</h4>
								<p className="text-emerald-800 dark:text-emerald-400">{member.location}</p>
							</div>
						</div>

						{/* Key Achievements/Experience */}
						{(member.content.includes("University") || 
						  member.content.includes("Harvard") || 
						  member.content.includes("Stanford") || 
						  member.content.includes("Yale") ||
						  member.content.includes("MBA") ||
						  member.content.includes("PhD")) && (
							<div className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30 rounded-2xl p-6 border border-amber-200/50 dark:border-amber-800/50">
								<h4 className="font-semibold text-amber-900 dark:text-amber-300 mb-3 flex items-center gap-2">
									<div className="w-2 h-2 bg-amber-600 rounded-full"></div>
									Education & Qualifications
								</h4>
								<div className="space-y-2">
									{member.content.includes("Harvard") && (
										<p className="text-amber-800 dark:text-amber-400">• Harvard Business School - MBA</p>
									)}
									{member.content.includes("Stanford") && (
										<p className="text-amber-800 dark:text-amber-400">• Stanford University - Master's in Business Administration</p>
									)}
									{member.content.includes("Yale") && (
										<p className="text-amber-800 dark:text-amber-400">• Yale Law School - Juris Doctorate</p>
									)}
									{member.content.includes("University of Witwatersrand") && (
										<p className="text-amber-800 dark:text-amber-400">• University of Witwatersrand - Mining Engineering</p>
									)}
									{member.content.includes("PhD in Environmental Policy") && (
										<p className="text-amber-800 dark:text-amber-400">• PhD in Environmental Policy</p>
									)}
									{member.content.includes("Sustainable Development") && (
										<p className="text-amber-800 dark:text-amber-400">• Master's in Sustainable Development</p>
									)}
									{member.content.includes("Chartered Financial Analyst") && (
										<p className="text-amber-800 dark:text-amber-400">• Chartered Financial Analyst (CFA)</p>
									)}
									{member.content.includes("Fellow of the Institute of Corporate Directors") && (
										<p className="text-amber-800 dark:text-amber-400">• Fellow of the Institute of Corporate Directors</p>
									)}
								</div>
							</div>
						)}
					</div>

					{/* Footer */}
					<div className="mt-8 pt-6 border-t border-gray-200 dark:border-slate-600">
						<div className="flex items-center justify-between">
							<p className="text-sm text-gray-500 dark:text-gray-400">
								99Infinite Board of Directors
							</p>
							<button
								onClick={onClose}
								className="px-6 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-medium rounded-xl transition-all duration-200 shadow-lg hover:shadow-blue-500/25"
							>
								Close
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TeamMemberModal;