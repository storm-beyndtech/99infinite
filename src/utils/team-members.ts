import team1 from "../assets/team-1.jpg";
import team2 from "../assets/team-2.jpg";
import team3 from "../assets/team-3.jpg";
import team4 from "../assets/team-4.jpg";
import team5 from "../assets/team-5.jpg";
import team6 from "../assets/team-6.jpg";

interface TeamMember {
  id: number;
  title: string;
  content: string;
  slug: string;
  image: string;
  location: string;
  department: string;
}


export const boardOfDirectors: TeamMember[] = [
	{
		id: 1,
		title: "Mr. David Roberts",
		content:
			"Mr. David Roberts brings more than 30 years of financial expertise to the Board. As the former Deputy Auditor-in-Chief, now serving as Director of Finance, he is responsible for overseeing the company's financial strategy and ensuring robust fiscal management. His extensive background in investment banking and corporate finance has positioned 99infinite for sustained growth and profitability. Mr. Roberts holds an MBA from Harvard Business School and is a Chartered Financial Analyst.",
		slug: "mr-david-roberts",
		image: team2,
		location: "Sydney",
		department: "Director of Finance",
	},
	{
		id: 2,
		title: "Ms. Shane Patel",
		content:
			"Ms. Shane Patel is an expert in sustainable development, focusing on integrating social responsibility into business practices. With over 12 years of experience, she serves as the Director of Sustainability, championing initiatives that promote environmental conservation and community engagement in all host communities of operation. Ms. Patel holds a Master's in Sustainable Development and is a certified Sustainability Professional.",
		slug: "ms-shane-patel",
		image: team3,
		location: "Mumbai",
		department: "Director of Sustainability",
	},

	{
		id: 3,
		title: "Mr. Smith Stephenson",
		content:
			"Mr. Smith has over 15 years of experience in mergers and acquisitions within the real estate and agricultural sectors. As Director of Corporate Development, he spearheads strategic partnerships and growth initiatives that enhance the company's portfolio. Mr. Smith is known for his innovative approach to business development and his ability to identify emerging market opportunities in Western Europe. He holds a Master's degree in Business Administration from Stanford University, along with several career certifications.",
		slug: "mr-smith-stephenson",
		image: team4,
		location: "London",
		department: "Director of Corporate Development",
	},
	{
		id: 4,
		title: "Mr. Doug Smith",
		content:
			"Mr. Doug has a strong background in engineering and operational management, with extensive experience in the mining industry. As Director of Operations, he focuses on optimizing efficiency and implementing best practices across all company operations. Mr. Doug Smith is committed to fostering a culture of safety and excellence within the workforce. He earned his degree in Mining Engineering from the University of Witwatersrand and began his career as a site engineer in Lake Worth, Texas.",
		slug: "mr-doug-smith",
		image: team5,
		location: "Johannesburg",
		department: "Director of Operations",
	},
	{
		id: 5,
		title: "Dr. David Whitehead",
		content:
			"Dr. David Whitehead is a seasoned executive with over 15 years of experience in sustainable agriculture and environmental science. As Chairperson, he leverages his expertise to guide the strategic direction of 99infinite, ensuring that the company adheres to the highest standards of environmental stewardship. Dr. David holds a PhD in Environmental Policy and is a recognized advocate for integrating sustainable practices within the agricultural and mining sectors.",
		slug: "dr-david-whitehead",
		image: team1,
		location: "Sydney",
		department: "Chairperson",
	},
	{
		id: 6,
		title: "Mr. Robert Thompson",
		content:
			"Mr. Robert Thompson is a seasoned legal expert with over 10 years of experience in corporate law, particularly in the exploration industries. As Director of Legal Affairs, he ensures that all company operations comply with regulatory requirements and best practices in all countries where 99infinite operates. Mr. Thompson is known for his strategic foresight and negotiation skills. He holds a Juris Doctorate from Yale Law School and rose through the ranks to become the company's Director of Legal Affairs after joining 99infinite as a legal consultant in 2021.",
		slug: "mr-robert-thompson",
		image: team6,
		location: "New York",
		department: "Director of Legal Affairs",
	},
];
