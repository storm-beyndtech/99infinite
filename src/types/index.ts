export interface TeamMember {
	_id: string;
	name: string;
	position: string;
	department: string;
	email?: string;
	phone?: string;
	bio: string;
	image?: string;
	linkedIn?: string;
	twitter?: string;
	expertise: string[];
	yearsExperience: number;
	isActive: boolean;
	order: number;
}

export interface MarketRate {
	_id: string;
	rateName: string;
	displayName: string;
	currentRate: number;
	previousRate?: number;
	change?: number;
	changePercent?: number;
	lastUpdated: string;
	source: string;
	description?: string;
	category: string;
	order: number;
	isActive: boolean;
	historicalData: Array<{
		date: string;
		rate: number;
	}>;
}

export interface User {
	_id: string;
	email: string;
	name: string;
	role: "admin" | "user";
}
